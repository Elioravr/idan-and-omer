import { useState } from 'react';
import Menu from './Menu';
import Page from './Page';
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

      <Page pageClassName='hotel' isVisible={currentPage === 'Hotel'}>
        <div className='title'>
          <div>Hotel</div>
        </div>
      </Page>

      <Page pageClassName='hotel' isVisible={currentPage === 'Schedule'}>
        <div className='title'>
          <div>Schedule</div>
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
