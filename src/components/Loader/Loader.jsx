import { ThreeDots } from 'react-loader-spinner';
import s from '../../styles/styles.module.css';
const Loader = () => {
  return (
    <div className={s.loader}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="blue"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;