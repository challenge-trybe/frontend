import {StyleSheet, View} from 'react-native';
import React from 'react';
import Text from '../Text';
import {CommentSummary} from '../../types/comment';
import UserPreview from '../user/UserPreview';
import FormattedDate from '../common/FormattedDate';
import colors from '../../styles/colors';

type Props = {
  comment: CommentSummary;
};

const CommentItem = ({comment}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <UserPreview user={comment.writer} variant="primary" />
        <FormattedDate
          style={styles.date}
          date={comment.createdAt}
          type="relative"
        />
      </View>
      <View style={styles.commentContainer}>
        <Text style={styles.comment}>{comment.content}</Text>
      </View>
    </View>
  );
};

export default CommentItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    gap: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    fontSize: 12,
    color: colors.gray600,
  },
  commentContainer: {
    paddingHorizontal: 6,
  },
  comment: {
    fontSize: 15,
  },
});
