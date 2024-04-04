import { useState } from 'react';
import { useGetDataQuery } from './api/apiSlice';
import './App.css';
import PostList from './components/PostList';
import SelectForm from './components/SelectForm';

function App() {
  const [userInput, setUserInput] = useState(null);

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
        <SelectForm onSelect={setUserInput} />
      </header>
      {userInput ? content : null}
    </div>
  );
}

export default App;
