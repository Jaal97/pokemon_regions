import React from 'react'
import GenerationCard from "../components/GenerationCard";
import { generacionesDB } from "@/utils/generacionesDB";

const page = () => {

    let generaciones = generacionesDB;
    let url = `${process.env.NEXT_PUBLIC_API_URL}/generation/`;


    return (
        <div className="bg-[url('https://i.postimg.cc/PqnN40jQ/8970.jpg')]  bg-no-repeat bg-cover h-auto bg-center flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-56 mt-10   ">
                    {generaciones.map((gen) => (
                        <GenerationCard key={gen.id} url={`${url}${gen.id}`} data={gen} />
                    ))}
                </div>
        </div>

    )
}

export default page