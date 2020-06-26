import React, {Component} from "react";

export default class FoodEdit extends Component {
    constructor(props){
        super(props)
        this.state={
            nameInput: "",
            calorieInput: 0
        }
    }

    handleNameChange = (val) => {
        this.setState({nameInput: val})
    }
    handleCalorieChange = (val) =>{
        this.setState({calorieInput: val})
    }

    render(){
        return(
            <div className="edit-food">
                <input onChange={e => this.handleNameChange(e.target.value)} placeholder="New Name"/>
                <input onChange={e => this.handleCalorieChange(e.target.value)} placeholder="New Calories"/>
                <button onClick={() => this.props.editFood(this.props.id, this.state.nameInput, this.state.calorieInput)}>Edit</button>
            </div>
         
        )
    }
}