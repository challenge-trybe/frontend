import {StyleSheet, View} from 'react-native';
import React from 'react';
import Badge from '../common/Badge';
import Text from '../Text';
import Icon from '../Icon';
import {ProofStatus} from '../../types/proof';
import {getStatusColors} from './proofColors';

type Props = {
  date: string;
};

const ProofStatusBadge = ({date}: Props) => {
  const getStatus = (): ProofStatus => {
    const today = new Date();
    const todayDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );
    const proofDate = new Date(date);

    if (proofDate > todayDate) {
      return '진행예정';
    } else if (proofDate < todayDate) {
      return '종료됨';
    } else {
      return '진행중';
    }
  };

  const status = getStatus();

  const {primary, secondary} = getStatusColors(status);

  return (
    <Badge backgroundColor={secondary} color={primary}>
      <View style={styles.statusContainer}>
        <Icon name="ellipse" size={10} color={primary} />
        <Text style={[styles.status, {color: primary}]}>{status}</Text>
      </View>
    </Badge>
  );
};

export default ProofStatusBadge;

const styles = StyleSheet.create({
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  status: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
  },
});
