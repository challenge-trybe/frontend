import {Text as RNText, TextProps} from 'react-native';
import React from 'react';
import colors from '../styles/colors';

type TextPropsExtended = {
  weight?: 'Regular' | 'Bold' | 'ExtraBold';
  size?: number;
  color?: string;
} & TextProps;

const Text = ({
  weight = 'Regular',
  size = 16,
  color = colors.black,
  children,
  style,
  ...textProps
}: TextPropsExtended) => {
  return (
    <RNText
      style={[
        {fontFamily: `NanumGothic-${weight}`, fontSize: size, color: color},
        style,
      ]}
      {...textProps}>
      {children}
    </RNText>
  );
};

export default Text;
