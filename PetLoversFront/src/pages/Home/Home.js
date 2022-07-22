import React, {useState} from 'react';
import HeaderProduc from './HeaderProduct/HeaderProduc.js';
import productMonello from '../../imagenes/productMonello.png';
import Cat from './Cat/Cat';

const Home=() => {

    return(       
    <div className="productos">
        <HeaderProduc />
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
                <a href="#" className="btn">Volver</a>
            </div>
            <div className="bottomPago">
                <button className="btnPago">Compra finalizada</button>
                <Cat />
            </div>
    </div>
    )

};

export default Home;