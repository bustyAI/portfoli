import React from 'react'
import Link from 'next/link'
import { PiCat } from "react-icons/pi"

const Navbar = () => {
    return (
        <header className='w-full absolute z-10 py-12 px-12'>
            <nav className='flex justify-between items-center'>
                <PiCat className='w-14 h-14 transition duration-300 transform hover:scale-105 hover-rainbow' />
                <div className='flex flex-row space-x-4'>
                    <Link href={"https://github.com/bustyAI"}>
                        <p className='navbar__button'>About</p>
                    </Link>
                    <Link href={"https://github.com/bustyAI"}>
                        <p className='navbar__button'>Contact</p>
                    </Link>
                </div>

            </nav>
        </header>
    )
}

export default Navbar