import React from "react";
import Image from "next/image";
import Link from "next/link";

function TutorialCard(props) {
    const { link, img, name, author, difficulty } = props;
    return (
        <Link target="_blank" href={link} className="cursor-pointer">
            <div className="flex flex-col cursor-pointer  justify-center items-center z-0 m-4  p-3">
                <Image
                    src={img}
                    alt="Picture of the author"
                    width={300}
                    height={170}
                    className="rounded-xl "
                />
                <div className="flex flex-col items-center w-50 -mt-9 z-10 p-2 rounded-md  bg-white">
                    <h1 className=" text-xl font-bold ">{name}</h1>
                    <div className="flex w-60 justify-between rounded-md p-2 bg-gray-300  ">
                        <h1>{author}</h1>
                        <h1 className="bg-gray-700 pl-2 pr-2 rounded-md text-white">
                            {difficulty}
                        </h1>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default TutorialCard;
