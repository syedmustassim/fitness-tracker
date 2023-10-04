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
    case "ADD_EXERCISE":
      console.log(state.exercises, "exercises in reducer  ");
      console.log(action.payload, "payload in reducer");
      return {
        ...state,
        exercises: [...state?.exercises, action.payload],
      };
    case "ADD_FITNESS_GOAL":
      return {
        ...state,
        fitnessGoals: [...state.fitnessGoals, action.payload],
      };
    case "ADD_FOOD":
      return {
        ...state,
        food: [...state.food, action.payload],
      };
    default:
      return state;
  }
};

export default fitnessReducer;
