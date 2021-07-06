import * as React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

import Colors from '../constant/Colors';

const defaultInputForm = ({ onchangeText, value, label, icon, iconPosition, placeholder, secureTextEntry }) => {

    const getFlexDirection = () => {
        if (icon && iconPosition) {
            if (iconPosition === 'left') {
                return 'row';
            } else {
                return 'row-reverse';
            }
        }
    }

    const [focused, setFocused] = React.useState(false);

    const getFocuse = () => {
        if (focused) {
            return Colors.redBrick
        } else {
            return Colors.white
        }
    }

    return (
        <View style={styles.inputForm}>
            {label && <Text style={styles.formLabel}>{label}</Text>}
            <View style={[styles.formContainer, { flexDirection: getFlexDirection(), borderColor: getFocuse() }]}>
                <View style={styles.formIcon}>{icon && icon}</View>
                <TextInput
                    style={styles.formInput}
                    onChangeText={onchangeText}
                    value={value}
                    placeholder={placeholder}
                    onFocus={() => { setFocused(true) }}
                    onBlur={() => { setFocused(false) }}
                    secureTextEntry={secureTextEntry} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        height: 48,
        width: '100%',
        borderWidth: 2,
        borderRadius: 30,
        flexDirection: 'row',
        paddingHorizontal: 16,
        backgroundColor: Colors.white,
        alignItems: 'center'
    },
    formInput: {
        flex: 1,
        height: '100%',

    },
    formLabel: {
        marginBottom: 6
    },
    inputForm: {
        paddingVertical: 8,
    },
    formIcon: {
        paddingHorizontal: 8
    }
});

export default defaultInputForm;