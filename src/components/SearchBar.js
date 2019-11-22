import React from 'react';
import '../App.css'

const SearchBar = ( {onChange} ) => {
  return (
       <div className='search__container'>
        <input 
          className='search__input'
          type='text' 
          placeholder='Search for your favorite GIFs...' 
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
  )
};

export default SearchBar;