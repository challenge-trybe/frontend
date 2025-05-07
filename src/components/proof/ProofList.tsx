import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {UserSummary} from '../../types/User';
import {ProofSummary} from '../../types/proof';
import ProofCard from './ProofCard';

const seperator = () => {
  return <View style={styles.seperator} />;
};

type Props = {
  proofs: ProofSummary[];
  participantsMap?: Map<number, UserSummary[]>;
  maxCount?: number;
  onPress: (proofId: number) => void;
  onEndReached: () => void;
};

const ProofList = ({
  proofs,
  participantsMap,
  maxCount = proofs.length,
  onPress,
  onEndReached,
}: Props) => {
  return (
    <FlatList
      data={proofs.slice(0, maxCount)}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <ProofCard
          proof={item}
          onPress={() => onPress(item.id)}
          {...(participantsMap && {participants: participantsMap.get(item.id)})}
        />
      )}
      showsVerticalScrollIndicator={false}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      ItemSeparatorComponent={seperator}
    />
  );
};

export default ProofList;

const styles = StyleSheet.create({
  seperator: {
    height: 12,
  },
});
