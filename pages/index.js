import Product from "@/components/Product";
import ProductList from "@/components/ProductList";
import Sidebar from "@/components/Sidebar";
import { fetchCategories } from "@/store/categorySlice";
import { fetchProducts, getAllProducts } from "@/store/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts(50));
        dispatch(fetchCategories());
    }, [dispatch]);
    const products = useSelector(getAllProducts);

    return (
        <>
            <div className="bg-whitesmoke py-16">
                <div className="max-w-[1200px] m-auto px-8">
                    <div className="row">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className={`col col-1-1 md:col-1-2 lg:col-1-4 mt-8`}
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
