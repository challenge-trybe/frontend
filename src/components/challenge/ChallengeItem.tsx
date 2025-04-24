import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ChallengePreview} from '../../types/challenge';
import Text from '../Text';
import Icon from '../Icon';
import colors from '../../styles/colors';
import {getCategoryColors, getStatusColors} from './challengeColors';

type Props = {
  challenge: ChallengePreview;
  onPress: (challengeId: number) => void;
  onPressBookmark: (challengeId: number, isBookmarked: boolean) => void;
};

const ChallengeItem = ({challenge, onPress, onPressBookmark}: Props) => {
  const opacity = 0.9;

  const bookmarkIconSize = 28;
  const bookmarkIconColor = colors.red600;

  const categoryColor = getCategoryColors(challenge.category);
  const statusColor = getStatusColors(challenge.status);

  const participantColor =
    challenge.participantCount >= challenge.capacity
      ? colors.gray500
      : colors.gray700;

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
        <View style={styles.bookmarkContainer}>
          <TouchableOpacity
            activeOpacity={opacity}
            onPress={() =>
              onPressBookmark(challenge.id, challenge.bookmark.bookmarked)
            }>
            {challenge.bookmark.bookmarked ? (
              <Icon
                name="bookmark"
                size={bookmarkIconSize}
                color={bookmarkIconColor}
              />
            ) : (
              <Icon
                name="bookmark-outline"
                size={bookmarkIconSize}
                color={bookmarkIconColor}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.bookmarkCount}>
            {challenge.bookmark.bookmarkCount}
          </Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text
          style={[
            styles.category,
            {
              backgroundColor: categoryColor.backgroundColor,
              color: categoryColor.textColor,
            },
          ]}>
          {challenge.category}
        </Text>
        <Text numberOfLines={1}>{challenge.title}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {challenge.description}
        </Text>
        <View style={styles.footerContainer}>
          <View
            style={[
              styles.statusContainer,
              {backgroundColor: statusColor.secondary},
            ]}>
            <Icon name="ellipse" size={10} color={statusColor.primary} />
            <Text style={[styles.status, {color: statusColor.primary}]}>
              {challenge.status}
            </Text>
          </View>
          <View style={styles.participantContainer}>
            <Icon name="person" size={12} color={participantColor} />
            <Text style={[styles.participantCount, {color: participantColor}]}>
              {challenge.participantCount}/{challenge.capacity}
            </Text>
          </View>
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
  bookmarkContainer: {
    position: 'absolute',
    top: 6,
    right: 6,
    alignItems: 'center',
  },
  bookmarkCount: {
    color: colors.red600,
    fontWeight: '900',
    fontSize: 12,
    textShadowColor: colors.white,
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 10,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'flex-start',
    gap: 6,
  },
  category: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 12,
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
  statusContainer: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  status: {
    fontSize: 12,
  },
  participantContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  participantCount: {
    fontSize: 12,
  },
});
