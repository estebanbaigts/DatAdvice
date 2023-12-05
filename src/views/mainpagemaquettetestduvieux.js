import React from 'react';
import { Helmet } from 'react-helmet';
import './mainpagemaquettetestduvieux.css';
import Logo from '../acceuil/assets/logo.png';

const Mainpagemaquettetestduvieux = (props) => {
  return (
    <div className="mainpagemaquettetestduvieux-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="mainpagemaquettetestduvieux-mainpagemaquettetestduvieux">
        <div className="mainpagemaquettetestduvieux-glass-shape">
          <img
            alt="Component15631"
            src="/external/component15631-h6s.svg"
            className="mainpagemaquettetestduvieux-component1"
          />
        </div>
        <div className="mainpagemaquettetestduvieux-texteinethemainpage">
          <span className="mainpagemaquettetestduvieux-text">
            <span>
              « La donnée devient information, lorsqu&apos;elle permet aux
              acteurs d’agir et aux décideurs de réduire leurs incertitude »
            </span>
          </span>
          <span className="mainpagemaquettetestduvieux-text02">
            <span>DatAdvice</span>
          </span>
          <span className="mainpagemaquettetestduvieux-text04">
            <span>Expert in the Data</span>
          </span>
        </div>
        <img className="logo" src={Logo} alt="logo" />
        <img
          alt="SocialIcons5631"
          src="/external/socialicons5631-f49d.svg"
          className="mainpagemaquettetestduvieux-social-icons"
        />
        <img
          alt="SocialIcons5631"
          src="/external/socialicons5631-ivb.svg"
          className="mainpagemaquettetestduvieux-social-icons1"
        />
        <button className="mainpagemaquettetestduvieux-buttons">
          <span className="mainpagemaquettetestduvieux-text06">
            <span>Acceuil</span>
          </span>
        </button>
        <button className="mainpagemaquettetestduvieux-buttons1">
          <span className="mainpagemaquettetestduvieux-text08">
            <span>Nous contacter</span>
          </span>
        </button>
        <button className="mainpagemaquettetestduvieux-buttons2">
          <span className="mainpagemaquettetestduvieux-text10">
            <span>Qui sommes nous ?</span>
          </span>
        </button>
        <button className="mainpagemaquettetestduvieux-buttons3">
          <span className="mainpagemaquettetestduvieux-text12">
            <span>Nos offres</span>
          </span>
        </button>
      </div>
    </div>
  )
}

export default Mainpagemaquettetestduvieux
