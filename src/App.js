import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Paper Cat Games</h1>

        <div className="Navigation">
          <a href={'/'}>Home</a>
          <a href={'/team'}>Team</a>
          <a href={'/featured'}>Featured</a>
          <a href={'/blog'}>Blog</a>
          <a href={'/contact'}>Contact</a>
          <a href={'/presskit'}>Press Kit</a>
        </div>
      </header>

      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
