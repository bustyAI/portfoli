import React from 'react'

const ProjectCard = ({ title, type, description }) => {

    return (
        <div className='card__container'>
            <p className='mt-4 ml-4 text-xl font-light text-gray-300'>{type}</p>
            <p className='mt-4 ml-4 font-bold text-2xl'>{title}</p>
            <p className='mt-4 ml-4 font-bold text-3xl'>{description}</p>
        </div>
    )
}

export default ProjectCard