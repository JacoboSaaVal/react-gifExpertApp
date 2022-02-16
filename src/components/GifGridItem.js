import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
  // console.log(id, title, url);
  
  return (
    // <div>{ title }</div>
    <div className="card animate__animated animate__fadeIn animate__delay-2s">
      <img src={ url } alt={ title }></img>
      <p>{ title } </p>
    </div>
  )
}
