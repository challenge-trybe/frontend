import {StyleSheet, View} from 'react-native';
import React from 'react';
import ProofStatusBadge from './ProofStatusBadge';
import Text from '../Text';
import FormattedDate from '../common/FormattedDate';
import {ProofSummary} from '../../types/proof';
import colors from '../../styles/colors';

type Props = {
  proof: ProofSummary;
};

const ProofHeader = ({proof}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <ProofStatusBadge date={proof.date} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{proof.round}번째 인증</Text>
        <FormattedDate type="date" date={proof.date} style={styles.date} />
      </View>
    </View>
  );
};

export default ProofHeader;

const styles = StyleSheet.create({
  container: {
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
});
