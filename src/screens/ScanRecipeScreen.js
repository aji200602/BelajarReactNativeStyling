import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ScanRecipeScreen= () => {
    return ( 
        <View style={styles.screen}>
            <Text style={styles.title}>Scan Recipe Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
})

export default ScanRecipeScreen;