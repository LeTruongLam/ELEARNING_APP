import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React, { useRef } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const CourseDetailImage = require("../assets/CourseDetail.png");

import Colors from "../shared/Colors";
export default function CourseDetails({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Feather name="more-vertical" size={24} color="black" />
        </View>
        <Text style={styles.title}>Python Basics</Text>
        <Text>By Tubeguruji</Text>
        <View>
          <Image
            style={{
              height: 150,
              width: "100%",
              resizeMode: "cover",
              marginTop: 24,
              borderRadius: 10,
            }}
            source={CourseDetailImage}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backGround,
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
  wrapper: {
    marginHorizontal: 16,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 16,
  },
});
