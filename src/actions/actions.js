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
