import React from "react";
import ReactDOM from "react-dom/client";
import Body from './src/components/Body';


// react element
const heading = (
    <p>Heading is para </p>
)



//react component 
const AppLayout = ()=> {
    return (
        <div>
            <Body/>
        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)