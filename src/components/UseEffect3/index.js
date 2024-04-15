import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
//import "./ProductItem.scss" ; phải install scss mới xài được



const UseEffect3 = () => {
    const gioiHan=4;
    const [pagination, setpagination] = useState(1);
    const [productsList, setproductsList] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products?skip=${gioiHan*pagination - gioiHan}&limit=${gioiHan}`) //skip:0 kg bỏ sản phẩm nào, skip:5 bỏ 5 sản phẩm đầu, limit 3 giơi hạn hiên thi 3 sp 1 trang
            //phân trang: trang 1 bỏ 0 sp(xem công  thức đó)
            // trang 2 bỏ 3 sp
            // trang 3 bỏ 6 sp 
        
            .then(res => res.json())
            .then(data => {
                setproductsList(data.products);
            })
    }, [pagination]);
    console.log(pagination);

    return (
        <>
            {productsList.length > 0 && (
                <div className="product">
                    {productsList.map(item_pdlist =>(
                        <ProductItem item={item_pdlist} key={item_pdlist.id} />
                    ))}
                </div>
            )}

            <ul>
                <li onClick={()=>setpagination(1)}>trang 1</li>
                <li onClick={()=>setpagination(2)}>trang 2</li>
                <li onClick={()=>setpagination(3)}>trang 3</li>
            </ul>
        </>
    )
}
export default UseEffect3;