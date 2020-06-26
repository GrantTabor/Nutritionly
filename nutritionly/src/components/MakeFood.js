import React, {Component} from "react"

export default class MakeFood extends Component {
    constructor(props){
        super(props)
        this.state = {
            nameInput: "",
            calorieInput: null
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
            <div className="make-food">
                <input value={this.props.name} onChange={e => this.handleNameChange(e.target.value)} placeholder="Name"/>
                <input onChange={e => this.handleCalorieChange(e.target.value)} placeholder="Calories"/>
                <button onClick={() => this.props.makeFood(this.state.nameInput, this.state.calorieInput)}>Create</button>
                
            </div>
        )
    }
}