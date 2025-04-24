import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ChallengePreview} from '../../types/challenge';
import Text from '../Text';
import colors from '../../styles/colors';
import {getCategoryColors, getStatusColors} from './challengeColors';
import Badge from '../common/Badge';
import Bookmark from '../common/Bookmark';
import ParticipantInfo from '../common/ParticipantInfo';
import ChallengeStatusBadge from './ChallengeStatusBadge';

type Props = {
  challenge: ChallengePreview;
  onPress: (challengeId: number) => void;
  onPressBookmark: (challengeId: number, isBookmarked: boolean) => void;
};

const ChallengeItem = ({challenge, onPress, onPressBookmark}: Props) => {
  const opacity = 0.9;

  const categoryColor = getCategoryColors(challenge.category);
  const statusColor = getStatusColors(challenge.status);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={opacity}
      onPress={() => onPress(challenge.id)}>
      <View style={styles.thumbnailContainer}>
        <Image
          source={{uri: challenge.thumbnail}}
          style={styles.thumbnail}
          resizeMode="cover"
        />
        <Bookmark
          bookmarked={challenge.bookmark.bookmarked}
          count={challenge.bookmark.bookmarkCount}
          onPress={() =>
            onPressBookmark(challenge.id, challenge.bookmark.bookmarked)
          }
        />
      </View>
      <View style={styles.infoContainer}>
        <Badge
          style={styles.category}
          backgroundColor={categoryColor.backgroundColor}
          color={categoryColor.textColor}>
          {challenge.category}
        </Badge>
        <Text numberOfLines={1}>{challenge.title}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {challenge.description}
        </Text>
        <View style={styles.footerContainer}>
          <ChallengeStatusBadge
            primaryColor={statusColor.primary}
            secondaryColor={statusColor.secondary}
            status={challenge.status}
          />
          <ParticipantInfo
            participantCount={challenge.participantCount}
            capacity={challenge.capacity}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChallengeItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.gray300,
    gap: 12,
  },
  thumbnailContainer: {
    position: 'relative',
  },
  thumbnail: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: colors.gray300,
    borderRadius: 6,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'flex-start',
    gap: 6,
  },
  category: {
    fontSize: 10,
  },
  description: {
    flex: 1,
    fontSize: 12,
    color: colors.gray600,
  },
  footerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginTop: 4,
  },
});
