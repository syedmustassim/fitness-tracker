import {useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { addFitnessGoal, fetchFitnessGoals } from "../../actions/actions";

import "./FitnessGoals.css";
import GoalInfoCard from "../../components/GoalInfoCard";

const FitnessGoals = () => {

  const dispatch = useDispatch();
  const [goalName, setGoalName] = useState("")
  const [description, setDescription] = useState("")
  const [targetDate, setTargetDate] = useState("")
  const [targetCalories, setTargetCalories] = useState(0)
  const [status, setStatus] = useState("")

  const handleAddFitness = (e) => {
    e.preventDefault();
    dispatch(addFitnessGoal({goalName,description,targetDate,targetCalories,status}))
    setGoalName("")
    setDescription("")
    setTargetCalories("")
    setTargetDate("")
    setStatus("")
  }
  const fitnessGoals = useSelector(state => state.fitnessGoals);

  useEffect(() => {
    dispatch(fetchFitnessGoals())
  },[dispatch, fitnessGoals])

  return (
    <div>
      <h1> Fitness Goals </h1>
      <h2> Add new goal: </h2>
      <form>
        <div>
          <label>Goal name:</label>
          <input type="text" value={goalName} onChange={(e) => setGoalName(e.target.value)}/>
        </div>
        <div>
          <label>Goal description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div>
          <label>Target Date:</label>
          <input type="text" value={targetDate} onChange={(e) => setTargetDate(e.target.value)}/>
        </div>
        <div>
          <label>Target calories:</label>
          <input type="text" value={targetCalories} onChange={(e) => setTargetCalories(e.target.value)}/>
        </div>
        <div>
          <label>Status:</label>
          <input type="text" value={status} onChange={(e) => setStatus(e.target.value)}/>
        </div>
        <button onClick={handleAddFitness}>Add goal</button>
      </form>
      <h1> Your current goals </h1>
      {
        fitnessGoals?.map((item) => (<GoalInfoCard data={item} key={item._id}/>))
      }
    </div>
  );
};

export default FitnessGoals;
