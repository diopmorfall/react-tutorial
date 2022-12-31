import React, { useEffect } from 'react';
import './style.css';

export default function Modal(props) {
    useEffect(() => {
        setTimeout(() => props.closeModal(), 3000);
    });

    return <div className="modal">{props.content}</div>;
}
