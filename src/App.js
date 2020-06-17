import Header from './MainPage/Header';
import Footer from './MainPage/Footer';
import Info from './MainPage/Info';
import React, { useState } from 'react';
import InfoAbout from './MainPage/InfoAbout';

function App() {
  const [isMenuClick, setMenuClick] = useState(false);
  const [isTakeInfoAbout, setInfoAbout] = useState(false)

  return (
    <div>
      <Header setMenuClick = {setMenuClick}
        isMenuClick = {isMenuClick} />
      {isTakeInfoAbout === false ?
        <Info isMenuClick={isMenuClick}
          setInfoAbout={setInfoAbout} />
        :
        <InfoAbout setInfoAbout={setInfoAbout} />
      }


      <Footer isMenuClick={isMenuClick} />
    </div>
  );
}

export default App;
