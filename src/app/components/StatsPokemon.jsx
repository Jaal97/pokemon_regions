import React from 'react';
import { useEffect, useState } from 'react';

const StatsPokemon = (props) => {

    let id = props.id;
    const [isLoading, setLoading] = useState(true);

    const [pokes, setPokes] = useState([]);


    //Stats
    let hp;
    let defense;
    let attack;

    //description
    let description;

    let url = `${process.env.NEXT_PUBLIC_API_URL}/pokemon/${id}`;
   

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setPokes(data)
                setLoading(false)
                
            })
    }, [isLoading])
    

    if (isLoading) {
        return <div className='flex items-center justify-center '>

        </div>
    }


    //asignamos los valores de los stats
    hp = pokes.stats[0].base_stat;
    defense = pokes.stats[2].base_stat ;
    attack = pokes.stats[1].base_stat ;


    return (
        <div className='flex justify-around mt-4 mb-4 font-bold text-xl'>
            
                
                <p className='text-lime-600 font-extrabold'>
                    <span className='text-zinc-600 font-bold'>HP: </span>
                    {hp}</p>
          
               
                <p className='text-sky-700 font-extrabold'> <span className='text-zinc-700 font-bold'>Defense: </span> 
                    {defense}</p>
            
                
                <p className='text-orange-600 font-extrabold'><span className='text-zinc-700 font-bold'>Attack: </span> 
                    {attack}</p>
           
        </div>

    )
}

export default StatsPokemon