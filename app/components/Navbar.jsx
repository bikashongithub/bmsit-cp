import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className='flex p-3 items-center flex-row justify-between px-10 align-center bg-gray-100 stickynav'>
            <Link href="/" className='flex gap-1'>
                <div className='flex gap-1 text-3xl cursor-pointer text-purple-600 font-semibold'>
                    <div className='float-left px-3'>
                        <Image src="/assets/images/logo.png" alt='logo' width={38} height={38} />
                    </div>
                    <div>
                        BMSIT CP
                    </div>
                </div>
            </Link>
            <div className="w-2/4">
                <ul className="flex flex-wrap justify-between text-xl ">
                    <li className="hover:text-blue-800">
                        <Link href="/">
                            <div>Home</div>
                        </Link>
                    </li>

                    <li className="hover:text-blue-800">
                        <Link href="/about">
                            <div>About</div>
                        </Link>
                    </li>

                    <li className="hover:text-blue-800">
                        <Link href="/resources">
                            <div>Resources</div>
                        </Link>
                    </li>

                    <li className="hover:text-blue-800">
                        <Link href="/blog">
                            <div>Blog</div>
                        </Link>
                    </li>

                    <li className="hover:text-blue-800">
                        <Link href="/track">
                            <div>Track</div>
                        </Link>
                    </li>

                    <li className="hover:text-blue-800">
                        <Link href="/roadmap">
                            <div>Roadmaps</div>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar