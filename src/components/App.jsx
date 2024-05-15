import "./App.css";
import "modern-normalize";
import { useState, useEffect } from "react";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Description from "./Description/Description";
import Notification from "./Notification/Notification";

function App() {
  const [values, setValues] = useState(() => {
    const saveValue = JSON.parse(localStorage.getItem("saved-values")) ?? {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    return saveValue;
  });

  const updateFeedback = (feedbackType) => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  useEffect(() => {
    localStorage.setItem("saved-values", JSON.stringify(values));
  }, [values]);

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);
  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        onUpdate={updateFeedback}
        isHidden={totalFeedback}
        onReset={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          state={values}
          total={totalFeedback}
          positiveStatic={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
