import React from "react";
import './search-box.styles.css';

export const SearchBox = ({ placeholderprop, handleChangeprop }) => (
  <div>
    <input 
      className='search-box'
      type='search' 
      placeholder={ placeholderprop }
      onChange={ handleChangeprop } // e => this.setState({ searchField : e.target.value })
    />
  </div>
)
