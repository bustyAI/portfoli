import React from 'react'
import { LuCat } from "react-icons/lu"

const About = () => {
    return (
        <div className='flex flex-col justify-center items-start  mt-10 h-[700px]'>

            <p className='text-3xl font-bold mb-8 inline-block relative overflow-hidden'
                style={{
                    background: 'linear-gradient(to right, #EC4899 0%, #8B5CF6 100%)',
                    backgroundSize: '80% 40%',  // Increases the gradient's area, making the transition smaller
                    backgroundRepeat: 'no-repeat',
                    paddingRight: '1.6rem',
                    backgroundPosition: 'right bottom'
                }}>
                About

            </p>

            <div className='flex flex-col text-left space-y-2'>
                <p className=' text-4xl font-bold text-left tracking-widest '>Hey, I'm Oscar.</p>
                <p className='text-4xl tracking-widest font-bold text-white/70'>A software engineer</p>
                <p className='text-xl text-white/70 max-w-[700px] tracking-widest'>
                    with a <span className=' font-extrabold'>"flair"</span> for design.
                    I'm currently on track to graduate with a Bachelor's degree in Computer Science from CSU Monterey Bay in August of 2024.
                    I'm actively seeking opportunities to gain experience and  develop my skills as a software engineer.</p>
            </div>
        </div>
    )
}

export default About