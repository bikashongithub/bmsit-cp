import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className='flex p-3 items-center flex-row justify-between px-10 align-center bg-gray-100 stickynav'>
            <Link href="/" mx-10>
                <div className='mx-10 flex gap-2 text-3xl cursor-pointer text-violet-700 font-semibold'>
                    {/* <div className='float-left px-3'> */}
                    <Image src="/assets/images/logo.png" alt='logo' width={38} height={38} />
                    {/* </div> */}
                    <div>
                        BMSIT CP
                    </div>
                </div>
            </Link>
            <div className="w-2/4 mx-10">
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
                        <Link href="/contact">
                            <div>Contact</div>
                        </Link>
                    </li>

                    <li className="hover:text-blue-800">
                        <Link href="/tutorials">
                            <div>Resources</div>
                        </Link>
                    </li>

                    <li className="hover:text-blue-800">
                        <Link href="/blogs">
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