import "./ExerciseInfoCard.css"
const ExerciseInfoCard = (data) => {
    const {exercise} = data;
    return(
        <div className="exercise-card">
            <h2>Exercise: {exercise?.exerciseName}</h2>
            <h2>Duration: {exercise?.duration} minutes</h2>
            <h2>Calories Burnt: {exercise?.caloriesBurned}</h2>
        </div>
    )
}

export default ExerciseInfoCard;