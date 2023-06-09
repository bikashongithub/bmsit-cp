import Image from 'next/image'
import React from 'react'
import Button from '@/components/Button/Button'

const ContactUs = () => {
    return (
        <>
            {/* <div className="bg-red  flex relative z-20 items-center overflow-hidden"> */}
            <div className="container mx-auto flex relative py-10">
                <div className=" flex-1 relative">
                    <Image
                        src="/assets/contact-us.svg"
                        alt="contact us"
                        fill={true}
                        className={`object-contain image-animate`}
                    />
                </div>
                <div className="flex flex-1 flex-col relative z-20">
                    <form className='mt-4 p-4 flex flex-col gap-8'>
                        <input type="text" className="w-2/3 bg-gray-50 border border-gray-300  text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-violet-700 block p-4" placeholder="Name" required />

                        <input type="email" className="w-2/3 bg-gray-50 border border-gray-300 text-l text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-violet-700 block  p-4" placeholder="Email" required />

                        <textarea rows={8} type="email" className="w-2/3 bg-gray-50 border border-gray-300 text-l text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-violet-700 block p-4 resize-none" placeholder="Message" required />

                        <div className="flex">
                            <Button className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-violet-700 text-violet-700 hover:bg-violet-700 hover:text-white text-md mr-4"
                                url="/resources"
                                text="Resources" />
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}

export default ContactUs;