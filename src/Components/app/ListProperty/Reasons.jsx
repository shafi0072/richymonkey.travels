import React from 'react';
import ListPropertySvg from './ListPropertySvg';

export default function Reasons() {
  return (
    <section className='pt-[100px]'>
      <div className='px-3 md:px-0'>
        <h2 className='font-bold md:text-[40px] text-[28px] text-center'>
          7 Reasons Why Hotels Use{' '}
          <i>
            <span className='text-[#F62619]'>Suva</span>
            <span className='text-[#29B547]'>Trip</span>!
          </i>
        </h2>
        <p className='text-[18px] text-[#858585] text-center pt-1'>
          We constantly improve our platform and services to ensure you can
          offer the best experience to your customers.
        </p>
      </div>
      <div className='flex flex-col py-[60px]'>
        <div className='order-1 grid-cols-2 max-w-screen-lg mx-auto grid md:grid-cols-4 gap-x-5 gap-y-5 justify-center items-center'>
          <div className='flex flex-col items-center justify-center font-bold'>
            <p className='py-4'>{ListPropertySvg.greenImageSvg}</p>
            <h4 className='text-center bold text-[12px] md:text-[20px]'>
              Ability to List Many <br /> Property Types
            </h4>
          </div>
          <div className='flex flex-col items-center justify-center font-bold'>
            <p className='py-4'>{ListPropertySvg.purpleImageSvg}</p>
            <h4 className='text-center bold text-[12px] md:text-[20px]'>
              Ability to List Many <br /> Property Types
            </h4>
          </div>
          <div className='flex flex-col items-center justify-center font-bold'>
            <p className='py-4'>{ListPropertySvg.blueImageSvg}</p>
            <h4 className='text-center bold text-[12px] md:text-[20px]'>
              Ability to List Many <br /> Property Types
            </h4>
          </div>
          <div className='flex flex-col items-center justify-center font-bold'>
            <p className='py-4'>{ListPropertySvg.skyImageSvg}</p>
            <h4 className='text-center bold text-[12px] md:text-[20px]'>
              Ability to List Many <br /> Property Types
            </h4>
          </div>
        </div>
        <div className='order-3 md:order-2 py-5 max-w-screen-md mx-auto grid md:grid-cols-3 grid-cols-2 gap-x-5 gap-y-5 justify-center items-center'>
          <div className='flex flex-col items-center justify-center font-bold'>
            <p className='py-4'>{ListPropertySvg.yellowImageSvg}</p>
            <h4 className='text-center bold text-[12px] md:text-[20px]'>
              Ability to List Many <br /> Property Types
            </h4>
          </div>
          <div className='flex flex-col items-center justify-center font-bold'>
            <p className='py-4'>{ListPropertySvg.redImageSvg}</p>
            <h4 className='text-center bold text-[12px] md:text-[20px]'>
              Ability to List Many <br /> Property Types
            </h4>
          </div>
          <div className='col-span-2 md:col-span-1 flex flex-col items-center justify-center font-bold'>
            <p className='py-4'>{ListPropertySvg.lightGreenImageSvg}</p>
            <h4 className='text-center bold text-[12px] md:text-[20px]'>
              Ability to List Many <br /> Property Types
            </h4>
          </div>
        </div>
        <div className='order-2 md:order-3 py-5 max-w-screen-sm mx-auto grid grid-cols-2 gap-x-5 gap-y-5 justify-center items-center'>
          <div className='flex flex-col items-center justify-center font-bold'>
            <p className='py-4'>{ListPropertySvg.violetImageSvg}</p>
            <h4 className='text-center bold text-[12px] md:text-[20px]'>
              Ability to List Many <br /> Property Types
            </h4>
          </div>
          <div className='flex flex-col items-center justify-center font-bold'>
            <p className='py-4'>{ListPropertySvg.orangeImageSvg}</p>
            <h4 className='text-center bold text-[12px] md:text-[20px]'>
              Ability to List Many <br /> Property Types
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
