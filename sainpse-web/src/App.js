import './styles/App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import  './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

function App() {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
      <div className="App">
        <Header />
        <Main />
        <canvas className="background"></canvas>
      </div>
    </ThemeProvider>
  );
}

export default App;
