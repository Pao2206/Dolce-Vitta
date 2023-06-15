import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {screen} from "../utils/screenName";
import RestaurantsScreen from "../screens/Restaurants/RestaurantsScreen";
import AddRestaurantScreen from "../screens/Restaurants/AddRestaurantsScreen";

//Instancia del componente
const Stack = createNativeStackNavigator();

const RestaurantsStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name={screen.restaurant.restaurants} 
            component={RestaurantsScreen}
            options={{title: "Restaurantes"}}
            />
            <Stack.Screen
            name={screen.restaurant.addRestaurant}
            component={AddRestaurantScreen}
            options={{title: "Nuevo Restaurante"}}
            />
        </Stack.Navigator>
    );
};
export default RestaurantsStack;
