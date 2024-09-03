import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SavedRecipesScreen = () => {
    return ( 
        <View style={styles.screen}>
            <Text style={styles.title}>Recipes Screen</Text>
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

export default SavedRecipesScreen;