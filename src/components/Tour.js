import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <article className="tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p id={`tour-item-para-${id}`}>
          {showMore ? info : `${info.substring(0, 200)}...`}
          <button
            id={`see-more-${id}`}  
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'See Less' : 'See more'}
          </button>
        </p>
        <button
          id={`delete-btn-${id}`} 
          className="delete-btn"
          onClick={() => removeTour(id)}
        >
          Remove
        </button>
      </footer>
    </article>
  );
};

export default Tour;
