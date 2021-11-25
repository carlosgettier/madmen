import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import './dashboard.scss'
import Footer from '../footer/footer'
import Producto from "../Producto/Producto";


const Dashboard = () => {

    const [productos, setProducto] = useState([])

    const cantidad = productos.length
    useEffect(async () => {
        const res = await fetch(`http://localhost:3001/api/products`)
        const data = await res.json()
        setProducto(data)
        console.log(data)

    }, [])



    return (
        <Fragment>
            <div className="contenedor">
                <div className="nav">

                    <Link to="/" className="home">
                        HOME
             </Link>
                    <hr />
                </div>

                <div className="datos">
                    <ul className="lista">
                        <li>
                            cantidad de productos
                   </li>
                        <li>
                            cantidad de productos: {cantidad}
                        </li>
                        <li>
                            <Link to="/dashboard/add">
                                AGREGAR
                   </Link>
                        </li>
                    </ul>
                    <hr />
                    <h1> Productos</h1>
                    <hr />
                    <div className="producto">
                        {productos.map((hola, i) => {
                            return <Producto info={hola} key={i} />

                        })}

                    </div>



                </div>

            </div>
            <Footer />


        </Fragment>
    )
}

export default Dashboard;