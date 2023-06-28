import React from 'react';
import './CarteImage.css';

const CarteImage = (props) => {




    const classnames = ["image"];
    if (props.className) classnames.push(props.className);
    
    
    return (

    <div className={classnames.join(" ")}>
        <img 
            src={props.src} 
            alt={props.alt}
            loading={props.loading} 
        />
    </div>
    )

 /* return (
    <div className='image' >
        <img src="../public/images/Bulbizarre.jpg" loading="lazy" />
    </div>
    
  )*/
}

export default CarteImage;