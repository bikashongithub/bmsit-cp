import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button/Button";

export default function Home() {
  return (
    <>
      {/* <div className="bg-red  flex relative z-20 items-center overflow-hidden"> */}
      <div className="container mx-auto my-8 flex relative py-10">
        <div className="w-3/5 flex flex-col relative z-20">
          <span className="w-20 h-2 bg-gray-800" />
          <h1 className="font-bebas-neue uppercase text-8xl font-black flex flex-col leading-none text-gray-800 my-14 mx-0 [word-spacing:30px]">
            Code For
            <span className="text-5xl sm:text-7xl text-violet-700">All</span>
          </h1>
          <p className="text-sm sm:text-base w-9/12 text-gray-700">
            Lets dive into an amazing journey together. This website will help
            you in fast forwarding your programming journey.
            <br></br>
            Resources, Practice Problems, Blogs and Edutorials, We have got everything covered.
          </p>
          <div className="flex mt-20 gap-4">
            <Button className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-violet-700 text-violet-700 hover:bg-violet-700 hover:text-white text-md mr-4"
              url="/resources"
              text="Resources" />
            <Button
              url="/ladders/div_2a"
              text="PRACTICE"
            />
          </div>
        </div>
        <div className="sm:block w-2/4 relative">
          <Image
            src="/assets/heroSvg.svg"
            alt="me"
            fill={true}
            className={`object-contain mt-10 image-animate`}
          />
        </div>
      </div>
      {/* </div> */}
    </>
  )
}
