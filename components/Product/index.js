/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BsHeart, BsSearch, BsMinecart } from "react-icons/bs";

const Product = ({ product }) => {
    return (
        <div className="col col-1-3 mt-4 ">
            <div className="bg-white">
                <div className="h-[390px]">
                    <Link href={''}>

                    <img
                        src={product.thumbnail}
                        alt="product thumbnail"
                        className="image-cover"
                    />
                    </Link>
                </div>
                <div className="flex flex-col mt-4 pl-2 relative">
                    <Link href={'#'}>
                        <h3 className="text-base capitalize mb-2 w-2/3 whitespace-nowrap overflow-hidden text-ellipsis">
                            {product.title}
                        </h3>
                    </Link>

                    <span className="text-lightorange pb-4">
                        ${product.price}
                    </span>

                    <ul className="product-meta">
                        <li className="product-icon">
                            <Link href={"#"}>
                                <BsHeart />
                            </Link>
                        </li>
                        <li className="product-icon">
                            <Link href={"#"}>
                                <BsSearch />
                            </Link>
                        </li>
                        <li className="product-icon">
                            <Link href={"#"}>
                                <BsMinecart />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Product;
