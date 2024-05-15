import RegionCard from "./components/RegionCard";
import { generacionesDB } from "@/utils/generacionesDB";


export default function Home() {

 
  let generaciones = generacionesDB;
  let url = `${process.env.NEXT_PUBLIC_API_URL}/generation/`;

  return (
    <main className=" flex flex-row sm:flex-row flex-wrap bg-gray-200 w-full min-h-screen  justify-center items-center">
      {generaciones.map((gen) => (
        <RegionCard key={gen.id} url={`${url}${gen.id}`} data={gen}/>
      ))}
    </main>
  );
}
