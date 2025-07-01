import React from 'react';
import Tour from "../components/Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} removeTour={removeTour} />
      ))}
    </section>
  );
};

export default Tours;
