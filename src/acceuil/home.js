import './home.css';
import React from 'react';
import Logo from './assets/logo.png';
import './assets/1.png';

function Home() {
  return (
    <div className="home">
        <img className="logo" src={Logo} alt="logo" />
        <img className="linkdin" src={require("./assets/1.png")} alt="linkdin" />
      <div className="text-in-the-main">
        <p className='description'>
          « La donnée devient information, lorsqu&#39;elle permet aux acteurs d’agir et aux décideurs de réduire
          leurs&nbsp;incertitude »
        </p>
        <div className="texte-wrapper">DatAdvice</div>
        <div className="texte-wrapper-2">Votre expert dans la Data</div>
      </div>
    </div>
  );
}

export default Home;
