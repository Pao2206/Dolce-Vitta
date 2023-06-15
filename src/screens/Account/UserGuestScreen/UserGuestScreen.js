import React from "react";
import { ScrollView } from "react-native";
import { Text, Button, Image } from "@rneui/themed";
import { styles } from "./UserGuestScreen.styles";
import { screen } from "../../../utils/screenName";
import { useNavigation } from "@react-navigation/native";

const UserGuestScreen = () => {
  const navigation = useNavigation();

  const goToLogin=()=>{
    navigation.navigate(screen.account.login);
  };
  return (
    <ScrollView
      contentContainerStyle={{ flex: 1, justifyContent: "center" }}
      style={styles.viewBody}
    >
      <Image
        source={require("../../../../assets/img/profile.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Consulta tu perfil de Dolce Vitta</Text>
      <Text style={styles.description}> ¿Cómo describirias tu mejor restaurante? 
      Busca y visualiza los mejores
      restaurantes de una forma sencilla, vota cual te ha gustado más y
      comenta cómo ha sido tu experiencia.</Text>
      <Button 
      title="Ver tu perfil" 
      onPress={goToLogin} 
      buttonStyle={styles.btnStyle}
      />
    </ScrollView>
  );
};

export default UserGuestScreen;
