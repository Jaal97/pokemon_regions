import React from 'react'
import { useEffect, useState } from 'react';
import { isUndefined, types } from 'util';

const TipePokemon = (props) => {
    let id = props.id;

    const [isLoading, setLoading] = useState(true);
    
    const [tipos, setTipos] = useState([]);

   

    let url = `${process.env.NEXT_PUBLIC_API_URL}/pokemon/${id}`;

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setTipos(data)
                setLoading(false)
            })
    

    }, [isLoading])

    

    if (isLoading) {
        return <div className='flex items-center justify-center h-screen bg-gray-100'>
            <div className="border-top-color:transparent w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
            <p className="ml-2">cargando...</p>
        </div>
    }
    // console.log(tipos.types[0].type.name)
    
    

   let ver = tipos.types[1] === undefined ? false : true;

  return (
    <div>
        <p>{tipos.types[0].type.name}</p>
        {
            !ver
            
            ? 
            <p></p>
            :
            <p>{tipos.types[1].type.name}</p>
        }
        
    </div>
  )
}

export default TipePokemon