import { Card, Col, Button } from 'antd';
import { useState } from 'react';
import foods from '../foods.json';

function FoodBox(props) {

    const {index, deleteFood} = props;

    const {name, calories, servings, image} = props.food

    return (
        <div>
        <Col>
            <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
                <img src={image} height={60} alt="food" />
                <p>Calories: {calories}</p>
                <p>Servings: {servings}</p>
                <p>
                <b>Total Calories: {calories * servings} </b> kcal
                </p>
                <Button onClick={() => deleteFood(index)} type="primary"> Delete </Button>
            </Card>
        </Col>
        </div>

        
    )
}

export default FoodBox;