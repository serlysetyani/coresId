import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import Colors from '../constant/Colors';
import Fonts from '../constant/Typography';

const defaultDisabledBtn = (props) => {
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={props.onPress} disabled={true}>
            <Text style={styles.btnText}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: Colors.lightRed,
        width: '100%',
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    btnText: {
        color: Colors.white,
        fontSize: 17,
        fontWeight: '600'
    }
});

export default defaultDisabledBtn;