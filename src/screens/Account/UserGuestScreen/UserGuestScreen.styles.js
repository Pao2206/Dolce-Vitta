import { color, fonts } from "@rneui/base";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewBody:{
        marginHorizontal: 20,

    },
   image:{
    resizeMode: "contain",
    height: 300,
    width: "100%",
    marginBottom: 40,
   },
   title:{
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 10,
    textAlign: "center",
    color: "#DD47AF",
   },
   description:{
    fontWeight: "light",
    fontSize: 15,
    textAlign: "center",
    color: "#F578CF",
    marginHorizontal: 15,
    marginBottom: 20,
   },
   btnStyle:{
    backgroundColor: "#F547BF",

   }
});