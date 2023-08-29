import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsScreen from "./screens/ProductsScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ShoppingCart from "./screens/ShoppingCart";
import { Pressable, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectNumberOfItems } from "./store/cartSlice";

const Stack = createNativeStackNavigator();

const Naviagtion = () => {
  const numberOfCartItems = useSelector(selectNumberOfItems);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          contentStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                style={{ flexDirection: "row" }}
              >
                <FontAwesome5 name="shopping-cart" color="gray" size={18} />
                <Text style={{ marginLeft: 5, fontWeight: "500" }}>
                  {numberOfCartItems}
                </Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Product Details" component={ProductDetailsScreen} />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Naviagtion;
