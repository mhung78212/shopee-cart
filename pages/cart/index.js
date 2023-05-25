import {
    clearCart,
    deleteItemCart,
    getAllCart,
    getCartItemsCount,
    getTotalAmount,
    toggleCartQty,
} from "@/store/cartSlice";
import { formatPrice } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCart from "../../assets/shopping_cart.png";
import { BsTrash2 } from "react-icons/bs";
import Swal from "sweetalert2";
const Cart = () => {
    const carts = useSelector(getAllCart);
    const cartItemCount = useSelector(getCartItemsCount);
    const cartTotal = useSelector(getTotalAmount);
    const dispatch = useDispatch();

    const hanleDeleteCart = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                dispatch(deleteItemCart(id));
            }
        });
    };

    if (cartItemCount === 0)
        return (
            <div className="my-8 flex items-center justify-center w-full flex-col">
                <div className="flex flex-col items-center mb-8">
                    <Image src={ShoppingCart} alt="" width={200} height={200} />
                    <h3 className=" text-xl">Your shopping cart is empty</h3>
                </div>
                <Link
                    href={"/category"}
                    className="btn bg-lightorange text-white"
                >
                    Go shopping now
                </Link>
            </div>
        );

    return (
        <div className="my-10">
            <div className="w-[90%] mx-auto ">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs uppercase">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Unit Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Total Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts?.map((cart) => (
                                <tr
                                    key={cart.id}
                                    className="bg-white border-b hover:bg-whitesmoke last:border-none"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                    >
                                        {cart.title}
                                    </th>
                                    <td className="px-6 py-4">
                                        {formatPrice(
                                            cart?.discountedPrice ||
                                                cart?.price,
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-2">
                                            <button
                                                className="button-qty"
                                                onClick={() => {
                                                    dispatch(
                                                        toggleCartQty({
                                                            id: cart?.id,
                                                            type: "DEC",
                                                        }),
                                                    );
                                                }}
                                            >
                                                <FaMinus />
                                            </button>
                                            <div className="px-1 ">
                                                {cart.quantity}
                                            </div>
                                            <button
                                                className="button-qty"
                                                onClick={() => {
                                                    dispatch(
                                                        toggleCartQty({
                                                            id: cart?.id,
                                                            type: "INC",
                                                        }),
                                                    );
                                                }}
                                            >
                                                <FaPlus />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {formatPrice(cart.totalPrice)}
                                    </td>
                                    <td className="px-6 py-4 ">
                                        <button
                                            className="font-medium hover:underline text-lightorange uppercase "
                                            onClick={() =>
                                                hanleDeleteCart(cart?.id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className=" mt-8 py-8 bg-whitesmoke">
                        <div className="flex items-center justify-between mx-8">
                            <button
                                className="flex items-center px-4 py-2 border border-solid border-lightorange text-lightorange space-x-2 uppercase"
                                onClick={() => dispatch(clearCart())}
                            >
                                <BsTrash2 className="text-[24px]" />
                                <span>Clear cart</span>
                            </button>
                            <div>
                                <div className="flex items-center space-x-4">
                                    <div>Total ({cartItemCount}) items: </div>
                                    <span>{formatPrice(cartTotal)}</span>
                                </div>
                                <button className="py-2 px-10 uppercase tracking-[3px] bg-lightorange text-white mt-4">
                                    Check out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
