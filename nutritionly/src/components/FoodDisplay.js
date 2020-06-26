import React from "react";
import FoodEdit from "./FoodEdit"
import DeleteFood from "./DeleteFood";
export default function FoodDisplay(props){
    return (
    <div className="food-item">
        <span>{props.name} </span>
        <span>{`Calories: ${props.calories}`} </span>
        <span>{`Carbs: ${props.carbs} Fat: ${props.fat} Protein: ${props.protein}`}</span>
        <FoodEdit editFood={props.editFood} id={props.id}/>
        <DeleteFood deleteFood={props.deleteFood} id={props.id} name={props.name} calories={props.calories}/>
    </div>
    )
}