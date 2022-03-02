import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({ title, url }) => {
  // console.log(id, title, url);

  return (
    <div className='card animate__animated animate__fadeIn'>
      <img src={url} alt={title} />
      <h4>{title}</h4>
    </div>
  );
};

//* propTypes are required
GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifGridItem;
