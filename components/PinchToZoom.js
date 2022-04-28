import React from "react";
import { View, StyleSheet } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

export const PinchToZoom = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const style = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
  }));

  const pan = Gesture.Pan().onChange(({ translationX, translationY }) => {
    translateX.value = translationX;
    translateY.value = translationY;
    console.log("pan");
  });
  const pinch = Gesture.Pinch().onChange((event) => {
    scale.value = event.scale;
  });
  const gesture = Gesture.Race(pan, pinch);
  return (
    <View style={styles.container}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.ball, style]} />
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ball: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "black",
  },
});
