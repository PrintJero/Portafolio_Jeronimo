import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Actividades from './components/Actividades';

export default function App() {
  return (
    <View style={styles.container}>
      <Actividades/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1976d2',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingHorizontal: 0,
  },
});