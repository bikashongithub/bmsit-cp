import React from 'react';
import Image from 'next/image';
import Button from '../../components/Button/Button';

const About = () => {
    return (
        <div>
            <section className="max-w-6xl mx-auto px-4 py-12">
                <div className="text-center pb-12">
                    <h2 className="text-base font-bold text-indigo-600"></h2>
                    <p className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-violet-700 marginStyle">
                        {/* Check our contributors */}
                        Know About Me
                    </p>
                </div>
                {/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1"> */}
                <div className="w-full bg-white flex justify-center items-center">
                    <div className="mb-4 flex-1 items-center justify-center flex">
                        <Image
                            src="/assets/images/bikash.png"
                            width={300}
                            height={300}
                            className="object-cover rounded-full"
                            alt="Bikash's photo"
                        />
                    </div>
                    <div className="text-start flex-1 flex flex-col justify-start items-start">
                        <p className="text-xl mx-2 text-gray-700 font-bold mb-2">
                            Bikash Mishra
                        </p>
                        <p className="text-justify mx-2 text-gray-400 font-normal">
                            <span className='text-gray-800 font-medium '>SDE@Namaste Credit</span>
                            <br />
                            STUDENT | BMSIT CSE-23
                            <br />
                            <br />
                            I am a React developer with a strong foundation in programming and a keen interest in data structures and algorithms. I possess a deep passion for technology and enjoy staying updated with the latest trends and advancements in the field. With a solid understanding of React and a strong grasp of programming concepts, I strive to create efficient and user-friendly solutions.
                        </p>
                    </div>
                </div>
                {/* </div> */}
            </section>
            <div className="bg-white mt-24">
                <div className="text-center w-full px-4 sm:px-6 z-20">
                    <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
                        <span className="block">Want to Contribute?</span>
                        <span className="block text-violet-700">
                            And be a part of this Project
                        </span>
                    </h2>
                    <div className="lg:mt-0 lg:flex-shrink-0">
                        <Button
                            url="https://github.com/bikashongithub"
                            text="Hell Yeah!"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;