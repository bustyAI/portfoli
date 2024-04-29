import React from 'react'
import Link from 'next/link'
import { PiCat } from "react-icons/pi"

const Navbar = () => {
    return (
        <header className='header'>

            <nav className='nav'>
                <Link href={"#"}>
                    <PiCat className='nav__icon' />
                </Link>
                <div className='nav_link__container'>
                    <Link href={"mailto:oscar120646@gmail.com"}>
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