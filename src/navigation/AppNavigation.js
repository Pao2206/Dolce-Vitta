import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import { screen } from "../utils/screenName";
import RestaurantsStack from "./RestaurantsStack";
import FavoriteStack from "./FavoriteStack";
import RankingStack from "./RankingStack";
import SearchStack from "./SearchStack";
import AccountStack from "./AccountStack";

//Crear una instancia para la gestión de la navegación
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#EE53A7",
        tabBarInactiveTintColor: "#7F928C",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >
      <Tab.Screen
        name={screen.restaurant.tab}
        component={RestaurantsStack}
        options={{ title: "Restaurantes" }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "Cuenta" }}
      />
      <Tab.Screen
        name={screen.favorite.tab}
        component={FavoriteStack}
        options={{ title: "Favoritos" }}
      />
      <Tab.Screen
        name={screen.ranking.tab}
        component={RankingStack}
        options={{ title: "Ranking" }}
      />
      <Tab.Screen
        name={screen.search.tab}
        component={SearchStack}
        options={{ title: "Buscar" }}
      />
    </Tab.Navigator>
  );
};

const screenOptions = (route, color, size) => {
  let iconName;

  if (route.name == screen.restaurant.tab) {
    iconName = "compass-outline";
  }

  if (route.name == screen.favorite.tab) {
    iconName = "heart-outline";
  }
  if (route.name == screen.ranking.tab) {
    iconName = "star-outline";
  }
  if (route.name == screen.account.tab) {
    iconName = "home-outline";
  }
  if (route.name == screen.search.tab) {
    iconName = "magnify";
  }
  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
};

export { AppNavigation };
