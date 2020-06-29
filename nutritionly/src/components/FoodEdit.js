import React, {Component} from "react";

export default class FoodEdit extends Component {
    constructor(props){
        super(props)
        this.state={
            nameInput: this.props.name,
            calorieInput: this.props.calories,
            proteinInput: this.props.protein,
            fatInput: this.props.fat,
            carbInput: this.props.carbs,
            toggleEdit: false
        }
    }

    handleNameChange = (val) => {
        this.setState({nameInput: val})
    }
    handleCalorieChange = (val) =>{
        this.setState({calorieInput: val})
    }
    handleProteinChange = (val) =>{
        this.setState({proteinInput: val})
    }
    handleFatChange = (val) =>{
        this.setState({fatInput: val})
    }
    handleCarbChange = (val) =>{
        this.setState({carbInput: val})
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
                        <p><input value={this.props.name} onChange={e => this.handleNameChange(e.target.value)} placeholder="New Name"/></p>
                        <p><input type="number" value={this.props.calories} onChange={e => this.handleCalorieChange(e.target.value)} placeholder="New Calories"/></p>
                         
                        <span className="macro-input">
                            <input placeholder="Protein" value={this.state.proteinInput} onChange={e => this.handleProteinChange(e.target.value)}/>
                            <input placeholder="Fat" value={this.state.fatInput} onChange={e => this.handleFatChange(e.target.value)}/>
                            <input placeholder="Carbs" value={this.state.carbInput} onChange={e => this.handleCarbChange(e.target.value)} />
                        </span>

                        <button onClick={() => {this.props.editFood(this.props.id, this.state.nameInput, this.state.calorieInput, this.state.proteinInput, this.state.fatInput, this.state.carbInput); 
                            this.setState({toggleEdit: false})}}>Confirm</button>
                    </div>
                )
                : null
                }
                
            </div>
         
        )
    }
}