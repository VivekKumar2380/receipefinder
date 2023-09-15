import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './Screens/SearchScreen'; // Your main screen component

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007AFF', // Customize the header background color
          },
          headerTintColor: '#fff', // Customize the header text color
          headerTitleStyle: {
            fontWeight: 'bold', // Customize the header text style
          },
        }}
      >
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: 'Recipe Finder', // Customize the screen title
          }}
        />
        {/* Add more screens here if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
