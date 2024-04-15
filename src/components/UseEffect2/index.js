import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
//import "./ProductItem.scss" ; phải install scss mới xài được



const UseEffect2 = () => {
    const [productsList, setproductsList] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                setproductsList(data.products);
            })
    }, []);
    console.log(productsList);

    return (
        <>
            {productsList.length > 0 && (
                <div className="product">
                    {productsList.map(item_pdlist =>(
                        <ProductItem item={item_pdlist} key={item_pdlist.id} />
                    ))}
                </div>
            )}
        </>
    )
}
export default UseEffect2;