import React from 'react'

export default function OurProject() {
    return (
        <div className='mt-[62px]'>
            <head className='flex justify-between items-center'>
                <menu>
                    <h3 className='text-[40px] font-semibold'>Our Project</h3>
                    <p className='w-[550px] text-[16px] font-medium mt-[14px]'>View our portfolio of projects that combine innovation and beauty. From residential to commercial buildings, each Arsoitek design reflects creativity and sustainability. Discover how we bring vision to life.</p>
                </menu>
                <section className='flex gap-[33px] font-medium text-[20px]'>
                    <p className='border-b-[2px] px-[8px] border-[#fff]'>RESIDENTIAL</p>
                    <p className='border-b-[2px] px-[8px] border-[#000]'>HOSPITALITY</p>
                    <p className='border-b-[2px] px-[8px] border-[#000]'>CONSERVATION</p>
                    <p className='border-b-[2px] px-[8px] border-[#000]'>RESTAURANT</p>
                </section>
            </head>
            <aside className='flex gap-[25px] mt-[45px]'>
                <div className="relative w-[501px] h-[771px] overflow-hidden group duration-300">
                    <img
                        src="./assets/our1.png"
                        alt="Chancery Lane"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-transparent bg-opacity-75 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                        <h2 className="text-white text-2xl font-bold">Chancery Lane</h2>
                        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">Fill × Hug</button>
                        <button className="mt-2 text-white">View More</button>
                    </div>
                </div>
                <div>
                <div className="relative w-[832px] h-[373px] overflow-hidden group duration-300">
                    <img
                        src="./assets/our2.png"
                        alt="Chancery Lane"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-transparent bg-opacity-75 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                        <h2 className="text-white text-2xl font-bold">Chancery Lane</h2>
                        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">Fill × Hug</button>
                        <button className="mt-2 text-white">View More</button>
                    </div>
                </div>
                <div className="relative w-[832px] h-[373px] overflow-hidden group duration-300 mt-[25px]">
                    <img
                        src="./assets/our3.png"
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
            </aside>
        </div>
    )
}
