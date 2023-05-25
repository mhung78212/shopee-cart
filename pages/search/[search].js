import Loading from "@/components/Loading";
import Product from "@/components/Product";
import {
    clearSearchInput,
    fetchSearchProduct,
    getSearchProducts,
    getSearchProductsStatus,
} from "@/store/searchSlice";
import { STATUS } from "@/utils/status";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchPage = () => {
    const router = useRouter();
    const search = router.query.search;
    const dispatch = useDispatch();
    const searchProductsStatus = useSelector(getSearchProductsStatus);
    const searchProducts = useSelector(getSearchProducts);
    useEffect(() => {
        if (search) {
            dispatch(clearSearchInput());
            dispatch(fetchSearchProduct(search));
        }
    }, [search, dispatch]);
    console.log(searchProducts);
    return (
        <div className="bg-whitesmoke py-16">
            <div className="w-10/12 mx-auto row">
                <div className="bg-white w-full py-4 pl-14 text-3xl border-l-8 border-[#F94E30]">
                    <h3 className="text-[#999999] capitalize ">
                        Search product: {search}
                    </h3>
                </div>
                {searchProductsStatus === STATUS.LOADING ? (
                    <Loading />
                ) : (
                    <div className="w-full">
                        {searchProducts.length >= 1 ? (
                            <div className="row">
                                {searchProducts?.map((product) => (
                                    <div
                                        key={product.id}
                                        className="col col-1-1  md:col-1-2 lg:col-1-4 mt-6"
                                    >
                                        <Product product={product} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="min-h-[70vh]  flex items-center justify-center">
                                <h3 className="text-orange text-3xl">
                                    No Products found.
                                </h3>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
