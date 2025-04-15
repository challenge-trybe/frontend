import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {PostSummary} from '../../types/post';
import Text from '../Text';
import UserPreview from '../user/UserPreview';
import FormattedDate from '../common/FormattedDate';
import colors from '../../styles/colors';

type Props = {
  post: PostSummary;
  onPress: () => void;
};

const PostItem = ({post, onPress}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.category}>{post.category}</Text>
      </View>
      <View style={styles.right}>
        <TouchableOpacity
          style={styles.postMeta}
          onPress={onPress}
          activeOpacity={0.8}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {post.title}
          </Text>
          <View style={styles.authorAndDate}>
            <UserPreview user={post.writer} variant="tertiary" />
            <FormattedDate
              style={styles.date}
              date={post.createdAt}
              type="relative"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    paddingHorizontal: 24,
  },
  right: {
    flex: 1,
    paddingRight: 24,
    paddingTop: 18,
    paddingBottom: 12,
  },
  postMeta: {
    gap: 8,
  },
  authorAndDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  category: {
    color: colors.gray600,
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 15,
  },
  date: {
    color: colors.gray500,
    fontSize: 12,
  },
});
