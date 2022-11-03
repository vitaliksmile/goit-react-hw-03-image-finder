import s from '../../styles/styles.module.css';
const Button = ({ updatePage }) => {
  return (
    <button className={s.Button} type="button" onClick={updatePage}>
      More...
    </button>
  );
};

export default Button;
