import React, {useState}  from 'react';
import foods from '../foods.json'
import 'bulma/css/bulma.css';

function AddFood(props) {

    let [toggle, setToggle] = useState(false)
    let [newFoodName, setNewFoodName] = useState('')
    let [newFoodCalories, setNewFoodCalories] = useState('')
    const btnToggle = () => {
        setToggle(!toggle)
    }

    const foodName = (e) => {
        setNewFoodName(e.target.value);
    }

    const foodCalories = (e) => {
        setNewFoodCalories(e.target.value);
    }

    const newFood = (e) => {
        e.preventDefault()
        let someNewFoods = {
            name: newFoodName,
            calories: newFoodCalories,
            image: 'https://pyxis.nymag.com/v1/imgs/024/984/1d904bcbce287d45ae55505199b1b921a5-best-burger-shake-shack.rhorizontal.w700.jpg',
            qty: 0
            }

        let newFoods = [...foods]
        newFoods.unshift(someNewFoods);
        props.setFoods(newFoods);      
    }



    return (
        <div>
            <button onClick={btnToggle} style={{margin:'4vh 0'}}>Add new Food</button>
            {toggle ?  (<form onSubmit={newFood}>
                            <input
                                style={{ marginTop: '40px' }}
                                placeholder="Enter Food"
                                onChange={foodName}
                                type="text"
                                name="food"
                            />
                            <input
                                style={{ marginTop: '40px' }}
                                placeholder="Enter Calories"
                                onChange={foodCalories}
                                type="text"
                                name="calories"
                            />
                            <button>Submit</button>
                        </form>
                        ) : null}
        </div>
    );
}

export default AddFood;