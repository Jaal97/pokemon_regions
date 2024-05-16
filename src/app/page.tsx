import RegionCard from "./components/RegionCard";
import { generacionesDB } from "@/utils/generacionesDB";


export default function Home() {

 
  let generaciones = generacionesDB;
  let url = `${process.env.NEXT_PUBLIC_API_URL}/generation/`;

  return (
    <main className=" flex justify-center ">
      <div className="bg-[url('https://images4.alphacoders.com/717/thumb-1920-717265.jpg')]  bg-repeat lg:bg-no-repeat bg-center w-full h-auto flex justify-center">

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-56 mt-10   ">
      {generaciones.map((gen) => (
        <RegionCard key={gen.id} url={`${url}${gen.id}`} data={gen}/>
      ))}
      </div>
      </div>
    </main>
  );
}
