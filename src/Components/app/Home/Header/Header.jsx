import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../../public/image/logo/logoOne1.png';
import { useRouter } from 'next/router';
// import Modal from "components/modal/Modal.jsx";

const Header = () => {
  const [openSignIn, setOpenSignIn] = useState(false);
  const router = useRouter();

  return (
    <div>
      <header
      
        className="flex justify-between items-center max-w-screen-2xl mx-auto py-4 px-4"
      >
        <div className='flex items-center'>
          <Link href='/'>
            <Image
              src={logo}
              alt="Logo"
              className=" w-48 cursor-pointer"
             
            />
          </Link>
        </div>
        <nav>
          <ul className='flex space-x-4 items-center'>
            <li className='relative'>
              <button
                onClick={() => router.push('/list-property')}
                className='text-gray-600 hover:bg-red-500 cursor-pointer bg-green-500 text-white rounded-lg px-4 py-2'
                style={{
                  width: '140px',
                  height: '36px',
                  marginLeft: 'auto',
                  fontFamily: 'Inter',
                  fontSize: '12px',
                  fontWeight: 700,
                  lineHeight: '15px',
                  letterSpacing: '0em',
                  textAlign: 'center',
                }}
              >
                List Your Property
              </button>
            </li>
            <li
              className='text-orange-500 hover:text-red-500 cursor-pointer font-inter text-xs font-bold leading-15 tracking-tighter'
              style={{
                height: '15px',
                width: '41px',
                left: '1266px',
                top: '42px',
              }}
            >
              <button onClick={() => setOpenSignIn(true)}>Sign In</button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
