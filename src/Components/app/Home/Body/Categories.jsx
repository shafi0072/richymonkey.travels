import { categories } from "@/src/constant/categories";
import React, { useState } from "react";

const Categories = ({setSelected,selected}) => {


  return (
    <div>
      <div className="flex gap-6 items-center justify-center max-w-screen-2xl mx-auto mt-8">
        {categories.map((category, index) => (
          <div
            // onClick={handleClick}
            onClick={() => setSelected(category.label)}
            className={`
              flex 
              flex-col 
              items-center 
              justify-center 
              gap-2
              p-3
              border-b-2
              hover:text-neutral-800
              transition
              cursor-pointer
              ${
                selected === category.label
                  ? "border-b-neutral-800 text-neutral-800"
                  : "border-transparent text-neutral-500"
              }
           
            `}
          >
            {category.icon}
            <div className="text-sm font-medium">{category.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
