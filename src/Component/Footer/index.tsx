import React from 'react'
import { FbIcon, IgIcon, LinkedinIcon, MailIcon, TwitterIcon } from './icon'

export default function Footer() {
    return (
        <div className='mt-[156px] pb-[47px] px-[85px] w-full text-center'>
            <h4 className='font-normal text-[24px] tracking-[10px]'>ERNESTO BEDMAR ARCHITECTS</h4>
            <p className='w-[1110px] mx-auto mt-[30px]'>Arsoitek - Connecting innovation with aesthetics in every design. Contact us for a consultation and find out how we can bring your architectural vision to life. Follow us on social media for the latest updates. © 2024 Arsoitek. All Rights Reserved.</p>
            <div className='w-full flex justify-between mt-[71px]'>
                <div className='flex gap-[75px] items-center'>
                    <div className='text-start'>
                        <p>Address: <br/>289 South Bridge Road<br/>Singapore 058835</p>
                    </div>
                    <div className='text-start'>
                        <p>Phone:<br/>+65 62242201</p>
                    </div>
                </div>
                <div className='relative flex gap-[40px]'>
                    <div className='w-[40px] h-[40px] rounded-full bg-[#373A40] flex justify-center items-center'>
                        <FbIcon/>
                    </div>
                    <div className='w-[40px] h-[40px] rounded-full bg-[#373A40] flex justify-center items-center'>
                        <IgIcon/>
                    </div>
                    <div className='w-[40px] h-[40px] rounded-full bg-[#373A40] flex justify-center items-center'>
                        <LinkedinIcon/>
                    </div>
                    <div className='w-[40px] h-[40px] rounded-full bg-[#373A40] flex justify-center items-center'>
                        <MailIcon/>
                    </div>
                    <div className='w-[40px] h-[40px] rounded-full bg-[#373A40] flex justify-center items-center'>
                        <TwitterIcon/>
                    </div>
                </div>
            </div>
            <hr className='border-[1px] border-[#fff] opacity-[21%] mt-[59px]'></hr>
            <p className='text-center text-[18px] text-[#E9EDFB] mt-[30px]'>Copyrights © 2024 Ernesto Bedmar Architects</p>
        </div>
    )
}
