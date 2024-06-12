"use client"

import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { generacionesDB } from '@/utils/generacionesDB';
import TipePokemon from './TipePokemon'

const PokemonCard = (props) => {

    const generaciones = generacionesDB;

    const params = useParams()
    let data = params.data;
    let poke_in = Number(generaciones[data - 1].pokemons[0] - 1)
    let poke_end = Number(generaciones[data - 1].pokemons[1])


    // guardar los datos de los pokemons

    //datos generales
    let pokemons_data = [];

    //numero en la pokedex
    let poke_nums = [];

    //nombre del Pokémon
    let poke_names = [];

    //imagen del Pokémon
    let poke_img_p = [];

    //tipos
    let typos_poke = [];



    // const [pokeTotal, setPokeTotal] = useState([{
    //     num: 0,
    //     name: '',
    //     img: '',
    // }]);

    // pokemons_total.num = poke_nums;
    // pokemons_total.name = poke_names;
    // pokemons_total.img = poke_img_p;


    const [pokemons, setPokemons] = useState([]);

    //guardar tipo pokemon
    let [tipos, setTipos] = useState([]);

    // const [poke, setPoke] = useState([]);
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


        for (let i = poke_in + 1; i <= poke_end; i++) {



            let url = `${process.env.NEXT_PUBLIC_API_URL}/pokemon/${i}`
            fetch(url, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    tipos.push(data)
                    // typos_poke.push(data)
                    // setLoading(false)
                })
            // typos_poke.push(tipos)

            //    typos_poke.push(tipos)
        }


    }, [isLoading])


    if (isLoading) {
        return <div className='flex items-center justify-center h-screen'>
            <div className="border-top-color:transparent w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
            <p className="ml-2">cargando...</p>
        </div>
    }

    // console.log(typeof(poke_end));

    // console.log(generaciones[data-1].pokemons)
    pokemons_data = pokemons.pokemon_entries.slice(poke_in, poke_end)
    // console.log(pokemons.pokemon_entries.slice(poke_in,poke_end));
    // console.log(pokemons_data)

    for (const p in pokemons_data) {
        poke_names.push(pokemons_data[p].pokemon_species.name)
        poke_nums.push(pokemons_data[p].entry_number)
        poke_img_p.push(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons_data[p].entry_number}.png`)
    }



    //    console.log(poke_in);
    //    console.log(poke_end);

    // console.log(tipos);

    // console.log(pokemons_data);

    return (
        <div>
            <div className='grid grid-cols-3 gap-2  items-center'>
                {poke_nums.map((num, p) => (

                    <div className='flex flex-col justify-center items-center pt-4 pb-4  '>
                        <div className='flex flex-col  justify-center items-center  pt-2  pb-2   w-11/12 sm:w-3/5 md:3/6 lg:w-2/5 xl:w-44 xl:3/6 2xl:w-1/4 bg-slate-100'>

                            <p className=''> N° 0{num} </p>

                            <p className='capitalize '>{poke_names[p]}</p>
                            <picture>
                                <img src={poke_img_p[p]} alt="poke" />
                            </picture>
                            <div className='text-center'>
                                <TipePokemon id={num} />
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default PokemonCard