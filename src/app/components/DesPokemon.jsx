import React from 'react';
import { useEffect, useState } from 'react';

const DesPokemon = (props) => {

    let id = props.id;
    const [isLoading, setLoading] = useState(true);
    const [pokeDes, setPokeDes] = useState([]);


    //url
    let url = `${process.env.NEXT_PUBLIC_API_URL}/pokemon-species/${id}`;


    //generacion
    let generation;


    //description
    let description;


    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setPokeDes(data)
                setLoading(false)

            })
    }, [isLoading])



    if (isLoading) {
        return <div className='flex items-center justify-center '>
            <div className="border-top-color:transparent w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
            <p className="ml-2">cargando...</p>
        </div>
    }

    // console.log(pokeDes.flavor_text_entries);
    //console.log(pokeDes.generation.name);
    generation = pokeDes.generation.name;
    // description = pokeDes.flavor_text_entries[34].flavor_text;


    switch (generation) {
        case "generation-i":
            // description = pokeDes.flavor_text_entries[50].flavor_text;
            description = pokeDes.flavor_text_entries[50] === undefined ? pokeDes.flavor_text_entries[0].flavor_text : pokeDes.flavor_text_entries[50].flavor_text;
            break;
        case "generation-ii":
            // description = pokeDes.flavor_text_entries[39].flavor_text;
            description = pokeDes.flavor_text_entries[39] === undefined ? pokeDes.flavor_text_entries[0].flavor_text : pokeDes.flavor_text_entries[39].flavor_text;
            break;
        case "generation-iii":
            // description = pokeDes.flavor_text_entries[36].flavor_text;
            description = pokeDes.flavor_text_entries[36] === undefined ? pokeDes.flavor_text_entries[0].flavor_text : pokeDes.flavor_text_entries[36].flavor_text;
            break;
        case "generation-iv":
            // description = pokeDes.flavor_text_entries[31].flavor_text;
            description = pokeDes.flavor_text_entries[31] === undefined ? pokeDes.flavor_text_entries[0].flavor_text : pokeDes.flavor_text_entries[31].flavor_text;
            break;
        case "generation-v":
            // description = pokeDes.flavor_text_entries[26].flavor_text;
            description = pokeDes.flavor_text_entries[26] === undefined ? pokeDes.flavor_text_entries[0].flavor_text : pokeDes.flavor_text_entries[26].flavor_text;
            break;
        case "generation-vi":
            // description = pokeDes.flavor_text_entries[20].flavor_text;
            description = pokeDes.flavor_text_entries[20] === undefined ? pokeDes.flavor_text_entries[0].flavor_text : pokeDes.flavor_text_entries[20].flavor_text;
            break;
        case "generation-vii":
            // description = pokeDes.flavor_text_entries[5].flavor_text;
            description = pokeDes.flavor_text_entries[5] === undefined ? pokeDes.flavor_text_entries[0].flavor_text : pokeDes.flavor_text_entries[5].flavor_text;
            break;
        case "generation-viii":
            // description = pokeDes.flavor_text_entries[15].flavor_text;
            description = pokeDes.flavor_text_entries[15] === undefined ? pokeDes.flavor_text_entries[0].flavor_text : pokeDes.flavor_text_entries[15].flavor_text;

            break;
        case "generation-ix":
            description = pokeDes.flavor_text_entries[0].flavor_text;
            break;

        default:
            ""
    }

    return (

        <div className=''>
            <p className='text-justify'>{description}</p>
        </div>
    )
}

export default DesPokemon