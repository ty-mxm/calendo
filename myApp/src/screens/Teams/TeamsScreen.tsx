import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TeamsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Teams</Text>

      <TouchableOpacity style={styles.teamButton}>
        <Text style={styles.teamButtonText}>Name of the team 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.teamButton}>
        <Text style={styles.teamButtonText}>Name of the team 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddTeam' as never)}
      >
        <Text style={styles.addButtonText}>Add a team</Text>
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
  teamButton: {
    backgroundColor: '#7F57FF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  teamButtonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#7F57FF',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
});
