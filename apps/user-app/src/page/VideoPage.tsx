import VideoPlayer from "../components/VideoPlayer";

export default function VideoPage() {
  return (
    <div className="w-full">
      <div className="text-red-500">Hey</div>
      
      <VideoPlayer width={500} height={600} hlsUrl="https://d9bskl3ph7fg2.cloudfront.net/hls/1MB.mp4/index.m3u8"></VideoPlayer>
    </div>
  );
}
