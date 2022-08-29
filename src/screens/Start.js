import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Picker} from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";


function Start({navigation}) {
    const [selectedValue, setSelectedValue] = useState("1");

    const [getValue, setGetValue] = useState(0);
    const [getValue2, setGetValue2] = useState(0);
    const [getValue3, setGetValue3] = useState(0);

    AsyncStorage.getItem('any_key_here').then(
        (value) => setGetValue(value),
    );
    AsyncStorage.getItem('any_key_here_2').then(
        (value) => setGetValue2(value),
    );
    AsyncStorage.getItem('any_key_here_3').then(
        (value) => setGetValue3(value),
    );
    return (
        <View style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center',}}>
            <Text>Выберите упражнения:</Text>
            <View style={{flexDirection: 'column'}}>
                <Picker
                    selectedValue={selectedValue}
                    // style={{marginRight: 10, height: 30,
                    //     weight: 100}}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Тренировка на стуле (вариант 1)" value='1'/>
                    <Picker.Item label="Тренировка на стуле (вариант 2)" value='2'/>
                    <Picker.Item label="Тренировка стоя" value='3'/>

                </Picker>
                <Button
                    title="Начать"
                    color='#ff843d'
                    onPress={() =>
                        navigation.navigate('Приложение', {
                            screen: 'Exercise',
                            params: {selectedValue},
                        })
                    }
                />
                {/*
                <Text>
                    {getValue} -- {getValue2} -- {getValue3}
                </Text>
                */}

            </View>

        </View>
    );
}

export default Start;

/*
style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}

 */
/*
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function Start() {

    return (
        <Stack.Navigator>

            <Stack.Screen name="StartPoint" component={ProfileScreen} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>

    )
}*/
/*
<Button
              title="Начать упражнения 1"

              onPress={() =>
                  navigation.navigate('Приложение', {
                      screen: 'Exercise',
                      params: { type: '1' },
                  })
              }
          />
        <Button
          title="Начать упражнения 1"

          onPress={() =>
            navigation.navigate('Приложение', {
              screen: 'Exercise',
              params: { type: '1' },
            })
          }
        />
          <Button
              title="Начать упражнения 2"

              onPress={() =>
                  navigation.navigate('Приложение', {
                      screen: 'Exercise',
                      params: { type: '2' },
                  })
              }
          />
          <Button
              title="Начать упражнения 3"

              onPress={() =>
                  navigation.navigate('Приложение', {
                      screen: 'Exercise',
                      params: { type: '3' },
                  })
              }
          />
 */

/*function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile Screeeen</Text>
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    );
}*/


/*function Start() {

    return (
        <Stack.Navigator>

            <Stack.Screen name="StartPoint" component={ProfileScreen} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>

    )
}
export default Start;

function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile Screeeen</Text>
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    );
}*/
/*
function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Settings"
                onPress={() =>
                    navigation.navigate('Start', {
                        screen: 'Settings',
                        params: { user: 'jane' },
                    })
                }
            />
        </View>
    );
}*/
/*
function SettingsScreen({ route, navigation }) {
    const { user } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settings Screen</Text>
            <Text>userParam: {JSON.stringify(user)}</Text>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    );
}*/
