import React from 'react';
import logo from '../../../imagenes/logo.png';
import '../HeaderProduct/HeaderProduc.css';
import 'boxicons';


export const HeaderProduc=()=>{
    return (
        <header>
            <a href="#">
                <div className="logo">
                    <img src={logo}/>
                </div>
            </a>
            <ul>
               
                <li>
                    <a href="#">VER CARRITO</a>
                </li>
            </ul>
            <div className="cart">
                <box-icon name="cart" size='lg'></box-icon>
                <span className="item_total">0</span>
            </div>
        </header>
    )

}

export default HeaderProduc;