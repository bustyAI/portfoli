import React from 'react'
import { Techstack } from '.'

const About = () => {
    return (
        <div className='about-container flex flex-col md:flex-row md:space-x-32'>
            <div className='about flex flex-col justify-center items-start  mt-10 h-[700px]'>

                <div className=' about flex flex-col text-left space-y-2'>
                    <p className=' text-4xl font-bold text-left tracking-widest '>Hey, I'm Oscar.</p>
                    <p className='text-4xl tracking-widest font-bold text-white/70'>A software engineer</p>
                    <p className='text-xl text-white/70 max-w-[700px] tracking-widest'>
                        with a <span className=' font-extrabold'>"flair"</span> for design.
                        I'm currently on track to graduate with a Bachelor's degree in Computer Science from CSU Monterey Bay in August of 2024.
                        I'm actively seeking opportunities to gain experience and  develop my skills as a software engineer.</p>
                </div>
            </div>
            <Techstack />
        </div>
    )
}

export default About