import React from 'react'
import Link from 'next/link'
import { PiCat } from "react-icons/pi"

const Navbar = () => {
    return (
        <header className='header'>

            <nav className='nav'>
                <PiCat className='nav__icon' />
                <div className='nav_link__container'>
                    <Link href={"#"}>
                        <p className='navbar__button'>About</p>
                    </Link>
                    <Link href={"#"}>
                        <p className='navbar__button'>Contact</p>
                    </Link>
                    <Link href={"https://github.com/bustyAI"}>
                        <p className='navbar__button'>Github</p>
                    </Link>
                </div>

            </nav>

        </header>
    )
}

export default Navbar