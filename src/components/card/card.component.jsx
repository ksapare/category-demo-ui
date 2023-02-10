import React from 'react'
import './card.styles.css'

export const Card = props => {
  return(
    <div className="card-container">
      <h2>{ props.category.categoryName }</h2>
      <p>{ props.category.categoryDescription }</p>
    </div>
  )
}
