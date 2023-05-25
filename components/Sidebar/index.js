import { getAllCategories } from "@/store/categorySlice";
import Link from "next/link";

import { useSelector } from "react-redux";

const  Sidebar = () => {
    const categories = useSelector(getAllCategories);

    return (
        <div className="text-[#717188] p-2 font-rajdhani">
            <h4 className="font-semibold text-[24px] capitalize">All Category</h4>
            <ul id="cart-scroll" className="mt-2 font-light ">
                {categories.map((category, index) => (
                    <li
                        key={index}
                        className="mb-2 pb-1 hover:text-lightorange capitalize"
                    >
                        <Link href={`/category/${category}`}>
                            {category?.replace("-", " ")}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
