//props
const Mensaje = (props) => {
    console.table(props)
    return ( 
        <>
        <p style={{color: props.textColor, fontSize: props.tamanoLetra, fontWeight: props.grosorLetra}}>
            Hola,{props.nombre}{props.apellido}, esto es react <br/>
            Estas aprendiendo a usar las props de react #{props.numClase}
        </p> <br/>
          
        
        
        
        </>
     );
}
 
export default Mensaje;