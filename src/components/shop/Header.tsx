import React from "react";
import Image from "next/image";

function Header() {
    return(
        <div>
            

<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo.png" width={100} height={100} className="h-8" alt="Logo" />
        </a>
        <form className="max-w-md mx-auto w-1/2 hidden md:block">
            <div className="relative w-full">
                <input type="search" id="search-dropdown" className="block rounded-l-lg p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search..." required />
                <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </div>
        </form>

        <div className="mx-auto relative">

        <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="p-2.5 text-sm font-medium h-full text-gray-600 bg-transparent rounded-e-lg">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search</span>
        </button>
        </div>

        <div id="authentication-modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="p-4 md:p-5">
                        <form className="max-w-md mx-auto w-1/2 hidden md:block">
                            <div className="relative w-full">
                                <input type="search" id="search-dropdown" className="block rounded-l-lg p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search..." required />
                                <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                    <span className="sr-only">Search</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 

        <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <div>
                <a href="#" className="text-xs md:text-sm text-gray-600 dark:text-gray-500 hover:underline">Register</a>
                <a href="#" className="text-xs md:text-sm text-gray-600 dark:text-gray-500 hover:underline">Login</a>
            </div>
        </div>
    </div>
</nav>
<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="text-xs md:text-base flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <a href="/n" className="text-[10.5px] md:text-base text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="/shop" className="text-[10.5px] md:text-base text-gray-900 dark:text-white hover:underline">Architectural Shop</a>
                </li>
                <li>
                    <a href="/projects" className="text-[10.5px] md:text-base text-gray-900 dark:text-white hover:underline">Our project</a>
                </li>
                <li>
                    <a href="/about"className="text-[10.5px] md:text-base text-gray-900 dark:text-white hover:underline">About Us</a>
                </li>
                <li>
                    <a href="/contact" className="text-[10.5px] md:text-base text-gray-900 dark:text-white hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

        </div>
    )
}
export default Header