import React, {useState} from 'react';
import {View, Text, Picker, Button} from 'react-native';

function Start({navigation}) {
    const [selectedValue, setSelectedValue] = useState("1");
    return (
        <View style={{flex: 1,justifyContent:'space-evenly',alignItems:'center', }}>
            <Text>Выберите упражнения:</Text>
            <View style={{flexDirection:'row', }}>
                <Picker
                    selectedValue={selectedValue}
                    style={{marginRight: 10}}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Упражнения 1" value='1'/>
                    <Picker.Item label="Упражнения 2" value='2'/>
                    <Picker.Item label="Епражнения 3" value='3'/>

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
