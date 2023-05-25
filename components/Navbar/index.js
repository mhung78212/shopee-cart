import Image from "next/image";
import Logo from "../../assets/logo.png";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import {
    AiOutlineHeart,
    AiOutlineUser,
    AiOutlineShoppingCart,
    AiOutlineSearch,
    AiOutlineClose,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "@/store/categorySlice";
import { useEffect, useState } from "react";
import {
    getCartItemsCount,
    getCartTotal,
    setCartMessage,
} from "@/store/cartSlice";
import { useRouter } from "next/router";

const Navbar = () => {
    const [showSearchBox, setShowSearchBox] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const categories = useSelector(getAllCategories);
    const cartItemsCount = useSelector(getCartItemsCount);
    const isCartMessage = useSelector(setCartMessage);
    const dispatch = useDispatch();
    const router = useRouter();
    useEffect(() => {
        dispatch(getCartTotal());
    }, [dispatch, isCartMessage]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setSearchInput(searchInput);
            router.push(`/search/${searchInput}`);
            setShowSearchBox(false);
        }
    };
    return (
        <div className="py-3 relative">
            <div className="flex items-center justify-between ">
                <Link href={"/"}>
                    <Image src={Logo} alt="Logo" priority={true} />
                </Link>
                <div className="hidden lg:block">
                    <div className="p-1 rounded-sm ml-8 bg-white mb-2 shadow">
                        <div className="flex items-center space-x-4">
                            <input
                                type="text"
                                placeholder="Nhập để tìm kiếm sản phẩm"
                                className="w-full text-base px-4 caret-lightorange text-black"
                                onChange={(e) => setSearchInput(e.target.value)}
                                onKeyDown={(e) => handleKeyDown(e)}
                                value={searchInput}
                            />
                            <Link
                                href={`/search/${searchInput}`}
                                className="w-14 h-8 bg-orange relative"
                            >
                                <FaSearch className="icon-center text-[20px]" />
                            </Link>
                        </div>
                    </div>
                    <ul className="font-normal font-manrope text-[12px] ml-8 flex items-center space-x-3 capitalize">
                        {categories.slice(0, 8)?.map((category, index) => (
                            <li key={index}>
                                <Link href={`/category/${category}`}>
                                    {category.replace("-", " ")}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="text-[24px] flex items-center space-x-3 md:text-[30px] mx-8">
                    <Link href={"#"}>
                        <AiOutlineUser />
                    </Link>
                    <Link href={"#"}>
                        <AiOutlineHeart />
                    </Link>

                    <Link href={"/cart"} className="relative">
                        <AiOutlineShoppingCart />
                        <div className="fly-item -top-[10px] -right-[10px]">
                            <span>{cartItemsCount}</span>
                        </div>
                    </Link>
                    <Link
                        href={"#"}
                        className="lg:hidden"
                        onClick={() => setShowSearchBox(!showSearchBox)}
                    >
                        {" "}
                        {showSearchBox ? (
                            <AiOutlineClose />
                        ) : (
                            <AiOutlineSearch />
                        )}
                    </Link>
                </div>
                <div
                    className={`absolute w-full top-[100%] ${
                        showSearchBox ? "block" : "hidden"
                    }`}
                >
                    <div className="flex items-center space-x-4 bg-white p-2">
                        <input
                            type="text"
                            placeholder="Nhập để tìm kiếm sản phẩm"
                            className="w-full text-base px-4 caret-lightorange text-black"
                            onChange={(e) => setSearchInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            value={searchInput}
                        />
                        <Link
                            href={`/search/${searchInput}`}
                            className="w-14 h-8 bg-orange relative"
                        >
                            <FaSearch className="icon-center text-[20px]" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
