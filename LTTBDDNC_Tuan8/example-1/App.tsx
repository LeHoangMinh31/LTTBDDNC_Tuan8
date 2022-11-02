import { StatusBar } from "expo-status-bar";
import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false
    }).start();
  }, [fadeAnim]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Animated.View // Special animatable View
        style={{ width: 250, height: 50, backgroundColor: "powderblue", opacity: fadeAnim }}
      >
        <Text style={{ fontSize: 28, textAlign: "center", margin: 10 }}>
          Welcome to Animation React Native
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
});
