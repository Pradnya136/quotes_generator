import { useState,useEffect } from "react";

const Body = () =>{
    useEffect(()=>{},)
    const [content,setContent] = useState("blank");

    
    return (
         <>
         <div className="flex flex-wrap h-screen justify-center bg-[url('/images/bg_3.png')] bg-cover bg-no-repeat ">
             <div className="w-6/12 h-72 mt-32 bg-[url('/images/bg_6.png')] bg-cover  p-2 shadow-xl 
              rounded-md border-2 flex flex-col justify-center
             align-middle items-center
              ">
                <h2 className="text-black p-2 m-2 ">{content}</h2>
                <h3>Author:</h3>
                <h3>Tag:</h3>

                <div className=" flex p-2 justify-between space-x-72">
                <button className="w-24 bg-green-300 h-10 border-red shadow-xl
                rounded-md text-gray-900 text-sm hover:bg-green-400
                ">Share button </button>
                
                <button
                className="w-24 bg-green-300 h-10 border-red shadow-xl
                rounded-md text-gray-900 text-sm hover:bg-green-400"
               onClick={()=>{console.log("clicked")}}
                >Next quote</button>
            </div>
            <form>
              
                <input  className="w-96 m-3 p-2 border-gray-300 shadow-xl rounded-md"
                placeholder="search here by tags like humorous, success,work, weakness"></input>
            </form>
        </div>

     </div>
        </>
    )
}

export default Body;