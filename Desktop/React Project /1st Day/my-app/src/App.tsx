import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';
import CurrentTime from './component/currentTime';
import AlarmButton from './component/alarmbutton/alarmButton';
import AlarmDetails from './component/alarmDetails/alarmDetails';

function App() {
  return (
    <div>
      <div className='container border mt-2'>
        <div className='row g-0 d-flex justify-content-center align-items-center pt-1'>
          <AlarmButton />
          <CurrentTime />
          <AlarmDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
