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

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.header}>
        <Text style={styles.title}>{notification.title}</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Icon name="close" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text>{notification.message}</Text>
        <FormattedDate
          style={styles.timestamp}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
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
});
