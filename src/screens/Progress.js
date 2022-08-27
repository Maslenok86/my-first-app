import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet, Image, Button} from 'react-native';
import {exercises} from '../exercises';

const Progress = () => {

    return (
        <View>
            <Text> Статистика:</Text>
            <Text> - Всего выполнено кругов: </Text>
            <Text> - Всего отработано времени: </Text>
            <Text> Все упражнения:</Text>
            <Text> 1. Наклоны головы, выполнено</Text>
            <Text> </Text>
            <Text> </Text>


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