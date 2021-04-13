import React, {useState} from 'react';
import './style/App.css';
import AllFoods from './component/AllFoods';
import AddFood from './component/AddFood';
import foodsJson from './foods.json';
import Search from './component/Search';



function App() {

  let [foods, setFoods] = useState(foodsJson)
  let [results, setResults] = useState([])

  return (
    <div className="App">
    <AddFood foods={foods} setFoods={setFoods}/>
      <Search 
        foods={foods} 
        setFoods={setFoods}
        results={results}
        setResults={setResults}
      />
    {(results.length >= 1 ? null : <AllFoods foods={foods} setFoods={setFoods}/> )}
    </div>
  );
}

export default App;
