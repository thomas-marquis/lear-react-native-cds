import React from 'react';
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

export default function GameScreen() {
    return (
        <View style={styles.container}>
            <Text>Jouons</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start'
    }
})