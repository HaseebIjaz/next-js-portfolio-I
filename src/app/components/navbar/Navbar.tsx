"use client"
import React, { useState } from 'react'
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { Link } from "react-scroll";
import { IoMdMenu, IoMdClose } from 'react-icons/io';

interface NavItem {
    label: string;
    page: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Home",
        page: "home"
    },
    {
        label: "About",
        page: "about",
    },
    {
        label: "Projects",
        page: "projects"
    }

]

const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const [isNavbarOpen, setIsNavbarOpen] = useState(false); //for moble view
    
    const onToggleTheme = () => {

        if(currentTheme === "dark"){
            setTheme("light");
        }
        else{
            setTheme("dark");
        }
    }

    return (
        <header className='w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white sm:px-20 dark:bg-stone-900 dark:border-b dark:border-stone-600'>
            <div className='justify-between md:items-center md:flex bg-inherit'>
                <div>
                    <div className='flex items-center justify-between py-3'>
                    <div className='md:py-5 md:block'>
                        <h2 className='text-2xl font-bold'>Haseeb Ijaz Logo/Name</h2>
                    </div>
                    <div className='md:hidden'>
                        <button onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                            {isNavbarOpen ? <IoMdClose size={30}/> : <IoMdMenu size={30}/>}
                        </button>
                    </div>
                    </div>

                </div>
                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${isNavbarOpen ? "block" : "hidden"}`}>
                        <div className='items-center justify-center space-y-8 md:space-y-0 md:flex md:space-x-6'>
                            {
                                NAV_ITEMS.map((item, idx) => {
                                    return <Link key={idx} to={item.page} onClick={() => setIsNavbarOpen(!isNavbarOpen)} duration={500}
                                    offset={-100}
                                    smooth
                                    spy
                                    activeClass='active'
                                    className='block lg:inline-block text-neutral-900 '
                                    >{item.label}</Link>
                                })
                            }
                            <button className='bg-slate-100 p-2 rounded-xl ' onClick={onToggleTheme}>
                                {currentTheme === "dark" ? <RiSunLine size={25} color='black' /> : <RiMoonFill size={25}/>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar