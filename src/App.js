import './App.css';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer.js';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Navbar />
        <Outlet />
      </div>
        <Footer />
    </div>
  );
}

export default App;
