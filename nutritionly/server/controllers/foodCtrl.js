let food = [
    {
        name: "Pizza",
        calories: 1000,
        protein: 20,
        fat: 30,
        carbs: 40,
        id: 0
    }
]
let id=1

module.exports = {
    getFood: (req, res) =>{
        res.status(200).send(food);
    },
    addFood: (req, res) =>{
        const {name, calories, protein, fat, carbs} = req.body;
        food.push({name, calories, protein, fat, carbs, id});
        id = id +1;
        res.status(200).send(food);
    },
    editFood: (req, res) =>{ //maybe change this into edit individual elements?
        const {name, calories, protein, fat, carbs} = req.body;
        const updateId = req.params.id;
        console.log(req.params);
        console.log(req.body);
        const foodIndex = food.findIndex(foodItem => foodItem.id == updateId );
        
        food[foodIndex].name = name;
        food[foodIndex].calories = calories;
        food[foodIndex].protein = protein;
        food[foodIndex].fat = fat;
        food[foodIndex].carbs = carbs;
        res.status(200).send(food);
    },
    deleteFood: (req, res) => {

        const deleteId = req.params.id;
        const foodIndex = food.findIndex(foodItem => foodItem.id == deleteId );
        food.splice(foodIndex, 1);

        res.status(200).send(food);
    }
}