import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./navigation";
import LottieView from "lottie-react-native";
import { useEffect, useState } from "react";

export default function App() {
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationFinished(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {!isAnimationFinished ? (
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LottieView
            source={require("./assets/IntroAnimation.json")}
            autoPlay
            loop={false}
            onAnimationFinish={() => setIsAnimationFinished(true)}
            style={{ width: 200, height: 200 }}
          />
        </View>
      ) : (
        <AppNavigator />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
