import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import {Home} from './components/ExportingComponents'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
