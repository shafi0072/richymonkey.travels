import React from 'react';
import OperateCard, { OperateGreenCard } from './OperateCard';
const listCategory = [
  {
    title: 'I operate a single hotel...',
    subTitle:
      'Suitable for hotel owner or manager that operates a hotel with less than 200 guest rooms or for those who have limited experience or are new to  the hospitality industry...',
    buttonText: 'List Your Hotel',
  },
  {
    title: 'I operate multiple hotels...',
    subTitle:
      'Suitable for a multi-hotel owner or hotel management company with advanced hospitality industry experience and knowledge...',
    buttonText: 'List Your Hotel',
  },

  {
    title: 'I operate a single hotel...',
    subTitle:
      'Suitable for hotel owner or manager that operates a hotel with less than 200 guest rooms or for those who have limited experience or are new to  the hospitality industry...',
    buttonText: 'List Your Hotel',
  },
  {
    title: 'I operate multiple hotels...',
    subTitle:
      'Suitable for a multi-hotel owner or hotel management company with advanced hospitality industry experience and knowledge...',
    buttonText: 'List Your Hotel',
  },
];

export default function Operate() {
  console.log(listCategory[0]);
  return (
    <div className='grid md:grid-cols-2'>
      <OperateCard category={listCategory[0]} />
      <OperateGreenCard category={listCategory[1]} />
      <OperateGreenCard category={listCategory[2]} />
      <OperateCard category={listCategory[3]} />
    </div>
  );
}
