import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFood, fetchFood } from "../../actions/actions";

import "./Food.css";
import FoodInfoCard from "../../components/FoodInfoCard";

const Food = () => {
  
  const dispatch = useDispatch();

  const [foodItem, setFoodItem] = useState({
    foodName: "",
    calories: 0,
    carbohydrates: 0,
    proteins: 0,
    fat: 0
  })

  const handleAddFood = (e) => {
    e.preventDefault();
    dispatch(addFood(foodItem));
    setFoodItem({
      foodName: "",
      calories: 0,
      carbohydrates: 0,
      proteins: 0,
      fat: 0
    })
  }

  const food = useSelector(state => state.food)

  useEffect(() => {
    dispatch(fetchFood())
  },[dispatch,foodItem])

  return (
    <div>
      <h1>Food page </h1>
      <h2>Add a food item: </h2>
      <form>
        <div>
          <label>Food name:</label>
          <input type="text" value={foodItem.foodName} onChange={(e) => setFoodItem({...foodItem, foodName: e.target.value})} />
        </div>
        <div>
          <label>Calories:</label>
          <input type="text" value={foodItem.calories} onChange={(e) => setFoodItem({...foodItem, calories: e.target.value})} />
        </div>
        <div>
          <label>Carbohydrates:</label>
          <input type="text" value={foodItem.carbohydrates} onChange={(e) => setFoodItem({...foodItem, carbohydrates: e.target.value})} />
        </div>
        <div>
          <label>Proteins:</label>
          <input type="text" value={foodItem.proteins} onChange={(e) => setFoodItem({...foodItem, proteins: e.target.value})} />
        </div>
        <div>
          <label>Fat:</label>
          <input type="text" value={foodItem.fat} onChange={(e) => setFoodItem({...foodItem, fat: e.target.value})} />
        </div>
        <button onClick={handleAddFood}>Add food item</button>
      </form>
      {
        food.data?.map((item) => <FoodInfoCard data={item} key={item._id}/>)
      }
    </div>
  );
};

export default Food;
