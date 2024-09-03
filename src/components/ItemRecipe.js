import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ItemRecipe = ({ item }) => {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("RecipeDetailScreen", {
        recipeId: item.id
      })}
      style={styles.itemContainer}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={{ uri: item.image }}
            // resizeMode="cover"
            style={styles.imageRecipe}
          ></Image>
          <View style={styles.infoContainer}>
            <Text style={styles.text}>{item.name}</Text>
            <View style={styles.ratingContainer}>
              <View style={styles.ratingBintang}>
                <Ionicons name="star" size={16} color={colors.start} />
                <Text style={{marginLeft: 5}}>
                 {item.rating} | {item.cuisine}
                </Text>
              </View>
              <View style={styles.time}>
                <Ionicons name="time-outline" size={16} color={colors.text} />
                <Text style={{marginLeft: 5}}>
                  {item.servings} mins
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderBottomwidth: 1,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: colors.border,
    shadowColor: "#000",
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 16,
  },
  ingredients: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 14,
    color: "#666",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Helvetica",
    marginBottom: 10,
    color: "#333",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  imageRecipe: {
    backgroundColor: colors.border,
    height: 78,
    width: 78,
    borderRadius: 10,
    resizeMode: "cover",
    marginEnd: 10,
  },
  ratingContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  ratingBintang: {
    flex: 1,
    flexDirection: "row",
  },
  time:{
    flex: 1,
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
    
  }
});

export default ItemRecipe;
