let food = [
    {
        name: "Pizza",
        calories: 1000,
        id: 0
    }
]
let id=1

module.exports = {
    getFood: (req, res) =>{
        res.status(200).send(food);
    },
    addFood: (req, res) =>{
        const {name, calories, carbs, protein, fat} = req.body;
        food.push({name, calories, carbs, protein, fat, id});
        id = id +1;
        res.status(200).send(food);
    },
    editFood: (req, res) =>{ //maybe change this into edit individual elements?
        const {name, calories} = req.body;
        const updateId = req.params.id;
        console.log(req.params);
        console.log(req.body);
        const foodIndex = food.findIndex(foodItem => foodItem.id == updateId );
        
        food[foodIndex].name = name;
        food[foodIndex].calories = calories;
        res.status(200).send(food);
    },
    deleteFood: (req, res) => {

        const deleteId = req.params.id;
        const foodIndex = food.findIndex(foodItem => foodItem.id == deleteId );
        food.splice(foodIndex, 1);

        res.status(200).send(food);
    }
}