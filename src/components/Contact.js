import React from 'react';
import './Contact.css';

function Contact(props) {
    return (
        <div className="Contact">
            <img className="avatar" src={props.image} alt={props.name} />            
            <h4 className='name'>{props.name}</h4>
            <div className='status'>
                <div className={props.online ? "status-online" : "status-offline"}></div>
                <p className='status-text'> {props.online ? "Online" : "Offline" } </p>            
            </div>
        </div>
    )
}

export default Contact;