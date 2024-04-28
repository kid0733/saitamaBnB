'use client'

import { BiSearch } from "react-icons/bi";



const Search = () => {
    return (
        <div
            className="
                border-[2px]
                border-rose-400
                border-opacity-70
                w-full
                md:w-auto
                py-2
                rounded-full
                shadow-sm
                hover:shadow-lg
                transition
                cursor-pointer"
        >
            <div 
                className="flex
                flex-row
                items-center
                justify-between"
            >
                <div
                    className="text-sm
                    font-semibold
                    px-6"
                >
                    Anywhere
                </div>
                <div
                    className="hidden
                    sm:block
                    text-sm
                    font-semibold
                    px-6
                    border-x-[1px]
                    flex-1
                    text-center"
                >
                    Any Week
                </div>
                <div className="
                    text-sm
                    pl-6
                    pr-2
                    font-semibold

                    flex
                    flex-row
                    items-center
                    gap-3

                ">
                    <div className="hidden sm:block text-rose-400">
                        Add Guests
                    </div>
                    <div className="
                        p-2
                        bg-rose-700
                        rounded-full
                        text-white
                    ">
                        <BiSearch size={18} />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Search;