import React from 'react'
import { Hero } from './Hero';
import { WhyChooseMe } from './WhyChooseMe';
import { Slider } from './Slider';
import { LikeMe } from './LikeMe';
import { Footer } from './Footer';

export const HomePage = () => {
    document.title = 'Portfolio - Home'
    return (
        <>
            <Hero/>
            <WhyChooseMe/>  
            <Slider/>
            <LikeMe/>
            <Footer/>
        </>
    )
}
