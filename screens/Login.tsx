import * as React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';

import DefaultFilledBtn from '../components/defaultFilledBtn';
import DefaultOutlineBtn from '../components/defaultOutlineBtn';
import SmallFilledBtn from '../components/smallFilledBtn';
import SmallOutlineBtn from '../components/smallOutlineBtn';
import DefaultDisabledBtn from '../components/defaultDisabledBtn';

export default class Login extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <View>
                        <Text style={{ fontSize: 28, fontWeight: '500' }}>Sign up</Text>
                    </View>
                    <View>
                        <DefaultFilledBtn>
                            LOGIN
                        </DefaultFilledBtn>

                    </View>
                    <DefaultOutlineBtn style={styles.btnHola}>
                        Hola
                    </DefaultOutlineBtn>
                    <SmallFilledBtn>
                        Small Button
                    </SmallFilledBtn>
                    <SmallOutlineBtn>
                        Small
                    </SmallOutlineBtn>
                    <DefaultDisabledBtn>Disabled</DefaultDisabledBtn>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 60
    },
    btnHola: {
        marginTop: 100
    }
})