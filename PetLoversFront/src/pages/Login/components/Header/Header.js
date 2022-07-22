import React from 'react';
import logo from '../../../../imagenes/logo.png';
import '../Header/Header.css';



export const Header=()=>{
    return (
        <header>
            <a href="#">
                <div className="logo">
                    <img src={logo} alt="logo" width="150"/>
                </div>
            </a>
        </header>
    )

}

export default Header;