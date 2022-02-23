import React from 'react'
import Header from './component/Header.js';
// import MainCard from './Components/MainCard.js'
import Card from './component/Card.js'
import Firstdiv from './component/Firstdiv';
import Footer from './component/Footer.js'
function App() {
  return (
    <div className="App">
        <Header />
        <Firstdiv />
        <Card/>
        <Footer/>
    </div>
  );
}

export default App;