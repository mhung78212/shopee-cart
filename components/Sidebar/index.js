import { fetchCategories, getAllCategories } from "@/store/categorySlice";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
    const dispatch = useDispatch();
    const categories = useSelector(getAllCategories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <div className="text-[#717188] p-2 font-rajdhani">
            <h4 className="font-semibold text-[24px] capitalize">
                Filter By Categories
            </h4>
            <ul id="cart-scroll" className="mt-2 font-light ">
                {categories.slice(0, 12).map((category, index) => (
                    <li
                        key={index}
                        className="mb-2 pb-1 hover:text-lightorange capitalize"
                    >
                        <Link href={`category/${category}`}>
                            {category.replace("-", " ")}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
