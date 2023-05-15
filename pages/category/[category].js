import Product from "@/components/Product";
import Sidebar from "@/components/Sidebar";
import {
    fetchProductsOfCategory,
    getAllProductsByCategory,
    getCategoryProductsStatus,
} from "@/store/categorySlice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CategorySingle = () => {
    const router = useRouter();
    const category = router.query.category;
    const dispatch = useDispatch();
    const categoryProducts = useSelector(getAllProductsByCategory);
    const categoryProductsStatus = useSelector(getCategoryProductsStatus);
    console.log(categoryProducts);
    useEffect(() => {
        dispatch(fetchProductsOfCategory(category));
    }, [dispatch, category]);
    return (
        <div className="">
            {categoryProducts.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default CategorySingle;
