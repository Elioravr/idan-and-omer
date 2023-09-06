import { useState } from 'react';
import Menu from './Menu';
import Page from './Page';
import ScheduleHeader from './ScheduleHeader';
import ScheduleItem from './ScheduleItem';
import './App.scss';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <div className='App'>
      <div className='background'></div>
      <Menu setCurrentPage={setCurrentPage} />

      <Page pageClassName='home' isVisible={currentPage === 'Home'}>
        <div className='title'>
          <div>Idan</div>
          <div>&</div>
          <div>Omer</div>
        </div>
      </Page>

      <Page pageClassName='schedule' isVisible={currentPage === 'Schedule'}>
        <div className='title'>
          <div>Schedule</div>
        </div>
        <div className='schedule-container'>
          <ScheduleHeader date='חמישי - 20.06.2024' />
          <ScheduleItem emoji={'🛩️'} text='נותחים באתונה' />
          <ScheduleItem emoji={'🚌'} text='נסיעה של כשעה למלון בהסעות' />
          <ScheduleItem emoji={'🛎️'} text='צ׳ק אין במלון' />
          <ScheduleItem emoji={'🍽️'} text='ארוחת צהריים' />
          <ScheduleItem emoji={'🏖️'} text='זמן חופשי' />
          <ScheduleItem
            emoji={'🇬🇷'}
            text='Taverna Night - ארוחת ערב ומסיבת טברנה יוונית'
            isLast
          />

          <div className='separator'></div>

          <ScheduleHeader date='שישי - 21.06.2024' />
          <ScheduleItem emoji={'🌤️'} text='ארוחת בוקר כיפית במלון' />
          <ScheduleItem emoji={'🪩'} text='מסיבת בריכה חלל' />
          <ScheduleItem emoji={'🍱'} text='ארוחת צהריים ונשנושים בבריכה' />
          <ScheduleItem emoji={'👔'} text='מתאפסים ומתארגנים לחתונה' />
          <ScheduleItem emoji={'💍'} text='טקס החתונה' />
          <ScheduleItem
            emoji={'🎊'}
            text='ארוחת ערב ומסיבה עד שמתעייפים'
            isLast
          />

          <div className='separator'></div>

          <ScheduleHeader date='שבת - 22.06.2024' />
          <ScheduleItem emoji={'🌤️'} text='ארוחת בוקר כיפית במלון' />
          <ScheduleItem emoji={'🧳'} text='צ׳ק אאוט ב-11:30' />
          <ScheduleItem emoji={'🚌'} text='נסיעה לשדה התעופה בהסעות' isLast />
        </div>
      </Page>

      <Page pageClassName='hotel' isVisible={currentPage === 'Hotel'}>
        <div className='title'>
          <div>Hotel</div>
        </div>
      </Page>

      <Page pageClassName='hotel' isVisible={currentPage === 'WhatToBring'}>
        <div className='title'>
          <div>WhatToBring</div>
        </div>
      </Page>

      <Page pageClassName='hotel' isVisible={currentPage === 'Information'}>
        <div className='title'>
          <div>Information</div>
        </div>
      </Page>

      <Page pageClassName='hotel' isVisible={currentPage === 'Comments'}>
        <div className='title'>
          <div>Comments</div>
        </div>
      </Page>
    </div>
  );
}

export default App;
