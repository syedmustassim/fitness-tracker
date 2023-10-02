import {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchFitnessGoals } from "../../actions/actions";

import "./FitnessGoals.css";
import GoalInfoCard from "../../components/GoalInfoCard";

const FitnessGoals = () => {

  const dispatch = useDispatch();
  const fitnessGoals = useSelector(state => state.fitnessGoals);

  useEffect(() => {
    dispatch(fetchFitnessGoals())
  },[dispatch])

  return (
    <div>
      <h1> Fitness Goals </h1>
      <h1> Your current goals </h1>
      {
        fitnessGoals.goals?.map((item) => (<GoalInfoCard data={item} key={item._id}/>))
      }
    </div>
  );
};

export default FitnessGoals;
