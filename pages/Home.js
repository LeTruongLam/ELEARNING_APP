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

import Colors from "../shared/Colors";
const User = require("../assets/userimg.png");
const Education = require("../assets/education.png");
import { dataCourse, advanceCourse, basicCourse } from "../shared/Datas";
const Home = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={{ fontSize: 12 }}>Hello</Text>
            <Text style={{ fontWeight: "600", fontSize: 14 }}>Rahul Sanap</Text>
          </View>
          <View>
            <Image style={{ height: 60, width: 60 }} source={User} />
          </View>
        </View>
        <View>
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>
        <View>
          <Image
            style={{
              height: 150,
              width: "100%",
              marginTop: 24,
              borderRadius: 10,
            }}
            source={Education}
          />
        </View>
        <View>
          <Text style={styles.title}>Video Course</Text>
          <Animated.ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
          >
            {dataCourse.map((course, key) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("CourseDetails", {
                      name: "CourseDetails",
                    })
                  }
                >
                  <View style={[styles.course, { marginRight: 20 }]}>
                    <Image
                      key={key}
                      style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "cover",
                        borderRadius: 5,
                      }}
                      source={course.img}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </Animated.ScrollView>
        </View>
        <View>
          <Text style={styles.title}>Basic Popular Course</Text>
          <Animated.ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
          >
            {basicCourse.map((course, key) => {
              return (
                <View
                  style={{
                    borderRadius: 5,
                    backgroundColor: Colors.white,
                    display: "flex",
                    flexDirection: "column",
                    marginRight: 16,
                  }}
                >
                  <View style={styles.course}>
                    <Image
                      key={key}
                      style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "cover",
                        borderRadius: 5,
                      }}
                      source={course.img}
                    />
                  </View>
                  <View style={{ margin: 12 }}>
                    <Text style={{ fontWeight: "600", fontSize: 14 }}>
                      {course.name}
                    </Text>
                    <Text> {course.lessons}</Text>
                  </View>
                </View>
              );
            })}
          </Animated.ScrollView>
        </View>
        <View>
          <Text style={styles.title}>Advance Courses</Text>
          <Animated.ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
          >
            {advanceCourse.map((course, key) => {
              return (
                <View
                  style={{
                    borderRadius: 5,
                    backgroundColor: Colors.white,
                    display: "flex",
                    flexDirection: "column",
                    marginRight: 16,
                  }}
                >
                  <View style={styles.course}>
                    <Image
                      key={key}
                      style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "cover",
                        borderRadius: 5,
                      }}
                      source={course.img}
                    />
                  </View>
                  <View style={{ margin: 12 }}>
                    <Text style={{ fontWeight: "600", fontSize: 14 }}>
                      {course.name}
                    </Text>
                    <Text> {course.lessons}</Text>
                  </View>
                </View>
              );
            })}
          </Animated.ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
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
  searchInput: {
    marginTop: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 16,
  },
  course: {
    width: 250,
    height: 150,
    borderRadius: 8,
  },
});
export default Home;
