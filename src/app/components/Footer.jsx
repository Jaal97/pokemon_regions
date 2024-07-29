import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer class="bg-yellow-200 ">
            <div className='flex justify-center pt-4'>
                <ul class="flex flex-wrap items-center mt-3 text-xl font-semibold text-black sm:mt-0 ">
                    <li >
                        <Link href={'/'} className='flex hover:text-blue-700'>
                            <img src="https://cdn.icon-icons.com/icons2/2248/PNG/512/home_circle_icon_137496.png" className='w-8 ml-1 pr-1' alt="home" />
                            <span className=" me-4 md:me-6  font-medium ">Home</span>
                        </Link>

                    </li>
                    <li >
                        <Link href={'/contacto'} className='flex hover:text-blue-700'>
                            <img src="https://cdn2.iconfinder.com/data/icons/boxicons-solid-vol-1/24/bxs-contact-512.png" className='w-8 ml-1 pr-1' alt="contacto" />
                            <span className=" font-medium ">Contacto</span>
                        </Link>

                    </li>
                </ul>
            </div>
            <div class="w-full mx-auto max-w-screen-xl p-4  md:h-16  text-slate-900">
                <p className='text-center text-lg font-medium'>
                    <Link href={'https://www.pokemon.com/el'} target='__blank'>
                        Pokémon © 1995 - 2024 Nintendo, Creatures, Game Freak
                    </Link>
                    -
                    <Link href={'https://github.com/Jaal97'} target='__blank'>
                        Jaal97 2024
                    </Link>

                </p>
            </div>
        </footer>
    )
}

export default Footer

