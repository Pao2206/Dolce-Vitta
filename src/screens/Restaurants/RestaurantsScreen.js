import React from "react";
import { View, Text } from "react-native";
import { Button } from "@rneui/base";
import { screen } from "../../utils/screenName";

const RestaurantsScreen = (props) => {
  const { navigation } = props;

  const goToAddRestaurant=()=>{
    //console.log("Ir a creación de restaurante")
    navigation.navigate(screen.restaurant.addRestaurant);
  };

  return (
    <View>
      <Text>Estamos en la screen de Restaurantes</Text>
      <Button title="Crear Restaurante" onPress={goToAddRestaurant}/>
    </View>
  );
};

export default RestaurantsScreen;
