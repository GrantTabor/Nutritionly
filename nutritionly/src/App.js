import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

import FoodDisplay from "./components/FoodDisplay"
import FoodEdit from "./components/FoodEdit"
import DeleteFood from "./components/DeleteFood"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foodItems: [],
      userFood: []
    }
  }

  componentDidMount(){
    this.getFood();
  }


  getFood = () => {
    axios.get("/api/food")
    .then(res =>{
      this.setState({foodItems: res.data})
    })
    .catch(err =>{
      alert("error, couldn't download food items")
    })
  }


  editFood = (id, name, calories) =>{
    console.log("updating")
    axios.put(`/api/food/${id}`, {name, calories})
    .then(res => {
      this.setState({foodItems: res.data})
    })
    .catch(err => {
      alert(err)
    })
  }

  deleteFood = (id) =>{
    console.log("deleting");
    axios.delete(`/api/food/:${id}`)
    .then(res =>{
      this.setState({foodItems: res.data})
    })
    .catch(err =>{
      alert(err)
    })
  }

  render(){
    console.log(this.state.foodItems)
  
    return (
      <div className="App">
        <header>
          Nutritionly
        </header>
        <section className="food-area">
        {
          this.state.foodItems.map((object) =>(    
            <FoodDisplay id={object.id} 
            key={object.id} 
            name={object.name} 
            calories={object.calories} 
            carbs={object.carbs} 
            protein={object.protein} 
            fat={object.fat}
            editFood={this.editFood}
            deleteFood={this.deleteFood}
            />
        ))
          }
        </section>


        <section className="user-area">

        </section>
      </div>
    );
  }

}

export default App;
