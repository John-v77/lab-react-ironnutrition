import React from 'react';
import FoodBox from './FoodBox';

function TodaysFood(props) {
    return (
        <div>
            <h2 style={{margin:'8vh 0'}}>Today's Menu</h2>
            <FoodBox {...props}/>
            
        </div>
    );
}

export default TodaysFood;