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
                <div className="food-info">
                    <p>{name} </p>
                    <p>{`Calories: ${calories}`} </p>
                    <span className="macro-nutrients">{`Protein: ${protein} Fat: ${fat} Carbs: ${carbs}`}</span>
                </div>
                
            </div>
            )
    }
  
}