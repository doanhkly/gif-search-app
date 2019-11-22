import React from 'react';
import '../App.css'
import Modal from 'react-modal'

const GifModal = ( {show, gif, onClose} ) => {
  // handles null selectedGif
  if (!gif) {
    return <div></div>
  }

  return (
    <Modal isOpen={show} 
            className='gif-modal__container'
            onRequestClose={() => onClose()}
            shouldCloseOnOverlayClick={true}
            ariaHideApp={false}>
      <div className='gif-modal__modal'>
        <img src={ gif.images.original.url } alt={gif.slug} />

        <button onClick={() => onClose()}> close </button>
      </div>
    </Modal>
  )
}

export default GifModal;