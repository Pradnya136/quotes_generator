import React, { useState, useEffect } from "react";

const Body = () => {
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [tag, setTag] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("https://api.quotable.io/quotes");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const { results } = await response.json();
            console.log("Received data from API:", results);
            if (!results || results.length === 0) {
                throw new Error("No quotes received from the API");
            }
            const randomQuote = results[Math.floor(Math.random() * results.length)];
            if (!randomQuote || !randomQuote.content || !randomQuote.author || !randomQuote.tags) {
                throw new Error("Invalid data received from the API");
            }
            setContent(randomQuote.content);
            setAuthor(randomQuote.author);
            setTag(randomQuote.tags.join(", "));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    
    

    const handleNextQuote = () => {
        fetchData();
    };

    const handleShareInstagram = () => {
        const message = `Check out this amazing quote: "${content}" - ${author}`;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://www.instagram.com/stories?text=${encodedMessage}`;
        window.open(url, "_blank");
    };

    return (
        <>
            <div className="flex font-bold flex-wrap h-screen justify-center bg-[url('/images/bg_3.png')] bg-cover bg-no-repeat ">
                <div className="w-6/12 h-72 mt-32 bg-[url('/images/bg_6.png')] bg-cover  p-2 shadow-xl 
                rounded-md border-2 flex flex-col justify-center
                align-middle items-center
                ">
                    <h2 className="text-black p-2 m-2 ">{content}</h2>
                    <h3>Author: {author}</h3>
                    <h3>Tag: {tag}</h3>

                    <div className=" flex p-2 justify-between space-x-72">
                        <button className="w-24 bg-green-300 h-10 border-red shadow-xl
                        rounded-md text-gray-900 text-sm hover:bg-green-400
                        "
                        onClick={handleShareInstagram}>Share button </button>

                        <button
                            className="w-24 bg-green-300 h-10 border-red shadow-xl
                            rounded-md text-gray-900 text-sm hover:bg-green-400"
                            onClick={handleNextQuote}
                        >
                            Next quote
                        </button>
                    </div>
                    <form>
                        <input
                            className="w-96 m-3 p-2 border-gray-300 shadow-xl rounded-md"
                            placeholder="search here by tags like humorous, success,work, weakness"
                        ></input>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Body;
