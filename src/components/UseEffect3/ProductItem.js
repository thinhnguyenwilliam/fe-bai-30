const ProductItem = (props) => {
    const {item}=props;
    return (
        <>
            <div className="product__item">
                <div className="product__img">
                    <img src={item.thumbnail} alt={item.title} style={{ width: "200px" }} />
                </div>
                <div className="product__content">
                    <div className="product__name">
                        {item.title}
                    </div>
                    <div className="product__price">
                        {item.price} $
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductItem;