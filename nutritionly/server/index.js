const express = require("express");
const app = express();
const foodCtrl = require("./controllers/foodCtrl");
app.use(express.json());



app.get("/api/food", foodCtrl.getFood);
app.post("/api/food", foodCtrl.addFood);
app.put("/api/food/:id", foodCtrl.editFood);
app.delete("/api/food/:id", foodCtrl.deleteFood);

app.listen(3005, ()=>{
    console.log("server is running on 3005")
})