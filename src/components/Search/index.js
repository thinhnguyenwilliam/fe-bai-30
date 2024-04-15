import { useState } from "react";

const Search =() =>{
    const listUsers=[
        "Le Van Anh",
        "Nguyen Thi Hong",
        "Do Hung Vuong",
        "Dao Van Long"
    ];

    const [listSuggeset,setlistSuggeset] =useState([]);
    const handleChange =(e)=>{
        //e.preventDefault();//chặn load lại trang vì khi submit thì bị load lại nếu là onsubmit
        const keyword=e.target.value;


        //cách mình làm
        // if(keyWord==='')
        //     setlistSuggeset([]);
        // else
        // {
        //     const arraySuggest=listUsers.filter(itemUser=>itemUser.includes(keyWord));
        //     setlistSuggeset(arraySuggest);
        // }


        //cách anh Nam làm
        const arraySuggest=listUsers.filter(itemUser=>itemUser.includes(keyword));
        setlistSuggeset(keyword !=="" ? arraySuggest:[]);
        //console.log(arraySuggest);     
    }


    return (
        <>
            <form>
                <input onChange={handleChange} placeholder="Tìm Kiếm..."/>
                <button>Nút tìm</button>
            </form>

            {listSuggeset.length > 0 &&(
                <ul>
                    {listSuggeset.map((item,index) =>(//trong react thì map phai có item va index di cung
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </>
    )
}
export default Search;