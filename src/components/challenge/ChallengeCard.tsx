import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ChallengeSummary} from '../../types/challenge';
import Badge from '../common/Badge';
import {getCategoryColors, getStatusColors} from './challengeColors';
import Text from '../Text';
import ChallengeStatusBadge from './ChallengeStatusBadge';
import Button from '../Button';
import colors from '../../styles/colors';

type Props = {
  challenge: ChallengeSummary;
  onPress?: () => void;
  onPressGoTo?: () => void;
};

const ChallengeCard = ({challenge, onPress, onPressGoTo}: Props) => {
  const opacity = 0.8;

  const categoryColor = getCategoryColors(challenge.category);
  const statusColor = getStatusColors(challenge.status);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={opacity}
      disabled={!onPress}
      onPress={onPress}>
      <View style={styles.headerContainer}>
        <Badge
          backgroundColor={categoryColor.backgroundColor}
          color={categoryColor.textColor}>
          <Text style={styles.category}>{challenge.category}</Text>
        </Badge>
        <ChallengeStatusBadge
          primaryColor={statusColor.primary}
          secondaryColor={statusColor.secondary}
          status={challenge.status}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {challenge.title}
        </Text>
        <Text style={styles.description} numberOfLines={3}>
          {challenge.description}
        </Text>
      </View>
      {onPressGoTo && (
        <View style={styles.buttonContainer}>
          <Button style={styles.goToButton} onPress={onPressGoTo}>
            <Text style={styles.goToButtonText}>챌린지 바로가기</Text>
          </Button>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ChallengeCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.gray300,
    gap: 12,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  category: {
    fontSize: 12,
  },
  infoContainer: {
    flex: 1,
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    color: colors.gray700,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  goToButton: {
    paddingVertical: 6,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.burntOrange,
  },
  goToButtonText: {
    fontWeight: '500',
    color: colors.burntOrange,
  },
});
