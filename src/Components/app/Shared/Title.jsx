import React from 'react';

export default function Title({
  titleBlack,
  titleRed,
  titleGreen,
  titleSymbol,
}) {
  return (
    <h2 className='font-bold md:text-[40px] text-[28px] text-center'>
      {titleBlack}
      <i>
        <span className='text-[#F62619]'>{titleRed}</span>
        <span className='text-[#29B547]'>{titleGreen}</span>
        {titleSymbol}
      </i>
    </h2>
  );
}

export function SubTitle({ subTitle }) {
  return (
    <p className='text-[18px] text-[#858585] text-center pt-1'>{subTitle}</p>
  );
}
