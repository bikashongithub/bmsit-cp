import Link from 'next/link'
import React from 'react'

const Button = ({ url, text }) => {
    return (
        <Link href={url}><button className="py-4 px-6  bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white my-5 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">{text}</button></Link>
    )
}

export default Button