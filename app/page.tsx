import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      {/* <h1 className='text-white bg-green-600 border-4 border-red-500'>
      Hello World !
    </h1>
    <br/>
    <h1 className='text-saleem-100 bg-saleem-200 border-4 border-gray-500'>
      Hello World !
    </h1> */}

      {/* <p className="text-sm 
                    sm:text-base
                    md:text-xl 
                    lg:text-2xl text-[#eb34d9]">First Peragraph</p> */}

      {/* <h2 className="py-1 px-2 bg-red-500 text-white">Hello World !</h2> */}

      {/* <div>Header</div>
      <div className="flex flex-col md:flex-row">
     
        <div className="flex flex-wrap  w-full">
          <div className="w-32 h-10 bg-red-400 grow">1</div>
          <div className="w-32 h-10 bg-green-400 grow">2</div>
          <div className="w-32 h-10 bg-sky-400 grow">3</div>
          <div className="w-32 h-10 bg-gray-400 grow">4</div>
          <div className="w-32 h-10 bg-teal-400 grow">5</div>
        </div>
      </div> */}
      {/* 
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
        <div className="bg-sky-400 rounded-lg p-4">1</div>
        <div className="bg-gray-400 rounded-lg p-4">2</div>
        <div className="bg-green-400 rounded-lg p-4">3</div>
        <div className="bg-red-400 rounded-lg p-4">4</div>
      </div> */}

      <div className="grid grid-flow-col grid-rows-4">
        <div className="bg-sky-400 rounded-lg p-4">1</div>
        <div className="bg-gray-400 rounded-lg p-4">2</div>
        <div className="bg-green-400 rounded-lg p-4">3</div>
        <div className="bg-red-400 rounded-lg p-4">4</div>
        <div className="bg-teal-400 rounded-lg p-4">5</div>
        <div className="bg-cyan-400 rounded-lg p-4">6</div>
      </div>
    </div>
  );
}
