import classes from './OptionBar.module.css';
import { useState } from 'react';

const OptionBar = ({ setSelectedComponent }) => {
  const [selected, setSelected] = useState('OVERVIEW');

  return (
    <nav className={classes.navbar}>
      <ul>
        <li
          className={selected === 'OVERVIEW' ? classes.selected : ''}
          onClick={() => {
            setSelected('OVERVIEW');
            setSelectedComponent('Overview');
          }}
        >
          OVERVIEW
        </li>
        <li
          className={selected === 'CHARTS' ? classes.selected : ''}
          onClick={() => {
            setSelected('CHARTS');
            setSelectedComponent('Chart');
          }}
        >
          CHARTS
        </li>
        <li
          className={selected === 'TECHNICALS' ? classes.selected : ''}
          onClick={() => {
            setSelected('TECHNICALS');
            setSelectedComponent('Technicals');
          }}
        >
          TECHNICALS
        </li>
        <li
          className={selected === 'NEWS' ? classes.selected : ''}
          onClick={() => {
            setSelected('NEWS');
            setSelectedComponent('News');
          }}
        >
          NEWS
        </li>
        <li
          className={selected === 'CONTRIBUTION' ? classes.selected : ''}
          onClick={() => {
            setSelected('CONTRIBUTION');
            setSelectedComponent('Contribution');
          }}
        >
          CONTRIBUTION
        </li>
        <li
          className={selected === 'COMPONENTS' ? classes.selected : ''}
          onClick={() => {
            setSelected('COMPONENTS');
            setSelectedComponent('Components');
          }}
        >
          COMPONENTS
        </li>
        <li
          className={selected === 'FORUM' ? classes.selected : ''}
          onClick={() => {
            setSelected('FORUM');
            setSelectedComponent('Forum');
          }}
        >
          FORUM
        </li>
      </ul>
    </nav>
  );
};

export default OptionBar;
