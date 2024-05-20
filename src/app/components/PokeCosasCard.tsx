import React from 'react'
import { pokeCosasDB } from '@/utils/pokeCosasDB'
import Link from 'next/link';

const PokeCosasCard = (props: any) => {

    let data = props.data;

  return (
   <Link href={`pokecosas/${data.id}`} data={data} id={data.id}>
            <div
                className="block max-w-sm  md:max-w-xs m-4  lg:max-w-md md:h-max  rounded-lg bg-yellow-100 shadow-secondary-1 opacity-90  mt-6 p-4">
                <div className=" text-surface flex justify-center">
                    <h5 className="mt-2 text-3xl font-bold  text-slate-950 capitalize font-heading text-center">
                        {data.title}
                    </h5>
                </div>


                <div className='flex justify-center '>
                    <img
                        className="w-11/12 h-48  object-cover pt-4 rounded-lg"
                        src={data.image}
                        alt="" />
                </div>
            </div>
        </Link>
  )
}

export default PokeCosasCard