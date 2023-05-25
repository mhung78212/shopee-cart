/* eslint-disable @next/next/no-img-element */
import { addToCart, setCartMessage } from "@/store/cartSlice";
import { formatPrice, toastSuccess } from "@/utils/helper";
import Link from "next/link";
import { BsHeart, BsSearch, BsMinecart } from "react-icons/bs";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const discountedPrice =
        product?.price - product?.price * (product?.discountPercentage / 100);
    const handleAddToCart = (product) => {
        let quantity = 1;
        let totalPrice = discountedPrice * quantity;
        dispatch(
            addToCart({
                ...product,
                quantity,
                discountedPrice,
                totalPrice,
            }),
        );
        dispatch(setCartMessage);

        toastSuccess(product.title)
    };

    return (
        <div className="bg-white">
            <div className="h-[350px]">
                <Link href={`/product/${product.id}`}>
                    <img
                        src={product.thumbnail}
                        alt="product thumbnail"
                        className="image-cover"
                    />
                </Link>
            </div>
            <div className="flex flex-col mt-4 pl-2 relative">
                <Link href={`/product/${product.id}`}>
                    <h3 className="text-base capitalize mb-2 w-2/3 whitespace-nowrap overflow-hidden text-ellipsis">
                        {product.title}
                    </h3>
                </Link>

                <div className=" pb-4 flex items-center space-x-2">
                    <span className="text-lightorange">
                        {formatPrice(discountedPrice)}
                    </span>
                    <span className="line-through text-gray">
                        {formatPrice(product.price)}
                    </span>
                </div>

                <ul className="product-meta">
                    <li className="product-icon">
                        <Link href={"#"}>
                            <BsHeart />
                        </Link>
                    </li>
                    <li className="product-icon">
                        <Link href={`/product/${product.id}`}>
                            <BsSearch />
                        </Link>
                    </li>
                    <li
                        className="product-icon"
                        onClick={() => handleAddToCart(product)}
                    >
                        <Link href={"#"}>
                            <BsMinecart />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Product;
