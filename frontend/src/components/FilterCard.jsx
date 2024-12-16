import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const fitlerData = [
  {
    fitlerType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    fitlerType: "Type",
    array: ["Hand made", "readmade", "more"],
  },
  {
    fitlerType: "salary",
    array: ["0-400", "400-4000", "4000 to 1000"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-gray-100 rounded-md sticky top-0 z-10">
      <div className="w-full bg-white p-6 rounded-md">
        <h1 className="font-bold text-2xl text-gray-800">Filter your requirments</h1>
        <hr className="  border-gray-300" />
        <RadioGroup>
          {fitlerData.map((data, index) => {
            return (
              <div key={index} className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-3">
                  {data.fitlerType}
                </h2>
                {data.array.map((item, idx) => {
                  return (
                    <div key={idx} className="flex items-center space-x-3 mb-2">
                      <RadioGroupItem
                        value={item}
                        id={`id${index}-${idx}`}
                        className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
                      />
                      <Label htmlFor={`id${index}-${idx}`} className="text-lg text-gray-700">
                        {item}
                      </Label>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </RadioGroup>
      </div>
    </div>
  );
};

export default FilterCard;
