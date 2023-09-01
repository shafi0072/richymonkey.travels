import React, { useState } from "react";
import {
  FaCalendarDays,
  FaLocationDot,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import { DateRange, DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import AddGuest from "./AddGuest";

const Search = () => {
  // add guest states --------
  const [adults,setAdults] = useState(2);
  const [children,setChildren] = useState(0);
  const [room,setRoom] = useState(1);

  // states for open close
  const [openCalender, setOpenCalender] = useState(false);
  const [openGuest,setOpenGuest] = useState(false);

  // 
  const handleOpenCalender= ()=>{
    setOpenCalender(!openCalender);
    setOpenGuest(false)
  }
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
console.log(state)
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const formatDate = (date) => {
    const options = { weekday: "short", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const handleSelect = (ranges) => {
    const startDateFormatted = formatDate(ranges.selection.startDate);
    const endDateFormatted = formatDate(ranges.selection.endDate);

    console.log("Selected start date:", startDateFormatted);
    console.log("Selected end date:", endDateFormatted);
    setStartDate(startDateFormatted);
    setEndDate(endDateFormatted);

    setOpenCalender(false);
  };

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
      >
        <section
          style={{
            height: "70px",

            backgroundColor: "#FFFFFF",
            borderRadius: "70px",
            padding: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="w-full  flex justify-between items-center">
            <div className="flex items-center border-r border-gray-300 pr-4 ">
              <div className="mr-2">
                <FaLocationDot />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Where are you going"
                  className="text-left placeholder-left h-6 w-32 focus:outline-none"
                  style={{
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "24px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    height: "24px",
                    width: "117px",
                  }}
                />
              </div>
            </div>
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
              <AddGuest adults={adults} setAdults={setAdults} children={children} setChildren={setChildren} room={room} setRoom={setRoom} openGuest={openGuest} setOpenGuest={setOpenGuest} setOpenCalender={setOpenCalender}/>
            </div>
            <div
              className="Icon ml-4"
              style={{
                background: "#F62619",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
            >
              <button>
                <FaMagnifyingGlass className="text-white" />
              </button>
            </div>
           
          </div>
        </section>
      </div>
      {openCalender && (
        <div className="flex items-center justify-center">
          <DateRange
            editableDateInputs={true}
            months={2}
            direction="horizontal"
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
        </div>
      )}
    </div>
  );
};

export default Search;
