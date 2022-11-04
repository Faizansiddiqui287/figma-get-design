import React from 'react';

import Footer from './components/footer/Footer';

import './App.css';
import Fourthpage from './components/fourthpage/Fourthpage';
import Page2 from './components/fourthpage/Page2';
import Navbar from './components/header/Navbar';


const App = () => {
  return (
<>
      <Navbar />
      <Fourthpage />
      <Page2 />
        <Footer/>
    </>
    
  )


  }
  export default App;

