import React from 'react';
import { useState } from 'react';
import Titre from '../Carte-Titre/CarteTitre';
import Image from '../Carte-Image/CarteImage';
import Description from '../Carte-description/CarteDescription';
import Info from '../Carte_information/CarteInfo';
import './Carte.css';

const Carte = (props) => {

  const [isShown, setIsShown] = useState(false);

  const classnamesCarte = ["carte-box"];

  if(props.FontVert) classnamesCarte.push("CarteVerte");

  if(props.FontOrange) classnamesCarte.push("CarteOrange");

  if(props.className) classnamesCarte.push("props.className");

  return (

    <article className={classnamesCarte.join(" ")} onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)}>

    <Image 
        src={props.CarteImageSrc} 
        alt={props.CarteImageAlt} 
        loading={props.CarteImageLoading}
    />
    {isShown && (
    <div>
          <Titre as="h2">{props.CarteTitre}</Titre>
          <Titre as="h3">{props.SousTitre1}</Titre>      
          <Description>{props.CarteDescription}</Description>
          <Titre as="h3">{props.SousTitre2}</Titre>          
          <Info children1={props.Info1} children2={props.Info2} />
    </div>
    )}

    </article>
  )
}

export default Carte;