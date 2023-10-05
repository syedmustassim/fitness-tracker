const initialState = {
  exercises: [],
  food: [],
  fitnessGoals: [],
};

const fitnessReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FITNESS_GOALS":
      return { ...state, fitnessGoals: action.payload };
    case "FETCH_EXERCISES":
      return { ...state, exercises: action.payload };
    case "FETCH_FOOD":
      return { ...state, food: action.payload };
    default:
      return state;
  }
};

export default fitnessReducer;
