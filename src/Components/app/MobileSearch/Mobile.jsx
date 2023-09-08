import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import SuggestedLocation from './SuggestedLocation';

export default function Mobile({ handleDrawerOpen }) {
  const cityData = [
    {
      state: 'CTG',
      city: 'chittagong',
    },
    {
      state: 'DH',
      city: 'Dhanmondi',
    },
  ];
  return (
    <>
      <div
        id='drawer'
        className='md:hidden fixed w-screen drawerClose bg-white z-50'
      >
        <div className='bg-[var(--orange-color)] px-10 py-5'>
          <p className='flex justify-between py-7 text-white'>
            <KeyboardArrowDownIcon
              onClick={handleDrawerOpen}
              className='h-10 w-10'
              style={{ fill: '#fff' }}
            />
            <span className='text-xl capitalize'>select destination</span>
          </p>
          <div className='flex justify-center bg-white rounded overflow-hidden px-2'>
            <p className='flex items-center'>
              <SearchIcon className='h-10 w-7 ' />
            </p>
            <input
              placeholder='city,country'
              type='text'
              className='w-full my-2 rounded focus:outline-none px-2 h-10'
            />
          </div>
        </div>
        <div className='px-10'>
          <p>
            <MyLocationIcon
              className='w-7 h-7 pr-1'
              style={{ fill: 'var(--orange-color)' }}
            />
            Nearby
          </p>
        </div>
        <div>
          {cityData.map((c) => (
            <SuggestedLocation location={c} />
          ))}
        </div>
      </div>
    </>
  );
}
