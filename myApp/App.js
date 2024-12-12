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

        <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ title: 'Forgot Password' }}
        />
        <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ title: 'Sign In' }}
        />
        <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ title: 'Sign Up' }}
        />
        <Stack.Screen
        name="BucketlitsDetails"
        component={BucketlistsDetailsScreen}
        options={{ title: 'Bucketlists Details' }}
        />
        <Stack.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{ title: 'Calendar' }}
        />
        <Stack.Screen
        name="CalendarDetails"
        component={CalendarDetailsScreen}
        options={{ title: 'Calendar Details' }}
        />
        <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ title: 'Dashboard' }}
        />
        <Stack.Screen
        name="EditEvent"
        component={EditEventScreen}
        options={{ title: 'Edit Event' }}
        />
        <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ title: 'Notifications' }}
        />
        <Stack.Screen
        name="NotificationsSettings"
        component={NotificationsSettingsScreen}
        options={{ title: 'Notifications Settings' }}
        />
        <Stack.Screen
        name="Profile"
       component={UserProfileScreen}
       options={{ title: 'Profile' }}
       />
       <Stack.Screen
       name="Settings"
       component={GeneralSettingsScreen}
       options={{ title: 'Settings' }}
       />


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