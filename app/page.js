import Image from "next/image"; 
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    
  
      <div className="bg-black p-4 w-screen min-h-screen text-center flex flex-col items-center justify-center">



        
      {/*------------------------------LOJA DE CARROS------------------------------*/}

<div className="bg-white p-4 w-screen h-screen text-center flex flex-col items-center justify-center">
  <div className="bg-white w-1/2 max-h-1/2 text-center flex flex-col items-center justify-center m-20">
         <h1 className="font-bold text-black text-4xl font-serif flex"><Image className="rounded-t-lg" src="/icon.jpg" alt="Montanha" width={40} height={200}/>
         AcinAutomotores</h1>
</div>

        {/*------------------------------FILEIRA 1------------------------------*/}
 <div className="bg-white w-screen h-2/4 flex justify-center items-center">
         <div
      className="w-1/6 h-11/12 rounded-2xl bg-gray-200 items-center justify-center m-10 shadow-lg shadow-gray-500/50"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/images/blog/image-1.jpg"
    >

       <Image className="rounded-t-lg max-h-53" src="/civic3.jpg" alt="Montanha" width={320} height={200}/>

     <h5 className="text-lg font-bold tracking-tight text-black mt-4 ml-4">
       HONDA CIVIC  
      </h5>
      <p className="font-normal text-xs text-gray-800 dark:text-gray-400 ml-4">
        2.0 16V FLEXONE EX 4P CVT
      </p>
      <p className="font-medium text-base text-gray-800 dark:text-gray-400 ml-4 mt-1">
        2021/2021
      </p>
      <h2 className=" text-2xl font-bold text-gray-900 m-4">R$ 134.790</h2>
  
       <button className="shadow-[0_4px_14px_0_rgb(26,26,26,0.9)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(26,26,26,0.9)] px-8 py-2 bg-[#000000] rounded-md text-white font-light transition duration-200 ease-linear">
  Ver Detalhes</button>
    </div>


     <div
      className="w-1/6 h-11/12 rounded-2xl bg-gray-200 justify-center items-center m-10 shadow-lg shadow-gray-500/50"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/images/blog/image-1.jpg"
    >

       <Image className="rounded-t-lg max-h-62" src="/civic2.jpg" alt="Montanha" width={320} height={200}/>

     <h5 className="text-lg font-bold tracking-tight text-black mt-4 ml-4">
       HONDA CIVIC  
      </h5>
      <p className="font-normal text-xs text-gray-800 dark:text-gray-400 ml-4">
        2.0 16V FLEXONE EX 4P CVT
      </p>
      <p className="font-medium text-base text-gray-800 dark:text-gray-400 ml-4 mt-1">
        2021/2021
      </p>
      <h2 className=" text-2xl font-bold text-gray-900 m-4">R$ 134.790</h2>

       <button className="shadow-[0_4px_14px_0_rgb(26,26,26,0.9)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(26,26,26,0.9)] px-8 py-2 bg-[#000000] rounded-md text-white font-light transition duration-200 ease-linear">
  Ver Detalhes</button>
    </div>

    <div
      className="w-1/6 h-11/12 rounded-2xl bg-gray-200 justify-center items-center m-10 shadow-lg shadow-gray-500/50"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/images/blog/image-1.jpg"
    >

       <Image className="rounded-t-lg min-h-53" src="/civic5.jpg" alt="Montanha" width={350} height={300}/>

      <h5 className="text-lg font-bold tracking-tight text-black mt-4 ml-4">
       HONDA CIVIC  
      </h5>
      <p className="font-normal text-xs text-gray-800 dark:text-gray-400 ml-4">
        2.0 16V FLEXONE EX 4P CVT
      </p>
      <p className="font-medium text-base text-gray-800 dark:text-gray-400 ml-4 mt-1">
        2021/2021
      </p>
      <h2 className=" text-2xl font-bold text-gray-900 m-4">R$ 134.790</h2>

       <button className="shadow-[0_4px_14px_0_rgb(26,26,26,0.9)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(26,26,26,0.9)] px-8 py-2 bg-[#000000] rounded-md text-white font-light transition duration-200 ease-linear">
  Ver Detalhes</button>
    </div>
    
    

