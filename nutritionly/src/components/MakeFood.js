import React, {Component} from "react"

export default class MakeFood extends Component {
    constructor(props){
        super(props)
        this.state = {
            nameInput: "",
            calorieInput: "",
            proteinInput: "",
            fatInput: "",
            carbInput: ""
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

    handleSubmit = () =>{
        this.props.makeFood(this.state.nameInput, this.state.calorieInput, this.state.proteinInput, this.state.fatInput, this.state.carbInput);
        this.setState({nameInput: "", calorieInput: "", carbInput: "", proteinInput: "", fatInput: ""})

    }

    render(){
        return(
            <div className="make-food">
                <section>
                    <p><input value={this.state.nameInput} onChange={e => this.handleNameChange(e.target.value)} placeholder="Name"/></p>
                    <input value={this.state.calorieInput} type="number" onChange={e => this.handleCalorieChange(e.target.value)} placeholder="Calories"/>
                    <p className="macro-input">
                        <input placeholder="Protein" value={this.state.proteinInput} onChange={e => this.handleProteinChange(e.target.value)}/>
                        <input placeholder="Fat" value={this.state.fatInput} onChange={e => this.handleFatChange(e.target.value)}/>
                        <input placeholder="Carbs" value={this.state.carbInput} onChange={e => this.handleCarbChange(e.target.value)} />
                    </p>
                </section>
               
                <button onClick={() => this.handleSubmit()}>Create</button>
                
            </div>
        )
    }
}