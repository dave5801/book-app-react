import React from 'react';
import './App.css';

class Body extends React.Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
  
          <p>
            This is my book application
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            This will be the wishlist
          </a>
        </header>
      </div>
    );
  }
}

class App extends React.Component{
  render(){
    return (
      <Body/>
      /*
      <div className="App">
        <header className="App-header">
  
          <p>
            This is my book application
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            This will be the wishlist
          </a>
        </header>
      </div>*/
    );
  }
}

export default App;
