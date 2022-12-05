import { useState, useEffect } from "react";
import { createContext } from "react";
import Data from '../../data/libros.json'
export const DataContext = createContext();

export const DataProvider = (props) =>{
    const [productos, setProductos] = useState([])

    useEffect(()=>{

    }, [])
}
