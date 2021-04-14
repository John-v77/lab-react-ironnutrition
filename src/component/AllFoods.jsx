import React from 'react';
import 'bulma/css/bulma.css';
import FoodBox from './FoodBox';


function AllFoods(props) {
    const displayFood = () => {
        return props.foods.map(each => {
            return(
                <FoodBox {...each} todayFood ={props.todayFood}  setTodayFood={props.setTodayFood}/>
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