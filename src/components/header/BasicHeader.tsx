import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import colors from '../../styles/colors';
import {Text, Icon} from '../../components';

interface Props {
  title?: string;
  onPressBack?: () => void;
  backgroundColor?: string;
}

const BasicHeader = ({
  title,
  onPressBack,
  backgroundColor = colors.white,
}: Props) => {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Pressable onPress={onPressBack} style={styles.backButton}>
        <Icon name="arrow-back" size={24} color={colors.gray600} />
      </Pressable>
      {title && <Text>{title}</Text>}
      <View style={styles.space} />
    </View>
  );
};

export default BasicHeader;

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: colors.gray100,
  },
  backButton: {
    alignItems: 'center',
    width: 50,
  },
  space: {
    width: 50,
  },
});
