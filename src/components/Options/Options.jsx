import styles from "./Options.module.css";

const Options = ({ onUpdate, isHidden, onReset }) => {
  return (
    <div className={styles.list}>
      <button onClick={() => onUpdate("good")}>Good</button>
      <button onClick={() => onUpdate("neutral")}>Neutral</button>
      <button onClick={() => onUpdate("bad")}>Bad</button>
      {isHidden > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
};

export default Options;
