import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';

const API_KEY = '6758a76f591881b7ab6373393990d59b'

class App extends Component {
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();    
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken&count=5`);

    const data = await api_call.json();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
      </div>
    );
  }
}

export default App;