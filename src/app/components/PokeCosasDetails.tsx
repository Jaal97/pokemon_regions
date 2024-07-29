import React from 'react'

import { pokeCosasDB } from '@/utils/pokeCosasDB'

const PokeCosasDetails = (props: any) => {
    let id = props.id;
    let pokeCosas = pokeCosasDB;


    return (

        <div className="p-6 m-6 relative text-surface flex flex-col justify-center bg-yellow-100 opacity-95 w-4/5  max-w-[60rem] mx-auto rounded-lg">

            <h5 className=" text-3xl font-bold text-slate-700 capitalize font-heading text-center mb-3">{pokeCosas[id - 1].title} </h5>

            <picture className='flex justify-center w-full'>
                <img src={pokeCosas[id - 1].image} className='rounded-lg ' alt="img_generation" />
            </picture>

            {/* <h3 className='mb-4 mt-5 text-xl font-bold text-slate-700 capitalize font-heading text-center'>Juegos o Versiones</h3>
            <div className='mt-2 grid grid-cols-2  sm:grid-cols-3 gap-1  justify-between '>

                {generation.version_groups.map((version) => (
                    <p className="mb-4 font-bold text-xl text-amber-700 capitalize" key={generation.version_groups.indexOf(version)}>
                        {version.name}
                    </p>
                ))}

            </div> */}

            <div className='mt-4'>
            <div className=''>
                <p className='text-justify text-lg font-medium underline decoration-yellow-600'>
                    {pokeCosas[id - 1].description_2}
                </p>
            </div>

            <div>
                <p className='text-justify text-lg'>
                    {pokeCosas[id - 1].description}
                </p>
            </div>
            </div>
        </div>
    )
}

export default PokeCosasDetails