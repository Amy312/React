import React, { useState } from 'react'
import { Formulario } from './Formulario';
import { Auto } from './Auto';

export const Content = () => {

  const driver = {
    name: "Paul Landaeta",
    plate: "1234ABC",
    registerDate: "13/04/2023 7:45 am",

  };

  const [listAutos, setListAutos] = useState([]);

  return (
    <div className="mt-10 md:flex  ml-10">
    <Formulario 
      listAutos = {listAutos}
      setListAutos = {setListAutos}/>
    <Auto listAutos = {listAutos}/>
    </div>
  );
}
