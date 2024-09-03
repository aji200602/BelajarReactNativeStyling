import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import RecipesData from "../contants/RecipesData.json";
import ItemRecipe from "../components/ItemRecipe";

const RecipeListScreen = () => {
  const navigation = useNavigation();
  // console.log(RecipesData.recipes);
  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={() => navigation.navigate("ScanRecipeScreen", )}>
        {/* <Text style={styles.buttonText}>Go to Scan Recipe Screen</Text> */}
      </TouchableOpacity>
      <FlatList
        data={RecipesData.recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ItemRecipe item={item} />}
      ></FlatList>

    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: "center",
    // alignItems: "center",
  },
  // title: {
  //   fontSize: 24,
  //   fontWeight: "bold",
  //   marginBottom: 20,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: 20,
  // },
});

export default RecipeListScreen;
