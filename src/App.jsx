import { useState } from 'react';
import { useGetDataQuery } from './api/apiSlice';
import './App.css';
import logo from './assets/reddit.svg';
import PostList from './components/PostList';
import SelectForm from './components/SelectForm';

const formData = [
  'r/javascript',
  'r/node',
  'r/programming',
  'r/reactjs',
  'r/ubuntuserver',
  'r/webdev',
];

function App() {
  const [userInput, setUserInput] = useState('r/popular');

  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDataQuery(userInput);

  let content;
  if (isLoading) {
    content = <h2>Loading...</h2>;
  } else if (isError) {
    content = <h2>{error.status}</h2>;
  } else if (!posts) {
    content = <h2>DATA_ERROR: undefined</h2>;
  } else if (isSuccess) {
    content = <PostList posts={posts} />;
  }

  return (
    <div id='app'>
      <header id='header'>
        <img height='60px' width='60px' src={logo} alt='reddit logo' />
        <SelectForm onSelect={setUserInput} formData={formData} />
      </header>
      {userInput ? content : null}
    </div>
  );
}

export default App;
