import React, {useState} from 'react';
import './style/App.css';
import FoodBox from './component/FoodBox';
import AddFood from './component/AddFood';
import foodsJson from './foods.json';



function App() {
  let [foods, setFoods] = useState(foodsJson)
  
  return (
    <div className="App">
    <AddFood foods={foods} setFoods={setFoods}/>
    <FoodBox foods={foods} setFoods={setFoods}/>
    </div>
  );
}

export default App;
