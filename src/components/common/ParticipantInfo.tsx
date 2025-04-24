import {StyleSheet, View} from 'react-native';
import React from 'react';
import colors from '../../styles/colors';
import Icon from '../Icon';
import Text from '../Text';

type Props = {
  participantCount: number;
  capacity: number;
};

const ParticipantInfo = ({participantCount, capacity}: Props) => {
  const participantColor =
    participantCount >= capacity ? colors.gray500 : colors.gray700;

  return (
    <View style={styles.participantContainer}>
      <Icon name="person" size={12} color={participantColor} />
      <Text style={[styles.participantCount, {color: participantColor}]}>
        {participantCount}/{capacity}
      </Text>
    </View>
  );
};

export default ParticipantInfo;

const styles = StyleSheet.create({
  participantContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  participantCount: {
    fontSize: 12,
  },
});
