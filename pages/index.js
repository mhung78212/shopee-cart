import Product from "@/components/Product";
import ProductList from "@/components/ProductList";
import Sidebar from "@/components/Sidebar";
import { fetchProducts, getAllProducts } from "@/store/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts(50));
    }, [dispatch]);
    const products = useSelector(getAllProducts);

    return (
        <>
            <div className="bg-whitesmoke py-16">
                <div className="w-[90%] m-auto px-10 ">
                    <div className="row">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className={`col col-1-4 mt-8`}
                                >
                                    <Product product={product} />
                                </div>
                            ))}
                
                    </div>
                </div>
            </div>
        </>
    );
}
