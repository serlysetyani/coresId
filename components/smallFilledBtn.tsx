import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import Colors from '../constant/Colors';
import Fonts from '../constant/Typography';

const smallFilledBtn = (props) => {
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={props.onPress}>
            <Text style={styles.btnText}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: Colors.redBrick,
        width: '50%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    btnText: {
        color: Colors.white,
        fontSize: 13,
        fontWeight: '600'
    }
});

export default smallFilledBtn;