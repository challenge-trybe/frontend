import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Notification} from '../../types/notification';
import Text from '../Text';
import FormattedDate from '../common/FormattedDate';
import Icon from '../Icon';
import colors from '../../styles/colors';

type Props = {
  notification: Notification;
};

const NotificationItem = ({notification}: Props) => {
  const handlePress = () => {
    // TODO: 누를 시 상세 페이지로 이동
  };

  const handleDelete = () => {
    // TODO: 삭제 API 호출
  };

  const isRead = notification.isRead;

  return (
    <TouchableOpacity
      style={[styles.container, isRead && styles.readContainer]}
      activeOpacity={0.7}
      onPress={handlePress}>
      <View style={styles.header}>
        <Text style={[styles.title, isRead && styles.readText]}>
          {notification.title}
        </Text>
        <TouchableOpacity activeOpacity={0.7} onPress={handleDelete}>
          <Icon
            name="close-outline"
            size={30}
            color={isRead ? colors.gray500 : colors.gray600}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={[styles.message, isRead && styles.readText]}>
          {notification.message}
        </Text>
        <FormattedDate
          style={[styles.timestamp, isRead && styles.readTimestamp]}
          type="relative"
          date={notification.timestamp}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: colors.white,
    gap: 8,
  },
  readContainer: {
    backgroundColor: colors.gray100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  message: {
    fontSize: 14,
    flex: 1,
  },
  timestamp: {
    fontSize: 12,
    color: colors.gray600,
  },
  readText: {
    color: colors.gray600,
  },
  readTimestamp: {
    color: colors.gray500,
  },
});
