import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  // Renombre la data para usar como images
  //*
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h2 className='animate__animated animate__fadeIn'>{category}</h2>
      {loading && <p className='animate__animated animate__flash'>Loading</p>}
      <div className='card-grid'>
        {images.map((img) => (
          <GifGridItem
            key={img.id}
            //Se esta mandando el obj spread directamente
            {...img}
          />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
