import React from 'react';
import './App.scss';

import { BrowserRouter } from "react-router-dom";
import Framework from './components/Framework';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Framework />
      </BrowserRouter>
    </div>
  );
}

export default App;
