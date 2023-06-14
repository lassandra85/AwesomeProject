import React from "react";
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";


export default function App() {
  const isNew = true;

  return isNew ? <RegistrationScreen /> : <LoginScreen />;
}


