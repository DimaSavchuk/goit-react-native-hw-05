import { View, Image, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { selectPosts } from "../../redux/posts/selectors";

import { globalStyles } from "../../styles/globalStyles";
import { styles } from "./PostsScreenStyles";

import { PostComponent } from "../../components/Post/PostComponent";

export const PostsScreen = () => {
  const posts = useSelector(selectPosts);

  return (
    <View style={[globalStyles.container, styles.postsContainer]}>
      <View style={styles.profileContainer}>
        <View style={styles.userPhoto}>
          <Image source={require("../../assets/images/photo.png")} />
        </View>
        <View style={{ marginTop: 16 }}>
          <Text style={styles.name}>Natali Romanova</Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostComponent
            postPhoto={item.imageUrl}
            postName={item.name}
            commentsNumber={item.commentsNumber}
            postLocation={item.location}
            location={item.coords}
          />
        )}
      />

      {/* //  {posts.map(
        //   ({ postPhoto, postName, commentsNumber, postLocation, location }) => {
        //     return (
        //       <PostComponent
        //         key={description}
        //         image={postPhoto}
        //         description={postName}
        //         comments={commentsNumber}
        //         locationName={postLocation}
        //         location={location}
        //       />
        //     );
        //   }
        // )} */}
    </View>
  );
};
