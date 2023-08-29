import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  deliveryFee: 10,
  freeDeliveryFrom: 200,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const addedProduct = action.payload.product;
      const cartItem = state.items.find(
        (item) => item.product.id === addedProduct.id
      );
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.items.push({ product: addedProduct, quantity: 1 });
      }
    },
    changeQuantity: (state, action) => {
      const { productId, amount } = action.payload;
      const cartItem = state.items.find(
        (item) => item.product.id === productId
      );
      if (cartItem) {
        cartItem.quantity += amount;
      }
      if (cartItem.quantity <= 0) {
        state.items = state.items.filter((item) => item !== cartItem);
      }
    },
  },
});

// To Calc Cart Items Number

export const selectNumberOfItems = (state) => state.cart.items.length;

// To Calc Subtotal Price

export const selectedSubtotal = (state) =>
  state.cart.items.reduce(
    (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity,
    0
  );

const cartSelector = (state) => state.cart;

// To Calc Delivery Fee

export const selectedDeliveryPrice = createSelector(
  cartSelector,
  selectedSubtotal,
  (cart, subTotal) => (subTotal > cart.freeDeliveryFrom ? 0 : cart.deliveryFee)
);

// To Calc Total Price in Shopping Cart

export const totalOrderPrice = createSelector(
  selectedSubtotal,
  selectedDeliveryPrice,
  (subtotal, delivery) => subtotal + delivery
);
