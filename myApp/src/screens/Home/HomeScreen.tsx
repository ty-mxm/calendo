import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Icône principale */}
      <Image
        style={styles.icon}
        source={require('myApp\assets\favicon.png')} // Remplace par ton chemin
      />

      {/* Boutons */}
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => navigation.navigate('AddTeam' as never)}
        accessibilityLabel="Create a new team"
        accessible={true}
      >
        <Text style={styles.createButtonText}>Create a team</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

      <TouchableOpacity
        style={styles.joinButton}
        onPress={() => navigation.navigate('JoinTeam' as never)}
        accessibilityLabel="Join an existing team"
        accessible={true}
      >
        <Text style={styles.joinButtonText}>Join a team</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

      <TouchableOpacity
        style={styles.addEventButton}
        onPress={() => navigation.navigate('AddEvent' as never)}
        accessibilityLabel="View or add an event"
        accessible={true}
      >
        <Text style={styles.joinButtonText}>View Event</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  createButton: {
    backgroundColor: '#7F57FF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 10,
  },
  createButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    color: '#000',
    marginVertical: 10,
  },
  joinButton: {
    backgroundColor: '#34C759',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  joinButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addEventButton: {
    backgroundColor: '#5AC8FA',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
});
