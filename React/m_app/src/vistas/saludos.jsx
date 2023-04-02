import Mensaje from "../componentes/Mensaje";

const Saludos = () => {
    return ( 
        <>
        <h1>Saludos</h1>
        <Mensaje nombre= "Diego" apellido = "Rodriguez" numClase= "42" textColor = "red" tamanoLetra= "25px" grosorLetra= "500"/>
        <Mensaje nombre= "Ruben" apellido = "lopez" numClase= "41" textColor = "blue" tamanoLetra= "20px" grosorLetra= "600"/>
        <Mensaje nombre= "Hector" apellido = "Castilo" numClase= "43" textColor = "green" tamanoLetra= "10px" grosorLetra= "200"/>
        <Mensaje nombre= "Pedro" apellido = "fino" numClase= "21" textColor = "yellow" tamanoLetra= "25px" grosorLetra= "100"/>
        <Mensaje nombre= "Laura" apellido = "Lola" numClase= "24" textColor = "grey" tamanoLetra= "15px" grosorLetra= "300"/>
        <Mensaje nombre= "Diego" apellido = "Rodri" numClase= "33" textColor = "orange" tamanoLetra= "22px" grosorLetra= "400"/>
        </>
     );
}
 
export default Saludos;