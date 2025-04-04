import {Text as RNText, StyleSheet, TextProps} from 'react-native';
import React from 'react';

type TextPropsExtended = {
  weight?: 'Regular' | 'Bold' | 'ExtraBold';
} & TextProps;

const Text = ({
  weight = 'Regular',
  children,
  style,
  ...textProps
}: TextPropsExtended) => {
  return (
    <RNText
      style={[styles.text, {fontFamily: `NanumGothic-${weight}`}, style]}
      {...textProps}>
      {children}
    </RNText>
  );
};

export default Text;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#000',
  },
});
