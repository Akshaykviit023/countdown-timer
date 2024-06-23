import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";

const page = () => {
  return (
    <>
    <div className="flex justify-center">
      <div className="w-[90%] mt-6">
      <Link href="/"><button className="bg-[#4d31f9] rounded-full py-2 px-4 flex justify-center items-center gap-2 " ><IoArrowBack />BACK</button></Link>
    <h1 className="mt-6 text-2xl font-bold bg-gradient-to-r from-[#cde18b]  to-[#245021] text-transparent bg-clip-text">About Our Countdown Timer</h1>
    <p className="mt-3">This countdown timer, built with React, Next.js, and Tailwind CSS, keeps you in the loop.</p>
    </div>
    </div>
    </>
  )
}

export default page