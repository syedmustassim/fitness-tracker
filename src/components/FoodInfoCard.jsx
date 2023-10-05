import { useDispatch } from "react-redux";
import { deleteFood } from "../actions/actions";

import "./FoodInfoCard.css"

const FoodInfoCard = (food) => {
    const {data} = food;
    const dispatch = useDispatch();
    const removeFood = (id) => {
        dispatch(deleteFood(id))
    }
    return(
        <div className="food-card">
            <h2>Name: {data?.foodName}</h2>
            <h3>Calories: {data?.calories}</h3>
            <h3>Carbohydrates: {data?.carbohydrates}</h3>
            <h3>Proteins: {data?.proteins}</h3>
            <h3>Fat: {data?.fat} </h3>
            <button onClick={() => removeFood(data?._id)}>Delete</button>
        </div>
    )
}

export default FoodInfoCard