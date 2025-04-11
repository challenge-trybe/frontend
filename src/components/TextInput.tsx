import {TextInput as RNTextInput, TextInputProps} from 'react-native';
import React from 'react';

type TextInputPropsExtended = {
  weight?: 'Light' | 'Regular' | 'SemiBold' | 'Bold';
} & TextInputProps;

const TextInput = ({
  weight = 'Regular',
  style,
  ...props
}: TextInputPropsExtended) => {
  return (
    <RNTextInput
      style={[{fontFamily: `NotoSansKR-${weight}`}, style]}
      {...props}
    />
  );
};

export default TextInput;
