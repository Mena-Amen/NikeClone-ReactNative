import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";
import products from "../data/products";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const ProductDetailsScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct);
  const disptach = useDispatch();

  const { width } = useWindowDimensions();

  const addToCart = () => {
    disptach(cartSlice.actions.addCartItem({ product }));
  };

  return (
    <View>
      <ScrollView>
        {/* Image Carousel */}
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width: width, aspectRatio: 1 }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>
          {/* Price */}
          <Text style={styles.price}>${product.price}</Text>
          {/* Descripation */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      {/* Add To Cart */}

      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add To Cart</Text>
      </Pressable>

      {/* Navigation Icon */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 16,
    lineHeight: 30,
    fontWeight: "300",
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

export default ProductDetailsScreen;
