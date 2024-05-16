"use client"


import { useParams } from 'next/navigation';
import RegionDetails from '../../components/GenerationDetails'
import { generacionesDB } from '@/utils/generacionesDB';

const page = (props) => {
    const params = useParams()
    let id = params.id;
    
  return (
    <div>
      <RegionDetails id={id} />
    </div>
  )
}

export default page