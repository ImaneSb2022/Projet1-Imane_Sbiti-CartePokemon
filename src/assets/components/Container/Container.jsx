import React from 'react';
import './Container.css';

export const Container = (props) => {

    const classnames = ["container"];

    if(props.className){
        classnames.push(props.className);
    }
  return (
    <div className={classnames.join(" ")}>{props.section}</div>
  )
}
