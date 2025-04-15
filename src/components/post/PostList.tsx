import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {PostSummary} from '../../types/post';
import {PageResponse} from '../../types/page';
import PostItem from './PostItem';
import Pagination from '../pagination/Pagination';
import Divider from '../common/Divider';
import colors from '../../styles/colors';

const divider = () => {
  return <Divider color={colors.gray500} />;
};

type Props = {
  posts: PageResponse<PostSummary>;
  page: number;
  setPage: (page: number) => void;
  onPressPost: (postId: number) => void;
};

const PostList = ({posts, page, setPage, onPressPost}: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts.content}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <PostItem post={item} onPress={() => onPressPost(item.id)} />
        )}
        ItemSeparatorComponent={divider}
        ListFooterComponent={
          <Pagination
            page={page}
            setPage={setPage}
            totalPages={posts.totalPages}
          />
        }
      />
    </View>
  );
};

export default PostList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
});
