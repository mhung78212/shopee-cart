import Link from "next/link";
import { FooterSetionData } from "./FooterSetionData";
import { FaFacebookF, FaInstagram, FaTwitch, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="pt-6 border-t-4 border-lightorange ">
            <div className="container px-12 ">
                <div className="row">
                    <div className="col col-3-4">
                        <div className="row">
                            {FooterSetionData.map((data) => (
                                <div key={data.label} className="col col-1-4">
                                    <h3 className="text-base font-bold uppercase">
                                        {data.label}
                                    </h3>
                                    <ul className="mt-4 text-sm">
                                        {data?.links.map((link) => (
                                            <li
                                                key={link}
                                                className="py-1 hover:text-lightorange"
                                            >
                                                <Link href={"#"}>{link}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col col-1-4">
                        <div>
                            <h3 className="text-base font-bold uppercase">
                                About Us
                            </h3>
                            <p className="mt-4 text-sm">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Neque quaerat, ad totam fuga
                                laudantium aliquam maiores officia obcaecati
                                reprehenderit, ipsam distinctio cupiditate, esse
                                illo. Iusto quasi labore error mollitia ullam?
                            </p>
                        </div>
                        <ul className="flex mt-4 items-center space-x-8 text-lg">
                            <li className="hover:text-lightorange">
                                <Link href={"#"}>
                                    <FaFacebookF />
                                </Link>
                            </li>
                            <li className="hover:text-lightorange">
                                <Link href={"#"}>
                                    <FaTwitch />
                                </Link>
                            </li>
                            <li className="hover:text-lightorange">
                                <Link href={"#"}>
                                    <FaYoutube />
                                </Link>
                            </li>
                            <li className="hover:text-lightorange">
                                <Link href={"#"}>
                                    <FaInstagram />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-whitesmoke py-3 text-center mt-8">
                © 2023 Shopee. All Rights Reserved.
            </div>
        </div>
    );
};

export default Footer;
