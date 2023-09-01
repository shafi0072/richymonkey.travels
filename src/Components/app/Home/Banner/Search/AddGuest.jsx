import React, { useState } from 'react';
import { FaAngleDown, FaMinus, FaUser } from 'react-icons/fa6';

const AddGuest = ({adults,setAdults,children,setChildren,room,setRoom,openGuest,setOpenGuest,setOpenCalender}) => {
 
    const handleGuestOpen = ()=>{
        setOpenGuest(!openGuest);
        setOpenCalender(false)
    }
    return (
     <div className='relative'>
           <div className="flex items-center gap-2 border-r border-gray-300 pr-4 ml-4 cursor-pointer">
            <FaUser/>
            <div onClick={handleGuestOpen} className='font-semibold flex items-center gap-4'>
                {adults} adults - {children} children - {room} room <span><FaAngleDown/></span>
            </div>
            {
                openGuest && <div className='absolute bg-white rounded-md top-12 right-0 shadow-md p-6 w-[320px] space-y-3 font-semibold cursor-auto'>
                   <div className='flex justify-between items-center'>
                    <p>Adult</p>
                    <div className='border border-gray-600 p-2 flex justify-between  items-center gap-4 rounded-md w-[120px]'>
                        <button disabled={adults <= 1}>
                        <FaMinus className='cursor-pointer' onClick={()=>setAdults(adults - 1)} />
                        </button>
                        <p className='mx-4'>{adults}</p>
                        <FaMinus className='cursor-pointer' onClick={()=>setAdults(adults + 1)}/>
                    </div>
                   </div>
                   <div className='flex justify-between items-center'>
                    <p>Children</p>
                    <div className='border border-gray-600 p-2 flex justify-between  items-center gap-4 rounded-md w-[120px]'>
                      <button disabled={children <= 0} >  <FaMinus className='cursor-pointer' onClick={()=>setChildren(children - 1)} /></button>
                        <p className='mx-4'>{children}</p>
                        <FaMinus className='cursor-pointer' onClick={()=>setChildren(children + 1)}/>
                    </div>
                   </div>
                   <div className='flex justify-between items-center'>
                    <p>Room</p>
                    <div className='border border-gray-600 p-2 flex justify-between  items-center gap-4 rounded-md w-[120px]'>
                        <button disabled={room <= 1}>
                        <FaMinus  className='cursor-pointer' onClick={()=>setRoom(room - 1)} />
                        </button>
                        <p className='mx-4'>{room}</p>
                        <FaMinus className='cursor-pointer' onClick={()=>setRoom(room + 1)}/>
                    </div>
                   </div>
                   <button onClick={()=>setOpenGuest(false)} className='border border-green-600 py-2 w-full rounded-md'>Done</button>
                </div>
            }
        </div>
     </div>
    );
};

export default AddGuest;