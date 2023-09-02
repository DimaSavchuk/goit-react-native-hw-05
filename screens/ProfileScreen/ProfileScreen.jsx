import { View, TouchableOpacity, Image, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { selectPosts } from "../../redux/posts/selectors";
import { styles } from "./ProfileScreenStyles";

import { BackgroundComponent } from "../../components/BackgroundComponent";
import { UserPostsComponent } from "../../components/UserPosts/UserPostsComponent";
import { LogoutButtonComponent } from "../../components/LogoutButtonComponent";

import { DeleteIcon } from "../../assets/icons/icons";

import USER_PHOTO from "../../assets/images/photoProfile.png";

export const ProfileScreen = () => {
  const posts = useSelector(selectPosts);

  return (
    <BackgroundComponent>
      <View style={styles.wrapper}>
        <TouchableOpacity style={{ position: "absolute", right: 16, top: 22 }}>
          <LogoutButtonComponent />
        </TouchableOpacity>
        <View style={styles.photoContainer}>
          <Image source={USER_PHOTO} />
          <TouchableOpacity style={styles.deletePhotoButton}>
            <DeleteIcon />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Natali Romanova</Text>

        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <UserPostsComponent
              postPhoto={item.imageUrl}
              postName={item.name}
              commentsNumber={item.commentsNumber}
              postLocation={item.location}
              likes={item.likes}
              location={item.coords}
            />
          )}
        />
      </View>
    </BackgroundComponent>
  );
};
