import React from 'react';
import FoodBox from './FoodBox';

function Search(props) {
    

    const searchFood =(e)=>{
        console.log(e.target.value)
       let result = [...props.foods].filter((food) => {
            return (food.name.toLowerCase().includes(e.target.value))});

            console.log(result)

            props.setResults(result)
    }

    const displayFood = () => {
        return props.results.map(each => {
            return(
                <FoodBox {...each}/>
            )
        })
    }

    return (
        <div>
            <input onChange={searchFood} type='text' name='search' placeholder='search' style={{width:'40vw', margin:'0 0 5vh 1vw'}}/>
            {displayFood()}
        </div>
    );
}

export default Search;