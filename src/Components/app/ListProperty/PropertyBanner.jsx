import React from 'react';

export default function PropertyBanner() {
  return (
    <section>
      <div className="h-[407px] bg-[url('https://img.freepik.com/free-photo/lake-mountains_1204-502.jpg?w=996&t=st=1693665392~exp=1693665992~hmac=8d508a32d9e18b0cee74efb7ab1ebb0e7aa1209f3cc3d8f9991fc81493092d62')] bg-cover bg-center flex justify-center items-center bg-[rgba(0,0,0,0.48)] bg-blend-multiply flex-col">
        <h1 className='w-[293px] md:w-full md:text-[52px] text-[32px] text-center font-bold text-white'>
          Listing Your <span className='text-[#29B547] italic'>Hotel</span> Made
          Easy
        </h1>
        <p className='text-white md:text-[18px] font-bold text-[16px] text-center'>
          Registering your property is 100% free{' '}
          <br className='block md:hidden' /> and takes less than 15 minutes.
        </p>
      </div>
    </section>
  );
}
