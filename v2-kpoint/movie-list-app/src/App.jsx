import React, { useState, useEffect } from 'react';
import TmdbHead from './components/TmdbHead';
import TmdbBody from './components/TmdbBody';
import data from './data';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setItems(data[0].results);
  }, []);

  return (
    <div>
      <TmdbHead />
      <TmdbBody items={items} />
      {/* <ul>
        {items.map(item => (
          <li key={item.id}>
            <h2>{item.original_title}</h2>
            <p>{item.release_date}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
