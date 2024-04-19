import React from 'react'
import { LuCat } from "react-icons/lu"

const About = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-20 h-[800px]'>
            <p className=' text-4xl mb-20'>About</p>
            <LuCat className='flex w-64 h-64 mb-8' />

            <p className='text-2xl w-[700px] tracking-widest text-left'>"incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
    )
}

export default About