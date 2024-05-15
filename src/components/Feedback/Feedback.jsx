const Feedback = ({ state, totalFeedback, positiveStatic }) => {
  return (
    <div>
      <ul>
        <li>Good : {state.good}</li>
        <li>Neutral : {state.neutral}</li>
        <li>Bad : {state.bad}</li>
        <li>Total : {totalFeedback} </li>
        <li>Positive : {positiveStatic} % </li>
      </ul>
    </div>
  );
};

export default Feedback;
