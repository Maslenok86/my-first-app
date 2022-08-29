import React, {useState} from 'react';
import {
    View, SafeAreaView, StyleSheet, Text, TextInput, Button, Image, Modal, Alert, TouchableOpacity
} from 'react-native';
import {exercises} from '../exercises';
import {Timer} from 'react-native-stopwatch-timer';
import AsyncStorage from "@react-native-async-storage/async-storage";

function Exercise({route, navigation}) {
    const {selectedValue} = route.params;
    //const [modalVisible, setModalVisible] = useState(false);
    let [timesPressed, setTimesPressed] = useState((selectedValue == 1) ? 0 : ((selectedValue == 2) ? 17 : 34));
    let [endExercise] = useState((selectedValue == 1) ? 16 : ((selectedValue == 2) ? 33 : 50))
    // let [timesPressed, setTimesPressed] = useState(0);


    const [isTimerStart, setIsTimerStart] = useState(false);
    //const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [timerDuration, setTimerDuration] = useState(60000);
    const [resetTimer, setResetTimer] = useState(false);
    //const [resetStopwatch, setResetStopwatch] = useState(false);

    // To get the value from the TextInput
    const [textInputValue, setTextInputValue] = useState(0);
    const [textInputValue2, setTextInputValue2] = useState(0);
    // To set the value on Text
    const [getValue, setGetValue] = useState(0);
    const [getValue2, setGetValue2] = useState(0);
    const [getValue3, setGetValue3] = useState(0);
    const createTwoButtonAlert = () =>
        Alert.alert(
            "Описание упражнения",
            exercises[timesPressed].description,
            [{text: "OK", onPress: () => console.log("OK Pressed")}]
        );

    const saveValueFunction = () => {
        // Function to save the value in AsyncStorage
        /*
        if (textInputValue) {
            // To check the input not empty
            AsyncStorage.setItem('any_key_here', textInputValue);
            // Setting a data to a AsyncStorage with respect to a key
            setTextInputValue(0);
            // Resetting the TextInput

        }/*
        /*
        if (textInputValue) {
            // To check the input not empty
            AsyncStorage.setItem('any_key_here', textInputValue);
            // Setting a data to a AsyncStorage with respect to a key
            setTextInputValue('');
            // Resetting the TextInput
            alert('Data Saved');
            // Alert to confirm
        } else {
            alert('Please fill data');
        }*/


    };
    const getValueFunction = () => {
        // Function to get the value from AsyncStorage
        AsyncStorage.getItem('any_key_here').then(
            (value) =>
                // AsyncStorage returns a promise
                // Adding a callback to get the value
                setGetValue(value),
            // Setting the value in Text
        );
    };

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
                {/*<Modal visible={modalVisible}*/}
                {/*       animationType='slide'*/}
                {/*       onRequestClose={() => {*/}
                {/*           setModalVisible(!modalVisible);*/}
                {/*       }}*/}
                {/*       style={{*/}
                {/*           height: 200,*/}
                {/*           width: 200*/}
                {/*       }}*/}
                {/*>*/}
                {/*    <Button*/}
                {/*        title="Справа будет модальное окно"*/}
                {/*        onPress={() => setModalVisible(!modalVisible)}*/}
                {/*        style={{*/}
                {/*            height: 200,*/}
                {/*            width: 100*/}
                {/*        }}*/}
                {/*    />*/}
                {/*    <Text style={{*/}
                {/*        textAlign: 'center',*/}
                {/*        alignItems: 'center'*/}
                {/*    }}> {exercises[timesPressed].description}</Text>*/}
                {/*</Modal>*/}
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
                            //saveValueFunction();
                            /*
                            AsyncStorage.getItem('any_key_here').then(
                                (value) =>
                                    // AsyncStorage returns a promise
                                    // Adding a callback to get the value
                                    setGetValue(parseInt(value)+1),
                                // Setting the value in Text
                            );
                            if (timesPressed) {
                                // To check the input not empty
                                AsyncStorage.setItem('any_key_here', getValue);
                                // Setting a data to a AsyncStorage with respect to a key
                                setTextInputValue(0);
                                // Resetting the TextInput

                            }*/
                        } else {
                            {
                                if(selectedValue==1){
                                    AsyncStorage.getItem('any_key_here').then(
                                        (value) =>
                                            // AsyncStorage returns a promise
                                            // Adding a callback to get the value
                                            setGetValue(value),
                                        // Setting the value in Text
                                    );
                                    // To check the input not empty
                                    AsyncStorage.setItem('any_key_here', parseInt(getValue) + 1);
                                    // Setting a data to a AsyncStorage with respect to a key
                                    //setTextInputValue(0);
                                    // Resetting the TextInput

                                }else if(selectedValue==2){
                                    AsyncStorage.getItem('any_key_here_2').then(
                                        (value) =>
                                            // AsyncStorage returns a promise
                                            // Adding a callback to get the value
                                            setGetValue2(value),
                                        // Setting the value in Text
                                    );
                                    // To check the input not empty
                                    AsyncStorage.setItem('any_key_here_2', parseInt(getValue2) + 1);
                                    // Setting a data to a AsyncStorage with respect to a key
                                    //setTextInputValue2(0);
                                    // Resetting the TextInput
                                }else if(selectedValue==3){
                                    AsyncStorage.getItem('any_key_here_3').then(
                                        (value) =>
                                            // AsyncStorage returns a promise
                                            // Adding a callback to get the value
                                            setGetValue3(value),
                                        // Setting the value in Text
                                    );
                                    // To check the input not empty
                                    AsyncStorage.setItem('any_key_here_3', parseInt(getValue3) + 1);
                                    // Setting a data to a AsyncStorage with respect to a key
                                    //setTextInputValue2(0);
                                    // Resetting the TextInput
                                }


                            }
                            navigation.dispatch(navigation.goBack);
                        }
                        // setTimesPressed((current) => (current + 1));
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

                        {/*<Text style={styles1.titleText}>*/}
                        {/*    AsyncStorage in React Native to Store Data in Session*/}
                        {/*</Text>*/}
                        {/*
                        <TextInput
                            placeholder="Enter Some Text here"
                            value={textInputValue}
                            onChangeText={(data) => setTextInputValue(data)}
                            underlineColorAndroid="transparent"
                            style={styles1.textInputStyle}
                        />
                        <TouchableOpacity
                            onPress={saveValueFunction}
                            style={styles1.buttonStyle}>
                            <Text style={styles1.buttonTextStyle}>
                                SAVE VALUE
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={getValueFunction}
                            style={styles1.buttonStyle}>
                            <Text style={styles1.buttonTextStyle}>
                                GET VALUE
                            </Text>
                        </TouchableOpacity>

                        */}
                        <Text style={styles1.textStyle}>
                            {getValue} --{getValue2} -- {getValue3}
                        </Text>
                    </View>
                </SafeAreaView>
            </View>


        </View>

    );
}

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
export default Exercise;

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