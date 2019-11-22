import React from 'react';
import '../App.css'

const GifItem = ( {gif, onSelectGif} ) => {
  return (
    <li className='gif-item' onClick={() => onSelectGif(gif)} >
      <img src={gif.images.fixed_width_downsampled.url} 
          alt={gif.title}/>
    </li>
  )
}

export default GifItem;