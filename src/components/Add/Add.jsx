import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Add = () => {

    const [data, setData] = useState({
        nombre: "",
        marca: "",
        categoria: "",
        precio: "",
        descripcion: "",
        cantidad: "",
        imagen: ""
    })

    const handleInputChange = (e) => {

        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


    const enviarDatos = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/api/products/add', data)
            .then(res => console.log(res))

    }





    return (
        <div>
            <form onSubmit={enviarDatos}>
                <label>nombre</label>
                <input type=" text" name="nombre" onChange={handleInputChange} />
                <label>marca</label>
                <input type=" text" name="marca" onChange={handleInputChange} />
                <label>categoria</label>
                <input type=" text" name="categoria" onChange={handleInputChange} />
                <label>precio</label>
                <input type=" text" name="precio" onChange={handleInputChange} />
                <label>descripcion</label>
                <input type=" text" name="descripcion" onChange={handleInputChange} />
                <label>cantidad</label>
                <input type=" text" name="cantidad" onChange={handleInputChange} />
                <label>imagen</label>
                <input type=" text" name="imagen" onChange={handleInputChange} />
                <button type="submit">enviar</button>
            </form>
        </div>
    )
}
export default Add;