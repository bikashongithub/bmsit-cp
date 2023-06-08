import React from "react";
import Image from "next/image"

function BlogCard(props) {
    const { link, img, category, title, description, writer, t1, t2, t3 } = props;
    return (
        <div className="m-6">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
                <div className="overflow-hidden shadow-2xl shadow-slate-600 rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto ">
                    <a href={link} className="w-full block h-full">
                        <Image
                            src={img}
                            alt="Picture of the blog"
                            width={330}
                            height={190}
                            className="max-h-40 w-full object-cover"
                        />
                        <div className="bg-white w-full p-4">
                            <p className="text-indigo-500 text-md font-medium">{category}</p>
                            <p className="text-gray-800 text-xl font-medium mb-2">
                                {title}
                            </p>
                            <p className="text-gray-400 font-light text-md">
                                {description}
                            </p>
                            <h1>{writer}</h1>
                            <div className="flex flex-wrap justify-starts items-center mt-4">
                                <div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                                    #{t1}
                                </div>
                                <div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                                    #{t2}
                                </div>
                                <div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                                    #{t3}
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div >
    );
}

export default BlogCard;
