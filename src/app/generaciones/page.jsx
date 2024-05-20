import React from 'react'
import GenerationCard from "../components/GenerationCard";
import { generacionesDB } from "@/utils/generacionesDB";

const page = () => {

    let generaciones = generacionesDB;
    let url = `${process.env.NEXT_PUBLIC_API_URL}/generation/`;


    return (
        <div className='flex justify-center '>
            <div className="bg-[url('https://images4.alphacoders.com/717/thumb-1920-717265.jpg')]  bg-repeat lg:bg-no-repeat  w-full h-auto bg-center flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-56 mt-10   ">
                    {generaciones.map((gen) => (
                        <GenerationCard key={gen.id} url={`${url}${gen.id}`} data={gen} />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default page