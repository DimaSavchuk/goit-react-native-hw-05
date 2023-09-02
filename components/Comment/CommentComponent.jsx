import { Image, View, Text } from "react-native";

import { styles } from "./CommentComponentStyles";

export const CommentComponent = ({
  img,
  direction = "row",
  text,
  textAlign = "right",
  date,
}) => {
  return (
    <View style={{ flexDirection: direction, gap: 16, marginBottom: 24 }}>
      <Image source={img} />
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Text style={[styles.date, { textAlign: textAlign }]}>{date}</Text>
      </View>
    </View>
  );
};
