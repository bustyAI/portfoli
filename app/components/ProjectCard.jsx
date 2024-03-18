import React from 'react'
import { CardCircle, CardPenta, CardSquare, CardTriangle } from '.'

const ProjectCard = ({ title, shape }) => {


    const shapes = {
        circle: CardCircle,
        square: CardSquare,
        triangle: CardTriangle,
        pentagon: CardPenta,
    }

    // Saving compoent in var
    const ShapeComponent = shapes[shape]

    return (
        <div className=' relative bg-blue-600 w-[300px] h-[350px] lg:w-[450px] lg:h-[600px] rounded-lg mt-20 lg:mt-0'>
            <p className='mt-4 ml-4 text-xl font-light text-gray-300'>Project Type</p>
            <p className='mt-4 ml-4 font-bold text-2xl'>{title}</p>
            {/* If exisit render that component and pass props */}
            {ShapeComponent ? <ShapeComponent title={title} shape={shape} /> : null}
        </div>
    )
}

export default ProjectCard