import './styles/App.css';
import React from 'react';
import  './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import Landing from './components/Landing';
import Taylor from './components/TaylorPage/Taylor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

function App() {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
      <div className="App">
        <Navigation />
          <BrowserRouter>
            <Routes>
              <Route path="/"element={<Landing/>}/>
              <Route path="/Taylor"element={<Taylor/>}/>
            </Routes>
          </BrowserRouter>
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;


