import React from 'react';

export default function SuggestedLocation({ location }) {
  const { state, city } = location;
  return (
    <div className='border-b border-gray-300 my-3'>
      <div className='flex justify-between px-10 items-center'>
        <div className='py-2 capitalize'>
          <p className='text-[var(--orange-color)] font-bold'>{state}</p>
          <p>city:{city}</p>
        </div>
        <button className='border border-[var(--orange-color)] text-[var(--orange-color)] rounded-md capitalize py-2 px-4 font-bold '>
          city
        </button>
      </div>
    </div>
  );
}
