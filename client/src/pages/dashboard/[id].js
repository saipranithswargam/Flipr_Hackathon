import Navbar from '@/components/Navbar';
import Range from '@/components/Range';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import OptionBar from '@/components/OptionBar';
import { useEffect, useState } from 'react';
import Overview from '@/components/Overview';
import Chart from '@/components/Cart';
import styles from '../../styles/dashboard.module.css';
import { useRouter } from 'next/router';
import { FaCaretUp } from 'react-icons/fa';

const Dashboard = () => {
  const [option, setOption] = useState('');
  const date = new Date();
  const day = date.getUTCDate();
  const month = date.getMonth() + 1;
  const year = date.getUTCFullYear();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const newDate = `${day}/${month}/${year} ${hours}:${minutes}`;

  const [company, setCompany] = useState('reliance');

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  const router = useRouter();

  const [selected, setSelected] = useState('Overview');

  const companyChange = (event) => {
    setCompany(event.target.value);
  };

  const [selectedComponent, setSelectedComponent] = useState(<Overview />);
  useEffect(() => {
    if (selected === 'Overview') {
      setSelectedComponent(<Overview />);
    } else if (selected === 'Chart') {
      setSelectedComponent(
        <div>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="simple-select-label">{company}</InputLabel>
            <Select
              labelId="simple-select-label"
              id="simple-select-label"
              value={company}
              label={'Company'}
              onChange={companyChange}
            >
              <MenuItem value={'reliance'}>Reliance</MenuItem>
              <MenuItem value={'nse'}>NSE</MenuItem>
              <MenuItem value={'bse'}>BSE</MenuItem>
              <MenuItem value={'tata'}>Tata</MenuItem>
              <MenuItem value={'eichermot'}>Eichermot</MenuItem>
              <MenuItem value={'cipla'}>Cipla</MenuItem>
              <MenuItem value={'ashok'}>Ashok Leyland</MenuItem>
            </Select>
          </FormControl>
          <Chart company={company} />
        </div>
      );
    } else setSelectedComponent(<p>Working on it</p>);
  }, [selected, company]);

  console.log(router.query);

  return (
    <main>
      {/* UserName = {router.query.id} */}
      <Navbar />
      <h2>NIFTY 50</h2>
      <hr />
      <div className={styles.tradeDataContainer}>
        <div className={styles.tradeData}>
          <h1>{17172.15}</h1>
          <h2 style={{ color: 'green' }}><FaCaretUp /> 2,32,434(0.234%)</h2>
          <p>As on {newDate}</p>
        </div>
        <div className={styles.tradeDataRange}>
          <Range type={'Day'} current={17172.15} lowest={17774.25} highest={17976.4} />
          <Range type={'52 week'} current={17172.15} lowest={15183.4} highest={18887.6} />
          <h4 style={{ color: 'rgb(176, 176, 176)' }}>Returns</h4>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-label">YTD</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={option}
                label={'Option'}
                onChange={handleChange}
              >
                <MenuItem value={'YTD'}>YTD</MenuItem>
                <MenuItem value={'YML'}>YML</MenuItem>
                <MenuItem value={'XYZ'}>XYZ</MenuItem>
              </Select>
            </FormControl>
            <p>3.55%</p>
          </div>
        </div>
      </div>
      <hr />
      <OptionBar setSelectedComponent={setSelected} />
      <hr style={{ margin: 0 }} />
      {selectedComponent}
    </main>
  );
};

export default Dashboard;
