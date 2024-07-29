"use client";

import React from 'react'
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {

  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick)
  }


  return (

    <nav className="bg-yellow-200">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4">

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
            <li>

              <Link href="/" className="flex py-2 px-3 text-xl text-gray-900 rounded pl-1 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  hover:text-blue-500   ">
                <img src="https://cdn.icon-icons.com/icons2/2248/PNG/512/home_circle_icon_137496.png" className='w-8 ml-1' alt="home" />

                <span className='pl-1'>Home</span>
              </Link>
            </li>
            <li className='flex'>
              
              <Link href="/generaciones" className="flex py-2 px-3 text-xl text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  hover:text-blue-500   ">
              <img src="https://cdn.icon-icons.com/icons2/41/PNG/128/pokemon_7025.png" className='w-8 ml-2' alt="poke" />
                <span className='pl-2'>
                  Generaciones
                </span>
                </Link>
            </li>
            <li className='flex'>
             
              <Link href="/pokego" className="flex py-2 px-3 text-xl text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  hover:text-blue-500   ">
              <img src="https://cdn.icon-icons.com/icons2/851/PNG/512/Mobile_Phone_icon-icons.com_67541.png" className='w-8 ml-1' alt="pokeGo" />
                <span>
                  Pokémon Go
                </span>
                
                </Link>
            </li>
            <li className='flex'>
              
              <Link href="/pokedex" className="flex py-2 px-3 text-xl text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  hover:text-blue-500   ">
              <img src="https://cdn.icon-icons.com/icons2/851/PNG/512/Pokedex_icon-icons.com_67530.png" className='w-8 ml-1' alt="pokedex" />
                <span className=''>
                Pokédex
                </span>
                </Link>
            </li>
          </ul>
        </div>
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://cdn3.iconfinder.com/data/icons/pokemon-go-3/512/pokemon_go_play_game_cinema_film_movie-256.png" alt="char" className='w-8' />
          <span className="self-center text-2xl md:hover:text-blue-700 md:p-0  hover:text-blue-500 font-semibold whitespace-nowrap ">Pokelements</span>
        </a>
        <button onClick={toggleNavbar} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-yellow-400 focus:outline-none ">
          <span className=' flex justify-end text-3xl cursor-pointer lg:hidden mx-2 '>


            {
              isClick ? (
                <svg className="h-6 w-6 text-black border-black "
                  xmlns="http://www.w3.org/2000/svg"

                  fill="none"

                  viewBox="0 0 24 24"

                  stroke="currentColor" >

                  <path

                    strokeLinecap="round"

                    strokeLinejoin="round"

                    strokeWidth={2}

                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              )
                : (
                  <svg className="w-5 h-5 text-black" aria-hidden="true" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
                )
            }
          </span>
        </button>


        {isClick && (
          <div className='md:hidden '>

            <ul className='text-slate-950 z-10 md:flex md:items-center  md:static absolute  w-full left-0 md:w-auto md:py-0 py-4 md:pl-0  mt-5  bg-yellow-50'>

              <li className='mx-4 my-6 lg:my-0'>
                <Link className='text-xl  md:p-0  hover:text-blue-600 duration-400' href="/">
                  <button onClick={toggleNavbar} className="flex">
                    <img src="https://cdn.icon-icons.com/icons2/2248/PNG/512/home_circle_icon_137496.png" className='w-8 ml-1' alt="home" />
                    <span className="pl-1">Home</span>
                  </button>
                </Link>
              </li>
              <li className='mx-4 my-6 md:my-0'>
                <Link className='text-xl  md:p-0  hover:text-blue-600 duration-400' href="/generaciones">
                  <button onClick={toggleNavbar} className="flex">
                    <img src="https://cdn.icon-icons.com/icons2/41/PNG/128/pokemon_7025.png" className='w-6 ml-2' alt="poke" />
                    <span className='pl-2'>Generaciones</span>
                  </button>
                </Link>
              </li>
              <li className='mx-4 my-6 lg:my-0'>
                <Link className='text-xl  md:p-0  hover:text-blue-600 duration-400' href="/pokego">
                  <button onClick={toggleNavbar} className="flex">
                    <img src="https://cdn.icon-icons.com/icons2/851/PNG/512/Mobile_Phone_icon-icons.com_67541.png" className='w-8 ml-1' alt="pokeGo" />
                    <span className='pl-1'>Pokémon Go</span>
                  </button>
                </Link>
              </li>
              <li className='mx-4 my-6 lg:my-0'>
                <Link className='text-xl  md:p-0  hover:text-blue-600 duration-400' href="/pokedex">
                  <button onClick={toggleNavbar} className="flex">
                    <img src="https://cdn.icon-icons.com/icons2/851/PNG/512/Pokedex_icon-icons.com_67530.png" className='w-8 ml-1' alt="pokedex" />
                    <span className='pl-1'>Pokédex</span>
                  </button>
                </Link>
              </li>
            </ul>

          </div>
        )}


      </div>
    </nav>


  )
}

export default Navbar