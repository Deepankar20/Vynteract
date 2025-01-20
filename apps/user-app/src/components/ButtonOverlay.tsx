export default function ButtonOverlay({ time }: { time: number }) {
  return (
    <div className="w-full h-full">
      {time >= 10 && (
        <div className="">
          <div
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("text/plain", "");
            }}
            style={{ left: 43, top: 463 }}
            className="absolute p-1  rounded-lg w-[8rem]  bg-red-600 text-xl cursor-pointer hover:bg-red-400 hover:font-semibold"
          >
            click me
          </div>
        </div>
      )}
    </div>
  );
}
