import React from 'react'
import Link from 'next/link';

const page = () => {
    return (
        <div className='flex justify-center h-[82vh] w-full '>


            <div class="flex flex-col justify-center items-center bg-white shadow  md:max-w-xl lg:max-w-2xl h-auto mb-16 mt-16">
                <picture className='lg:w-8/12'>
                    <img src="https://ahmur.org/wp-content/uploads/2020/12/contacto-amarh2-marmenor.png" alt="contacto" />
                </picture>

                <div class="flex flex-col  p-4 leading-normal ">
                    <h5 class="mb-2 text-xl font-bold tracking-tight text-center text-gray-900">Ponte En Contacto Con Jaal</h5>
                    <div className='flex justify-left'>
                        <picture>
                            <img className='w-8' src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-gmail-256.png" alt="gmail" />
                        </picture>
                        <p class=" font-semibold text-gray-700 ml-2">
                            jaal9709@gmail.com
                        </p>
                    </div>
                    <div className='flex justify-left'>
                        <picture>
                            <img className=' w-8' src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Whatsapp-256.png" alt="gmail" />
                        </picture>
                        <Link href={'https://api.whatsapp.com/send/?phone=573126289502&text=Hola!+Deseo+ponerme+en+contacto+contigo+&type=phone_number&app_absent=0'} target='__blank' class=" font-semibold text-gray-700 mt-1">
                            +57 312 628 9502
                        </Link>
                    </div>
                   
                </div>
            </div>


        </div>
    )
}

export default page