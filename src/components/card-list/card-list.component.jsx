import React from 'react'
import './card-list.styles.css'
import { Card } from '../card/card.component'

export const CardList = props => {
  return (
    <div className="card-list" data-cy = "card-list-category">
    {
      props.categories.map(
        category => <Card key={category.categoryId} category={ category } />
      )
    }
    </div>)
}
