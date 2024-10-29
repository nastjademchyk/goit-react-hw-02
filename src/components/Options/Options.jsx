import s from "./Options.module.css";
const Options = ({ onGood, onNeutral, onBad, onReset, totalFeedback }) => {
  return (
    <div className={s.list}>
      <button className={s.btn} onClick={onGood}>
        Good
      </button>
      <button className={s.btn} onClick={onNeutral}>
        Neutral
      </button>
      <button className={s.btn} onClick={onBad}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={s.btn} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
