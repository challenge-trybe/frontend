import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {ChallengePreview} from '../../types/challenge';
import ChallengeItem from './ChallengeItem';

type Props = {
  challenges: ChallengePreview[];
  onEndReached: () => void;
  onPressChallenge: (challengeId: number) => void;
  onPressBookmark: (challengeId: number, isBookmarked: boolean) => void;
};

const ChallengeList = ({
  challenges,
  onEndReached,
  onPressChallenge,
  onPressBookmark,
}: Props) => {
  return (
    <FlatList
      data={challenges}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <ChallengeItem
          challenge={item}
          onPress={onPressChallenge}
          onPressBookmark={onPressBookmark}
        />
      )}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      numColumns={2}
      columnWrapperStyle={styles.rowWrapper}
    />
  );
};

export default ChallengeList;

const styles = StyleSheet.create({
  rowWrapper: {
    justifyContent: 'space-between',
    marginVertical: 8,
    marginHorizontal: 12,
    gap: 10,
  },
});
