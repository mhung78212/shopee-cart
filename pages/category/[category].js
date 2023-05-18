import Loading from "@/components/Loading";
import Product from "@/components/Product";
import Sidebar from "@/components/Sidebar";

import {
    fetchProductsOfCategory,
    getAllProductsByCategory,
    getCategoryProductsStatus,
} from "@/store/categorySlice";
import { STATUS } from "@/utils/status";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CategorySingle = () => {
    const router = useRouter();
    const category = router.query.category;
    const dispatch = useDispatch();
    const categoryProducts = useSelector(getAllProductsByCategory);
    const categoryProductsStatus = useSelector(getCategoryProductsStatus);
    useEffect(() => {
        if (category) {
            dispatch(fetchProductsOfCategory(category));
        }
    }, [dispatch, category]);
    return (
        <div className="bg-whitesmoke py-16">
            <div className="w-10/12 mx-auto row">
                <div className="bg-white w-full py-4 pl-14 text-3xl border-l-8 border-[#F94E30]">
                    <h3 className="text-[#999999] capitalize ">
                        See our {category.replace("-", " ")}
                    </h3>
                </div>
                {categoryProductsStatus === STATUS.LOADING ? (
                    <Loading />
                ) : (
                    <div className="row">
                        {categoryProducts.map((product) => (
                            <div key={product.id} className="col col-1-4 mt-6">
                                <Product product={product} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategorySingle;
