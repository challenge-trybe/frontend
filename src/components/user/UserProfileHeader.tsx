import {StyleSheet, View} from 'react-native';
import React from 'react';
import {UserDetail} from '../../types/User';
import Text from '../Text';
import colors from '../../styles/colors';
import UserInfoRow from './UserInfoRow';
import Button from '../Button';

type Props = {
  user: UserDetail;
  isMe?: boolean;
};

const UserProfileHeader = ({user, isMe = false}: Props) => {
  const handleUpdateButtonPress = () => {
    // TODO: 유저 정보 수정 페이지로 이동
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.identityContainer}>
          <Text style={styles.nickname}>{user.nickname}</Text>
          <Text style={styles.userId}>@{user.userId}</Text>
        </View>
        {isMe && (
          <Button style={styles.updateButton} onPress={handleUpdateButtonPress}>
            <Text style={styles.updateButtonText}>수정하기</Text>
          </Button>
        )}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  updateButton: {
    backgroundColor: colors.gray100,
  },
  updateButtonText: {
    color: colors.gray600,
  },
});
