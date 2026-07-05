import React from "react";
import { EllipsisVertical, Syringe } from "lucide-react";

export default function BabyCard({ name, dob, age }) {
  return (
    <>
      <div className="w-96 hover:scale-105 shrink-0 duration-700 ease-initial cursor-pointer rounded-lg p-2 shadow-md">
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <img
              className="w-18 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1kdP9Ry3QIfI0q9R5yVOhunVKu1bbvkBGTi_4o_YuQw&s=10"
            />
            <div>
              <h1 className="font-bold">{name}</h1>
              <h1 className="text-indigo-600">{age}</h1>
              <h1 className="text-gray-400">{dob}</h1>
            </div>
          </div>
          <EllipsisVertical />
        </div>

        <div className="grid mt-2 grid-cols-5 gap-5 items-center justify-between">
          <div className="col-span-3 flex flex-col gap-2">
            <div className="flex justify-end">
              <h1 className="text-sm font-medium text-gray-400">3/15 Completed</h1>
            </div>
            <progress
              className="w-full rounded-full h-1 overflow-hidden [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-value]:bg-indigo-600"
              value="3"
              max="15"
            ></progress>
          </div>
          <div className="flex flex-col col-span-2  bg-orange-200 rounded-lg  items-center py-2">
            <div className="flex items-center justify-center gap-1">
              <Syringe size={20} className="text-orange-600" />
              <h1 className="text-orange-700 text-xs font-bold">Pantavalent II</h1>
            </div>
            <h1 className="text-white">Due in 3 Days</h1>
          </div>
        </div>
      </div>
    </>
  );
}
