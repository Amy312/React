import { useState } from "react";

const Presupuesto = () => {
    const [presupuesto, setPresupuesto] = useState(0);
    const handleSubmit = () =>{
        setPresupuesto(presupuesto);
    }
    return(
        <>
    <div className='card bg-white rounded-md shadow-lg shadow-slate-300 m-6'>
        <h2 className="text-3xl font-semibold text-red-400 p-5">Presupuesto :D</h2>
        <form className="py-10 my-5 mx-5" onSubmit={handleSubmit}>
            
            <input 
            className="border-2 w-full p-1 m-2 bg-slate-50 text-black"
            id="presupuesto"
            type="text"
            onChange={e => {console.log(e.target.value)}}
            placeholder="Ingrese su presupuesto uwu"/>
            
            <input className="bg-red-300 m-3 p-5 rounded-md cursor-pointer hover:bg-orange-300"
            id="boton"
            type="submit"
            placeholder="Enviar"/>
        </form>
      
    </div>
        </>
    )
}
export default Presupuesto;