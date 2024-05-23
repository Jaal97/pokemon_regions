"use client"

import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { generacionesDB } from '@/utils/generacionesDB';

const PokemonCard = (props) => {
    const generaciones = generacionesDB;

    const params = useParams()
    let data = params.data;
    let poke_in = generaciones[data-1].pokemons[0]
    let poke_end = generaciones[data-1].pokemons[1]
   


    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setLoading] = useState(true);

    let url = `${process.env.NEXT_PUBLIC_API_URL}/pokedex/1`;

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setPokemons(data)
                setLoading(false)
            })
    }, [isLoading])

    if (isLoading) {
        return <div className='flex items-center justify-center h-screen bg-gray-100'>
            <div className="border-top-color:transparent w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
            <p className="ml-2">cargando...</p>
        </div>
    }

    console.log(poke_in);
    console.log(poke_end);
    // console.log(generaciones[data-1].pokemons)
    console.log(pokemons.pokemon_entries[poke_in -1]);

  return (
    <div>PokemonCard</div>
  )
}

export default PokemonCard