import { useState } from "react";
import "modern-normalize";
import "./App.css";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Description from "./Description/Description";

function App() {
  const [values, setValues] = useState({ good: 0, neutral: 0, bad: 0 });
  const updateFeedback = (feedbackType) => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };
  return (
    <>
      <Description />
      <Options onUpdate={updateFeedback} />
      <Feedback state={values} />
    </>
  );
}

export default App;
