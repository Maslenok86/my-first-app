import React, {useState} from 'react';
import {View, Text} from 'react-native';

import AsyncStorage from "@react-native-async-storage/async-storage";

const Progress = () => {
    const [getValue, setGetValue] = useState("0");
    const [getValue2, setGetValue2] = useState("0");
    const [getValue3, setGetValue3] = useState("0");

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
        <View style={{margin: 10}}>
            <Text style={{fontSize: 16, lineHeight:25}}>
                Статистика:{"\n"}
                Всего выполнено кругов: {parseInt(getValue) + parseInt(getValue2) + parseInt(getValue3)}{"\n"}
                Выполнено тренировок на стуле (вариант 1):{"\n"}{parseInt(getValue)}{"\n"}
                Выполнено тренировок на стуле (вариант 2): {"\n"}{parseInt(getValue2)}{"\n"}
                Выполнено тренировок стоя: {"\n"}{parseInt(getValue3)}
            </Text>
        </View>
    )
}
export default Progress;
