import React, {useState} from 'react';
import Header from '../Login/components/Header/Header';
import productMonello from '../../imagenes/productMonello.png'
const Home=() => {

    return(
        <>
        <h1 className="title">PRODUCTOS</h1>
        <div className="productos">
            <Header />
            <a href="#">
                <div className="productMonello">
                    <img src={productMonello} alt=""></img>
                </div>
            </a>
            <div className="product_footer">
                <hi>Title</hi>
                <p>Categoria</p>
                <p className="price">$200000</p>
            </div>
            <div className="bottom">
                <button className="btn">Añadir al carrito</button>
            </div>
            <div>
                <a href="#" className="btn">Vista</a>
            </div>
        </div>
        </>
    )

};

export default Home;