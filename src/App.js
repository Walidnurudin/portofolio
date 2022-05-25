import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js';

figlet.parseFont('Standard', standard);

function App() {
  figlet.text(
    'Walid Nurudin',
    {
      font: 'Standard',
    },
    function (err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      console.log(data);
    }
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
