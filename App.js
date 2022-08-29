import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { View, Text, Image, Button, Alert } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { AboutUs, Progress, Settings, Start, Exercise } from "./src/screens"
import {Picker} from "@react-native-picker/picker";


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MyDrawer({ navigation }) {
  return (

      <Drawer.Navigator useLegacyImplementation initialRouteName="Приложение">

        <Drawer.Screen name="Приложение" component={Entry} />
        <Drawer.Screen name="Прогресс" component={Progress} />
        <Drawer.Screen name="Уведомления" component={Settings} />
        <Drawer.Screen name="О нас" component={AboutUs} />

      </Drawer.Navigator>
  );
}

/*
<Drawer.Screen name="Приложение" component={Start} />
<Drawer.Screen name="Тестовый вход" component={MyStartStreen} />
<Drawer.Screen name="Упражнения" component={Exercise} />
<Drawer.Screen name="Root1" component={Root} />
<Drawer.Screen name="Home" component={HomeScreen} />
*/

/*
function Start({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screeeen</Text>
      <Button
        title="Go to Упражнения"
        onPress={() => navigation.navigate('Упражнения')}
      />
    </View>
  );
}

function Root() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Settings(упр)"
        onPress={() =>
          navigation.navigate('Root1', {
            screen: 'Settings',
            params: { user: 'jane' },
          })
        }
      />
      <Text>Переделать на отправку из старта в упражнения</Text>
    </View>
  );
}

function SettingsScreen({ route, navigation }) {
  const { user } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Сделать стрелочку на возврат к быстрому старту</Text>
      <Text>Settings Screen</Text>
      <Text>userParam: {JSON.stringify(user)}</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}

      />

    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
      <Text>Profile Screen</Text>
    </View>
  );
}
*/

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
/*
function Start({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
      <Text>Start Screen</Text>
      <Button
        title="Начать упражнения"
        onPress={() =>
          navigation.navigate('Приложение', {
            screen: 'MyExercise',
            params: { user: 'jane' },
          })
        }
      />

    </View>
  );
}*/

/*
function MyStartStreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>MyStartStreen Screen</Text>
      <Button
        title="Начать упражнения"
        onPress={() =>
          navigation.navigate('MySuperRoot', {
            screen: 'MyExercise',
            params: { user: 'jane' },
          })
        }
      />
    </View>
  );
}*/
/*
function Exercise({ route, navigation }) {
  const { user } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Сделать стрелочку на возврат к быстрому старту</Text>
      <Text>Settings Screen</Text>
      <Text>userParam: {JSON.stringify(user)}</Text>
      <Button
        title="Вернуться назад"
        onPress={navigation.goBack}
      />

    </View>
  );
}
*/