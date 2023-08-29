import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React from "react";
// import cart from "../data/cart";
import CartListItem from "../components/CartListItem";
import { useSelector } from "react-redux";
import {
  selectedDeliveryPrice,
  selectedSubtotal,
  totalOrderPrice,
} from "./../store/cartSlice";

const ShoppingCartTotals = () => {
  const subtotal = useSelector(selectedSubtotal);
  const deliveryFee = useSelector(selectedDeliveryPrice);
  const totalPrice = useSelector(totalOrderPrice);

  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>${subtotal}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>${deliveryFee}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>${totalPrice}</Text>
      </View>
    </View>
  );
};

const ShoppingCart = () => {
  const cartItem = useSelector((state) => state.cart.items);

  return (
    <>
      <FlatList
        data={cartItem}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 3,
  },
  text: {
    color: "gray",
    fontSize: 16,
  },
  textBold: {
    color: "black",
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 80,
  },
  button: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "black",
    width: "90%",
    borderRadius: 100,
    padding: 20,
    alignSelf: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default ShoppingCart;
