import React from 'react'

export default function Navbar() {
  return (
    <div className='flex px-[40px] py-[30px] justify-between'>
      <h3 className='text-[#fff] text-[24px] font-normal tracking-[14px]'>ERNESTO BEDMAR ARCHITECTS</h3>
      <div className='flex gap-[40px] text-[#fff] font-normal text-[18px]'>
        <section>Works</section>
        <section>Studio</section>
        <section>Publication</section>
        <section>Contact</section>
      </div>
    </div>
  )
}
