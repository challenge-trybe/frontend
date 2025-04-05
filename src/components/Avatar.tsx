import {StyleSheet, View} from 'react-native';
import React from 'react';
import {UserSummary} from '../types/User';
import Text from './Text';
import colors from '../styles/colors';

type AvatarProps = {
  user: UserSummary;
  showUserId?: boolean;
};

const Avatar = ({user, showUserId}: AvatarProps) => {
  return (
    <View style={styles.container}>
      {/* <Image style={styles.profile} /> */}
      <View style={styles.textContainer}>
        <Text size={20} weight="Bold">
          {user.nickname}
        </Text>
        {showUserId && <Text color={colors.blue300}>@{user.userId}</Text>}
      </View>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
  },
  profile: {
    backgroundColor: colors.red500,
    width: 30,
    height: 30,
    borderRadius: 50,
  },
});
