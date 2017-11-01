import React, { Component } from 'react';
import './App.css';
import Login from './Login.js'
import Movie from './Movies.js'

class App extends Component {
  constructor(){
    super()

    this.state = {
      username: '',
      movies: ['dogma', 'die hard', 'up', 'die hard 15'],
      isLoggedIn: false
    }
  }
  login = (username) => {
    const state = this.state;
    state.username = username;
    state.isLoggedIn = true;
    this.setState(state);
  }
  render() {
    return (
      <div>
        {this.state.isLoggedIn ?  <Movie movies={this.state.movies} username={this.state.username}/> :  <Login login={this.login}/>}

      </div>
    );
  }
}

export default App;
