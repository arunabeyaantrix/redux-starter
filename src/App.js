import logo from './logo.svg';
import './App.css';
import {getCharecters, dismissGetAllCharecters} from '../src/store/actions/charecters'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatchApi = useDispatch() 
  useEffect(() => {
    dispatchApi(getCharecters())
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
