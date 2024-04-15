import "./Cart.css";
import { useState } from "react"

const Cart = () => {
    const [soLuong,setsoLuong]=useState(1);
    const giaCa=8000;
    const handleChangesoLuong=(e)=>{
        const newsoLuong=parseInt(e.target.value);
        setsoLuong(newsoLuong);
    }
    console.log(soLuong);

    
    return (
        <>
            <table className="cart">
                <thead>
                    <tr>
                        <th>Tên Sản Phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Sản phẩm 1</td>
                        <td>
                            <input type="number" defaultValue={soLuong} min={1} style={{width:"60px"}} onChange={handleChangesoLuong} />
                        </td>
                        <td>{giaCa} đ</td>
                        <td>{giaCa*soLuong} đ</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default Cart;