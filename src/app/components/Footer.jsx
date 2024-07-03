import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer class="bg-yellow-200 ">
            <div className='flex justify-center pt-4'>
                <ul class="flex flex-wrap items-center mt-3 text-xl font-semibold text-yellow-600 sm:mt-0 ">
                    <li>
                        <a href="/" class="hover:underline me-4 md:me-6  font-medium hover:text-blue-700">Home</a>
                    </li>
                    <li>
                        <a href="/contacto" class="hover:underline  font-medium hover:text-blue-700">Contacto</a>
                    </li>
                </ul>
            </div>
            <div class="w-full mx-auto max-w-screen-xl p-4  md:h-16  ">
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

