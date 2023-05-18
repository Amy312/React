import React, { useState } from 'react'

export const Formulario = (props) => {

    const {listAutos, setListAutos} = props;
    
    const [placa, setPlaca] = useState('');
    
    const [name, setName] = useState('');
    
    const [registerDate, setRegisterDate] = useState('');

    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); //dar un tiempo cuando solo clickea
        if([placa, name, registerDate].includes('')){
            setError(true);
            return;

        } else{
            setListAutos([...listAutos, {
                plate: placa,
                name,
                registerDate
            } ]);
            setError(false);
        }
        
    };



  return (
    <div className='md:w-1/2'>
        <h3 className="font-bold text-3xl text-center">Control de Parqueo</h3>
        <p className="text-lg text-center mt-4"> 
            Control Vehicular
        </p>



        <form className="bg-slate-300 p-10 rounded-lg shadow-lg ml=10 mr-5 mt-2"
        onSubmit={handleSubmit}>

            {error && <p className="bg-red-500 text-white text-center">Todos los campos son obligatorios</p>}
            <label>
                Número de placa
            </label>
            <input 
            placeholder='Ej: 3878IFX'
            className="border-2 w-full mt-2 p-1 rounded-md"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            ></input>
            

<label>
                Nombre del Conductor
            </label>
            <input 
            placeholder='Ej: Ambar Rojas'
            className="border-2 w-full mt-2 p-1 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ></input>

            <label>
            Fecha Ingreso
            </label>
            <input 
            type="date"
            placeholder='Ej: 13-04-2023'
            className="border-2 w-full mt-2 p-1 rounded-md"
            value={registerDate}
            onChange={(e) => setRegisterDate(e.target.value)}
            ></input>

            <input
            type = "submit"
            className="bg-indigo-300 p-3 cursor-pointer text-white rounded-lg mt-5 hover:bg-indigo-600 "
            value = "Parquear"></input>
        </form>

    </div>)
}
