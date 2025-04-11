import {Text as RNText, TextProps} from 'react-native';
import React from 'react';

type TextPropsExtended = {} & TextProps;

const Text = ({style, ...textProps}: TextPropsExtended) => {
  return <RNText style={[style]} {...textProps} />;
};

export default Text;
