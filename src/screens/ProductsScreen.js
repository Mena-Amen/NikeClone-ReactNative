import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
// import products from "../data/products";
import { useSelector, useDispatch } from "react-redux";
import { productsSlice } from "../store/productsSlice";

const ProductsScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            // Update Selected Product
            dispatch(productsSlice.actions.setSeletctedProduct(item.id));
            navigation.navigate("Product Details");
          }}
          style={styles.itemContainer}
        >
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 10,
  },
});

export default ProductsScreen;
