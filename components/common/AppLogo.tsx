import Link from "next/link";
import {AiFillHome} from "react-icons/ai";

const AppLogo = ({hasScrolled}: any) => {
    return (
        <div className={`flex gap-3 items-center ${hasScrolled ? 'text-white' : 'text-red-900'}`}>
            <AiFillHome />
            <Link href="/" className={`text-sm md:text-lg font-black`}>Integrity Realty</Link>
        </div>
    );
};

export default AppLogo;