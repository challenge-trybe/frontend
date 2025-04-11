import {TextInput as RNTextInput, TextInputProps} from 'react-native';
import React from 'react';

type TextInputPropsExtended = {} & TextInputProps;

const TextInput = ({style, ...props}: TextInputPropsExtended) => {
  return <RNTextInput style={[style]} {...props} />;
};

export default TextInput;
