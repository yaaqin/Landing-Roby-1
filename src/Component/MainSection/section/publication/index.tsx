import React from 'react'

export default function Publication() {
    return (
        <div className='mt-[156px]'>
            <div className='flex justify-between'>
                <h2 className='font-semibold text-[40px]'>Publication</h2>
                <p className='w-[550px] text-[16px] font-medium'>Explore our publications filled with in-depth insights into architectural trends, design innovations, and project case studies. From articles to journals, discover knowledge and inspiration that can enrich your understanding of the world of modern architecture.</p>
            </div>
            <div className='mt-[40px] flex gap-[21px]'>
                <div className="relative w-64 h-[629px] overflow-hidden group duration-300">
                    <img
                        src="./assets/img1.png"
                        alt="Chancery Lane"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-transparent bg-opacity-75 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                        <h2 className="text-white text-2xl font-bold">Chancery Lane</h2>
                        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">Fill × Hug</button>
                        <button className="mt-2 text-white">View More</button>
                    </div>
                </div>
                <div className="relative w-64 h-[629px] overflow-hidden group duration-300">
                    <img
                        src="./assets/img2.png"
                        alt="Chancery Lane"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-transparent bg-opacity-75 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                        <h2 className="text-white text-2xl font-bold">Chancery Lane</h2>
                        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">Fill × Hug</button>
                        <button className="mt-2 text-white">View More</button>
                    </div>
                </div>
                <div className="relative w-64 h-[629px] overflow-hidden group duration-300">
                    <img
                        src="./assets/img3.png"
                        alt="Chancery Lane"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-transparent bg-opacity-75 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                        <h2 className="text-white text-2xl font-bold">Chancery Lane</h2>
                        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">Fill × Hug</button>
                        <button className="mt-2 text-white">View More</button>
                    </div>
                </div>
                <div className="relative w-64 h-[629px] overflow-hidden group duration-300">
                    <img
                        src="./assets/img4.png"
                        alt="Chancery Lane"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-transparent bg-opacity-75 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                        <h2 className="text-white text-2xl font-bold">Chancery Lane</h2>
                        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">Fill × Hug</button>
                        <button className="mt-2 text-white">View More</button>
                    </div>
                </div>
                <div className="relative w-64 h-[629px] overflow-hidden group duration-300">
                    <img
                        src="./assets/img5.png"
                        alt="Chancery Lane"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-transparent bg-opacity-75 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                        <h2 className="text-white text-2xl font-bold">Chancery Lane</h2>
                        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">Fill × Hug</button>
                        <button className="mt-2 text-white">View More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
