import React, {Component} from "react";
import FoodEdit from "./FoodEdit"
import DeleteFood from "./DeleteFood";
export default class UserDisplay extends Component {
    constructor(props){
        super(props)
    
    }
    render(){
        const {id, name, calories, carbs, fat, protein} = this.props.foodItem
        
        return (
            <div className="food-item" onClick={()=> this.props.removeFromUserMeals(this.props.foodItem)}>
                <span>{name} </span>
                <span>{`Calories: ${calories}`} </span>
                
            </div>
            )
    }
  
}