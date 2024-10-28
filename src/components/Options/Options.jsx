import s from "./Options.module.css";
const Options = () => {
  return (
    <div className={s.list}>
      <button className={s.btn}>Good</button>
      <button className={s.btn}>Neutral</button>
      <button className={s.btn}>Bad</button>
    </div>
  );
};
export default Options;
