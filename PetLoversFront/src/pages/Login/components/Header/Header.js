import React from 'react';
import logo from '../../../../imagenes/logo.png';
import '../Header/Header.css';
import 'boxicons';


export const Header=()=>{
    return (
        <header>
            <a href="#">
                <div className="logo">
                    <img src={logo} alt="logo" width="150"/>
                </div>
            </a>
            <ul>
                <li>
                    <a href="#">INICIO</a>
                </li>
                <li>
                    <a href="#">PRODUCTOS</a>
                </li>
            </ul>
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item_total">0</span>
            </div>
        </header>
    )

}

export default Header;