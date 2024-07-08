"use client"

import React from 'react'
import { useParams, useRouter } from 'next/navigation';

const page = (props) => {

    console.log(props)

    const params = useParams();
    // console.log(params);

  return (
    <div>
        <h2>Detalles Pokémon</h2>
        <p></p>
    </div>
  )
}

export default page