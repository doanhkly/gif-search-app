import React from 'react';
import '../App.css'


const Pagination = ( {page, onPageChange, limit, totalCount} ) => {
  
  return ( 
    <div className='pagination__container'>
      <button onClick={() => onPageChange(page => page - 1)} 
              disabled={page === 0}>      
        &lt;
      </button>
      <span> {page + 1} </span>
      <button onClick={() => onPageChange(page => page + 1)} 
              disabled={page >= Math.ceil(totalCount / limit) - 1}>
        &gt;
      </button>
    </div>
  )
}

export default Pagination;