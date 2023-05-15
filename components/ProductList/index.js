import Product from "../Product";
import Link from "next/link";
import { FaTh, FaList } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getAllProducts } from "@/store/productSlice";
const ProductList = () => {
    const [isCheck, setIsCheck] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts(12));
    }, [dispatch]);
    const products = useSelector(getAllProducts);
    return (
        <>
            <div className="row items-center justify-between bg-whitesmoke px-4 py-3">
                <p className="text-[18px] text-[#6c6c6c] uppercase">
                    <span className="text-lightorange">12</span> Product Found
                    of <span className="text-lightorange">30</span>
                </p>
                <div className="flex space-x-2">
                    <Link
                        href={"#"}
                        className={`${isCheck ? "" : "opacity-40"}`}
                        onClick={() => setIsCheck(true)}
                    >
                        <FaTh />
                    </Link>
                    <Link
                        href={"#"}
                        className={`${isCheck ? "opacity-40" : ""}`}
                        onClick={() => setIsCheck(false)}
                    >
                        <FaList />
                    </Link>
                </div>
                <div className="flex space-x-3">
                    <label htmlFor="sort-by" className="text-[16px]">
                        Sort by:
                    </label>
                    <select
                        id="sort-by"
                        className="outline-none capitalize px-2 py-1"
                    >
                        <option defaultValue={"featured"}>featured</option>
                        <option value="rating">rating</option>
                        <option value="price">price</option>
                    </select>
                </div>
            </div>
            <div className="row">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </>
    );
};

export default ProductList;
