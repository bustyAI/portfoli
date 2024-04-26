import React from 'react'
import { LuCat } from "react-icons/lu"

const About = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-20 h-[800px]'>
            <p className='text-5xl font-bold mb-20 inline-block relative overflow-hidden'
                style={{
                    background: 'linear-gradient(to right, #EC4899 0%, #8B5CF6 100%)',
                    backgroundSize: '80% 40%',  // Increases the gradient's area, making the transition smaller
                    backgroundRepeat: 'no-repeat',
                    paddingRight: '1.6rem',
                    backgroundPosition: 'right bottom'
                }}>
                About
            </p>
            <LuCat className='flex w-64 h-64 mb-8' />

            <p className='text-2xl w-[700px] tracking-widest text-left'>"incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
    )
}

export default About