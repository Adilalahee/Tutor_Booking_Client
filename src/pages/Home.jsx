import React from 'react';
import Slider from '../Components/Banner/Slider';
import TabCategories from '../Components/Tabs/TabCategories';
import Stat from './Stat';
import Language from './Language';
import Tutor from './Tutor';

const Home = () => {
    return (
        <div>
          <Slider></Slider>
          <Stat></Stat>
          <TabCategories></TabCategories>
          <Language></Language>
          <Tutor></Tutor>
         
        </div>
    );
};

export default Home;