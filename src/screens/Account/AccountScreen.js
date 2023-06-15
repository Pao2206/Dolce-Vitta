import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import UserGuestScreen from "./UserGuestScreen/UserGuestScreen";
import UserLoggedScreen from "./UserLoggedScreen";
import LoadingModal from "../../Components/Shared/LoadingModal/LoadingModal";

const AccountScreen = () => {
  //useState
  const [haslogged, setHasLogged] = useState(null);

  //useEffect
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      //Verificar si la sesion cambia 
      //console.log(user);
      setHasLogged(user != null ? true : false);
    });
  }, []);

  if(haslogged==null){
    return <LoadingModal show={true} text="Cargando"/>;
  }

  return haslogged == true ? <UserLoggedScreen /> : <UserGuestScreen />;
};

export { AccountScreen };
