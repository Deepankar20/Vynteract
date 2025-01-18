import { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css";

const VideoPlayer = ({
  hlsUrl,
  width,
  height,
}: {
  hlsUrl: string;
  width: number;
  height: number;
}) => {
  const videoNode = useRef(null);
  const [player, setPlayer] = useState<Player | null>(null);

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
    if (videoNode.current) {
      const _player = videojs(videoNode.current, play);
      setPlayer(_player);
      return () => {
        if (player !== null) {
          player.dispose();
        }
      };
    }
  }, []);

  return (
    <div data-vjs-player>
      <video
        ref={videoNode}
        className="video-js"
        width={width}
        height={height}
      />
    </div>
  );
};

export default VideoPlayer;
