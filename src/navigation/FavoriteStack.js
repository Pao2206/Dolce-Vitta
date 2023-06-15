import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screenName";
import { FavoriteScreen } from "../screens/FavoriteScreen"

const Stack= createNativeStackNavigator();

const FavoriteStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.favorite.favorites}
        component={FavoriteScreen}
        options={{ title: "Favoritos" }}
      />
    </Stack.Navigator>
  );
};

export default FavoriteStack;
