import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import {useRoute} from "@react-navigation/native"
import RecipesData from '../contants/RecipesData.json'
import colors from '../theme/colors'  

const RecipeDetailScreen = () => {
    const route = useRoute();

    
    const {recipeId} = route.params;
    const recipeDetails = RecipesData.recipes.find((recipe) => Number(recipe.id) === Number(recipeId));
console.log('recipeId', recipeId)
    return (
        <ScrollView style={styles.screen}>
            <Image
            source={{ uri: recipeDetails.image}}
            resizeMode="strech"
            style={styles.imageRecipe}>
            </Image>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flexGrow: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#f8f8f8'
    },
    imageRecipe: {
        backgroundColor: colors.border,
        height : 300,

    }
});

export default RecipeDetailScreen;