import React from 'react';
import 'bulma/css/bulma.css';
import FoodBox from './FoodBox';


function AllFoods(props) {
    const displayFood = () => {
        return props.foods.map(each => {
            return(
                <FoodBox {...each}/>
            )
        })
    }

    return (
        <>
        {displayFood()}
        </>
    );
}

export default AllFoods;