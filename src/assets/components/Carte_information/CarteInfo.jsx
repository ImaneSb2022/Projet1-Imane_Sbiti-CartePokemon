import React from 'react';
import Description from '../Carte-description/CarteDescription';
import './CarteInfo.css';

const CarteInfo = (props) => {
  return (
    <div className='Info'>
        <div>
            <Description>{props.children1}</Description>
        </div>
        <div>
        <Description>{props.children2}</Description>
        </div>
    </div>
  )
}

export default CarteInfo