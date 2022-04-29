import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { PinchToZoom } from "./components/PinchToZoom";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <PinchToZoom></PinchToZoom>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
