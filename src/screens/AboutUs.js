import React from 'react';
import {View, Text} from 'react-native';

const AboutUs = () => {
    return (
        <View style={{margin: 10}}>
            <Text style={{fontSize: 16,  lineHeight:25}}>
                Приложение выполнено в рамках летней производственной практики:{"\n"}
                29.06.2022 - 12.07.2022
            </Text>
        </View>
    )
}

export default AboutUs;
