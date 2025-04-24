import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../../styles/colors';
import Icon from '../Icon';
import Text from '../Text';

type Props = {
  bookmarked: boolean;
  count: number;
  onPress: () => void;
};

const Bookmark = ({bookmarked, count, onPress}: Props) => {
  const opacity = 0.9;

  const bookmarkIconSize = 28;
  const bookmarkIconColor = colors.red600;

  return (
    <View style={styles.bookmarkContainer}>
      <TouchableOpacity activeOpacity={opacity} onPress={onPress}>
        {bookmarked ? (
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
      <Text style={styles.bookmarkCount}>{count > 999 ? '999+' : count}</Text>
    </View>
  );
};

export default Bookmark;

const styles = StyleSheet.create({
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
});
