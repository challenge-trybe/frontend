import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Text from '../Text';
import Icon from '../Icon';
import colors from '../../styles/colors';

type Props = {
  onPress?: () => void;
};

const AddChallengeCard = ({onPress}: Props) => {
  const opacity = 0.8;

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={opacity}
      onPress={onPress}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Icon name="add" size={24} color={colors.gray600} />
          <Text style={styles.text}>챌린지 언급하기</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AddChallengeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray100,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.gray300,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  text: {
    fontSize: 16,
    color: colors.gray600,
  },
});
