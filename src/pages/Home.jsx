import React from 'react';
import Slider from '../Components/Banner/Slider';
import TabCategories from '../Components/Tabs/TabCategories';
import Stat from './Stat';

const Home = () => {
    return (
        <div>
          <Slider></Slider>
          <Stat></Stat>
          <TabCategories></TabCategories>
         
        </div>
    );
};

export default Home;