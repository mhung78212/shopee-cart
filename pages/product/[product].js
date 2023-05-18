/* eslint-disable @next/next/no-img-element */
import CartMessage from "@/components/CartMessage";
import Loading from "@/components/Loading";
import {
    addToCart,
    getCartMessageStatus,
    setCartMessage,
} from "@/store/cartSlice";
import {
    fetchproductSingle,
    getProductSingle,
    getSingleProductStatus,
} from "@/store/productSlice";
import { formatPrice } from "@/utils/helper";
import { STATUS } from "@/utils/status";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
const SingleProduct = () => {
    // get product id
    const router = useRouter();
    const product = router.query.product;
    const dispatch = useDispatch();
    // get product data by product id
    const productSingle = useSelector(getProductSingle);
    const productSingleStatus = useSelector(getSingleProductStatus);
    const cartMessageStatus = useSelector(getCartMessageStatus);
    useEffect(() => {
        if (product) {
            dispatch(fetchproductSingle(product));
        }
        if (cartMessageStatus) {
            setTimeout(() => {
                dispatch(setCartMessage(false));
            }, 2000);
        }
    }, [dispatch, product, cartMessageStatus]);
    const [quantity, setQuantity] = useState(1);

    let discountedPrice =
        productSingle?.price -
        productSingle?.price * (productSingle?.discountPercentage / 100);

    const handleAddToCart = (productSingle) => {
        let discountPirce =
            productSingle?.price -
            (productSingle?.price * productSingle?.discountPercentage) / 100;
        let totalPrice = discountPirce * quantity;
        dispatch(
            addToCart({
                ...productSingle,
                quantity,
                discountPirce,
                totalPrice,
            }),
        );
        dispatch(setCartMessage(true));
    };
    return (
        <div className="bg-whitesmoke py-10">
            {productSingleStatus === STATUS.LOADING ? (
                <Loading />
            ) : (
                <div className="bg-white w-[90%] p-8 m-auto">
                    <div className="row">
                        <div className="col col-1-2">
                            {/* Thumbnail */}
                            <div className="h-[500px] mb-4">
                                <img
                                    src={productSingle.thumbnail}
                                    alt=""
                                    className="image-cover"
                                />
                            </div>
                            {/* Loop Image */}
                            <div className="row">
                                {productSingle?.images
                                    ?.slice(0, 4)
                                    .map((imageSrc, index) => (
                                        <div
                                            key={index}
                                            className="col col-1-4"
                                        >
                                            <img
                                                src={imageSrc}
                                                alt=""
                                                className="image-cover"
                                            />
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className="col col-1-2">
                            <h1 className="font-bold text-3xl ">
                                {productSingle.title}
                            </h1>
                            <p
                                className="text-base opacity-8
                            0 my-4"
                            >
                                {productSingle.description}
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="flex space-x-1 text-sm font-manrope">
                                    <span className="text-lightorange">
                                        Rating:
                                    </span>
                                    <span>{productSingle.rating}</span>
                                </div>
                                <div className="bg-[#fa7862] w-[2px] h-4 mx-3"></div>
                                <div className="flex space-x-1 text-sm font-manrope">
                                    <span className="text-lightorange">
                                        Brand:
                                    </span>
                                    <span className="capitalize">
                                        {productSingle.brand}
                                    </span>
                                </div>
                                <div className="bg-[#fa7862] w-[2px] h-4 mx-3"></div>
                                <div className="flex space-x-1 text-sm font-manrope">
                                    <span className="text-lightorange">
                                        Category:
                                    </span>
                                    <span className="capitalize">
                                        {productSingle.category}
                                    </span>
                                </div>
                            </div>
                            <div className="bg-whitesmoke p-4 my-4">
                                <div className="text-gray">
                                    <span className="text-base line-through pr-2">
                                        {formatPrice(productSingle.price)}
                                    </span>
                                    <span className="text-dark">
                                        Inclusive of all taxes
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="text-lightorange  text-2xl">
                                        {formatPrice(discountedPrice)}
                                    </div>
                                    <div className="py-1 px-2 bg-orange text-white text-xs rounded">
                                        {productSingle?.discountPercentage} %
                                        OFF
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <h4>Quantity:</h4>
                                <div className="flex items-center space-x-2">
                                    <button className="button-qty">
                                        <FaMinus
                                            onClick={() => {
                                                if (quantity <= 1) {
                                                    setQuantity(1);
                                                } else {
                                                    setQuantity(quantity - 1);
                                                }
                                            }}
                                        />
                                    </button>
                                    <div className="px-1 ">{quantity}</div>
                                    <button className="button-qty">
                                        <FaPlus
                                            onClick={() =>
                                                setQuantity(quantity + 1)
                                            }
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 mt-8">
                                <button
                                    className="btn space-x-2 bg-[#FFEEE8] text-orange"
                                    onClick={() =>
                                        handleAddToCart(productSingle)
                                    }
                                >
                                    <FaShoppingCart /> <span>add to cart</span>
                                </button>
                                <button className="btn bg-orange text-white">
                                    buy now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {cartMessageStatus && <CartMessage />}
        </div>
    );
};

export default SingleProduct;
