import React, {Component} from "react";
import FoodEdit from "./FoodEdit"
import DeleteFood from "./DeleteFood";
export default class FoodDisplay extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const {id, name, calories, carbs, fat, protein} = this.props.foodItem
        return (
            <div className="food-item" >
                <div className="food-info">
                    <p>{name} </p>
                    <p>{`Calories: ${calories}`} </p>
                    <span className="macro-nutrients">{`Protein: ${protein} Fat: ${fat} Carbs: ${carbs}`}</span>
                </div>
                
               <div className="food-buttons">
                    <DeleteFood deleteFood={this.props.deleteFood} id={id}  className="delete-button"/>
                    <FoodEdit editFood={this.props.editFood} id={id} name={name} calories={calories} protein={protein} fat={fat} carbs={carbs}/>
                    <p><button className="add-button" onClick={()=> {this.props.addToUserMeals(this.props.foodItem)}}>Add</button></p>
               </div>
                
                
            </div>
            )
    }
  
}