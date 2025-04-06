import {Pressable, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../SearchBar';
import Icon from '../Icon';
import colors from '../../styles/colors';

interface Props {
  placeholder?: string;
  onPressSearch: () => void;
  backgroundColor?: string;
}

const SearchHeader = ({
  placeholder,
  onPressSearch,
  backgroundColor = colors.white,
}: Props) => {
  const [keyword, setKeyword] = useState('');

  const onPressNotification = () => {
    // TODO: 로그인 상태 시 알림창으로, 로그인 상태가 아닐 시 로그인 창으로
  };

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <View style={styles.searchBar}>
        <SearchBar
          value={keyword}
          onChangeText={setKeyword}
          onSubmit={onPressSearch}
          onClear={() => setKeyword('')}
          placeholder={placeholder}
        />
      </View>
      <Pressable
        style={({pressed}) => ({
          opacity: pressed ? 1 : 0.8,
        })}
        onPress={onPressNotification}>
        <Icon name="notifications-outline" size={28} color={colors.gray600} />
      </Pressable>
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderBottomWidth: 1,
    borderColor: colors.gray100,
  },
  searchBar: {
    flex: 1,
  },
});
