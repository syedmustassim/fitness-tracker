import {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchFitnessGoals } from "../../actions/actions";

import "./FitnessGoals.css";

const FitnessGoals = () => {

  const dispatch = useDispatch();
  const fitnessGoals = useSelector(state => state.fitnessGoals);

  useEffect(() => {
    dispatch(fetchFitnessGoals)
  },[dispatch])

  console.log(fitnessGoals, 'fitness goals')
  return (
    <div>
      <h1> Fitness Goals page </h1>
    </div>
  );
};

export default FitnessGoals;
