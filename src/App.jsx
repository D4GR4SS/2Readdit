import './App.css';
import logo from './assets/reddit.svg';
import SelectForm from './components/SelectForm';
import { Outlet } from 'react-router-dom';

const formData = [
  'r/javascript',
  'r/node',
  'r/programming',
  'r/reactjs',
  'r/ubuntuserver',
  'r/webdev',
];

function App() {
  return (
    <div id='app'>
      <header id='header'>
        <img height='90px' width='90px' src={logo} alt='reddit logo' />
        <SelectForm formData={formData} />
      </header>
      <Outlet />
    </div>
  );
}

export default App;
