import * as React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';

import Colors from '../constant/Colors';
import Typography from '../constant/Typography';

import DefaultInputForm from '../components/defaultInputForm';

const Login = () => {
    const [value, onchangeText] = React.useState();
    return (
        <SafeAreaView style={styles.screenBackground}>
            <View style={styles.container}>
                <Text style={Typography.title1}>Sign up</Text>
                <DefaultInputForm
                    label="username"
                    onchangeText={(text) => onchangeText}
                    value={value}
                    icon={<Text>Test</Text>}
                    iconPosition="right"
                />
                <DefaultInputForm
                    label="Password"
                    onchangeText={(text) => onchangeText}
                    value={value}
                    icon={<Text>Test</Text>}
                    iconPosition="left"
                />
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    screenBackground: {
        backgroundColor: Colors.appBackground,
        flex: 1
    },
    container: {
        paddingHorizontal: 16,
        paddingTop: 60
    }
})

export default Login;