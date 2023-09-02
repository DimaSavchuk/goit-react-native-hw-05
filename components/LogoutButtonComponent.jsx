import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

import { LogoutIcon } from "../assets/icons/icons";

export const LogoutButtonComponent = () => {
  const navigation = useNavigation();

  const handleLogOut = () => {
    navigation.navigate("Login");
  };

  return (
    <TouchableOpacity onPress={handleLogOut}>
      <LogoutIcon style={{ marginRight: 20 }} />
    </TouchableOpacity>
  );
};
