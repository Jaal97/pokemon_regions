import React from 'react'
import { useEffect, useState } from 'react';
import { isUndefined, types } from 'util';

const TipePokemon = (props) => {
    let id = props.id;

    const [isLoading, setLoading] = useState(true);
    
    const [tipos, setTipos] = useState([]);

    let tipo_1 = '';
    let tipo_2 = '';
   

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

   switch(tipos.types[0].type.name){
    case "rock":
        tipo_1 = 'roca';
    break;
    case "ice":
        tipo_1= 'hielo';
    break;
    case "bug":
        tipo_1 = 'bicho';
    break;
    case "electric":
        tipo_1 = 'electrico';
    break;
    case "fairy":
        tipo_1 = 'hada';
    break;
    case "dark":
        tipo_1 = 'siniestro';
    break;
    case "fighting":
        tipo_1 = 'lucha';
    break;
    case "fire":
        tipo_1 = 'fuego';
    break;
    case "flying":
        tipo_1 = 'volador';
    break;
    case "ghost":
        tipo_1 = 'fantasma';
    break;
    case "grass":
        tipo_1 = 'planta';
    break;
    case "ground":
        tipo_1 = 'tierra';
    break;
    case "poison":
        tipo_1 = 'veneno';
    break;
    case "psychic":
        tipo_1 = 'psiquico';
    break;
    case "steel":
        tipo_1 = 'acero';
    break;
    case "water":
        tipo_1 = 'agua';
    break;
    case "dragon":
        tipo_1 = 'dragon';
    break;
    case "normal":
        tipo_1 = 'normal';
    break;
    default:
        ""
   }


   switch(!ver || tipos.types[1].type.name){
    case "rock":
        tipo_2 = 'roca';
    break;
    case "ice":
        tipo_2= 'hielo';
    break;
    case "bug":
        tipo_2 = 'bicho';
    break;
    case "electric":
        tipo_2 = 'electrico';
    break;
    case "fairy":
        tipo_2 = 'hada';
    break;
    case "dark":
        tipo_2 = 'siniestro';
    break;
    case "fighting":
        tipo_2 = 'lucha';
    break;
    case "fire":
        tipo_2 = 'fuego';
    break;
    case "flying":
        tipo_2 = 'volador';
    break;
    case "ghost":
        tipo_2 = 'fantasma';
    break;
    case "grass":
        tipo_2 = 'planta';
    break;
    case "ground":
        tipo_2 = 'tierra';
    break;
    case "poison":
        tipo_2 = 'veneno';
    break;
    case "psychic":
        tipo_2 = 'psiquico';
    break;
    case "steel":
        tipo_2 = 'acero';
    break;
    case "water":
        tipo_2 = 'agua';
    break;
    case "dragon":
        tipo_2 = 'dragon';
    break;
    case "normal":
        tipo_2 = 'normal';
    break;
    default:
        ""
   }

  return (
    <div>
        <p>{tipo_1}</p>
        {
            !ver
            
            ? 
            <p></p>
            :
            <p>{tipo_2}</p>
        }
        
    </div>
  )
}

export default TipePokemon