
"use client"

import React from 'react'
import { useParams } from 'next/navigation';
import PokeCosasDetails from '../../components/PokeCosasDetails'

const page = () => {

    const params = useParams();
    let id = params.id;

  return (
    <div className="bg-[url('https://images4.alphacoders.com/717/thumb-1920-717265.jpg')]  bg-repeat   w-full h-auto bg-center flex justify-center">
    <PokeCosasDetails id={id} />
  </div>
  )
}

export default page