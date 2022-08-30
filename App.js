import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { AboutUs, Progress, Start, Exercise } from "./src/screens"

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MyDrawer() {
  return (
      <Drawer.Navigator useLegacyImplementation initialRouteName="Приложение">
        <Drawer.Screen name="Приложение" component={Entry} />
        <Drawer.Screen name="Прогресс" component={Progress} />
        <Drawer.Screen name="О нас" component={AboutUs} />
      </Drawer.Navigator>
  );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
}

function Entry() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Start" component={Start} />
            <Stack.Screen name="Exercise" component={Exercise} />
        </Stack.Navigator>
    );
}
