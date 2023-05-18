import React from 'react'
import { Card } from './Card'

export const Auto = (props) => {
    const {listAutos} = props;

    console.log('props', listAutos);

    const drivers = {
        name: "Ambar Rojas",
        plate: "3878ABC",
        registerDate: "13/04/2022 7:45 am",
      };

  return (
    <div className='md:w-1/2 overflow-y-scroll'>
        <h3 className="font-bold text-3xl text-center">Lista de Autos</h3>
        <p className="text-lg text-center mt-4">Autos Registrados </p>
        {
            listAutos.map((driver) =>(
                <Card person ={driver} key={driver.plate}/>
            ))
        }
    
    </div>
  )
}
