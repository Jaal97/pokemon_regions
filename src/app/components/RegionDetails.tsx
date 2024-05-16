import React from 'react'
import { useParams, useRouter } from 'next/navigation';

const RegionDetails = (props:any) => {

    let data = props.data;

    return (
        <div className="p-6 text-surface dark:text-white">
            <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
            <p className="mb-4 text-base text-fuchsia-950">
                {data.main_region.name}
            </p>
            <h3 className='text-fuchsia-950 mt-2 mb-3'>Juegos</h3>
            <div className='mt-2 grid grid-cols-2 gap-1  justify-evenly md:min-h-80'>

                {data.version_groups.map((version) => (
                    <p className="mb-4 text-base text-fuchsia-950 w-26">
                        {version.name}
                    </p>
                ))}
            </div>
            <div>




            </div>

        </div>
    )
}

export default RegionDetails