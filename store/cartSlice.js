const { createSlice } = require("@reduxjs/toolkit");

const fetchFromLocalStorage = () => {
    if (typeof window !== "undefined") {
        let cart = localStorage.getItem("cart");
        if (cart) {
            return JSON.parse(localStorage.getItem("cart"));
        } else {
            return [];
        }
    }
};

const storeInLocalStorage = (data) => {
    localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
    carts: fetchFromLocalStorage(),
    itemCount: 0,
    totalAmount: 0,
    isCartMessage: false,
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, aciton) => {
            const checkItemCart = state.carts.find(
                (item) => item.id === aciton.payload.id,
            );
            // Check if the item is already in the cart
            if (checkItemCart) {
                const tempCart = state.carts.map((item) => {
                    if (item.id === aciton.payload.id) {
                        let tempQty = item.quantity + aciton.payload.quantity;
                        let tempTotalPrice = tempQty * item.price;
                        return {
                            ...item,
                            quantity: tempQty,
                            totalPrice: tempTotalPrice,
                        };
                    } else {
                        return item;
                    }
                });
                // Add to cart
                state.carts = tempCart;
                storeInLocalStorage(state.carts);
            } else {
                state.carts.push(aciton.payload);
                storeInLocalStorage(state.carts);
            }
        },
        setCartMessage: (state) => {
            state.isCartMessage = true;
            setTimeout(() => {
                state.isCartMessage = false;
            }, 20000);
        },
        getCartTotal: (state) => {
            state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
                return (cartTotal += cartItem.totalPrice);
            }, 0);
            state.itemCount = state.carts.length;
        },
        deleteItemCart: (state, action) => {
            const tempCart = state.carts.filter(
                (item) => item.id !== action.payload,
            );
            state.carts = tempCart;
            storeInLocalStorage(state.carts);
        },
        clearCart: (state) => {
            state.carts = [];
            storeInLocalStorage(state.carts);
        },
        toggleCartQty: (state, action) => {
            const tempCart = state.carts.map((item) => {
                //
                if (item.id === action.payload.id) {
                    let tempQty = item.quantity;
                    let tempTotalPrice = item.totalPrice;

                    if (action.payload.type === "INC") {
                        tempQty++;
                        tempTotalPrice = tempQty * item.discountedPrice;
                    }

                    if (action.payload.type === "DEC") {
                        tempQty--;
                        if (tempQty < 1) tempQty = 1;
                        tempTotalPrice = tempQty * item.discountedPrice;
                    }

                    return {
                        ...item,
                        quantity: tempQty,
                        totalPrice: tempTotalPrice,
                    };
                } else {
                    return item;
                }
            });
            state.carts = tempCart;
            storeInLocalStorage(state.carts);
        },
    },
});

export const {
    addToCart,
    setCartMessage,
    getCartTotal,
    clearCart,
    deleteItemCart,
    toggleCartQty,
} = cartSlice.actions;

export const getAllCart = (state) => state.cart.carts;
export const getCartMessageStatus = (state) => state.cart.isCartMessage;
export const getCartItemsCount = (state) => state.cart.itemCount;
export const getTotalAmount = (state) => state.cart.totalAmount;
export default cartSlice.reducer;
