import React from 'react';
import { pokegoDB } from '../../utils/pokegoDB';
import Link from 'next/link';


const page = () => {

    let pokego = pokegoDB;
    // console.log(pokego);

    return (
        <div className="bg-[url('https://i.postimg.cc/PqnN40jQ/8970.jpg')]  bg-no-repeat bg-cover h-auto bg-center flex justify-center">
            <div>
            <div className="p-6 m-6 relative text-surface flex flex-col justify-center bg-yellow-100 opacity-95 w-4/5  max-w-[60rem] mx-auto rounded-lg">
                <picture className='flex justify-center w-full'>
                    <img src={pokego[0].image} className='rounded-lg ' alt="img_pokego" />
                </picture>
             
                <h5 className=" text-3xl font-bold text-slate-700 capitalize font-heading text-center mb-3 mt-3">{pokego[0].tittle} </h5>

                <div className=''>
                    <p className='text-justify text-lg font-medium underline decoration-yellow-600 mb-4'>
                        {pokego[0].description}
                    </p>
                </div>

                <picture className='flex justify-center w-full'>
                    <img src={pokego[0].image_2} className='rounded-lg ' alt="img_pokego" />
                </picture>
                
                <ul className='list-disc text-justify mb-4 mt-4 font-medium'>
                    <li>{pokego[0].description_2}</li>
                    <li>{pokego[0].description_3}</li>
                    <li>{pokego[0].description_4}</li>
                    <li>{pokego[0].description_5}</li>
                    <li>{pokego[0].description_6}</li>
                </ul>
                <p className='text-lg font-bold'>Puedes descargar Pokémon Go para dispositivos <Link href={'https://apps.apple.com/us/app/pok%C3%A9mon-go/id1094591345'} target='__blank' className='text-blue-700'>iOS</Link> y <Link href={'https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo&hl'} target='__blank' className='text-blue-700'>Android</Link> </p>
            </div>
        </div>
    </div>
        
    )
}

export default page