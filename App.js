import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { LoginScreen } from "./screens/LoginScreen/LoginScreen";
import { RegistrationScreen } from "./screens/RegistrationScreen/RegistrationScreen";
import { Home } from "./screens/Home/Home";
import { CommentsScreen } from "./screens/CommentsScreen/CommentsScreen";
import { MapScreen } from "./screens/MapScreen/MapScreen";

import { BackButtonComponent } from "./components/BackButtonComponent";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const MainStack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Login">
          <MainStack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="Comments"
            component={CommentsScreen}
            options={{
              title: "Коментарі",
              headerTitleAlign: "center",
              headerShown: true,
              headerLeft: () => <BackButtonComponent />,
              headerStyle: {
                borderBottomWidth: 1,
              },
            }}
          />
          <MainStack.Screen
            name="Map"
            component={MapScreen}
            options={{
              title: "Мапа",
              headerTitleAlign: "center",
              headerShown: true,
              headerLeft: () => <BackButtonComponent />,
              headerStyle: {
                borderBottomWidth: 1,
              },
            }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
