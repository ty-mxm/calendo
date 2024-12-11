import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AddTeamScreen() {
  const [teamName, setTeamName] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a Team Name</Text>

      <TextInput
        style={styles.input}
        placeholder="Your team's name"
        value={teamName}
        onChangeText={setTeamName}
      />

      <TouchableOpacity
        style={styles.createButton}
        onPress={() => {
          // Ajouter l'équipe ici
          navigation.goBack(); // Retour à l'écran précédent
        }}
      >
        <Text style={styles.createButtonText}>Create a team</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#EFEFEF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  createButton: {
    backgroundColor: '#7F57FF',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  createButtonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
});
