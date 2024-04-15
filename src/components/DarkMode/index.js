import "./DarkMode.css"
import { useState } from "react" 


const DarkMode =() =>{
    const [mode,setMode]=useState(false);//biến mode gán mặc định ban đầu: false
    const handleClick =() =>{
        setMode(!mode);//hàm cập nhật cho biến mode thành true(false), chỉ khi biến mode thay đổi thì mới render giao diện
        //console.log(mode);//có thể không ngay lập tức là giá trị mới sau khi gọi setMode. Điều này có thể xuất hiện do setState là một hàm bất đồng bộ.
    }
    console.log(mode);


    return (
        <>
            <button onClick={handleClick}>Dark/Light</button>

            <div className={"box " + (mode ? "box--dark" : "")}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </>
    )
}
export default DarkMode;