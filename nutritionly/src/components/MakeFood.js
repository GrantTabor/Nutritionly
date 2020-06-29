import React, {Component} from "react"

export default class MakeFood extends Component {
    constructor(props){
        super(props)
        this.state = {
            nameInput: "",
            calorieInput: ""
        }
    }

    handleNameChange = (val) => {
        this.setState({nameInput: val})
    }
    handleCalorieChange = (val) =>{
        this.setState({calorieInput: val})
    }
    handleSubmit = () =>{
        this.props.makeFood(this.state.nameInput, this.state.calorieInput);
        this.setState({nameInput: "", calorieInput: ""})

    }

    render(){
        return(
            <div className="make-food">
                <section>
                    <p><input value={this.state.nameInput} onChange={e => this.handleNameChange(e.target.value)} placeholder="Name"/></p>
                    <input value={this.state.calorieInput} type="number" onChange={e => this.handleCalorieChange(e.target.value)} placeholder="Calories"/>
                </section>
               
                <button onClick={() => this.handleSubmit()}>Create</button>
                
            </div>
        )
    }
}