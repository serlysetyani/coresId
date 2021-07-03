import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const button = (props) => {
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
        backgroundColor: '#25D366',
        width: '100%',
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    btnText: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '500'
    }
});

export default button;