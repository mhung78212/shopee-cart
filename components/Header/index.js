import Link from "next/link";
import Navbar from "../Navbar";

const Header = () => {
    return (
        <div className="text-white header-bg">
            <div className="container px-2">
                <div>
                    <div className="border-b border-[#fa7862] text-[13px] py-2 flex items-center justify-between">
                        <ul className="flex items-center">
                            <li>
                                <Link href={"#"}>
                                    Vào cửa hàng trên ứng dụng Shoppee
                                </Link>
                            </li>
                            <li className="bg-[#fa7862] w-[2px] h-4 mx-3"></li>
                            <li>
                                <Link href={"/about"}>Kết nối</Link>
                            </li>
                        </ul>

                        <ul className="flex items-center">
                            <li>
                                <Link href={"#"}>Thông báo</Link>
                            </li>
                            <li className="bg-[#fa7862] w-[2px] h-4 mx-3"></li>
                            <li>
                                <Link href={"#"}>Đăng ký</Link>
                            </li>
                            <li className="bg-[#fa7862] w-[2px] h-4 mx-3"></li>
                            <li>
                                <Link href={"#"}>Đăng nhập</Link>
                            </li>
                        </ul>
                    </div>
                    <Navbar />
                </div>
            </div>
        </div>
    );
};

export default Header;
