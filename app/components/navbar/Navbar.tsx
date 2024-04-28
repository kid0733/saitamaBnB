import Container from "../Container";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div className="fixed w-full bg-[#000000] z-10 shadow-sm text-white ">
            <div className="py-4 border-b-[1px]">
                {/* The Container Component is a styling component that takes in the values inside of the fragment as props and returns them within a boundary */}
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo/>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Navbar;