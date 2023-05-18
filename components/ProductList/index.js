import Product from "../Product";
import Link from "next/link";
import { FaTh, FaList } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getAllProducts } from "@/store/productSlice";
const ProductList = () => {
    const products = useSelector(getAllProducts);
    const [isCheck, setIsCheck] = useState(true);

    return (
        <>
            <div className="row items-center justify-between bg-whitesmoke px-4 py-3">
                <p className="text-[18px] text-[#6c6c6c] uppercase">
                    <span className="text-lightorange">12</span> Product Found
                    of{" "}
                    <span className="text-lightorange">{products?.length}</span>
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
                    <div key={product.id} className={`col col-1-3 mt-4`}>
                        <Product product={product} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductList;
