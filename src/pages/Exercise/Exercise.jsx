import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExercises } from "../../actions/actions";

import ExerciseInfoCard from "../../components/ExerciseInfoCard";

import "./Exercise.css";

const Exercise = () => {

  const dispatch = useDispatch();
  const exercises = useSelector(state => state.exercises)

  useEffect(() => {
    dispatch(fetchExercises())
  },[dispatch])

  return (
    <div>
      <h1> Exercise page </h1>
      <h1> Your exercises - </h1>
      {
        exercises.exercises?.map((item) => <ExerciseInfoCard exercise={item} key={item._id}/>)
      }
    </div>
  );
};

export default Exercise;
