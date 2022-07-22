import React from "react";
import Lottie from "react-lottie";
import './Cat.css';
import animationCat from '../Cat/46864-lovely-cats.json';

const Cat = () => {

    const defaultOptions={
        loop:true,
        autoplay:true,
        animationData:'animationCat'
    }


    return(
        <div className='cat-container'>
            <Lottie 
            options={defaultOptions}
            />
        </div>
    )

};

export default Cat;