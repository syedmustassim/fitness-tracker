import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchExercises,
  fetchFitnessGoals,
  fetchFood,
} from "../../actions/actions";

import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExercises());
    dispatch(fetchFood());
    dispatch(fetchFitnessGoals());
  }, [dispatch]);

  const exercise = useSelector((state) => state.exercises);
  const food = useSelector((state) => state.food);
  const fitnessGoals = useSelector((state) => state.fitnessGoals);

  const caloriesGoal = fitnessGoals?.reduce(
    (acc, curr) => acc + curr?.targetCalories,
    0
  );
  const caloriesConsumed = food?.reduce((acc, curr) => acc + curr?.calories, 0);
  const caloriesBurned = exercise?.reduce(
    (acc, curr) => acc + curr?.caloriesBurned,
    0
  );

  let latestExercise = exercise[exercise?.length - 1];
  let latestFood = food[food?.length - 1];
  let latestGoal = fitnessGoals[fitnessGoals?.length - 1];
  return (
    <div className="home-container">
      <h1> Fittr! Dashboard </h1>
      <div className="home-secondary">
        <section className="home-ex">
          <h3>Latest Exercise</h3>
          <hr />
          <p>Exercise name: {latestExercise?.exerciseName}</p>
          <p>Exercise duration: {latestExercise?.duration} minutes</p>
        </section>
        <section className="home-fd">
          <h3>Latest Food</h3>
          <hr />
          <p>Food name: {latestFood?.foodName}</p>
          <p>Calories: {latestFood?.calories}</p>
          <p>Carbohydrates: {latestFood?.carbohydrates}</p>
          <p>Proteins: {latestFood?.proteins}</p>
          <p>Fat: {latestFood?.fat}</p>
        </section>
        <section className="home-fg">
          <h3>Latest Fitness goal</h3>
          <hr />
          <p>Goal name: {latestGoal?.goalName}</p>
          <p>Description: {latestGoal?.description}</p>
          <p>Target calories: {latestGoal?.targetCalories} KCAL</p>
          <p></p>
        </section>
      </div>
      <div className="home-metrics">
          <h2> Calories goal: {caloriesGoal} KCAL </h2>
          <h2> Calories consumed: {caloriesConsumed} KCAL </h2>
          <h2> Calories burned: {caloriesBurned} KCAL </h2>
      </div>
    </div>
  );
};

export default Home;
