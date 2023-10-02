import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFood } from "../../actions/actions";

import "./Food.css";
import FoodInfoCard from "../../components/FoodInfoCard";

const Food = () => {
  
  const dispatch = useDispatch();
  const food = useSelector(state => state.food)

  useEffect(() => {
    dispatch(fetchFood())
  },[dispatch])

  console.log(food,'lol')

  return (
    <div>
      <h1> Food page </h1>
      {
        food.data?.map((item) => <FoodInfoCard food={item}/>)
      }
    </div>
  );
};

export default Food;
