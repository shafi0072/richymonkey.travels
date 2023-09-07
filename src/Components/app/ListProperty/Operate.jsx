import React from 'react';

export default function Operate() {
  return (
    <div className='grid md:grid-cols-2'>
      <div className='text-white bg-[#F62619] py-8 px-4 flex flex-col justify-center items-center'>
        <h3 className='text-[28px] md:text-[46px]'>
          I operate a single hotel...
        </h3>
        <p className='text-[18px] text-center md:text-left py-2 max-w-lg md:leading-8'>
          Suitable for hotel owner or manager that operates a hotel with less
          than 200 guest rooms or for those who have limited experience or are
          new to the hospitality industry...
        </p>
        <button className='text-black text-[20px] bg-white rounded-full py-4 px-8 my-3'>
          List Your Hotel
        </button>
      </div>
      <div className='text-whit py-8 px-4 flex flex-col justify-center items-center'>
        <h3 className='text-[28px] md:text-[46px]'>
          I operate multiple hotels...
        </h3>
        <p className='text-[18px] text-center py-2 md:text-left max-w-lg md:leading-8'>
          Suitable for a multi-hotel owner or hotel management company with
          advanced hospitality industry experience and knowledge...
        </p>
        <button className='text-white text-[20px] bg-[#F62619] rounded-full py-4 px-8 my-3'>
          List Your Properties
        </button>
      </div>
    </div>
  );
}
