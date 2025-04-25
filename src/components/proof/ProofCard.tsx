import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ProofSummary} from '../../types/proof';
import {UserSummary} from '../../types/User';
import ProofStatusBadge from './ProofStatusBadge';
import Text from '../Text';
import FormattedDate from '../common/FormattedDate';
import Icon from '../Icon';
import colors from '../../styles/colors';
import UserPreview from '../user/UserPreview';

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
      <View style={styles.headerContainer}>
        <View style={styles.statusContainer}>
          <ProofStatusBadge date={proof.date} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{proof.round}번째 인증</Text>
          <FormattedDate type="date" date={proof.date} style={styles.date} />
        </View>
      </View>

      {participants && participants.length > 0 && (
        <View style={styles.footerContainer}>
          <View style={styles.participantsTextContainer}>
            <Icon name="person" size={14} color={colors.gray700} />
            <Text style={styles.participantsText}>
              {participants?.length}명 참여
            </Text>
          </View>
          <FlatList
            style={styles.participants}
            data={participants}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.participantsListContainer}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <UserPreview
                user={item}
                variant="primary"
                showUserId={false}
                clickable={false}
              />
            )}
          />
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
  headerContainer: {
    paddingVertical: 24,
    paddingHorizontal: 20,
    gap: 8,
  },
  statusContainer: {
    alignItems: 'flex-start',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  date: {
    color: colors.gray700,
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
  participants: {
    paddingVertical: 2,
    height: 32,
  },
  participantsListContainer: {
    gap: 8,
  },
});
