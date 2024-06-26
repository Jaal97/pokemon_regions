"use client"


import { useParams } from 'next/navigation';
import RegionDetails from '../../components/GenerationDetails'
import { generacionesDB } from '@/utils/generacionesDB';

const page = (props) => {
    const params = useParams()
    let id = params.id;
    
  return (
    <div className="bg-[url('https://images4.alphacoders.com/717/thumb-1920-717265.jpg')]  bg-repeat   w-full h-auto bg-center flex justify-center">
      <RegionDetails id={id} />
    </div>
  )
}

export default page