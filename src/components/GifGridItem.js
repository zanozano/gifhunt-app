import React from 'react';

const GifGridItem = ({ title, url }) => {
  // console.log(id, title, url);

  return (
    <div className='card animate__animated animate__fadeIn'>
      <img src={url} alt={title} />
      <h4>{title}</h4>
    </div>
  );
};

export default GifGridItem;
