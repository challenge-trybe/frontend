import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {ComponentProps, ReactNode} from 'react';
import colors from '../styles/colors';

type ButtonProps = ComponentProps<typeof TouchableOpacity> & {
  children: ReactNode;
};

const Button = ({children, style, ...buttonProps}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      activeOpacity={1}
      {...buttonProps}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    opacity: 0.8,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: colors.gray200,
    borderRadius: 8,
  },
});
