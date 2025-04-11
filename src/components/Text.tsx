import {Text as RNText, TextProps} from 'react-native';
import React from 'react';

type TextPropsExtended = {
  weight?: 'Light' | 'Regular' | 'SemiBold' | 'Bold';
} & TextProps;

const Text = ({weight = 'Regular', style, ...textProps}: TextPropsExtended) => {
  return (
    <RNText
      style={[{fontFamily: `NotoSansKR-${weight}`}, style]}
      {...textProps}
    />
  );
};

export default Text;
