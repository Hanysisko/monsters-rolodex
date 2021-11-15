import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters:users }))
  }

  handleChange = (e) => {
    this.setState({ searchField : e.target.value });
  }
  
  render() {  
    const { monsters, searchField } = this.state;
    // const monsters = this.state.monsters; // to na górze to szybsza metoda zapisu tych dwóch linijek
    // const searchField = this.state.searchField;

    const filteredMonsters = monsters.filter(item => item.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        
        <h1> Monsters Rolodex </h1>
        <h2> by Hanysisko and Complete React 2022 </h2>

        <SearchBox 
          placeholderprop='search monsters...'
          handleChangeprop={ this.handleChange }
        />

        <CardList 
          monstersprop={filteredMonsters}
        />

      </div>
    );
  }
}

export default App;
