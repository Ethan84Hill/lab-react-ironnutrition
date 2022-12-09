import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Card, Col, Button } from 'antd';

function App() {

  const [myFoods, setMyFoods] = useState(foods)

  const [myFoodCopy, setMyFoodCopy] = useState(foods);

  const [hidden, setHidden] = useState(false);

  const addFood = (data) => {
    const updatedFood = [...myFoods, data]
    setMyFoods(updatedFood);
    setMyFoodCopy(updatedFood); 
  }

  const searchFood = (food) => {
    console.log(food)
    const results = myFoodCopy.filter((element) => {
      return element.name.toLowerCase().includes(food.toLowerCase());
    })
    setMyFoods(results);
  }

  const deleteFood = (index) => {
    const updatedList = [...myFoods];
    updatedList.splice(index, 1);
    setMyFoods(updatedList);
    setMyFoodCopy(updatedList); 
  }

  const formHide = () => {
   setHidden((status) => !status)
  }


  return (
    <div className="App">
    <Search searchFood = {searchFood} />
    
    {!hidden && <AddFoodForm addFood={addFood}/>}
      <Button type='primary' onClick={formHide}>{hidden ? "Add Some Food To The List!" : "Hide The List Form!"}</Button>
      
    <div>
     {myFoods.map((element, index) => {
      return(
        <div>
        <FoodBox food={element} deleteFood={deleteFood} index={index}/>
        </div>
      )
     })}
     {myFoods.length === 0 && (
            <div>
              <h3>The Food List Is Empty!</h3>
            </div>
          )}
     </div>

    </div>
    
  );
}

export default App;
