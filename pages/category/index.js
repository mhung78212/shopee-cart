import ProductList from "@/components/ProductList";
import Sidebar from "@/components/Sidebar";
import { fetchCategories } from "@/store/categorySlice";
import { fetchProducts } from "@/store/productSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Category = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts(12));
        dispatch(fetchCategories());
    }, [dispatch]);
    return (
        <div className="bg-whitesmoke py-16">
            <div className="container px-10 ">
                <div className="row">
                    <div className="col hidden lg:block lg:col-1-4">
                        <Sidebar />
                    </div>
                    <div className="col col-1-1 lg:col-3-4">
                        <ProductList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
