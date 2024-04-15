import { useEffect } from "react";

const UseEffect1 = () => {
    useEffect(() => {
        const menuElement = document.querySelector("#menu");
        console.log(menuElement);
        console.log(typeof(menuElement));// trả ra object
    })

    console.log("Ok 2");


    return (
        <>
            <ul id="menu">
                <li>Menu 1</li>
                <li>Menu 2</li>
                <li>Menu 3</li>
            </ul>
        </>
    )
}
export default UseEffect1;