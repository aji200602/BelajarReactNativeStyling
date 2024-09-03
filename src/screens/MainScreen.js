import React from "react";

import RecipeListScreen from "./RecipeListScreen";
import ScanRecipeScreen from "./ScanRecipeScreen";
import SavedRecipesScreen from "./SavedRecipesScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Recipe List"
        component={RecipeListScreen}
        options={{
          title: "RECIPE LIST",
          tabBarLabel: "Recipe List",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "home-sharp" : "home-outline"} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan Recipe"
        component={ScanRecipeScreen}
        options={{
          title: "SCAN RECIPE",
          tabBarLabel: "Scan Recipe",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "qr-code-sharp" : "qr-code-outline"} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved Recipes"
        component={SavedRecipesScreen}
        options={{
          title: "SAVED RECIPES",
          tabBarLabel: "Saved Recipes",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "save-sharp" : "save-outline"} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
