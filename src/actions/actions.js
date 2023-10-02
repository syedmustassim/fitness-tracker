export const fetchFitnessGoals = async (dispatch) => {
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
