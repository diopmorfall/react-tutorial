import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const defaultImage = 'https://cdn.readkakegurui.com/file/mangaifenzi22/blue-lock/vol-6-chapter-41-blue-lock-man/2.jpg';
export default function Player(props) {
    const url = props.image && props.image.url;
    //? or we can use this to check the existence of the object
    
    return (
        <div className="item">
        <h4>{props.name}</h4>
        <img src={url || defaultImage} alt={props.name || 'default name'} />
        <p>${props.price || 5_000_000}</p>
        </div>
    );
}

//* another way to set default values is to use short circuit operators (&&/||)

//* this is how we access it to set it up
Player.propTypes = {
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};
//! with this, we'll get an error that tells us which is the missing property

//? and what's even more cool, is that we can set up default props if they're missing
//? this is one way of doing it
/*
Player.defaultProps = {
    name: 'Default name',
    price: 5_000_000,
    image: {
        url: 'https://cdn.readkakegurui.com/file/mangaifenzi22/blue-lock/vol-6-chapter-41-blue-lock-man/2.jpg',
    },
};
*/
