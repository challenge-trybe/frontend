import {StyleSheet, View} from 'react-native';
import React from 'react';
import Badge from '../common/Badge';
import Icon from '../Icon';
import Text from '../Text';
import {ChallengeStatus} from '../../types/challenge';

type Props = {
  primaryColor: string;
  secondaryColor: string;
  status: ChallengeStatus;
};

const ChallengeStatusBadge = ({
  primaryColor,
  secondaryColor,
  status,
}: Props) => {
  return (
    <Badge backgroundColor={secondaryColor} color={primaryColor}>
      <View style={styles.statusContainer}>
        <Icon name="ellipse" size={10} color={primaryColor} />
        <Text style={[styles.status, {color: primaryColor}]}>{status}</Text>
      </View>
    </Badge>
  );
};

export default ChallengeStatusBadge;

const styles = StyleSheet.create({
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  status: {
    fontSize: 12,
  },
});
