import {StyleSheet, View} from 'react-native';
import React from 'react';

type Props = {
  height?: number;
  color?: string;
  margin?: number;
};

const Divider = ({height = 0.5, color = 'black', margin = 0}: Props) => {
  return (
    <View
      style={[
        styles.divider,
        {height, backgroundColor: color, marginVertical: margin},
      ]}
    />
  );
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    width: '100%',
  },
});
