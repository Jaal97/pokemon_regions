"use client"

import React from 'react'
import { useParams, useRouter } from 'next/navigation';
import TipePokemon from '../../components/TipePokemon';

const page = (props) => {

  const params = useParams();

  console.log(props);
  let id = props.params.id;
  let name = props.searchParams.name;
  let img = props.searchParams.img;


  // console.log(params);

  return (
    <div className='flex justify-center'>
      <div className="max-w-lg rounded overflow-hidden shadow-lg mt-8 mb-8">
        <div className='border-[14px] border-cyan-900'>
          <div className='flex justify-between'>
            <p className="  font-bold text-2xl pl-4 pt-2 capitalize text-center ">{name}</p>
            <p className='text-right  pr-4 pt-2 font-bold text-2xl'>N° 0{id}</p>
          </div>



          <picture className='flex justify-center w-full'>
            <img src={img} alt="img_poke" className='w-11/12 ' />
          </picture>

          <div className="px-6 pb-2 text-2xl font-bold ">
            Tipo
             <TipePokemon id={id} />
          </div>

          <div className="px-6 py-4">

            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          
        </div>

      </div>
    </div>



  )
}

export default page

{/* <div className='text-center pb-2 pr-2 pl-2'>
        <TipePokemon id={id} />
      </div> */}