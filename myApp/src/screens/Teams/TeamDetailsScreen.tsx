import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TeamDetailsScreen() {
  const [memberName, setMemberName] = useState('');
  const [members, setMembers] = useState(['Isabel Krins', 'Yanis Yacini', 'Ty Mamm']);
    const navigation = useNavigation();

  const addMember = () => {
    if (memberName.trim()) {
      setMembers([...members, memberName]);
      setMemberName('');
    }
  };

  const removeMember = (name) => {
    setMembers(members.filter((member) => member !== name));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add or Remove Members</Text>

      <TextInput
        style={styles.input}
        placeholder="Name of the member"
        value={memberName}
        onChangeText={setMemberName}
      />

      <TouchableOpacity style={styles.addButton} onPress={addMember}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>

      <FlatList
        data={members}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.memberContainer}>
            <Text style={styles.memberName}>{item}</Text>
            <TouchableOpacity onPress={() => removeMember(item)}>
              <Text style={styles.removeText}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => {
          
          navigation.goBack(); 
        }}
      >
        <Text style={styles.confirmButtonText}>Confirmed</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    padding: 20,
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
  addButton: {
    backgroundColor: '#7F57FF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
  memberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 10,
  },
  memberName: {
    fontSize: 16,
  },
  removeText: {
    color: '#FF0000',
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: '#7F57FF',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
});
