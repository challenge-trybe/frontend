import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {ComponentProps, ReactNode} from 'react';

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
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#c9c9c9',
    borderRadius: 8,
  },
});
