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
    const response = await fetch(
      "https://fitness-tracker-backend.syedmustassim.repl.co/exercises",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(exercise),
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data, "in actions");
      dispatch({ type: "ADD_EXERCISE", payload: data.exercise });
    } else {
      console.error(
        "Error adding a new exercise. Server returned an error status."
      );
    }
  } catch (error) {
    console.error("Error adding a new exercise.", error);
  }
};

export const addFitnessGoal = (goal) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://fitness-tracker-backend.syedmustassim.repl.co/fitness",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(goal),
      }
    );
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: "ADD_FITNESS_GOAL", payload: data });
    }
  } catch (error) {
    console.error("Error adding a new fitness goal.", error);
  }
};

export const addFood = (food) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://fitness-tracker-backend.syedmustassim.repl.co/foods",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(food),
      }
    );
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: "ADD_FOOD", payload: data });
    } else {
      console.log("Something went wrong.");
    }
  } catch (error) {
    console.error("Error adding a new food item.");
  }
};
