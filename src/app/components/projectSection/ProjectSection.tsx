import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs'
import SlideUp from '../slideUp/SlideUp'

const projects = [
    {
        name: "Track Hero",
        description: "Fleet Management Web App specifically designed for Race Track Operations and Vehicle Booking",
        image: "/images/trackhero.webp",
        github: "",
        link: "https://spa.trackhero.io/spa"
    },
    {
        name: "xiQ Workbench",
        description: "Email Marketing Workflows, Helping you nurture today’s conversations, today. xiQ Workbench is a curation platform where you can quickly curate and publish content to build a loyal customer base",
        image: "/images/workbench.png",
        github: "",
        link: "https://xiqonline.com/auth/login?redirectURL=https://xiqworkbench.xiqonline.com"
    },
    {
        name: "Real Estate Application",
        description: "A portal for buying ,selling , and renting real estate. This is a one stop shop solution to your all real estate needs and desires",
        image: "/images/realestate.PNG",
        github: "",
        link: "https://www.realestate.com.au/"
    }
]
const ProjectSection = () => {
    return (
        <section id="projects">
            <h1 className="text-center font-bold text-4xl">
                Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <div className='flex flex-col space-y-20'>
                {
                    projects.map((project, idx) => {
                        return (
                            <div id={`idx`} key={idx}>
                                <SlideUp offset='-300px 0px -300px 0px ' >
                                <div className='flex  flex-col animate-slideUpCubiBezier animation-delay-2  md:flex-row md:space-x-12'>
                                    <div className='mt-8 md:w-1/2'>
                                        <Link href={project.link} target='_blank'>
                                            <Image
                                                src={project.image}
                                                alt=""
                                                width={1000}
                                                height={1000}
                                                className='rounded-xl shadow-xl hover:opacity-70'
                                            />
                                        </Link>
                                    </div>
                                    <div className='md:w-1/2 mt-12'>
                                        <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
                                        <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400 '>{project.description}</p>
                                        <div className='flex flex-row align-bottom space-x-4'>
                                            <Link href={project.github} target='_blank'>
                                                <BsGithub size={30} className='hover:-translate-y-1 transition-transform cursor-pointer' />
                                            </Link>
                                            <Link href={project.link} target='_blank'>
                                                <BsArrowUpRightSquare
                                                    size={30}
                                                    className='hover:-translate-y-1 transition-transform cursor-pointer'
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                </SlideUp>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ProjectSection