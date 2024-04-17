import React from 'react'
import Link from 'next/link'

const ProjectCard = ({ title, type, description, link }) => {

    return (
        <Link href={link}>
            <div className='card__container transform transition ease-in-out duration-300 hover:opacity-60'>
                <p className='mt-4 ml-4 text-xl font-light text-gray-300'>{type}</p>
                <p className='mt-4 ml-4 font-bold text-2xl'>{title}</p>
                <p className='mt-4 ml-4 font-bold text-3xl'>{description}</p>
            </div>
        </Link>
    )
}

export default ProjectCard