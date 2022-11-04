import React from 'react';
import Footer from './components/footer/Footer';
import './App.css';
import Secondpage from './components/secondpage/Secondpage';
import Fifthpage from './components/fifthpage/Fifthpage';
import Fourthpage from './components/fourthpage/Fourthpage';
import Page2 from './components/fourthpage/Page2';
import Navbar from './components/header/Navbar';
import Thirdpage from './components/thirdpage/Thirdpage'




const App = () => {
  return (
    <>
      <Navbar />
      <Secondpage />
      <Thirdpage/>
      <Fourthpage />
      <Page2 />
      <Fifthpage/>
    </>
    
  )



}

export default App;
