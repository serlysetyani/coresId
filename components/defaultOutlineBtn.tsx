import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import Colors from '../constant/Colors';
import Fonts from '../constant/Typography';

const defaultOutlineBtn = (props) => {
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
        borderColor: Colors.redBrick,
        borderWidth: 2,
        width: '100%',
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    btnText: {
        color: Colors.redBrick,
        fontSize: 17,
        fontWeight: '500'
    }
});

export default defaultOutlineBtn;