import React from 'react';
import Link from 'next/link';
import { LuCat } from "react-icons/lu"

const ProjectCard = ({ title, type, description, link }) => {
    return (

        <Link href={link}>
            <div className='flex flex-col'>
                <div className='flex flex-row items-center justify-start space-x-20 pl-8 bg-hr-gray w-[800px] h-[125px] rounded-3xl'>
                    <LuCat className='w-16 h-16' />
                    <div className='flex flex-col items-start'>
                        <p>{title}</p>
                        <p>{description}</p>
                    </div>

                </div>
            </div>
        </Link>
    );
}

export default ProjectCard;
