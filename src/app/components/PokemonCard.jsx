"use client"

import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { generacionesDB } from '@/utils/generacionesDB';
import TipePokemon from './TipePokemon'

const PokemonCard = (props) => {

    const [isClick, setisClick] = useState(false);
    const toggleNavbar = () => {
        setisClick(!isClick)
    }


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


    //Descripción del Pokémon
    let poke_description = [];



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

    //guardar descripcion del Pokémon
    let [descriptions, setDescriptions] = useState([]);


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


            fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemon-species/${i}`,
                {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((res) => res.json())
                .then((data) => {
                    descriptions.push(data)
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
        poke_names.push(pokemons_data[p].pokemon_species.name);
        poke_nums.push(pokemons_data[p].entry_number);
        poke_img_p.push(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons_data[p].entry_number}.png`);
        // poke_description.push(descriptions[p].flavor_text_entries)
    }



    //    console.log(poke_in);
    //    console.log(poke_end);
    //console.log(descriptions[0].flavor_text_entries[50].flavor_text);
    // console.log(tipos);
    // console.log(poke_description)
    //console.log(descriptions[0].flavor_text_entries[0].flavor_text)


    return (
        <div >
            <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-2  items-center'>
                {poke_nums.map((num, p) => (
                    <div className='flex flex-col justify-center items-center pt-4 pb-4  '>
                        <div className='flex flex-col  justify-center items-center  pt-2  pb-2  border border-gray-400 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] rounded-lg max-w-40 min-w-max w-11/12 sm:w-3/5 md:w-3/6 lg:w-5/12 xl:w-4/6 2xl:w-3/6  bg-slate-100'>

                            <div>
                                <p className='text-center'> N° 0{num} </p>

                                <p className='capitalize text-center'>{poke_names[p]}</p>
                                <picture className='flex justify-center items-center'>
                                    <img className='' src={poke_img_p[p]} alt="poke" />
                                </picture>
                                <div className='text-center pb-2 pr-2 pl-2'>
                                    <TipePokemon id={num} />
                                </div>
                            </div>

                        </div>
                    </div>
                ))
                }
            </div >
        </div >
    )
}

export default PokemonCard