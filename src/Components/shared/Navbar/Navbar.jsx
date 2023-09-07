import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../../public/image/logo/logoOne1.png";
import { FaBars, IconName } from "react-icons/fa";
import { useRouter } from "next/router";

const Navbar = () => {
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
  const [openMenu,setOpenMenu] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const router = useRouter();
  return (
    <div>
      {windowWidth > 650 ? (
        <header className="flex justify-between items-center max-w-screen-2xl mx-auto py-4 px-4">
          <div className="flex items-center">
            <Link href="/">
              <Image src={logo} alt="Logo" className=" w-48 cursor-pointer" />
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-4 items-center">
              <li className="relative">
           
                  <button
                  onClick={()=>router.push("/list-property")}
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
                <button onClick={() => setOpenSignIn(true)}>Sign In</button>
              </li>
            </ul>
          </nav>
        </header>
      ) : (
        <div className="flex items-center justify-between px-4 py-2 relative">
          <div>
            <div className="flex items-center">
              <Link href="/">
                <Image src={logo} alt="Logo" className=" w-56 cursor-pointer" />
              </Link>
            </div>
          </div>
          <div>
            <FaBars onClick={()=>setOpenMenu(!openMenu)} className="text-xl text-white"/>
          </div>
          {
            openMenu && <div className="bg-white p-6 rounded-lg absolute right-0 top-12">
              <ul className="font-semibold">
                <li className="border-b border-gray-400 py-2">List Property</li>
                <li className="py-2">Sign In</li>
              </ul>
            </div>
          }
        </div>
      )}
    </div>
  );
};

export default Navbar;
