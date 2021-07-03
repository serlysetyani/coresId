import * as React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';

import Button from '../components/button';

export default class Login extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <View>
                        <Text style={{ fontSize: 28, fontWeight: '500' }}>Sign up</Text>
                    </View>
                    <View>
                        <Button>
                            LOGIN
                        </Button>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 60
    }
})