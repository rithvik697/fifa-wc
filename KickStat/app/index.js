import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>KickStat</Text>
      <Link href="/homescreen">Home Screen</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 42
  }
});
