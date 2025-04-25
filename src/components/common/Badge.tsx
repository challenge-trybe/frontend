import {StyleSheet, TextProps} from 'react-native';
import React from 'react';
import Text from '../Text';

type Props = {
  backgroundColor?: string;
  color?: string;
} & TextProps;

const Badge = ({backgroundColor, color, children, style}: Props) => {
  return (
    <Text style={[styles.text, {backgroundColor, color}, style]}>
      {children}
    </Text>
  );
};

export default Badge;

const styles = StyleSheet.create({
  text: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
});
