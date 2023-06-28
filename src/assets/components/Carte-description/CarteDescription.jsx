import React from 'react';
import './CarteDescription.css';

const CarteDescription = (props) => {

    const classnames = ["description"];
    if (props.className) classnames.push(props.className);

    switch (props.as){
        case "span":
            return <span className={classnames.join(" ")}>{props.children}</span>
        case "article":
            return <article className={classnames.join(" ")}>{props.children}</article>
        case "blockquote":
            return <blockquote className={classnames.join(" ")}>{props.children}</blockquote>
        default:
            return <p className={classnames.join(" ")}>{props.children}</p>
    }
}

export default CarteDescription