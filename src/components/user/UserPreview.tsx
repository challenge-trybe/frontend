import {Alert, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {UserSummary} from '../../types/user';
import colors from '../../styles/colors';
import Text from '../Text';

type Props = {
  user: UserSummary;
  variant?: 'primary' | 'secondary' | 'tertiary';
  showUserId?: boolean;
  clickable?: boolean;
};

const UserPreview = ({
  user,
  variant = 'primary',
  showUserId = true,
  clickable = true,
}: Props) => {
  const handleClick = () => {
    if (!clickable) {
      return;
    }
    // TODO: 유저 상세 페이지로 이동
    Alert.alert('유저 상세 페이지로 이동');
  };

  const variantContainerStyles = {
    primary: styles.primaryContainer,
    secondary: styles.secondaryContainer,
    tertiary: styles.tertiaryContainer,
  } as const;

  const variantTextStyles = {
    primary: styles.primaryText,
    secondary: styles.secondaryText,
    tertiary: styles.tertiaryText,
  };

  const containerStyle = [styles.container, variantContainerStyles[variant]];
  const textStyle = variantTextStyles[variant];

  return (
    <Pressable
      style={({pressed}) => [
        containerStyle,
        clickable && pressed && {opacity: 0.8},
      ]}
      onPress={handleClick}>
      <Text style={[styles.nickname, textStyle]}>{user.nickname}</Text>
      {showUserId && (
        <Text style={[styles.userId, textStyle]}>@{user.userId}</Text>
      )}
    </Pressable>
  );
};

export default UserPreview;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 50,
    boxShadow: '0 0 4 0 rgba(0, 0, 0, 0.1)',
  },
  primaryContainer: {
    backgroundColor: colors.blue100,
    borderWidth: 1,
    borderColor: colors.blue300,
  },
  secondaryContainer: {
    backgroundColor: colors.blue300,
  },
  tertiaryContainer: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    boxShadow: 'none',
  },
  nickname: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  userId: {
    fontSize: 12,
  },
  primaryText: {
    color: colors.blue700,
  },
  secondaryText: {
    color: colors.blue100,
  },
  tertiaryText: {
    color: colors.blue600,
  },
});
