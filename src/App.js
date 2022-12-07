import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox'

function App() {

  const [myFoods, setMyFoods] = useState(foods)

  return (
    <div className="App">
      {myFoods.map(element => {
        return (
          <div>
            <p>{element.name}</p>
            <img className='img-size' src={element.image} alt="img" />
          </div>
        )
      })}

      <FoodBox food={ {
      name: "Orange",
      calories: 85,
      image: "https://i.imgur.com/abKGOcv.jpg",
      servings: 1
      }} />

      
      {myFoods.map(element => {
        return (
          <div>
          <FoodBox food={element} />
          </div>
        )
      })}

    </div>
    
  );
}

export default App;
