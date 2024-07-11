"use client"

import React from 'react'
import { useParams, useRouter } from 'next/navigation';
import TipePokemon from '../../components/TipePokemon';
import StatsPokemon from '../../components/StatsPokemon';
import DesPokemon from '../../components/DesPokemon';

const page = (props) => {

  const params = useParams();

  // console.log(props);
  let id = props.params.id;
  let name = props.searchParams.name;
  let img = props.searchParams.img;


  // console.log(params);

  return (
    <div className=' mb-8 h-[782px]'>
      <div className=' flex justify-center'>
        <div className="max-w-lg rounded overflow-hidden shadow-lg mt-5  mr-2 ml-2 ">
          <div className='border-[14px] border-cyan-900 sm:h-[764px] xl:h-[784px] bg-gradient-to-tl from-slate-50 to-slate-200'>
            <div className='flex justify-between'>
              <p className="  font-bold text-3xl pl-4 pt-2 capitalize text-center text-emerald-900">{name}</p>
              <p className='text-right  pr-4 pt-2 font-bold text-2xl text-stone-800'>N° 0{id}</p>
            </div>



            <picture className='flex justify-center w-full'>
              <img src={img} alt="img_poke" className='w-11/12 ' />
            </picture>

            <div className="px-4 pb-2 text-2xl font-bold ">

              <TipePokemon id={id} />
            </div>

            <div className=" pb-2 pr-4 pl-4 text-lg font-semibold text-emerald-900 flex flex-col justify-center">
              <DesPokemon id={id} />
            </div>

            <StatsPokemon id={id} />

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