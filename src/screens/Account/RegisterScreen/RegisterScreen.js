import React from "react";
import { View } from "react-native";
import { Image } from "@rneui/base";
import { styles } from "./RegisterScreen.style";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RegisterForm from "../../../Components/Auth/RegisterForm/RegisterForm";


const RegisterScreen = () => {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../../assets/img/login.png")}
        style={styles.Image}
      />
      <View style={styles.content}>
      <RegisterForm/>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;
