import "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { PinchToZoom } from "./components/PinchToZoom";

export default function App() {
  return (
    <View style={styles.container}>
      <PinchToZoom></PinchToZoom>
    </View>
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
