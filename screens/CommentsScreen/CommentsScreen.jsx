import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";

import { CommentComponent } from "../../components/Comment/CommentComponent";

import { ArrowUp } from "../../assets/icons/icons";

import { globalStyles } from "../../styles/globalStyles";
import { styles } from "./CommentsScreenStyles";

import USER_PHOTO from "../../assets/images/photoComment.png";

export const CommentsScreen = () => {
  const route = useRoute();
  const postPhoto = route.params?.postPhoto;
  console.log(route);

  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          flex: 1,
        }}
      >
        <View
          style={[
            globalStyles.container,
            styles.container,
            {
              paddingBottom: isKeyboardShown ? 90 : 16,
            },
          ]}
        >
          <ScrollView>
            <Image
              source={
                typeof postPhoto === "number" ? postPhoto : { uri: postPhoto }
              }
              resizeMode={"cover"}
              style={styles.image}
            />

            <SafeAreaView>
              <CommentComponent
                img={USER_PHOTO}
                text={
                  "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!"
                }
                date={"09 червня, 2020 | 09:14"}
              />
              <CommentComponent
                img={USER_PHOTO}
                text={
                  "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!"
                }
                date={"09 червня, 2020 | 09:14"}
                direction={"row-reverse"}
                textAlign={"left"}
              />
              <CommentComponent
                img={USER_PHOTO}
                text={
                  "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!"
                }
                date={"09 червня, 2020 | 09:14"}
              />
              <CommentComponent
                img={USER_PHOTO}
                text={
                  "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!"
                }
                date={"09 червня, 2020 | 09:14"}
                direction={"row-reverse"}
                textAlign={"left"}
              />
            </SafeAreaView>
          </ScrollView>
          <View>
            <TextInput
              onFocus={() => setIsKeyboardShown(true)}
              onBlur={() => setIsKeyboardShown(false)}
              style={styles.input}
              placeholder="Коментувати..."
            />
            <TouchableOpacity style={styles.sendMessageButton}>
              <ArrowUp />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
