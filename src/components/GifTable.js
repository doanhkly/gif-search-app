import React from 'react';
import '../App.css'
import GifItem from './GifItem'

const GifTable = ( {items, onSelectGif} ) => {
  return ( 
    <React.Fragment>
      
      <ul className='gif-table__container'>
        {items.map((item) => 
          <GifItem gif={item}
                  key={item.id}
                  onSelectGif={item => onSelectGif(item)} />)}
      </ul>
    </React.Fragment>
    
  )
}

export default GifTable;