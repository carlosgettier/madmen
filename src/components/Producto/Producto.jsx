import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import logo1 from '../../assets/dashboard/vino.jpg'
import './Producto.scss'

const Producto = ({ info }) => {



    return (
        <div className="imagen">
            <img src={logo1} alt="imagen" />
            <p>nombre : {info.nombre}</p>
            <p>$ {info.precio}</p>
            <p>cantidad: {info.cantidad}</p>
            <p>{info.id}</p>
            <p>{info.descripcion}</p>
            <div className="butom">
                <Link to={`/dashboard/delete/${info.id}`} className="delete">Borrar</Link>
                <Link to={`/dashboard/edit/${info.id}`} className="edit">Editar</Link>
            </div>
        </div>
    )
}
export default Producto;