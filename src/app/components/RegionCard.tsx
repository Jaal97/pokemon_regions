"use client"

import React from 'react'
import { useEffect, useState } from 'react';


const RegionCard = (props: any) => {

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
        return <div className='flex items-center justify-center h-screen bg-gray-100'>
            <div className="border-top-color:transparent w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
            <p className="ml-2">cargando...</p>
        </div>
    }

    console.log(generation)
    console.log(generation.main_region.name);
    console.log(data);

    return (
        <div
            className="block max-w-sm  md:max-w-xs m-4  lg:max-w-md rounded-lg bg-white shadow-secondary-1  mt-6">
            <a href="#!">
                <img
                    className="rounded-t-lg"
                    src={data.image}
                    alt="" />
            </a>
            <div className="p-6 text-surface dark:text-white">
                <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
                <p className="mb-4 text-base text-fuchsia-950">
                    {generation.main_region.name}
                </p>
                <h3 className='text-fuchsia-950 mt-2 mb-3'>Juegos</h3>
                <div className='mt-2 grid grid-cols-2 gap-1  justify-evenly max-h-max'>

                    {generation.version_groups.map((version) => (
                        <p className="mb-4 text-base text-fuchsia-950 w-26">
                            {version.name}
                        </p>
                    ))}
                </div>
                <div>
                    
                   
                    
                   
                </div>

            </div>
        </div>
    )
}

export default RegionCard