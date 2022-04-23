import React from 'react';
import './NavBar.css';
import Clownfish from "../img/clownfish-img.png";
import ClownfishText from "../img/clownfish-text.png";
import Messaging from "../img/messaging.png";
import Pfp from "../img/Pfp.png";
import Arrow from "../img/Arrow.png";

function Title() {
  return (
      <div className="topnav">
        <img className="clownfish-text" src={ClownfishText} alt="logo"></img>
        <img className="clownfish-img" src={Clownfish} alt="logo"></img>
      <div class="topnav-right">
        <a class="active" href="#home">Projects</a>
        <a href="#applied">Applied</a>
        <a href="#loved">Loved</a>
        <img className="img-messaging" src={Messaging} alt="logo"></img>
        <img className="img-pfp" src={Pfp} alt="logo"></img>
        <img className="img-arrow" src={Arrow} alt="logo"></img>
      </div>
    </div>
  )
}

export default Title