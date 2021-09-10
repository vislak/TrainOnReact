import React from 'react';

const EmailComponent = ({ message, subject, from, to, important, onDelete }) => {
    const styleClass = important ? 'important' : '';
     
    return <div className={`email ${styleClass}`} >
        <button className="delete" onClick={onDelete} >Delete</button>
        From: {from} <br />
        To: {to} <br />
        Subject: {subject}<br />
        Message: {message}
    </div>
}

export default EmailComponent;