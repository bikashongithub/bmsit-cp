import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <div>
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="text-center pb-12">
                    <h2 className="text-base font-bold text-indigo-600"></h2>
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-purple-600 marginStyle">
                        Check our contributors
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <Image
                                src="/assets/images/bikash.png"
                                width={200}
                                height={200}
                                className="object-center object-cover rounded-full h-36 w-36"
                                alt="Bikash's photo"
                            />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-700 font-bold mb-2">
                                Bikash Mishra
                            </p>
                            <p className="text-base text-gray-400 font-normal">
                                STUDENT | BMSIT
                                CSE-23
                            </p>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <Image
                                src="/assets/images/Ankit.jpeg"
                                width={200}
                                height={200}
                                className="object-center object-cover rounded-full h-36 w-36"
                                alt="Ankit's photo"
                            />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-700 font-bold mb-2">
                                Ankit Prakash
                            </p>
                            <p className="text-base text-gray-400 font-normal">
                                STUDENT | BMSIT
                                CSE-23
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;