import React, { useState, useEffect } from 'react';
import CarBlock from './components/CarBlock';

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setCars(json.cars);
      });
  }, []);

  return (
    <div className="items">
      {cars.map((obj, index) => (
        <CarBlock key={index} {...obj} />
      ))}
    </div>
  );
}

export default App;
