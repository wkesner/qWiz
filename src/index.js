import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

//const store = createStore(reducer)

ReactDOM.render(
    <React.StrictMode>
      <div className="row">
        <div className="col">
          <nav className="navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a className="navbar-brand text-weight-bold font-italic ml-1" href="/">qWiz
            </a>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col my-4">
        </div>
      </div>
      <App />
      <div className="row">
        <div className="col">
          <nav className="navbar-expand-lg navbar-dark bg-dark fixed-bottom text-right">
            <a className="navbar-brand text-weight-bold font-italic ml-1"
            href="https://github.com/wkesner/qWiz">
            check out the github
            </a>
          </nav>
        </div>
      </div>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
