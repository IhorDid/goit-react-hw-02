import styles from "./Feedback.module.css";

const Feedback = ({ state }) => {
  let total = 0;
  const values = Object.values(state);
  for (const value of values) {
    total += value;
  }
  return (
    <div>
      {total ? (
        <ul>
          <li>Good : {state.good}</li>
          <li>Neutral : {state.neutral}</li>
          <li>Bad : {state.bad}</li>
        </ul>
      ) : (
        <p>No feedback yet</p>
      )}
    </div>
  );
};

export default Feedback;
