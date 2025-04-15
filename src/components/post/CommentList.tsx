import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {PageResponse} from '../../types/page';
import {CommentSummary} from '../../types/comment';
import Divider from '../common/Divider';
import colors from '../../styles/colors';
import CommentItem from './CommentItem';
import Pagination from '../pagination/Pagination';

const divider = () => {
  return <Divider color={colors.gray600} />;
};

type Props = {
  comments: PageResponse<CommentSummary>;
  page: number;
  setPage: (page: number) => void;
};

const CommentList = ({comments, page, setPage}: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={comments.content}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <CommentItem comment={item} />}
        ItemSeparatorComponent={divider}
      />
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={comments.totalPages}
      />
    </View>
  );
};

export default CommentList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  commentContainer: {},
});
