import React from 'react';
import './Card.scss';

export default function Card(props) {
  const { nominee } = props;

  // To handle selection of the nominee through redux
  const handleCardSelection = () => {
    alert(nominee.id)
  }

  return (
    <div className='card' key={nominee.id}>
      <h3 className='card__title'>{nominee.name}</h3>
      <img className='card__img' />
      <button
        className='button card__button'
        onClick={handleCardSelection}
      >
        Select
      </button>
    </div>
  )
}
