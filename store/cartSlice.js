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
        setCartMessage: (state, aciton) => {
            state.isCartMessage = aciton.payload;
        },
    },
});

export const { addToCart, setCartMessage } = cartSlice.actions;
export const getCartMessageStatus = (state) => state.cart.isCartMessage;

export default cartSlice.reducer;
