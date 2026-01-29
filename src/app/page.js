import Image from "next/image"; 
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    
  
      <div className="bg-white p-4 w-screen min-h-screen text-center flex flex-col items-center justify-center">

      

        <div className="bg-white p-4 w-screen min-h-screen text-center flex flex-col items-center justify-center">
        <h1 className="font-bold text-black text-5xl ">São Tomé Das Letras</h1>
        <p className="text-sm text-gray-600"><br/>Conhecida como a cidade mítica de Minas, com suas montanhas, cachoeiras e
        <br/> lendas sobre discos voadoreseportais misticos</p>
        <br/>
        <p className="text-xs text-green-600">Visitar site oficial --</p>

        <br/>

  {/*------------------------------------ROW IMAGE 1--------------------------------------------*/}

        <div className="bg-transparent w-1/2 h-2/6 flex justify-center">

          <div className="w-1/3 h-12/13 m-4 bg-gray-100 rounded-lg shadow-lg shadow-gray-500/50 text-start justify-center items-center"> 
          <Image className="rounded-t-lg max-h-46" src="/m1.jpg" alt="Montanha" width={350} height={200}/>
          <h3 className="m-2 text-black font-bold">Pedra da Bruxa</h3>
          <p className="m-2 text-gray-700 text-sm">Formação rochosa mistica com vista
          <br/>paronâmica</p>
          </div>

          <div className="w-1/3 h-12/13 m-4 bg-gray-100 rounded-lg shadow-lg shadow-gray-500/50 text-start justify-center items-center"> 
          <Image className="rounded-t-lg max-h-46" src="/m2.jpg" alt="Montanha" width={350} height={200}/>
          <h3 className="m-2 text-black font-bold">Serra das Letras</h3>
          <p className="m-2 text-gray-700 text-sm">Montanha com trilhas incriveis</p>
          </div>

          <div className="w-1/3 h-12/13 m-4 bg-gray-100 rounded-lg shadow-lg shadow-gray-500/50 text-start justify-center items-center"> 
          <Image className="rounded-t-lg max-h-46" src="/m3.jpg" alt="Montanha" width={350} height={200}/>
          <h3 className="m-2 text-black font-bold">Cachoeiras</h3>
          <p className="m-2 text-gray-700 text-sm">Quedas d'agua cristalinas</p>
          </div>

        </div>

    {/*------------------------------------ROW IMAGE 2--------------------------------------------*/}

      <div className="bg-transparent w-1/2 h-2/6 flex justify-center">

          <div className="w-1/3 h-12/13 m-4 bg-gray-100 rounded-lg shadow-lg shadow-gray-500/50 text-start justify-center items-center"> 
          <Image className="rounded-t-lg max-h-43" src="/m4.jpg" alt="Montanha" width={350} height={200}/>
          <h3 className="m-2 text-black font-bold">Naturesa Exuberante</h3>
          <p className="m-2 text-gray-700 text-sm">Mata atlântica preservada</p>
          </div>

          <div className="w-1/3 h-12/13 m-4 bg-gray-100 rounded-lg shadow-lg shadow-gray-500/50 text-start justify-center items-center"> 
          <Image className="rounded-t-lg max-h-46" src="/m5.jpg" alt="Montanha" width={350} height={200}/>
          <h3 className="m-2 text-black font-bold">Nascer do Sol</h3>
          <p className="m-2 text-gray-700 text-sm">Visitas deslunbrantes ao amanhecer</p>
          </div>

          <div className="w-1/3 h-12/13 m-4 bg-gray-100 rounded-lg shadow-lg shadow-gray-500/50 text-start justify-center items-center"> 
          <Image className="rounded-t-lg min-h-43" src="/m6.jpg" alt="Montanha" width={350} height={200}/>
          <h3 className="m-2 text-black font-bold">Grutas Mistícas</h3>
          <p className="m-2 text-gray-700 text-sm">Cavernas com historias fascinantes</p>
          </div>

        </div>
    </div>


        
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
