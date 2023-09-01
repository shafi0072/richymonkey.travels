import React, { useState } from 'react';
import Categories from './Categories';
import CardsBody from './CardsBody/CardsBody';

const Body = () => {
    const [selected, setSelected] = useState("");

    return (
        <div>
            <Categories selected={selected} setSelected={setSelected}/>
            <CardsBody selected={selected} />
        </div>
    );
};

export default Body;