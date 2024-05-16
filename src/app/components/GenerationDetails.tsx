import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { generacionesDB } from '@/utils/generacionesDB';

const GenenerationDetails = (props:any) => {

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

    console.log(generation);

    console.log(generacionesDB[id-1]);

    if (isLoading) {
        return <div className='flex items-center justify-center h-screen bg-gray-100'>
            <div className="border-top-color:transparent w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
            <p className="ml-2">cargando...</p>
        </div>
    }

    return (
        <div className="p-6 text-surface dark:text-white">
            {
                generation.name === 'unova'

                ?    <h5 className="mb-2 text-xl font-medium leading-tight text-slate-900">{generation.main_region.name} / Teselia</h5>

                :    <h5 className="mb-2 text-xl font-medium leading-tight text-slate-900 capitalize">{generation.main_region.name}</h5>
            }
           
            <p className="mb-4 text-base text-fuchsia-950">
                {/* {data.main_region.name} */}
            </p>
            <h3 className='text-fuchsia-950 mt-2 mb-3'>Juegos</h3>
            <div className='mt-2 grid grid-cols-2 gap-1  justify-evenly md:min-h-80'>

                {generation.version_groups.map((version) => (
                    <p className="mb-4 text-base text-fuchsia-950 w-26">
                        {version.name}
                    </p>
                ))}
            </div>
            <div>

               


            </div>

        </div>
    )
}

export default GenenerationDetails