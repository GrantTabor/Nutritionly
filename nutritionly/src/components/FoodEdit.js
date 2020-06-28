import React, {Component} from "react";

export default class FoodEdit extends Component {
    constructor(props){
        super(props)
        this.state={
            nameInput: this.props.name,
            calorieInput: this.props.calories,
            toggleEdit: false
        }
    }

    handleNameChange = (val) => {
        this.setState({nameInput: val})
    }
    handleCalorieChange = (val) =>{
        this.setState({calorieInput: val})
    }
    toggleEdit = () =>{
        this.setState({toggleEdit: !this.state.toggleEdit})
    }

    render(){
        return(
            <div className="edit-food">
                <button onClick={() => this.toggleEdit()}>Edit</button>
                {this.state.toggleEdit
                ? (
                    <div className="edit-menu"> 
                        <input value={this.props.name} onChange={e => this.handleNameChange(e.target.value)} placeholder="New Name"/>
                         <input type="number"onChange={e => this.handleCalorieChange(e.target.value)} placeholder="New Calories"/>
                        <button onClick={() => {this.props.editFood(this.props.id, this.state.nameInput, this.state.calorieInput); 
                            this.setState({toggleEdit: false})}}>Confirm</button>
                    </div>
                )
                : null
                }
                
            </div>
         
        )
    }
}