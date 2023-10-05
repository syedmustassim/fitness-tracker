import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExercise, fetchExercises } from "../../actions/actions";

import ExerciseInfoCard from "../../components/ExerciseInfoCard";

import "./Exercise.css";

const Exercise = () => {

  const dispatch = useDispatch();

  const [newExercise, setNewExercise] = useState({
    exerciseName: '',
    duration: 0
  })


  const handleAddExercise = (e) => {
    e.preventDefault();

    const exerciseToAdd = {
      ...newExercise,
      duration: parseInt(newExercise.duration)
    };
    dispatch(addExercise(exerciseToAdd));

    setNewExercise({
      exerciseName: '',
      duration: 0
    });
  }


  const exercises = useSelector(state => state.exercises)

  useEffect(() => {
    dispatch(fetchExercises())
  },[dispatch])

  return (
    <div>
      <h1> Exercise page </h1>
      <h2>Enter a new exercise:</h2>
      <form>
        <div>
        <label>Exercise Name: </label>
        <input type="text" value={newExercise.exerciseName} onChange={(e) => setNewExercise({
          ...newExercise, exerciseName: e.target.value
        })} />
        </div>
        <div>
          <label>Duration: </label>
          <input type="number" value={newExercise.duration} onChange={(e) => setNewExercise({
            ...newExercise, duration: e.target.value
          })}/>
        </div>
        <button onClick={handleAddExercise}>Add exercise</button>
      </form>
      <h1> Your exercises - </h1>
      <div className="exercise-main-content">
      {
        exercises.exercises?.map((item) => <ExerciseInfoCard exercise={item} key={item?._id}/>)
      }
      </div>
    </div>
  );
};

export default Exercise;
