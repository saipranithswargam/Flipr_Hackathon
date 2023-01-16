import classes from './Overview.module.css';

const Overview = () => {
  return (
    <div className={classes.overview}>
      <div className={classes.day}>
        <div>
          <p>Open</p>
          <p>17,867.50</p>
        </div>
        <div>
          <p>Previous Close</p>
          <p>17,858.20</p>
        </div>
        <div>
          <p>Day High</p>
          <p>17,976.40</p>
        </div>
      </div>
      <div className={classes.year}>
        <div>
          <p>Day Low</p>
          <p>17,867.50</p>
        </div>
        <div>
          <p>52 Week High</p>
          <p>17,858.20</p>
        </div>
        <div>
          <p>52 Week Low</p>
          <p>17,976.40</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
