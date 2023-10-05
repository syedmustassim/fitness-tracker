import { useDispatch } from "react-redux";

import "./ExerciseInfoCard.css"
import { deleteExercise } from "../actions/actions";

const ExerciseInfoCard = (data) => {
    const {exercise} = data;
    const dispatch = useDispatch();
    const removeExercise = (id) => {
        dispatch(deleteExercise(id))
    }
    return(
        <div className="exercise-card">
            <h2>Exercise: {exercise?.exerciseName}</h2>
            <h2>Duration: {exercise?.duration} minutes</h2>
            <h2>Calories Burnt: {exercise?.caloriesBurned}</h2>
            <button onClick={() => removeExercise(exercise._id)}>Delete</button>
        </div>
    )
}

export default ExerciseInfoCard;