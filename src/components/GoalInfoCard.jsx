import { useDispatch } from 'react-redux'
import { deleteGoals } from '../actions/actions';

import './GoalInfoCard.css'

const GoalInfoCard = (goal) => {
    const {data} = goal
    const dispatch = useDispatch();

    const removeGoal = (id) => {
        dispatch(deleteGoals(id))
    }
    return(
        <div>
            <h2>Goal: {data.goalName}</h2>
            <p>Description: {data.description}</p>
            <p>Calories: {data.targetCalories}</p>
            <p>Status: {data.status}</p>
            <button onClick={() => removeGoal(data?._id)}>Delete</button>
        </div>
    )
}

export default GoalInfoCard;