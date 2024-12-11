import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home/HomeScreen';
import GetStartedScreen from './src/screens/Home/GetStartedScreen';
import TeamsScreen from './src/screens/Teams/TeamsScreen';
import AddTeamScreen from './src/screens/Teams/AddTeamScreen';
import TeamDetailsScreen from './src/screens/Teams/TeamDetailsScreen';
import AddEventScreen from './src/screens/Events/AddEventScreen';
import EventDetailsScreen from './src/screens/Events/EventDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        {/* Écran "Get Started" */}
        <Stack.Screen
          name="GetStarted"
          component={GetStartedScreen}
          options={{ headerShown: false }}
        />

        {/* Écran "Home" */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />

        {/* Écrans liés aux équipes */}
        <Stack.Screen
          name="Teams"
          component={TeamsScreen}
          options={{ title: 'Teams' }}
        />
        <Stack.Screen
          name="AddTeam"
          component={AddTeamScreen}
          options={{ title: 'Add a Team' }}
        />
        <Stack.Screen
          name="TeamDetails"
          component={TeamDetailsScreen}
          options={{ title: 'Team Details' }}
        />
        {/* Écrans liés aux events */}
        <Stack.Screen
           name="AddEvent"
          component={AddEventScreen}
          options={{ title: 'Add Event' }}
/>
<Stack.Screen
        name="EventDetails"
        component={EventDetailsScreen}
         options={{ title: 'Event Details' }}
/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}