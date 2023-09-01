import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../../public/image/logo/logoOne1.png";
// import Modal from "components/modal/Modal.jsx";

const Header = () => {
  const [openSignIn,setOpenSignIn] = useState(false);


  return (
    <div>
      <header
        style={{ paddingLeft: "160px", paddingRight: "160px" }}
        className="flex justify-between items-center px-6 py-4"
      >
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              className="h-[] w-48 cursor-pointer"
              style={{
                width: "193.5483856201172px",
                left: "160px",
                top: "24px",
                borderRadius: "0px",
              }}
            />
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li className="relative">
              <Link href="/admin">
                <button
                  className="text-gray-600 hover:bg-red-500 cursor-pointer bg-green-500 text-white rounded-lg px-4 py-2"
                  style={{
                    width: "140px",
                    height: "36px",
                    marginLeft: "auto",
                    fontFamily: "Inter",
                    fontSize: "12px",
                    fontWeight: 700,
                    lineHeight: "15px",
                    letterSpacing: "0em",
                    textAlign: "center",
                  }}
                >
                  List Your Property
                </button>
              </Link>
            </li>
            <li
              className="text-gray-600 hover:text-red-500 cursor-pointer font-inter text-xs font-bold leading-15 tracking-tighter text-white"
              style={{
                height: "15px",
                width: "41px",
                left: "1266px",
                top: "42px",
              }}
            >
              <button onClick={()=>setOpenSignIn(true)}>Sign In</button>
            </li>
          </ul>
        </nav>
      </header>
      {/* {
        openSignIn && <div >
        <Modal setOpenSignIn={setOpenSignIn} />
      </div>
      } */}
    </div>
  );
};

export default Header;
