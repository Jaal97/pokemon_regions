"use client"

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { generacionesDB } from '@/utils/generacionesDB';

const page = (props) => {
    const params = useParams()
    let id = params.id;

    const [generation, setGeneration] = useState([]);
    const [isLoading, setLoading] = useState(true);

    let url = `${process.env.NEXT_PUBLIC_API_URL}/generation/${id}`;


    useEffect(() => {
         fetch(url, {
             method: 'GET',
             headers: {
                 "Content-Type": "application/json",
             },
         })
             .then((res) => res.json())
             .then((data) => {
                 setGeneration(data)
                 setLoading(false)
             })
     }, [id, params])

    console.log(generation);

  return (
    <div>region</div>
  )
}

export default page