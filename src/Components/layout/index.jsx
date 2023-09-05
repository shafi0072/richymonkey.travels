import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { useRouter } from 'next/router';

const index = ({children}) => {
    const router = useRouter();
    return (
        <div>
            {
                router.pathname !== '/' && <Navbar/>
            }
            {children}
        </div>
    );
};

export default index;