import { Input } from 'antd';
import foods from '../foods.json';
import { useState } from 'react';
import FoodBox from './FoodBox';

function AddFoodForm(props) {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');
    const {addFood} = props

    const nameInputHandler = (event) => setName(event.target.value);
    const imageInputHandler = (event) => setImage(event.target.value);
    const caloriesInputHandler = (event) => setCalories(event.target.value);
    const servingsInputHandler = (event) => setServings(event.target.value);

    const submitHandler = (event) => {
        event.preventDefault();
         addFood({ name, image, calories, servings })
         setName('')
         setImage('')
         setCalories('')
         setServings('')
    };

    return (
        <div>
            <h1>Add</h1>
            <form onSubmit={submitHandler}>
                <label>Name: </label>
                <Input type="text" name="name" value={name} onChange={nameInputHandler}
                />
        
                <label>Image: </label>
                <Input type="text" name="image" value={image} onChange={imageInputHandler}
                />
        
                <label>Calories: </label>
                <Input type="number" name="calories" value={calories} onChange={caloriesInputHandler}
                />
        
                <label>Servings: </label>
                <Input type="number" name="servings" value={servings} onChange={servingsInputHandler}
                />
        
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddFoodForm;
