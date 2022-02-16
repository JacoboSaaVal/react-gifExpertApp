import React, { useState, useEffect} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  

  // const [images, setimages] = useState([]);
  const { data: images, loading } = useFetchGifs(category);

  // //sólo llama al getGifs en la primera carga
  // useEffect(() => {
  //   getGifs(category).then(imgs => setimages(imgs));
  // },
  // //Recarga si "category" cambia
  //  [ category ])
  

  return (
    <>
      <h3 className='animate__animated animate__bounceIn'>{ category }</h3>

      { loading && <p className='animate__animated animate__flash'>Loading</p> }

      <div className='card-grid'>
          { 
            images.map(img => (
            <GifGridItem 
                key={img.id}
                { ...img }
            />
            ))
          }
      </div>
    </>
  )
}
