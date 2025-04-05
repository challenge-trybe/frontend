import {StyleSheet, View} from 'react-native';
import React, {ComponentProps} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';

type IconProps = ComponentProps<typeof AntIcon>;

const Icon = ({...props}: IconProps) => {
  return (
    <View style={styles.container}>
      <AntIcon {...props} />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
  },
});
