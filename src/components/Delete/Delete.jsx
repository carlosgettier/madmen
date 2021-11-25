import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import logo1 from '../../assets/dashboard/vino.jpg'
import '../Producto/Producto.scss'


const Delete = () => {
    const { id } = useParams()
    console.log(id)
    const [borrar, setBorrar] = useState([])



    useEffect(async () => {
        const res = await fetch(`http://localhost:3001/api/products/${id}`)
        const dato = await res.json()
        setBorrar(dato)
        console.log(dato)

    }, [])
    return (
        <div className="imagen">
            <img src={logo1} alt="imagen" />
            <p>nombre : {borrar.nombre}</p>
            <p>$ {borrar.precio}</p>
            <p>cantidad: {borrar.cantidad}</p>
            <p>{borrar.id}</p>
            <p>{borrar.descripcion}</p>
            <font className="butom">
                <button>borrar</button>
            </font>

        </div>
    )
}
export default Delete;