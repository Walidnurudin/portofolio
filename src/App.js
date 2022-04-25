import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
