import React, {useState} from 'react';
import './style/App.css';
import AllFoods from './component/AllFoods';
import AddFood from './component/AddFood';
import foodsJson from './foods.json';
import Search from './component/Search';
import TodaysFood from './component/TodaysFood';



function App() {

  let [foods, setFoods] = useState(foodsJson)
  let [results, setResults] = useState([])
  let [todayFood, setTodayFood] = useState([])

  return (
    <div className="App">
      <div className='columns'>
        <div className='column'>
        <AddFood foods={foods} setFoods={setFoods}/>
          <Search 
            foods={foods} 
            setFoods={setFoods}
            results={results}
            setResults={setResults}
          />
        {(results.length >= 1 ? null : <AllFoods 
                                          foods={foods} 
                                          setFoods={setFoods}
                                          todayFood ={todayFood}
                                          setTodayFood={setTodayFood}
                                          /> )}
        </div>
        
        <div className='column'>
          <TodaysFood todayFood={todayFood} />
        </div>
      </div>
    </div>
  );
}

export default App;
