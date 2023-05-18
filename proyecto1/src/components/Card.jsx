import React from 'react'

export const Card = (props) => {
  

  const {name, plate, registerDate} = props.person;



  return (
    <div className="bg-slate-200 p-5 mt-2 mr-10 ml-5 mb-5">
        <p className="font-bold uppercase text-gray-600"> Conductor: {" "}
          <span className='font-normal normal-case'>
            {name}            
            </span>
        </p> 

        <p className="font-bold uppercase text-gray-600"> Placa: {" "}
          <span className='font-normal normal-case'>
            {plate}            
            </span>
        </p>

        <p className="font-bold uppercase text-gray-600"> Fecha: {" "}
          <span className='font-normal normal-case'>
            {registerDate}           
            </span>
        </p>

        <button type="button">Click Me!</button>

    </div>
  )
}
