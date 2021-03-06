import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

import UserDisplay from "./components/UserDisplay"
import FoodDisplay from "./components/FoodDisplay"
import FoodEdit from "./components/FoodEdit"
import DeleteFood from "./components/DeleteFood"
import MakeFood from "./components/MakeFood"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foodItems: [],
      userFood: [],
      totalCalories: 0,
      totalProtein: 0,
      totalFat: 0,
      totalCarbs: 0
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


  editFood = (id, name, calories, protein, fat, carbs) =>{
    console.log("updating")
    if (calories === ""){
      calories = 0;
    }
    if(protein === ""){
      protein = 0;
    }
    if(fat === ""){
      fat = 0;
    }
    if(carbs === ""){
      carbs = 0;
    }
    axios.put(`/api/food/${id}`, {name, calories, protein, fat, carbs})
    .then(res => {
      this.setState({foodItems: res.data})
    })
    .catch(err => {
      alert(err)
    })
  }

  deleteFood = (id) =>{
    console.log("deleting " + id);
    axios.delete(`/api/food/${id}`)
    .then(res =>{
      this.setState({foodItems: res.data})
    })
    .catch(err =>{
      alert(err);
    })
  }

  makeFood = (name, calories, protein, fat, carbs) =>{
    console.log("Creating new meal");
    if(calories === ""){
      calories = 0;
    }
    if(protein === ""){
      protein = 0;
    }
    if(fat === ""){
      fat = 0;
    }
    if(carbs === ""){
      carbs = 0;
    }
    axios.post("/api/food", {name, calories, protein, fat, carbs})
    .then(res =>{
      this.setState({foodItems: res.data})
    })
    .catch(err =>{
      alert(err);
    })
  }

  addToUserMeals = (food) =>{
    let newFood = this.state.userFood;
    if (!this.state.userFood.includes(food)){
      newFood.push(food)
      this.setState({
        totalCalories: this.state.totalCalories + +food.calories, 
        totalProtein: this.state.totalProtein + +food.protein,
        totalFat: this.state.totalFat + +food.fat,
        totalCarbs: this.state.totalCarbs + +food.carbs
      })
    }
    
    this.setState({userFood: newFood})
    console.log(this.state.userFood)
  }
  removeFromUserMeals = (food) =>{
    let newFood = this.state.userFood;
    for(let i = 0; i < newFood.length; i++){
      if(food == newFood[i]){
        newFood.splice(i, 1);
        this.setState({
          totalCalories: this.state.totalCalories - +food.calories, 
          totalProtein: this.state.totalProtein - +food.protein,
          totalFat: this.state.totalFat - +food.fat,
          totalCarbs: this.state.totalCarbs - +food.carbs
        })
      }
    }
    this.setState({UserFood: newFood})
    console.log("removed")
  }
  render(){
    console.log(this.state.foodItems)
    return (
      <div className="App">
        <header>
          Nutritionly
        </header>

        <section className="main">
          <section className="food-area"> 
          <h2>Food Choices</h2>
          {
            this.state.foodItems.map((object) =>(   
              <FoodDisplay id={object.id} 
              key={object.id} 
              foodItem={object}
              editFood={this.editFood}
              deleteFood={this.deleteFood}
              addToUserMeals ={this.addToUserMeals}
              />
          ))
            }
          </section>

          <section className="user-area">
            <h2>Today's Meals</h2>
            <span className="total-calories">Total Calories: {this.state.totalCalories}</span>
            <span className="total-calories">{`Protein: ${this.state.totalProtein} Fat: ${this.state.totalFat} Carbs: ${this.state.totalCarbs}`}</span>
            <div className="user-food">
              {this.state.userFood.map((object) =>(
                  <UserDisplay id={object.id} 
                  key={object.id}
                  foodItem={object}
                  removeFromUserMeals ={this.removeFromUserMeals}
                  />
                ))}
            </div>
             
          </section>

          <section className="food-input">
            <h2>New Food</h2>
            <MakeFood makeFood={this.makeFood} />
          </section>
        </section>
        
        <footer>
          Grant Tabor 2020
        </footer>

      </div>
    );
  }

}

export default App;
