import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../shared/Colors";
const Logo = require("../assets/login.png");
import { Ionicons } from "@expo/vector-icons";
const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.body}>
      <View>
        <Image source={Logo} />
        <View style={styles.container}>
          <Text style={styles.welcomeText}>Welcome to Education App</Text>
          <Text style={[styles.loginText, styles.loginTitleText]}>
            Login/Signup
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home", { name: "Home" })}
            style={styles.button}
          >
            <Ionicons name="logo-google" size={24} color="white" />
            <Text style={[styles.loginText, styles.signInText]}>
              Sign in with Google
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.backGround,
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
  container: {
    height: "100%",
    paddingTop: 40,
    marginTop: -25,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  welcomeText: {
    paddingTop: 80,
    marginBottom: 60,
    marginHorizontal: 20,
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
  loginText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
  },
  signInText: {
    fontWeight: "400",
    color: Colors.white,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 30,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
export default Login;
