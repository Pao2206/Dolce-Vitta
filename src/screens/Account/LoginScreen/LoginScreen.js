import React from "react";
import { ScrollView } from "react-native";
import { Text, Image } from "@rneui/themed";
import { styles } from "./LoginScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils/screenName";

const LoginScreen = () => {
  const navigation = useNavigation();

  const goToRegister = () =>{
    navigation.navigate(screen.account.register);
  };
  return (
    <ScrollView>
      <Image
        source={require("../../../../assets/img/login.png")}
        style={styles.Image}
      />
      <Text style={styles.login} >Te encuentras en Login</Text>
      <Text onPress={goToRegister} style={styles.registrarse}>Registrarse </Text>
    </ScrollView>
  );
};

export default LoginScreen;
