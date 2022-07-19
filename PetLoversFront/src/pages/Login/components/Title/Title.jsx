import React from 'react';
import './Title.css';

//manejamos componentes funcionales

const Title =({text}) => {
    
    return (
        <div className='title-container'>
           <label className='title-label'>{text}</label>
        </div>
    )

};

export default Title;