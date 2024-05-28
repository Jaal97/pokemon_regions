"use client"

import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { generacionesDB } from '@/utils/generacionesDB';

const PokemonCard = (props) => {
    const generaciones = generacionesDB;

    const params = useParams()
    let data = params.data;
    let poke_in = generaciones[data - 1].pokemons[0] - 1
    let poke_end = generaciones[data - 1].pokemons[1]


    // guardar los datos de los pokemons

    //datos generales
    let pokemons_data = [];

    //numero en la pokedex
    let poke_nums = [];

    //nombre del Pokémon
    let poke_names = [];

    //imagen del Pokémon
    let poke_img_p = [];

    const [pokeTotal, setPokeTotal] = useState([{
        num: 0,
        name: '',
        img: '',
    }]);
    // let pokemons_total = {
    //      num: 0,
    //      name: '',
    //      img: ''
    // }

    // pokemons_total.num = poke_nums;
    // pokemons_total.name = poke_names;
    // pokemons_total.img = poke_img_p;


    const [pokemons, setPokemons] = useState([]);
    const [poke, setPoke] = useState([]);
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

    // console.log(poke_in);
    // console.log(poke_end)

    // console.log(generaciones[data-1].pokemons)
    pokemons_data = pokemons.pokemon_entries.slice(poke_in, poke_end)
    // console.log(pokemons.pokemon_entries.slice(poke_in,poke_end));
    // console.log(pokemons_data)

    for (const p in pokemons_data) {
        poke_names.push(pokemons_data[p].pokemon_species.name)
        poke_nums.push(pokemons_data[p].entry_number)
        // pokeTotal.num =pokemons_data[p].entry_number
        poke_img_p.push(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons_data[p].entry_number}.png`)
        pokeTotal.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons_data[p].entry_number}.png`
    }
    // console.log(poke_names);
    // console.log(pokeTotal);
    return (
        <div>
            <div className=' '>
                {poke_nums.map((num, p) => (
                   
                    <div className='flex'>
                        {/* <span>{p}</span>
                        <span>-</span> */}
                        <p>N°</p>
                        <span>0{num} </span>
                       
                        <span>{poke_names[p]}</span>
                        <picture>
                            <img src={poke_img_p[p]} alt="poke" />
                        </picture>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PokemonCard