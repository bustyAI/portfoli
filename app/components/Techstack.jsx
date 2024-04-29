import React from 'react'
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3Alt, FaReact, FaJava } from "react-icons/fa";
import { SiMysql, SiMongodb, SiNextdotjs } from "react-icons/si";
import { BiLogoSpringBoot, BiLogoGit } from "react-icons/bi";


const Techstack = () => {
    return (
        <div className="techstack space-x-20">
            <div className="icon-column space-y-8">
                <div className='rounded-xl'>
                    <IoLogoJavascript className="icon text-yellow-500" />
                </div>

                <div className=' rounded-xl'>
                    <FaHtml5 className="icon text-orange-600" />
                </div>
                <div className=' rounded-xl'>
                    <FaCss3Alt className="icon text-blue-600" />
                </div>

            </div>
            <div className="icon-column space-y-8">
                <div className=' rounded-2xl'>
                    <FaReact className="icon text-blue-500 " />
                </div>
                <div className=' rounded-2xl'>

                    <FaJava className="icon text-orange-500 " />
                </div>
                <div className=' rounded-2xl'>

                    <SiMysql className="icon" />
                </div>
                <div className=' rounded-2xl'>
                    <SiMongodb className="icon text-green-400" />
                </div>



            </div>
            <div className="icon-column space-y-8">
                <div className=' rounded-3xl'>
                    <BiLogoSpringBoot className="icon bg-green-600 rounded-full" />
                </div>
                <div className=' rounded-3xl'>
                    <BiLogoGit className="icon bg-orange-700 rounded-full" />
                </div>
                <div className=' rounded-3xl'>

                    <SiNextdotjs className="icon text-black bg-white rounded-full" />
                </div>


            </div>

        </div>

    );
};

export default Techstack