</div>

    {/*------------------------------FILEIRA 2------------------------------*/}
  <div className="bg-white w-screen h-2/3 flex justify-center items-center">
  
     <div
      className="w-1/6 h-11/12 rounded-2xl bg-gray-200 items-center justify-center m-10 shadow-lg shadow-gray-500/50"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/images/blog/image-1.jpg"
    >

       <Image className="rounded-t-lg max-h-60" src="/coro1.jpg" alt="Montanha" width={320} height={200}/>

     <h5 className="text-lg font-bold tracking-tight text-black mt-4 ml-4">
       HONDA CIVIC  
      </h5>
      <p className="font-normal text-xs text-gray-800 dark:text-gray-400 ml-4">
        2.0 16V FLEXONE EX 4P CVT
      </p>
      <p className="font-medium text-base text-gray-800 dark:text-gray-400 ml-4 mt-1">
        2021/2021
      </p>
      <h2 className=" text-2xl font-bold text-gray-900 m-4">R$ 134.790</h2>
  
        <button className="shadow-[0_4px_14px_0_rgb(26,26,26,0.9)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(26,26,26,0.9)] px-8 py-2 bg-[#000000] rounded-md text-white font-light transition duration-200 ease-linear">
  Ver Detalhes</button>
    </div>


     <div
      className="w-1/6 h-11/12 rounded-2xl bg-gray-200 justify-center items-center m-10 shadow-lg shadow-gray-500/50"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/images/blog/image-1.jpg"
    >

       <Image className="rounded-t-lg max-h-62" src="/coro2.jpg" alt="Montanha" width={320} height={200}/>

     <h5 className="text-lg font-bold tracking-tight text-black mt-4 ml-4">
       HONDA CIVIC  
      </h5>
      <p className="font-normal text-xs text-gray-800 dark:text-gray-400 ml-4">
        2.0 16V FLEXONE EX 4P CVT
      </p>
      <p className="font-medium text-base text-gray-800 dark:text-gray-400 ml-4 mt-1">
        2021/2021
      </p>
      <h2 className=" text-2xl font-bold text-gray-900 m-4">R$ 134.790</h2>

      <button className="shadow-[0_4px_14px_0_rgb(26,26,26,0.9)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(26,26,26,0.9)] px-8 py-2 bg-[#000000] rounded-md text-white font-light transition duration-200 ease-linear">
  Ver Detalhes</button>
    </div>

    <div
      className="w-1/6 h-11/12 rounded-2xl bg-gray-200 justify-center items-center m-10 shadow-lg shadow-gray-500/50"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/images/blog/image-1.jpg"
    >

       <Image className="rounded-t-lg max-h-59" src="/coro3.jpg" alt="Montanha" width={350} height={300}/>

      <h5 className="text-lg font-bold tracking-tight text-black mt-4 ml-4">
       HONDA CIVIC  
      </h5>
      <p className="font-normal text-xs text-gray-800 dark:text-gray-400 ml-4">
        2.0 16V FLEXONE EX 4P CVT
      </p>
      <p className="font-medium text-base text-gray-800 dark:text-gray-400 ml-4 mt-1">
        2021/2021
      </p>
      <h2 className=" text-2xl font-bold text-gray-900 m-4">R$ 134.790</h2>

       <button className="shadow-[0_4px_14px_0_rgb(26,26,26,0.9)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(26,26,26,0.9)] px-8 py-2 bg-[#000000] rounded-md text-white font-light transition duration-200 ease-linear">
  Ver Detalhes</button>
    </div>
  
  
  </div>
       </div>

      </div>


    
  );  
}
