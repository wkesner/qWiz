import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>{activeQuestion}
          </h1>
      </header>
    </div>
  );
}
export const activeQuestion = 'Do girls just wanna have fun?';
export default App;
