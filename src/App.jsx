import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return null;

  return (
    <ol>
      {data.data.children.map((child) => (
        <li>{child.data.title}</li>
      ))}
    </ol>
  );
}

export default App;
