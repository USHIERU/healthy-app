import React from 'react';

import Navbar from '../../components/Navbar'
import WelcomeBaner from '../../components/WelcomeBaner'

export default function Home() {
    return <>
        <Navbar />
        <div className="mx-5 sm:mx-12 lg:mx-20 xl:mx-64">
            <WelcomeBaner />
        </div>
    </>;
}