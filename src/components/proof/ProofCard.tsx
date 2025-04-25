import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ProofSummary} from '../../types/proof';
import {UserSummary} from '../../types/User';
import Text from '../Text';
import Icon from '../Icon';
import colors from '../../styles/colors';
import ParticipantsList from '../user/ParticipantsList';
import ProofHeader from './ProofHeader';

type Props = {
  proof: ProofSummary;
  participants?: UserSummary[];
  onPress: () => void;
};

const ProofCard = ({proof, participants, onPress}: Props) => {
  const opacity = 0.8;

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={opacity}
      onPress={onPress}>
      <ProofHeader proof={proof} />
      {participants && participants.length > 0 && (
        <View style={styles.footerContainer}>
          <View style={styles.participantsTextContainer}>
            <Icon name="person" size={14} color={colors.gray700} />
            <Text style={styles.participantsText}>
              {participants?.length}명 참여
            </Text>
          </View>
          <ParticipantsList participants={participants} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ProofCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.gray300,
  },
  footerContainer: {
    backgroundColor: colors.blue100,
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    gap: 8,
  },
  participantsTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  participantsText: {
    fontSize: 14,
    lineHeight: 18,
    color: colors.gray700,
  },
});
