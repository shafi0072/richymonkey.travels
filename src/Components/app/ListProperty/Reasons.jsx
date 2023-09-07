import React from 'react';
import ListPropertySvg from './ListPropertySvg';
import Title, { SubTitle } from '../Shared/Title';

export default function Reasons() {
  return (
    <section className='pt-[100px]'>
      <div className='px-3 md:px-0'>
        <Title
          titleBlack='7 Reasons Why Hotels Use'
          titleRed='Suva'
          titleGreen='Trip'
          titleSymbol='!'
        />
        <SubTitle
          subTitle='
       We constantly improve our platform and services to ensure you can
       offer the best experience to your customers.'
        />
      </div>
      <div className='flex flex-col pt-[60px]'>
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
              Free Guidance and <br /> Online Resources
            </h4>
          </div>
          <div className='flex flex-col items-center justify-center font-bold'>
            <p className='py-4'>{ListPropertySvg.blueImageSvg}</p>
            <h4 className='text-center bold text-[12px] md:text-[20px]'>
              More Flexibility <br /> Options for Guests
            </h4>
          </div>
          <div className='flex flex-col items-center justify-center font-bold'>
            <p className='py-4'>{ListPropertySvg.skyImageSvg}</p>
            <h4 className='text-center bold text-[12px] md:text-[20px]'>
              Guest Notifications <br /> and Alerts Manager
            </h4>
          </div>
        </div>
        <div className='order-3 md:order-2 py-5 max-w-screen-md mx-auto grid md:grid-cols-3 grid-cols-2 gap-x-5 gap-y-5 justify-center items-center'>
          <div className='flex flex-col items-center justify-center font-bold'>
            <p className='py-4'>{ListPropertySvg.yellowImageSvg}</p>
            <h4 className='text-center bold text-[12px] md:text-[20px]'>
              Import 3rd Party <br /> Property Data
            </h4>
          </div>
          <div className='flex flex-col items-center justify-center font-bold'>
            <p className='py-4'>{ListPropertySvg.redImageSvg}</p>
            <h4 className='text-center bold text-[12px] md:text-[20px]'>
              Unique Discounts <br /> Settings for Guests
            </h4>
          </div>
          <div className='col-span-2 md:col-span-1 flex flex-col items-center justify-center font-bold'>
            <p className='py-4'>{ListPropertySvg.lightGreenImageSvg}</p>
            <h4 className='text-center bold text-[12px] md:text-[20px]'>
              Easily Manage Hotel <br /> Rules and Policies
            </h4>
          </div>
        </div>
        <div className='order-2 md:order-3 py-5 max-w-screen-sm mx-auto grid grid-cols-2 gap-x-5 gap-y-5 justify-center items-center'>
          <div className='flex flex-col items-center justify-center font-bold'>
            <p className='py-4'>{ListPropertySvg.violetImageSvg}</p>
            <h4 className='text-center bold text-[12px] md:text-[20px]'>
              Simplified Payment <br /> System
            </h4>
          </div>
          <div className='flex flex-col items-center justify-center font-bold'>
            <p className='py-4'>{ListPropertySvg.orangeImageSvg}</p>
            <h4 className='text-center bold text-[12px] md:text-[20px]'>
              24/7 Multi Language <br /> Support Available
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
