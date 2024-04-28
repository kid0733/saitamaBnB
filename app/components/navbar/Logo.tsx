'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";


const Logo = () => {
    const router = useRouter();


    return (
        <div className="flex  items-center gap-5">
            <Image
            alt="Logo"
            className="hidden md:block cursor-pointer"
            height={50}
            width={50}
            src="/logo.png"
            onClick={() => router.push("/")}

            />
            
        </div>

    );
}

export default Logo;