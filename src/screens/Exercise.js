import React, {useState} from 'react';
import {
    View, SafeAreaView, StyleSheet, Text, Button, Image, Modal, Alert,
} from 'react-native';
import {exercises} from '../exercises';
import {Timer} from 'react-native-stopwatch-timer';
import AsyncStorage from "@react-native-async-storage/async-storage";

function Exercise({route, navigation}) {
    const {selectedValue} = route.params;

    let [timesPressed, setTimesPressed] = useState((selectedValue == 1) ? 0 : ((selectedValue == 2) ? 17 : 34));
    let [endExercise] = useState((selectedValue == 1) ? 16 : ((selectedValue == 2) ? 33 : 50))

    const [isTimerStart, setIsTimerStart] = useState(false);
    const [timerDuration, setTimerDuration] = useState(60000);
    const [resetTimer, setResetTimer] = useState(false);

    // To get the value from the TextInput
    const [textInputValue, setTextInputValue] = useState(0);
    const [textInputValue2, setTextInputValue2] = useState(0);
    // To set the value on Text
    const [getValue, setGetValue] = useState(0);
    const [getValue2, setGetValue2] = useState(0);
    const [getValue3, setGetValue3] = useState(0);

    /*
    const [modalVisible, setModalVisible] = useState(false);
    let [timesPressed, setTimesPressed] = useState(0);
    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [resetStopwatch, setResetStopwatch] = useState(false);
     */

    const createTwoButtonAlert = () =>
        Alert.alert(
            "Описание упражнения",
            exercises[timesPressed].description,
            [{text: "OK", onPress: () => console.log("OK Pressed")}]
        );

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
                {/*
                <Modal visible={modalVisible}
                       animationType='slide'
                       onRequestClose={() => {
                           setModalVisible(!modalVisible);
                       }}
                       style={{
                           height: 200,
                           width: 200
                       }}
                >
                    <Button
                        title="Справа будет модальное окно"
                        onPress={() => setModalVisible(!modalVisible)}
                        style={{
                            height: 200,
                            width: 100
                        }}
                    />
                    <Text style={{
                        textAlign: 'center',
                        alignItems: 'center'
                    }}> {exercises[timesPressed].description}</Text>
                </Modal>
                */}

                <Button
                    title="Об упражнении"
                    onPress={createTwoButtonAlert}
                />
            </View>

            <View style={{alignItems: 'center', justifyContent: 'space-evenly'}}>
                <Text> {exercises[timesPressed].name}</Text>
                <Text testID="pressable_press_console">{timesPressed}</Text>
                <Image source={{uri: exercises[timesPressed].gif}}
                       style={{
                           width: 200,
                           height: 200
                       }}/>
                <Text> {exercises[timesPressed].advice}</Text>
                <Button
                    title="Следующее упражнение справа"
                    onPress={() => {
                        if (timesPressed != endExercise) {
                            setTimesPressed((current) => (current + 1));
                        } else {
                            {
                                if (selectedValue == 1) {
                                    AsyncStorage.getItem('any_key_here').then(
                                        (value) => setGetValue(value),
                                    );
                                    AsyncStorage.setItem('any_key_here', parseInt(getValue) + 1);
                                } else if (selectedValue == 2) {
                                    AsyncStorage.getItem('any_key_here_2').then(
                                        (value) => setGetValue2(value),
                                    );
                                    AsyncStorage.setItem('any_key_here_2', parseInt(getValue2) + 1);
                                } else if (selectedValue == 3) {
                                    AsyncStorage.getItem('any_key_here_3').then(
                                        (value) => setGetValue3(value),
                                    );
                                    AsyncStorage.setItem('any_key_here_3', parseInt(getValue3) + 1);
                                }
                            }
                            navigation.dispatch(navigation.goBack);
                        }
                    }
                    }
                />
                <SafeAreaView>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Timer
                            totalDuration={timerDuration}
                            start={isTimerStart}
                            reset={resetTimer}
                            options={options}
                            handleFinish={() => {
                                //alert('Custom Completion Function');
                                setTimesPressed((current) => current + 1);
                                setIsTimerStart(false);
                                setResetTimer(true);
                            }}
                            // Can call a function On finish of the time
                            getTime={(time) => {
                                //console.log(time);
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

                        {/*
                        <Text style={styles1.textStyle}>
                            {getValue} --{getValue2} -- {getValue3}
                        </Text>
                        */}
                    </View>
                </SafeAreaView>
            </View>
        </View>
    );
}

export default Exercise;

const options = {
    container: {
        backgroundColor: '#2e93f2',
        padding: 5,
        borderRadius: 5,
        width: 200,
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        color: '#FFF',
        marginLeft: 7,
    },
};

/*
const styles1 = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 20,
    },
    textStyle: {
        padding: 10,
        textAlign: 'center',
    },
    buttonStyle: {
        fontSize: 16,
        color: 'white',
        backgroundColor: 'green',
        padding: 5,
        marginTop: 32,
        minWidth: 250,
    },
    buttonTextStyle: {
        padding: 5,
        color: 'white',
        textAlign: 'center',
    },
    textInputStyle: {
        textAlign: 'center',
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderColor: 'green',
    },
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
    },
    sectionStyle: {
        flex: 1,
        marginTop: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        marginTop: 10,
    },
});
*/

/*

                        <TouchableHighlight
                            onPress={() => {
                                setIsTimerStart(false);
                                setResetTimer(true);
                            }}>
                            <Text style={styles.buttonText}>RESET</Text>
                        </TouchableHighlight>
 */

/*
<Button title={"Click me"}
                        onPress={() => {
                            setTimesPressed((current) => current + 1);
                        }}
                >
                </Button>
 */
/*
<Button
                title="Вернуться назад"
                onPress={navigation.goBack}
            />
{
                exercises.map(exer => (
                    <Text> {exer.name}</Text>
                ))
            }
*/
