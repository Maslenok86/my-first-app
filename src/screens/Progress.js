import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet, Image, Button} from 'react-native';
import {exercises} from '../exercises';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Progress = () => {
    const [getValue, setGetValue] = useState(0);
    const [getValue2, setGetValue2] = useState(0);
    const [getValue3, setGetValue3] = useState(0);
    // Function to get the value from AsyncStorage
    AsyncStorage.getItem('any_key_here').then(
        (value) =>
            // AsyncStorage returns a promise
            // Adding a callback to get the value
            setGetValue(value),
        // Setting the value in Text
    );
    AsyncStorage.getItem('any_key_here_2').then(
        (value) =>
            // AsyncStorage returns a promise
            // Adding a callback to get the value
            setGetValue2(value),
        // Setting the value in Text
    );
    AsyncStorage.getItem('any_key_here_3').then(
        (value) =>
            // AsyncStorage returns a promise
            // Adding a callback to get the value
            setGetValue3(value),
        // Setting the value in Text
    );
    return (
        <View>
            <Text> Статистика:</Text>
            <Text> - Всего выполнено кругов: {parseInt(getValue)+ parseInt(getValue2)+parseInt(getValue3)}</Text>
            <Text> -- Выполнено тренировок на стуле (вариант 1): {parseInt(getValue)} </Text>
            <Text> -- Выполнено тренировок на стуле (вариант 2): {parseInt(getValue2)} </Text>
            <Text> -- Выполнено тренировок стоя: {parseInt(getValue3)} </Text>

        </View>
    )
}
export default Progress;


/*

const Progress = () => {
    const [timesPressed, setTimesPressed] = useState(0);

    let textLog = '';
    if (timesPressed > 1) {
        textLog = timesPressed + 'x onPress';
    } else if (timesPressed > 0) {
        textLog = 'onPress';
    }
    return (
        <View>
            <Text> Статистика:</Text>
            <Text> - Всего выполнено кругов: </Text>
            <Text> - Всего отработано времени: </Text>
            <Text> Все упражнения:</Text>
            <Text> 1. Наклоны головы, выполнено</Text>
            <Text> </Text>
            <Text> </Text>

            <Pressable
                onPress={() => {
                    setTimesPressed((current) => current + 1);
                }}
                style={({pressed}) => [
                    {
                        backgroundColor: pressed
                            ? 'rgb(210, 230, 255)'
                            : 'white'
                    },

                ]}>
                {({pressed}) => (
                    <Text>
                        {pressed ? 'Pressed!' : 'Press Me'}
                    </Text>

                )}


            </Pressable>
            <View>
                <Text testID="pressable_press_console">{timesPressed}</Text>
            </View>
            <Image source={{ uri: exercises[timesPressed].gif }}
                   style={{
                       width: 200,
                       height: 200
                   }} />
        </View>
    )
}
 */