const ExerciseInfoCard = (data) => {
    const {exercise} = data;
    console.log(exercise)
    return(
        <div>
            <h2>Exercise: {exercise.exerciseName}</h2>
            <h2>Duration: {exercise.duration} minutes</h2>
        </div>
    )
}

export default ExerciseInfoCard;