import VideoPlayer from "../components/VideoPlayer";

export default function VideoPage() {
  return (
    <div className="w-full">
      <div className="text-red-500">Hey</div>

      <VideoPlayer
        width={100}
        height={1200}
        hlsUrl="http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8"
      ></VideoPlayer>
    </div>
  );
}
