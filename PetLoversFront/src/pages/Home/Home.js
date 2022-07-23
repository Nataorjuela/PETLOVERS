import React, {useState} from 'react';
import HeaderProduc from './HeaderProduct/HeaderProduc.js';
import productMonello from '../../imagenes/productMonello.png';
import ChatRoom from '../ChatRoom/ChatRoom';
import '../Home/Home.css';
import Login from '../Login/Login';

const Home=() => {

    function handleonClick(){
        window.location = "/ChatRoom";
    };

    function handleonExit(){
        window.location="/Login";
        
    };

    return(       
        <div className="product-container">
            <HeaderProduc />
            <div className="productos">
                <div className="producto">
                    <a href="#">
                        <div className="product_img">
                            <img src={productMonello} alt=""></img>
                        </div>
                    </a>

                    <div className="product_footer">
                        <h1>Nombre Producto</h1>
                        <p>Peso Producto</p>
                        <p className="price">$200.000</p>
                    </div>
                    
                    <div className="buttom">
                        <button className="btn"> Añadir al carrito</button>
                    </div>
                    
                </div>


                <div className="producto">
                    <a href="#">
                        <div className="product_img">
                            <img src={productMonello} alt=""></img>
                        </div>
                    </a>

                    <div className="product_footer">
                        <h1>Nombre Producto</h1>
                        <p>Peso Producto</p>
                        <p className="price">$200.000</p>
                    </div>

                    <div className="buttom">
                        <button className="btn"> Añadir al carrito</button>
                    </div>
                </div>

                <div className="producto">
                    <a href="#">

                        <div className="product_img">
                            <img src={productMonello} alt=""></img>
                        </div>
                    </a>
                    <div className="product_footer">
                        <h1>Nombre Producto</h1>
                        <p>Peso Producto</p>
                        <p className="price">$200.000</p>
                    </div>
                    <div className="buttom">
                        <button className="btn"> Añadir al carrito</button>
                    </div>
             
                </div>
                <div className="producto">
                    <a href="#">
                        <div className="product_img">
                            <img src={productMonello} alt=""></img>
                        </div>
                    </a>
                    <div className="product_footer">
                        <h1>Nombre Producto</h1>
                        <p>Peso Producto</p>
                        <p className="price">$200.000</p>
                    </div>
                    <div className="buttom">
                        <button className="btn"> Añadir al carrito</button>
                    </div>
                    
                </div>
                <div onClick={handleonClick} className="buttomPago">
                        <button className="btnPago">Compra finalizada</button>
                </div>
                <div onClick={handleonExit} className="btnVol">
                    <button className="btnV">Salir</button>
                </div>
            </div>
        </div>
    )

};

export default Home;