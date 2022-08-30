import React, {useState} from 'react';
import {View, SafeAreaView, Text, Button, Image, Alert} from 'react-native';
import {exercises} from '../exercises';
import {Timer} from 'react-native-stopwatch-timer';
import AsyncStorage from "@react-native-async-storage/async-storage";
import rington from '../sounds/rington.mp3';
import fanfar from '../sounds/fanfar.mp3'

function Exercise({route, navigation}) {
    const {selectedValue} = route.params;

    let [timesPressed, setTimesPressed] = useState((selectedValue == 1) ? 0 : ((selectedValue == 2) ? 17 : 34));
    let [endExercise] = useState((selectedValue == 1) ? 16 : ((selectedValue == 2) ? 33 : 50))

    const [isTimerStart, setIsTimerStart] = useState(false);
    const [timerDuration, setTimerDuration] = useState(60000);
    const [resetTimer, setResetTimer] = useState(false);

    // To set the value on Text
    const [getValue, setGetValue] = useState("0");
    const [getValue2, setGetValue2] = useState("0");
    const [getValue3, setGetValue3] = useState("0");

    let audioFanfar = new Audio(fanfar);
    let audioRington = new Audio(rington);

    const startFanFar = () => {
        audioFanfar.play();
    }
    const startRington = () => {
        audioRington.play();
    }

    const descriptionAlert = () =>
        Alert.alert(
            "Описание упражнения",
            exercises[timesPressed].description,
            [{text: "OK"}]
        );
    const congratulationsAlert = () =>
        Alert.alert(
            "Позравляем!",
            "Вы прошли круг упражнений!",
            [{text: "OK"}]
        );

    function updateCircle() {
        if (timesPressed != endExercise) {
            setTimesPressed((current) => (current + 1));
            startRington();
        } else {
            if (selectedValue == 1) {
                AsyncStorage.getItem('any_key_here').then(
                    (value) => setGetValue(value),
                );
                AsyncStorage.setItem('any_key_here', (parseInt(getValue) + 1).toString());
            } else if (selectedValue == 2) {
                AsyncStorage.getItem('any_key_here_2').then(
                    (value) => setGetValue2(value),
                );
                AsyncStorage.setItem('any_key_here_2', (parseInt(getValue2) + 1).toString());
            } else if (selectedValue == 3) {
                AsyncStorage.getItem('any_key_here_3').then(
                    (value) => setGetValue3(value),
                );
                AsyncStorage.setItem('any_key_here_3', (parseInt(getValue3) + 1).toString());
            }
            congratulationsAlert();
            startFanFar();
            navigation.dispatch(navigation.goBack);
        }
    }

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
        <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Button
                    title="На главную"
                    onPress={navigation.goBack}
                    style={{
                        flex: 1,
                        height: 300,
                        weight: 40
                    }}
                />
                <Button
                    title="Об упражнении"
                    onPress={descriptionAlert}
                />
            </View>

            <View style={{display: 'flex', alignSelf: 'center', justifyContent: 'space-evenly', marginTop: 40}}>
                <View style={{
                    display: 'flex', flexDirection: 'column', width: 250
                }}>
                    <View style={{
                        display: 'flex', flexDirection: 'column', alignSelf: 'center', margin: 10, alignItems: 'center',
                    }}>
                        <Text style={{textAlign: 'center', fontSize: 16}}> {exercises[timesPressed].name}</Text>
                        <Image source={{uri: exercises[timesPressed].gif}}
                               style={{width: 200, height: 200, margin: 10}}/>
                        <Text style={{textAlign: 'center', fontSize: 16}}> {exercises[timesPressed].advice}</Text>
                    </View>
                    {/*
                        <Button
                            title="Пропустить упражнение"
                            onPress={() => {
                                updateCircle();

                                setIsTimerStart(false);
                                setResetTimer(true);
                            }}
                        />
                    */}
                    <View style={{width: 140, alignSelf: 'center', margin: 10}}>
                        <SafeAreaView>
                            <Timer
                                totalDuration={timerDuration}
                                start={isTimerStart}
                                reset={resetTimer}
                                options={timerOptions}
                                handleFinish={() => {
                                    updateCircle();

                                    setIsTimerStart(false);
                                    setResetTimer(true);
                                }}
                            />
                            <Button
                                title={!isTimerStart ? 'START' : 'STOP'}
                                onPress={() => {
                                    setIsTimerStart(!isTimerStart);
                                    setResetTimer(false);
                                }}
                                style={{marginLeft: 10}}
                                color='#ff843d'>
                            </Button>
                        </SafeAreaView>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Exercise;

const timerOptions = {
    container: {
        backgroundColor: '#2e93f2',
        padding: 5,
        borderRadius: 2,
        alignItems: 'center',
    },
    text: {
        alignSelf: 'center',
        fontSize: 25,
        color: '#FFF',
        marginLeft: 7,

    },
};
