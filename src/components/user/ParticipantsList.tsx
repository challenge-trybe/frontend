import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {UserSummary} from '../../types/User';
import UserPreview from './UserPreview';

type Props = {
  participants: UserSummary[];
};

const ParticipantsList = ({participants}: Props) => {
  return (
    <FlatList
      style={styles.participants}
      data={participants}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.participantsListContainer}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <UserPreview
          user={item}
          variant="primary"
          showUserId={false}
          clickable={false}
        />
      )}
    />
  );
};

export default ParticipantsList;

const styles = StyleSheet.create({
  participants: {
    paddingVertical: 2,
    height: 32,
  },
  participantsListContainer: {
    gap: 8,
  },
});
