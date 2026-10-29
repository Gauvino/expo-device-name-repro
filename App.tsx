import * as Device from 'expo-device';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.row}>platformApiLevel: {String(Device.platformApiLevel)}</Text>
      <Text style={styles.row}>deviceName: {JSON.stringify(Device.deviceName)}</Text>
      <Text style={styles.row}>modelName: {JSON.stringify(Device.modelName)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 24,
  },
  row: {
    fontSize: 20,
    marginVertical: 8,
  },
});
