import React from 'react'

const Footer = () => {
    return (
        <footer class="bg-yellow-200 ">
            <div className='flex justify-center pt-4'>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Home</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Acerca De</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contacto</a>
                    </li>
                </ul>
            </div>
            <div class="w-full mx-auto max-w-screen-xl p-4  md:h-16  ">
                <p className='text-center '>
                    Pokémon © 1995 - 2024 Nintendo, Creatures, Game Freak - Jaal97 2024
                </p>
            </div>
        </footer>
    )
}

export default Footer

