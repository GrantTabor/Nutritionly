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
                <span>{name} </span>
                <span>{`Calories: ${calories}`} </span>
               
                <FoodEdit editFood={this.props.editFood} id={id}/>
                <span>
                    <button className="add-button" onClick={()=> {this.props.addToUserMeals(this.props.foodItem)}}>Add</button>
                    <DeleteFood deleteFood={this.props.deleteFood} id={id} name={name} calories={calories}/>
                </span>
                
            </div>
            )
    }
  
}