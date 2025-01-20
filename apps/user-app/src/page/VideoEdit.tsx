import { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import { SketchPicker, ColorResult } from "react-color";

/*

HOW the json of a video will look like :

{
  title: "",
  description: "",
  owner: userId,
  theme: "",
  fontColor : #f1f1f1
  length: 123, //in seconds

  url: "aws.cloudfront.m3u8",

  interactives:[

    {
      type : Button | Text | Image,
      color: #f1f1f1,
      position : {
        x : 00,
        y : 00
      }
    }
    {
      type : Button | Text | Image,
      color: #f1f1f1,
      position : {
        x : 00,
        y : 00
      }
    }
  ]

}


*/

export default function VideoEdit() {
  const [color, setColor] = useState<string>("");
  const [bgColor, setBgColor] = useState<string>("");
  const [colorPick, setColorPick] = useState<boolean>(false);
  const [bgColorPick, setBgColorPick] = useState<boolean>(false);

  return (
    <div
      className="flex gap-[8rem] p-[5rem] h-screen overflow-auto"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-[18vw] flex flex-col gap-[2rem] font-semibold overflow-auto bg-blend-lighten bg-gray-100 p-[1.75rem] rounded-lg sticky top-0">
        <div>
          <p>Interactives : </p>
          <div>
            <p>Button</p>

            <button className="">Add</button>
          </div>
          <div>Text</div>
          <div>Image</div>
        </div>
        <div className="flex flex-col">
          <p>Font Color : </p>
          <p className="border border-black p-4 rounded-lg flex justify-between">
            <div>{color}</div>
            <button onClick={() => setColorPick(true)}>Select</button>
          </p>

          {colorPick && (
            <SketchPicker
              color={color}
              onChangeComplete={(result: ColorResult) => {
                setColor(result.hex);
                setColorPick(false);
              }}
            />
          )}
        </div>

        <div className="flex flex-col">
          <p>BG Color : </p>
          <p className="border border-black p-4 rounded-lg flex justify-between">
            <div>{bgColor}</div>
            <button onClick={() => setBgColorPick(true)}>Select</button>
          </p>
          {bgColorPick && (
            <SketchPicker
              color={bgColor}
              onChangeComplete={(result: ColorResult) => {
                setBgColor(result.hex);
                setBgColorPick(false);
              }}
            />
          )}
        </div>
      </div>
      <div className={`w-2/3 `} style={{ color: color }}>
        <div className="rounded-lg flex flex-col gap-[1.75rem]">
          <div className="flex gap-[1rem] items-center">
            <h1 className="text-[3rem] font-semibold">Username</h1>
          </div>
          <div className="flex flex-col gap-[0.75rem]">
            <VideoPlayer
              width={1200}
              height={1200}
              hlsUrl="http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8"
            ></VideoPlayer>

            <div className="text-[2rem] font-semibold">
              Random guys doing random stuff.
            </div>

            <div className="bg-slate-600 shadow-black  shadow-lg p-[1.75rem] card rounded-lg h-[17rem] overflow-auto ">
              <h1 className="text-3xl mb-[1rem]">Desc</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                dignissimos sed, rem vel necessitatibus quos! Eveniet saepe
                accusantium eius esse iure eum quas impedit eligendi officiis
                error. Perspiciatis quia minima voluptates repellat. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Cum, inventore sit?
                Corrupti deserunt eveniet enim obcaecati animi esse eius
                inventore ducimus hic non? Doloribus voluptatum natus porro
                iste, quidem reiciendis quisquam ipsam. Lorem ipsum dolor sit
              </p>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
