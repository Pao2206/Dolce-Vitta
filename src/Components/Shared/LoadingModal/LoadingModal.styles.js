//hoja de estilos
import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    overlay: {
    height: 100,
    width: 200,
    backgroundColor: "#FEFEFE",
    borderColor: "#EE53A7",
    borderWidth: 3,
    borderRadius: 10,
},

view:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
 },
 text:{
    color: "#EE53A7",
    textTransform: "uppercase",
    marginTop: 15,
 },
});