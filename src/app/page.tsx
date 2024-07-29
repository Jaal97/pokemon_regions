import { pokeCosasDB } from "@/utils/pokeCosasDB";
import PokeCosasCard from "./components/PokeCosasCard";


export default function Home() {

  let pokeCosas = pokeCosasDB;
  // console.log(pokeCosas)


  return (

      <div className="bg-[url('https://images4.alphacoders.com/717/thumb-1920-717265.jpg')]  bg-repeat lg:bg-no-repeat  w-full h-auto flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-56 mt-10   ">
          {pokeCosas.map((poke) => (
            <PokeCosasCard key={poke.id}  data={poke} />
          ))}
        </div>
      </div>
   
  );
}
