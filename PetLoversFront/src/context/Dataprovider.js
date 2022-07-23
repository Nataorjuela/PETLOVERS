import React,{ createContext, useState,useEffect } from "react";
import { parseJsonSourceFileConfigFileContent } from "typescript";
import Data from '../context/Data';
export const DataContext=createContext();


export const DataProvider=(props)=>{
    const [productos,setProductos] = useState([])

    useEffect(()=>{

    },[])
}