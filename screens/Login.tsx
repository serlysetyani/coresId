import * as React from 'react';
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';

import Colors from '../constant/Colors';
import Typography from '../constant/Typography';

import DefaultInputForm from '../components/defaultInputForm';
import DefaultFilledBtn from '../components/defaultFilledBtn';

const Login = () => {
    const [value, onchangeText] = React.useState();
    return (
        <SafeAreaView style={styles.screenBackground}>
            <View style={styles.container}>
                <Text style={Typography.title1}>Login</Text>
                <View style={styles.midContainer}>
                    <DefaultInputForm
                        label="Email"
                        placeholder="Email"
                        onchangeText={(text) => onchangeText}
                        value={value}
                        icon={<Text></Text>}
                        iconPosition="right"
                    />
                    <DefaultInputForm
                        label="Password"
                        placeholder="Password"
                        onchangeText={(text) => onchangeText}
                        value={value}
                        icon={<Text></Text>}
                        iconPosition="right"
                    />
                    <Text style={[Typography.smallText, { color: Colors.redBrick, alignSelf: 'flex-end' }]}>Lupa password?</Text>
                    <View style={styles.botContainer}>
                        <DefaultFilledBtn style={styles.signupBtn}>
                            LOGIN
                        </DefaultFilledBtn>
                        <View style={{ alignItems: 'center', paddingTop: 36 }}>
                            <Text>
                                Belum punya akun?
                                <TouchableOpacity>
                                    <Text style={styles.linkLogin} >
                                        Daftar sekarang!
                                    </Text>
                                </TouchableOpacity>
                            </Text>
                            <View style={{ paddingTop: 40 }}>
                                <Text>Atau masuk dengan</Text>
                                <View style={styles.socialLoginContainer}>
                                    <TouchableOpacity>
                                        <Image source={require('../assets/images/google.png')} style={styles.socialLogin} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image source={require('../assets/images/facebook.png')} style={styles.socialLogin} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image source={require('../assets/images/twitter.png')} style={styles.socialLogin} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
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
    },
    midContainer: {
        paddingTop: 32
    },
    botContainer: {
        marginTop: 24
    },
    linkLogin: {
        color: Colors.redBrick
    },
    socialLoginContainer: {
        paddingTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    socialLogin: {
        width: 24,
        height: 24
    }
})

export default Login;