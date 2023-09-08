import React from 'react';

export default function OperateCard({ category }) {
  const { title, subTitle, buttonText } = category;
  return (
    <div className='text-white bg-[#F62619] py-8 px-4 flex flex-col justify-center items-center'>
      <h3 className='text-[28px] md:text-[46px]'>{title}</h3>
      <p className='text-[18px] text-center md:text-left py-2 max-w-lg md:leading-8'>
        {subTitle}
      </p>
      <button className='text-black text-[20px] bg-white rounded-full py-4 px-8 my-3'>
        {buttonText}
      </button>
    </div>
  );
}

export const OperateGreenCard = ({ category }) => {
  const { title, subTitle, buttonText } = category;
  return (
    <div className='text-whit bg-[var(--green-color)] py-8 px-4 flex flex-col justify-center items-center'>
      <h3 className='text-[28px] md:text-[46px]'>{title}</h3>
      <p className='text-[18px] text-center py-2 md:text-left max-w-lg md:leading-8'>
        {subTitle}
      </p>
      <button className='text-black text-[20px] bg-white rounded-full py-4 px-8 my-3'>
        {buttonText}
      </button>
    </div>
  );
};
