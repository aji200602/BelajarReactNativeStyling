// In App.js in a new project

import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import MainScreen from "./src/screens/MainScreen.js";
import RecipeDetailScreen from "./src/screens/RecipeDetailScreen.js";
// import RecipeListScreen from './src/screens/RecipeListScreen.js';
// import SavedRecipesScreen from '../src/screens/SavedRecipesScreen.js';
// import ScanRecipeScreen from '../src/screens/ScanRecipeScreen.js';

// function HomeScreen() {
//   const navigation = useNavigation();
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
//         <Text style={{}}>Go to Detail Screen</Text>
//       </TouchableOpacity>
//       <View
//         style={{
//           width: 100,
//           height: 100,
//           backgroundColor: "green",
//         }}
//       ></View>
//       <View
//         style={{
//           width: 100,
//           height: 100,
//           backgroundColor: "yellow",
//         }}
//       ></View>
//       <View
//         style={{
//           width: 100,
//           height: 100,
//           backgroundColor: "blue",
//         }}
//       ></View>
//     </View>
//   );
// }

// function DetailScreen () {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Detail Screen</Text>
//     </View>
//   )
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main Screen"
          component={MainScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
        name="RecipeDetailScreen"
        component={RecipeDetailScreen}
        option={{
          title: "Recipe Detail"
        }}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

{
  /* // import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() { */
}
//   return (
//     <View style={styles.container}>
//       <View
//         style={{
//           width: 100,
//           height: 100,
//           backgroundColor: "green",
//         }}
//       ></View>
//       <View
//         style={{
//           width: 100,
//           height: 100,
//           backgroundColor: "yellow",
//         }}
//       ></View>
//       <View
//         style={{
//           width: 100,
//           height: 100,
//           backgroundColor: "blue",
//         }}
//       ></View>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
// });
