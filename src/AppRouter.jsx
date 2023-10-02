import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Food from "./pages/Food/Food";
import Exercise from "./pages/Exercise/Exercise";
import FitnessGoals from "./pages/FitnessGoals/FitnessGoals";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/fitness" element={<FitnessGoals />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
