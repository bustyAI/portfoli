import React from 'react'
import { CardCircle, CardSquare } from '.'

const ProjectCard = ({ title, shape }) => {

    const shapes = {
        circle: CardCircle,
        square: CardSquare
    }

    // Saving compoent in var
    const ShapeComponent = shapes[shape]

    return (
        <div className=' relative bg-blue-600 w-[450px] h-[600px] rounded-lg mt-20 lg:mt-0'>
            <p className='mt-4 ml-4 text-xl font-light text-gray-300'>Project Type</p>
            <p className='mt-4 ml-4 font-bold text-2xl'>{title}</p>
            {ShapeComponent ? <ShapeComponent title={title} shape={shape} /> : null}
        </div>
    )
}

export default ProjectCard