"use client"

import React from 'react'
import { useEffect, useState } from 'react';
import Link from 'next/link';

import GenerationDetails from './GenerationDetails';

const GenenerationCard = (props: any) => {

    const [generation, setGeneration] = useState([]);
    const [isLoading, setLoading] = useState(true);

    

    let url = props.url;
    let data = props.data;

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
    }, [url, isLoading])



    if (isLoading) {
        // return <div className='flex items-center justify-center h-screen bg-gray-100'>
        //     <div className="border-top-color:transparent w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
        //     <p className="ml-2">cargando...</p>
        // </div>
        return <div className='w-full h-screen bg-yellow-100 opacity-0'></div>
    }

    // console.log(generation)
    // console.log(generation.main_region.name);
    console.log(data);

    return (
        <Link href={`generation/${generation.id}`} data={generation} id={generation.id}>
            <div
                className="block max-w-sm  md:max-w-xs m-4  lg:max-w-md md:h-max  rounded-lg bg-yellow-100 shadow-secondary-1 opacity-90  mt-6 p-4">
                <div className=" text-surface flex justify-center">

                    {
                        generation.main_region.name === 'unova'

                            ? <h5 className="mt-2 text-3xl font-bold  text-slate-950 capitalize font-heading 
                            ">
                                {generation.main_region.name} / Teselia
                            </h5>

                            : <h5 className="mt-2 text-3xl font-bold  text-slate-950 capitalize font-heading">
                                {generation.main_region.name}
                            </h5>
                    }
                </div>

                <div className='flex justify-center '>
                    <img
                        className="w-11/12 h-48  object-cover pt-4 rounded-lg"
                        src={data.image}
                        alt="" />
                </div>
            </div>
        </Link>

    )
}

export default GenenerationCard