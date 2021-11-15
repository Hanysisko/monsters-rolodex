import React from "react";
import './card.styles.css';

export const Card = (props) => (
  <div className='card-container'>
    <img alt="monst" src={`https://robohash.org/${props.monst.id}?set=set2`} /> {/* &size=180x180   changing res of image from url */}
    <h1 key={props.id}> {props.monst.name} </h1>
    <h2>{props.monst.email}</h2>
  </div>
)
