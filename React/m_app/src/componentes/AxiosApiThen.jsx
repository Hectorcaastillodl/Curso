import { useState } from "react";
import axios from "axios"

const AxiosApiThen = () => {

    const [nombre,setNombre] = useState("");
    const [imagen,setImagen] = useState("");
    const [especie,setEspecie] = useState("");
    const [sexo,setSexo] = useState("");
    const [ubicacion,setUbicacion] = useState("");


    axios.get("https://rickandmortyapi.com/api/character/2")
    // Tratar resolve
    .then(res => {
        // Axios a diferencia de Fetch, convierte la respuesta en un objeto JSON automaticamente
        console.table(res)
        console.log(res.request)
        setNombre(res.data.name);
        setImagen(res.data.image);
        setEspecie(res.data.species);
        setSexo(res.data.gender);
        setUbicacion(res.data.location.name);
    })
    // Tratar reject
    .catch(err => console.log(err) );


    // Objeto con estilos CSS de Tailwind
    const estilos ={
        Main: "flex h-[92vh] w-[100vw] items-center justify-center" ,
        Caja: "bg-white/20 flex items-center pl-0 h-[auto] pl-4 rounded-2xl shadow-[-7px_15px_15px_3px_rgba(0,0,0,0.3)]",
        Imagen: "rounded-r-lg w-[180px] h-[180px] shadow-md shadow-stone-900 ml-6",
        Parrafo: "text-white font-bold text-xl w-[300px] drop-shadow-lg"
    }

    return ( 
        <>
        </>
    );
}

export default AxiosApiThen;