import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Text from '../Text';
import colors from '../../styles/colors';

type Props = {
  page: number;
  selected: boolean;
  onPress: (page: number) => void;
};

const PaginationItem = ({page, selected, onPress}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, selected && styles.selected]}
      activeOpacity={0.7}
      onPress={() => onPress(page)}>
      <Text style={[styles.text, selected && styles.selectedText]}>{page}</Text>
    </TouchableOpacity>
  );
};

export default PaginationItem;

const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  selected: {
    backgroundColor: colors.blue100,
    borderColor: colors.gray600,
  },
  text: {
    fontSize: 16,
    color: colors.gray600,
  },
  selectedText: {
    fontWeight: 'bold',
    color: colors.blue500,
  },
});
