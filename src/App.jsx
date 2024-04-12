// App

import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div id='app'>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
