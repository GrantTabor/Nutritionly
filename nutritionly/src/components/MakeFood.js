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
                <section>
                    <input value={this.props.name} onChange={e => this.handleNameChange(e.target.value)} placeholder="Name"/>
                    <input type="number"onChange={e => this.handleCalorieChange(e.target.value)} placeholder="Calories"/>
                </section>
               
                <button onClick={() => this.props.makeFood(this.state.nameInput, this.state.calorieInput)}>Create</button>
                
            </div>
        )
    }
}