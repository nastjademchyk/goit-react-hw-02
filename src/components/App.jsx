import { useState } from "react";
import "./App.css";
import Description from "./Description/Description";
// import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateGood = () => {};
  return (
    <div>
      <Description />
      <Options />
    </div>
  );
}
export default App;
