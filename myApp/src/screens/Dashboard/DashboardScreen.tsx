import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const DashboardScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [events, setEvents] = useState([
    { id: '1', title: 'Réunion d’équipe', date: '2023-12-15', time: '10:00' },
    { id: '2', title: 'Conférence annuelle', date: '2023-12-16', time: '14:00' },
    { id: '3', title: 'Atelier React Native', date: '2023-12-20', time: '09:30' },
  ]);

  // Filtrer les événements par date sélectionnée
  const filteredEvents = events.filter((event) => event.date === selectedDate);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tableau de bord</Text>

      {/* Calendrier */}
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: { selected: true, marked: true, selectedColor: '#7F57FF' },
          '2023-12-15': { marked: true },
          '2023-12-16': { marked: true },
          '2023-12-20': { marked: true },
        }}
        theme={{
          selectedDayBackgroundColor: '#7F57FF',
          todayTextColor: '#7F57FF',
          arrowColor: '#7F57FF',
        }}
      />

      {/* Prochains événements */}
      <Text style={styles.subHeader}>Prochains événements</Text>
      <FlatList
        data={selectedDate ? filteredEvents : events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventCard}>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventDetails}>
              {item.date} à {item.time}
            </Text>
          </View>
        )}
        ListEmptyComponent={
          selectedDate && (
            <Text style={styles.noEvents}>Aucun événement prévu pour cette date.</Text>
          )
        }
      />
    </View>
  );
};

// Définition des styles (déplacez ici)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  eventCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventDetails: {
    fontSize: 14,
    color: '#666666',
  },
  noEvents: {
    fontSize: 14,
    color: '#999999',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default DashboardScreen;
