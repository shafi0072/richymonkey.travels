import { categories } from '@/src/constant/categories';
import React from 'react';
import SingleCard from './SingleCard';

const CardsBody = ({selected}) => {
    const selectedItem = categories.find(category=>category.label === selected);

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 max-w-screen-2xl mx-auto'>
            {
                selectedItem?.data.length > 0 && selectedItem?.data.map((item,index)=><SingleCard item={item}  key={index}></SingleCard>)
            }
        </div>
    );
};

export default CardsBody;