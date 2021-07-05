import * as React from 'react';
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';

import Colors from '../constant/Colors';
import Typography from '../constant/Typography';

import DefaultInputForm from '../components/defaultInputForm';
import DefaultFilledBtn from '../components/defaultFilledBtn';

const ForgotPassword = () => {
    const [value, onchangeText] = React.useState();
    return (
        <SafeAreaView style={styles.screenBackground}>
            <View style={styles.container}>
                <Text style={Typography.title1}>Lupa Password</Text>
                <Text style={[Typography.footnote, { paddingTop: 32, paddingBottom: 24, textAlign: 'justify' }]}>
                    Masukkan email Anda. Anda akan menerima link{'\n'}untuk membuat kata sandi baru melalui email.
                </Text>
                <DefaultInputForm
                    label="Email"
                    placeholder="Email"
                    onchangeText={(text) => onchangeText}
                    value={value}
                    icon={<Text></Text>}
                    iconPosition="right"

                />
                <View style={{ paddingTop: 40 }}>
                    <DefaultFilledBtn>
                        KIRIM
                    </DefaultFilledBtn>
                </View>

            </View>
        </SafeAreaView>

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
})

export default ForgotPassword;