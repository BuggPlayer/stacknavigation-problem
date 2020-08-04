import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Topcategorylist from "../screen/TopCategorylist";
import CategoryDetails from "../components/CategoryDetails";

const Stack = createStackNavigator();

const MaineStckaNavigatior = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Topcategorylist}
          options={{ title: " home Category" }}
        />
        <Stack.Screen
       // initialParams="CategoryDetaisl"
          name="CategoryDetaisl"
          component={CategoryDetails}
          options={{ title: "Category" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MaineStckaNavigatior;
