import { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css";
import ButtonOverlay from "./ButtonOverlay";
import "videojs-markers/dist/videojs.markers.min.css";
import "videojs-markers";

interface PlayerWithMarkers extends Player {
  markers: (options: {
    markers: {
      time: number;
      text: string;
    }[];
  }) => void;
}

const VideoPlayer = ({
  hlsUrl,
}: {
  hlsUrl: string;
  width: number;
  height: number;
}) => {
  const videoNode = useRef(null);
  const progressBarRef = useRef(null);
  const [player, setPlayer] = useState<null | PlayerWithMarkers>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const play = {
    fill: true,
    fluid: true,
    autoplay: true,
    controls: true,
    preload: "metadata",
    sources: [
      {
        src: hlsUrl,
        type: "application/x-mpegURL",
      },
    ],
  };

  useEffect(() => {
    if (!player) return;

    const handleTimeUpdate = () => {
      setCurrentTime(player.currentTime() as number);
    };

    player.on("timeupdate", handleTimeUpdate);

    return () => {
      player.off("timeupdate", handleTimeUpdate);
    };
  }, [player, currentTime]);

  useEffect(() => {
    if (videoNode.current) {
      const _player = videojs(videoNode.current, play);
      setPlayer(_player as PlayerWithMarkers);

      return () => {
        if (player !== null) {
          player.dispose();
        }
      };
    }
  }, []);

  return (
    <div className="relative text-center">
      <div data-vjs-player>
        <video ref={videoNode} className="video-js rounded-xl overflow-hidden" muted></video>
        <div
          ref={progressBarRef}
          className="vjs-progress-control vjs-control text-red-500"
        />
        <ButtonOverlay time={currentTime} />
      </div>
    </div>
  );
};

export default VideoPlayer;
