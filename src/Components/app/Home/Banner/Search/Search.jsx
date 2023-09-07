import React, { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  FaCalendarDays,
  FaLocationDot,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import { Calendar, DateRange, DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import AddGuest from "./AddGuest";
import Calender from "./Calender";

const Search = () => {
  // responsive layout define --------------
  const [windowWidth, setWindowWidth] = useState(null);
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  // add guest states --------
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [room, setRoom] = useState(1);

  // states for open close
  const [openCalender, setOpenCalender] = useState(false);
  const [openGuest, setOpenGuest] = useState(false);

  // handle open calender--------------
  const handleOpenCalender = () => {
    setOpenCalender(!openCalender);
    setOpenGuest(false);
  };
  //handle calender state ---------------
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  // console.log(state)
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
      {windowWidth < 700 ? (
        <div className="px-4 w-full">
          <div className="bg-white p-6 rounded-full flex item-center mt-8  ">
            <div className="mr-2 ps-3">
              <FaLocationDot className="text-xl" />
            </div>
            <input
              type="text"
              placeholder="Where are you going"
              className="text-left font-semibold text-black placeholder-left h-6  focus:outline-none"
              
            />
          </div>
          <div className="bg-white rounded-full p-6 my-4">
            <Calender
              handleOpenCalender={handleOpenCalender}
              startDate={startDate}
              endDate={endDate}
              openCalender={openCalender}
              state={state}
              setState={setState}
              windowWidth={windowWidth}
            />
          </div>
          <div className="bg-white rounded-full p-6 mb-4 ">
            <AddGuest
              adults={adults}
              setAdults={setAdults}
              children={children}
              setChildren={setChildren}
              room={room}
              setRoom={setRoom}
              openGuest={openGuest}
              setOpenGuest={setOpenGuest}
              setOpenCalender={setOpenCalender}
            />
          </div>
          <button className="bg-red-600 w-full py-4 rounded-full text-white text-xl font-semibold">Search</button>
        </div>
      ) : (
        <div className="md:flex items-center justify-center mt-12 px-6">
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
              <div>
                <Calender
                  handleOpenCalender={handleOpenCalender}
                  startDate={startDate}
                  endDate={endDate}
                  openCalender={openCalender}
                  state={state}
                  setState={setState}
                />
              </div>
              <div>
                <AddGuest
                  adults={adults}
                  setAdults={setAdults}
                  children={children}
                  setChildren={setChildren}
                  room={room}
                  setRoom={setRoom}
                  openGuest={openGuest}
                  setOpenGuest={setOpenGuest}
                  setOpenCalender={setOpenCalender}
                />
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
      )}
    </div>
  );
};

export default Search;
