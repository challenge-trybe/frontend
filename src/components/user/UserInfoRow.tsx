import {StyleSheet, View} from 'react-native';
import React from 'react';
import colors from '../../styles/colors';
import Text from '../Text';
import Icon from '../Icon';

type Props = {
  icon: string;
  label: string;
  value: string;
};

const UserInfoRow = ({icon, label, value}: Props) => {
  const iconSize = 24;
  const iconColor = colors.gray600;

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Icon name={icon} size={iconSize} color={iconColor} />
        <Text style={styles.label}>{label}</Text>
      </View>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default UserInfoRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: '35%',
  },
  label: {
    fontSize: 16,
    color: colors.gray600,
  },
  value: {
    fontSize: 16,
    color: colors.black,
    width: '65%',
  },
});
