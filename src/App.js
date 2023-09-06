import Menu from './Menu';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <div className='background'></div>
      <Menu />
      <div className='page home'>
        <div className='title'>
          <div>Idan</div>
          <div>&</div>
          <div>Omer</div>
        </div>
      </div>
    </div>
  );
}

export default App;
