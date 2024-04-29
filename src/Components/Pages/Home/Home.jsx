import React from 'react';
import Category from '../../Category/Category';
import Slider from '../../Slider/Slider';
import CraftItems from '../../CraftItems/CraftItems';;

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Category></Category>
            <CraftItems></CraftItems>
        </div>
    );
};

export default Home;