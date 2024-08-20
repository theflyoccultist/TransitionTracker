import { Text, View} from "react-native";
import MyStyledComponent from "@/components/MyStyledComponent";
import styles from "@/src/styles/CommonStyles";


export default function Index() {
  return (
    <View style={styles.safeArea}>
      <MyStyledComponent/>
      <Text style={styles.text}>Ehehjjgfjhvj    hfld</Text>
    </View>
  );
}
