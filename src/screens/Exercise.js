import React, {useState} from 'react';
import {
    View, SafeAreaView, StyleSheet, TouchableHighlight, Text, Button, Image, Modal
} from 'react-native';
import {exercises} from '../exercises';
import {Timer} from 'react-native-stopwatch-timer';

function Exercise({route, navigation}) {
    const {selectedValue} = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    let [timesPressed, setTimesPressed] = useState((selectedValue == 1) ? 0 : ((selectedValue == 2) ? 16 : 33));
    /*let hohoh = true;
   if ((hohoh) && (type == 1)) {
      let [timesPressed, setTimesPressed] = useState(0);
  } else if ((hohoh) && (type == 2)) {
      let [timesPressed, setTimesPressed] = useState(16);
  } else if ((hohoh) && (type == 3)) {
      let [timesPressed, setTimesPressed] = useState(33);
  }*/

    const [isTimerStart, setIsTimerStart] = useState(false);
    //const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [timerDuration, setTimerDuration] = useState(6000);
    const [resetTimer, setResetTimer] = useState(false);
    //const [resetStopwatch, setResetStopwatch] = useState(false);

    return (
        <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Button
                    title="Вернуться на главную"
                    onPress={navigation.goBack}
                    style={{
                        flex: 1,
                        height: 300,
                        weight: 40
                    }}
                />
                <Modal visible={modalVisible}
                       animationType='slide'
                       onRequestClose={() => {
                           setModalVisible(!modalVisible);
                       }}
                       style={{height:200,
                       width:200}}
                >
                    <Button
                        title="Справа будет модальное окно"
                        onPress={() => setModalVisible(!modalVisible)}
                        style={{
                            height: 200,
                            width: 100
                        }}
                    />
                </Modal>
                <Button
                    title="Тут будет модальное окно"
                    onPress={() => setModalVisible(!modalVisible)}
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
                        setTimesPressed((current) => current + 1);
                    }}
                />
                <SafeAreaView>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Timer
                            totalDuration={timerDuration}

                            // Time Duration
                            start={isTimerStart}
                            // To start
                            reset={resetTimer}
                            // To reset
                            options={options}
                            // Options for the styling
                            handleFinish={() => {
                                //alert('Custom Completion Function');
                                setTimesPressed((current) => current + 1);
                                setIsTimerStart(false);
                                setResetTimer(true);
                            }}
                            // Can call a function On finish of the time
                            getTime={(time) => {
                                console.log(time);
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