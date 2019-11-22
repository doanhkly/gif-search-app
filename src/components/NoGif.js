import React from 'react';
import '../App.css'

const Footer = ( {term} ) => {
  return (
    <div className='no-gif__container'>
      No GIFs found for "{term}"
    </div>
  )
}

export default Footer