import React, { useState, useEffect } from 'react';
import Tours from './Tours';
import toursData from '../data/tours.json';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const loadTours = () => {
    setLoading(true);
    // Simulate fetching delay
    setTimeout(() => {
      setTours(toursData);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    loadTours();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (loading) {
    return (
      <main>
        <h2>Loading...</h2>
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <h2>No Tours Left</h2>
        <button onClick={loadTours}>Refresh</button>
      </main>
    );
  }

 return (
  <main id="main">  {/* ADD THIS ID */}
    <h2>Our Tours</h2>
    <div className="underline"></div>
    <Tours tours={tours} removeTour={removeTour} />
  </main>
);

};

export default App;
