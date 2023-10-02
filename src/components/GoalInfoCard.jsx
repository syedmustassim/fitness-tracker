import './GoalInfoCard.css'

const GoalInfoCard = (goal) => {
    const {data} = goal
    return(
        <div>
            <h2>Goal: {data.goalName}</h2>
            <p>Description: {data.description}</p>
            <p>Calories: {data.targetCalories}</p>
            <p>Status: {data.status}</p>
        </div>
    )
}

export default GoalInfoCard;