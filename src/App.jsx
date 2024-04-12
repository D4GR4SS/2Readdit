import './App.css';
import Header from './components/Header';
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
      <Header formData={formData} />
      <Outlet />
    </div>
  );
}

export default App;
