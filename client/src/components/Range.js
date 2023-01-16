import styles from './Range.module.css';

const Range = ({ type, lowest, highest, current }) => {
  return (
    <>
      <p>{type} Range</p>
      <div className={styles.range}>
        <p>{lowest}</p>
        <p>{highest}</p>
      </div>
      <div className={styles.rangeLine}>
        <p>L</p>
        <p className={styles.line}></p>
        <p>H</p>
      </div>
    </>
  );
};

export default Range;
