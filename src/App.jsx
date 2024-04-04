import { useState, useEffect } from 'react';
import PostList from './components/PostList';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/${endpoint}')
      .then((response) => response.json())
      .then((data) => setData(data.data.children));
  }, [endpoint]);

  if (!data) return null;
  else return <PostList posts={data} />;
}

export default App;
