import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import colors from '../styles/colors';
import Icon from './Icon';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit?: () => void;
  onClear?: () => void;
  placeholder?: string;
};

const SearchBar = ({
  value,
  onChangeText,
  onSubmit,
  onClear,
  placeholder = '검색어를 입력하세요.',
}: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors.gray500}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        returnKeyType="search"
      />
      {!!value && (
        <Pressable style={styles.clearButton} onPress={onClear}>
          <Icon name="closecircle" size={18} color={colors.gray300} />
        </Pressable>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    position: 'relative',
  },
  input: {
    flex: 1,
    fontFamily: 'NanumGothic-Regular',
    fontSize: 16,
    paddingRight: 30,
  },
  clearButton: {
    position: 'absolute',
    right: 2,
  },
});
