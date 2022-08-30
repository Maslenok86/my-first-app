import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Picker} from "@react-native-picker/picker";

function Start({navigation}) {
    const [selectedValue, setSelectedValue] = useState("1");

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <Text style={{fontSize: 16}}>Выберите упражнения:</Text>

            <Picker
                selectedValue={selectedValue}
                style={{width: 310, textAlign: 'center', margin: 10}}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Тренировка на стуле (вариант 1)" value='1'/>
                <Picker.Item label="Тренировка на стуле (вариант 2)" value='2'/>
                <Picker.Item label="Тренировка стоя" value='3'/>
            </Picker>

            <View style={{width: 140}}>
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
