import {StyleSheet, View} from 'react-native';
import React from 'react';
import {UserDetail} from '../../types/User';
import Text from '../Text';
import colors from '../../styles/colors';
import UserInfoRow from './UserInfoRow';

type Props = {
  user: UserDetail;
};

const UserProfileHeader = ({user}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.identityContainer}>
        <Text style={styles.nickname}>{user.nickname}</Text>
        <Text style={styles.userId}>@{user.userId}</Text>
      </View>
      <View style={styles.infoContainer}>
        <UserInfoRow icon="mail-outline" label="이메일" value={user.email} />
        <UserInfoRow
          icon="male-female-outline"
          label="성별"
          value={user.gender}
        />
        <UserInfoRow
          icon="calendar-outline"
          label="생년월일"
          value={user.birth}
        />
      </View>
    </View>
  );
};

export default UserProfileHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    gap: 28,
    padding: 36,
  },
  identityContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 10,
  },
  infoContainer: {
    gap: 14,
  },
  nickname: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userId: {
    fontSize: 18,
    color: colors.blue300,
  },
  updateButton: {},
});
