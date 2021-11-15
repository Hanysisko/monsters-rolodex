import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = props => (
  <div className='card-list'>
    {props.monstersprop.map(monst => (
      <Card key={monst.id} monst={monst} />
    ))}
  </div>
);