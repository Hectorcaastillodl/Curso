import { useState } from "react";

const HookUseState = () => {
    const [estado,setEstado] = useState(0);
    const [nombre,setNombre] = useState("Diego");
    let apariencia = {
        Contenedor: "flex flex-col items-center justify-center h-[89.5vh] bg-gradient-to-b from-sky-600 to-sky-900",
        Caja: "bg-white/10 flex flex-col items-center gap-7 p-8 w-[35vw] rounded-2xl h-[60%]",
        Contador: "bg-white/30 shadow-inner shadow-slate-900 rounded text-slate-800 px-4 py-2 w-[10vw] text-center text-[2rem] text-stone-800 font-['roboto'] font-bold",
        Boton: "bg-white/50 hover:bg-white/75 p-2 rounded-[20px] shadow-lg shadow-slate-900 text-slate-800 font-['roboto'] text-[1.2rem] px-4 py-3",
        Titulo: "bg-black/25 rounded-xl px-6 py-3 text-slate-300 shadow-md shadow-slate-800 font-['roboto'] text-[1.6rem]"
    };
    return ( 
        <main className={apariencia.Contador}>
            <section className={apariencia.Caja}>
                 <h1 className={apariencia.Titulo}>Contador de useState</h1>
                <span className={apariencia.Contador}>{estado}</span>
                <div>
                    {/*Boton de incrementar*/}
                    <button className={apariencia.Boton} onClick={()=> setEstado( estado + 1)} >
                    Aumentar</button>
                    
                    {/*Boton de reiniciar*/}
                    <button className={apariencia.Boton} onClick={() => setEstado(0)}>
                        Reiniciar</button>

                    {/*Boton de disminuir*/}
                    <button className={apariencia.Boton}  onClick={() => setEstado( estado - 1)}>
                        Disminuir</button>
                </div>
            </section>
            <section>
                <p>{nombre}</p>
                <input type="text" placeholder="Ingresa tu nombre" onKeyUp={()=> setNombre(document.getElementsByTagName("input")[0].value)}/>

            </section>
        </main>
     );
}
 
export default HookUseState;