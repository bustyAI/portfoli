import React from 'react';
import Link from 'next/link';

const ProjectCard = ({ title, description, link, shape }) => {
    return (

        <Link href={link}>

            <div className='card flex space-x-10 items-center bg-hr-gray max-w-[800px] h-[125px] rounded-3xl transition hover:bg-hr-gray-hover'>
                <div className={` ml-4 ${shape}`}></div>
                <span>
                    <h3 className=' mr-4 font-bold text-lg'>{title}</h3>
                    <h3 className='mr-4 text-white/70'>{description}</h3>
                </span>

            </div>
        </Link>
    );
}

export default ProjectCard;
