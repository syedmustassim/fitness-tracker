export const fetchFitnessGoals = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://fitness-tracker-backend.syedmustassim.repl.co/fitness"
    );
    const data = await response.json();
    dispatch({ type: "FETCH_FITNESS_GOALS", payload: data });
  } catch (error) {
    console.error("Error fetching data.", error);
  }
};

export const fetchExercises = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://fitness-tracker-backend.syedmustassim.repl.co/exercises"
    );
    const data = await response.json();
    dispatch({ type: "FETCH_EXERCISES", payload: data });
  } catch (error) {
    console.error("Error fetching data.", error);
  }
};

export const fetchFood = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://fitness-tracker-backend.syedmustassim.repl.co/foods"
    );
    const data = await response.json();
    dispatch({ type: "FETCH_FOOD", payload: data });
  } catch (error) {
    console.error("Error fetching data.", error);
  }
};

export const addExercise = (exercise) => async (dispatch) => {
  try {
    await fetch(
      "https://fitness-tracker-backend.syedmustassim.repl.co/exercises",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(exercise),
      }
    );
    dispatch(fetchExercises());
  } catch (error) {
    console.error("Error adding a new exercise.", error);
  }
};

export const addFitnessGoal = (goal) => async (dispatch) => {
  try {
    await fetch(
      "https://fitness-tracker-backend.syedmustassim.repl.co/fitness",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(goal),
      }
    );
    dispatch(fetchFitnessGoals());
  } catch (error) {
    console.error("Error adding a new fitness goal.", error);
  }
};

export const addFood = (food) => async (dispatch) => {
  try {
    await fetch("https://fitness-tracker-backend.syedmustassim.repl.co/foods", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(food),
    });
    dispatch(fetchFood());
  } catch (error) {
    console.error("Error adding a new food item.");
  }
};

export const deleteExercise = (exerciseId) => async (dispatch) => {
  try {
    await fetch(
      `https://fitness-tracker-backend.syedmustassim.repl.co/exercises/${exerciseId}`,
      {
        method: "DELETE",
      }
    );
    dispatch(fetchExercises());
  } catch (error) {
    console.error("Error deleting exercise!");
  }
};

export const deleteFood = (foodId) => async (dispatch) => {
  try {
    await fetch(
      `https://fitness-tracker-backend.syedmustassim.repl.co/foods/${foodId}`,
      {
        method: "DELETE",
      }
    );
    dispatch(fetchFood());
  } catch (error) {
    console.error("Error deleting food item.");
  }
};

export const deleteGoals = (goalId) => async (dispatch) => {
  try {
    await fetch(
      `https://fitness-tracker-backend.syedmustassim.repl.co/fitness/${goalId}`,
      {
        method: "DELETE",
      }
    );
    dispatch(fetchFitnessGoals());
  } catch (error) {
    console.error("Error deleting fitness goal.");
  }
};
