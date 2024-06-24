import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { generacionesDB } from '@/utils/generacionesDB';
import Link from 'next/link';

const GenenerationDetails = (props: any) => {

    let id = props.id;

    let generaciones = generacionesDB;

    const [generation, setGeneration] = useState([]);
    const [isLoading, setLoading] = useState(true);

    let url = `${process.env.NEXT_PUBLIC_API_URL}/generation/${id}`;


    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setGeneration(data)
                setLoading(false)
            })
    }, [id, isLoading])

    // console.log(generation.names[5].name);

    // console.log(generacionesDB[id - 1]);

    // if (isLoading) {
    //     return <div className='flex items-center justify-center h-screen bg-gray-100'>
    //         <div className="border-top-color:transparent w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
    //         <p className="ml-2">cargando...</p>
    //     </div>
    // }

    if (isLoading) {
        // return <div className='flex items-center justify-center h-screen bg-gray-100'>
        //     <div className="border-top-color:transparent w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
        //     <p className="ml-2">cargando...</p>
        // </div>
        return <div className='w-full h-screen bg-yellow-100 opacity-0'></div>
    }

    return (

        <div className="p-6 m-6 relative text-surface flex flex-col justify-center bg-yellow-100 opacity-95 w-4/5  max-w-[60rem] mx-auto rounded-lg">

            <h5 className=" text-3xl font-bold text-slate-700 capitalize font-heading text-center ">{generation.names[5].name.split('Generación ')} Generación </h5>
            {
                generation.main_region.name === 'unova'

                    ? <p className='text-center mb-2 text-xl font-medium text-slate-600 capitalize '>({generation.main_region.name} / Teselia) </p>

                    : <p className='text-center mb-2 text-xl font-medium text-slate-600 capitalize'>({generation.main_region.name})</p>
            }

            <picture className='flex justify-center w-full'>
                <img src={generaciones[id - 1].image} className='rounded-lg ' alt="img_generation" />
            </picture>

            <h3 className='mb-4 mt-5 text-xl font-bold text-slate-700 capitalize font-heading text-center'>Juegos o Versiones</h3>
            <div className='mt-2 grid grid-cols-2  sm:grid-cols-3 gap-1  justify-between '>

                {generation.version_groups.map((version) => (
                    <p className="mb-4 font-bold text-xl text-amber-700 capitalize" key={generation.version_groups.indexOf(version)}>
                        {version.name}
                    </p>
                ))}

            </div>

            <div>
                <p className='text-justify text-lg'>
                    {generaciones[id - 1].description}
                </p>
            </div>


            {
                generation.main_region.name === 'unova'

                    ? <h5 className='mb-4 mt-5 text-xl font-bold text-slate-700 capitalize font-heading text-center '>Mapa de {generation.main_region.name} / Teselia </h5>

                    : <h5 className='mb-4 mt-5 text-xl font-bold text-slate-700  font-heading text-center capitalize'>Mapa de {generation.main_region.name} </h5>
            }


            <picture className='flex justify-center'>
                <img src={generaciones[id - 1].map_img} alt="" />
            </picture>

            <div>
                <p className='text-justify text-lg mt-4'>
                    {generaciones[id - 1].description_2}
                </p>
            </div>

            <Link href={`/pokemons/${generaciones[id-1].id}`} >
            <div>
                <h5 className='mb-4 mt-5 text-xl font-bold text-slate-700 capitalize font-heading text-center '>
                    Pokémons De Esta Generación
                </h5>
            </div>

            <div className='flex w-full mr-6 ml-6'>
                <p className='text-justify text-lg font-medium mt-4 w-2/4'>
                    Segun su número en la pokedex:
                </p>
                <p className='mt-4  text-xl font-bold w-2/4 ml-8'>
                {generaciones[id - 1].pokemons[0] } / {generaciones[id - 1].pokemons[1]}
                </p>
                  
               
            </div>

            <div className='flex justify-between mr-6 ml-6 w-full' >
            <p className='text-justify text-lg font-medium mt-4 w-2/4 '>
                    Total de Pokémons Agregados:
                </p>
                <p className='mt-4  text-xl font-bold w-2/4 ml-8'>
                {generaciones[id - 1].total_poke_in}
                </p>
            </div>
            </Link>
            

        </div>


    )
}

{/* urls imagenes */ }

{/* https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png */ }

{/* https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png */ }


{/* pokedex

            https://pokeapi.co/api/v2/pokedex/1/ */}

export default GenenerationDetails