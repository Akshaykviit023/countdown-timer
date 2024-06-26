import { FaBars } from "react-icons/fa6";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center py-4">
        <div className={`w-full text-lg hidden mr-8 md:flex md:justify-end md:gap-6 `}>
            <Link href="/about"><p className="hover:underline cursor-pointer">About</p></Link>
            <p className="hover:underline cursor-pointer">Settings</p>
        </div>
        <div className={`w-full hidden max-md:block`}>
        <FaBars className="float-right text-4xl mr-4 cursor-pointer" />
        </div>

        
    </div>
  )
}

export default Navbar;