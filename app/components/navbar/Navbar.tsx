'use client'



import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
    return (
        <div className="fixed w-full bg-[#fff] z-10 shadow-sm text-rose-500 border-b-[1px] border-rose-700 border-opacity-70 ">
            <div className="py-4 border-b-[1px]">
                {/* The Container Component is a styling component that takes in the values inside of the fragment as props and returns them within a boundary */}
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        
                        <Logo/>
                        <Search/>
                        <UserMenu/>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Navbar;