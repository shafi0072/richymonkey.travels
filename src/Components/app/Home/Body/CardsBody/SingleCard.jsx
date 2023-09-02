import React from 'react';

const SingleCard = ({item}) => {
    // console.log(item)
    return (
        <div>
         <img className='rounded-lg' src={item?.image} alt="" />
         <h3 className='my-3 font-semibold'>{item?.name}</h3>
         <p>{item?.description}</p>
         <p className='font-semibold'>Price:{item?.price}</p>
        </div>
    );
};

export default SingleCard;