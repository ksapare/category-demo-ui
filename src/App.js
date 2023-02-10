import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

import Header from './components/header/header.component'
import Calculator from './pages/calculator/calculator.component';
import TestCloud from './pages/testcloud/testcloud.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/get-started" element={ <Calculator />}/>
        <Route path="/api" element={ <TestCloud />}/>
        </Routes>
    </div>
  );
}

export default App;
