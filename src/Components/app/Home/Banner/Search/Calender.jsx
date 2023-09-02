import React from "react";
import { DateRange } from "react-date-range";
import { FaCalendarDays } from "react-icons/fa6";

const Calender = ({
  handleOpenCalender,
  startDate,
  endDate,
  openCalender,
  state,
  setState,
  windowWidth,
}) => {
  return (
    <div>
      <div
        onClick={handleOpenCalender}
        className="flex items-center gap-2 border-r border-gray-300 pr-4 ml-4 cursor-pointer"
      >
        <FaCalendarDays />
        <div className="font-semibold">
          {startDate !== "" ? startDate : "Check-in Date"} -{" "}
          {endDate !== "" ? endDate : "Check-out Date"}
        </div>
      </div>
      <div>
        {openCalender && (
          <div className="flex items-center justify-center absolute z-30 ">
            <DateRange
              editableDateInputs={true}
              months={2}
              direction={windowWidth < 700 ? "vertical" : "horizontal"}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Calender;
