'use client'
//We use use client here to ensure that the component is only rendered on the client-side
//We use server side to fetch data from the server

import React from "react";



// /defining the data type of the props variable
interface ContainerProps{
    children: React.ReactNode;




}





const Container:React.FC<ContainerProps> = ({children}) => {//In this line we define the data type of the props variable as a React Function Component [FC] and pass the props as a parameter
    return (
        <div
        className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4"
        >{children}</div>
    );
}

export default Container;