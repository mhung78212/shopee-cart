import Image from "next/image";
import Logo from "../../assets/logo.png";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import {
    AiOutlineHeart,
    AiOutlineUser,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, getAllCategories } from "@/store/categorySlice";
import { useEffect } from "react";

const Navbar = () => {
    const categories = useSelector(getAllCategories);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <div className="py-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-between space-x-4">
                    <Link href={"/"}>
                        <Image src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div className="w-full">
                    <div className="p-1 rounded-sm ml-8 bg-white mb-2 shadow">
                        <form action="" className="flex items-center space-x-4">
                            <input
                                type="text"
                                placeholder="Nhập để tìm kiếm sản phẩm"
                                className="w-full text-base px-4 caret-lightorange text-black"
                            />
                            <Link
                                href={"#"}
                                className="w-14 h-8 bg-orange relative"
                            >
                                <FaSearch className="icon-center text-[20px]" />
                            </Link>
                        </form>
                    </div>
                    <ul className="font-normal font-manrope text-[12px] ml-8 flex items-center space-x-3 capitalize">
                        {categories.slice(0, 8).map((category, index) => (
                            <li key={index}>
                                <Link href={`/category/${category}`}>
                                    {category.replace("-", " ")}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center space-x-3 text-[30px] mx-8">
                    <Link href={"#"}>
                        <AiOutlineUser />
                    </Link>
                    <Link href={"#"}>
                        <AiOutlineHeart />
                    </Link>
                    <Link href={"#"} className="relative">
                        <AiOutlineShoppingCart />
                        <div className="fly-item -top-[10px] -right-[10px]">
                            <span>0</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
