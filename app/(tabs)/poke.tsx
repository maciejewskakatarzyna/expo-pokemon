import { StyleSheet } from "react-native";

import PokeList from "../../components/PokeList";
import { View } from "../../components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <PokeList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
