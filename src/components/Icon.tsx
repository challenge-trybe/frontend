import {StyleSheet, View} from 'react-native';
import React, {ComponentProps} from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';

type IconProps = ComponentProps<typeof Ionicon>;

const Icon = ({...props}: IconProps) => {
  return (
    <View style={styles.container}>
      <Ionicon {...props} />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
