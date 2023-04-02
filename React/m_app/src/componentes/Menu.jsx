// Se mporta nav-link desde react-router-dom para poder trabajar las rutas y aprovechar
//la propiedad isActive para mutar el documento cuando la ruta indicada este activa

import {NavLink} from "react-router-dom";

//Funcion que define el componente 
const Menu  = () => {
    //funcion que retorne unobjeto (parametro => ({key: value}))
    //Para camiar de color si la ruta esta activa
    //Nota: isActive es una palabra reservada
    let cambiarColor = ({isActive}) => ({
        color: isActive ? "rgb(5,26,100)":"rgb(8,95,1)", textDecoration:"none",
        fontSize: "20px"
    })

    return ( 
    <nav style={{
        background : "black",
        display: "flex",
        justifyContent: "flex-end",
        gap: "15px",
        padding: "15px"
    }}>
        {/*RUTA 1*/}
        <span>
            <NavLink to="/" style={cambiarColor}>Home</NavLink>
        </span>
        {/*RUTA 2*/}
        <span>
            <NavLink to="/Componente1" style={cambiarColor}>Compartimiento</NavLink>
        </span>
        {/*RUTA 3*/}
        <span>
            <NavLink to="/Componente2" style={cambiarColor}>Compartimiento 2</NavLink>
        </span>
        {/*RUTA 4*/}
        <span>
            <NavLink to="/MiPrimeravista" style={cambiarColor}>MiPrimeravista</NavLink>
        </span>
        {/*RUTA 5*/}
        <span>
            <NavLink to="/Saludos" style={cambiarColor}>Saludos</NavLink>
        </span>
    </nav>
   );
}
 
export default Menu;