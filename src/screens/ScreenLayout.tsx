import {StatusBar, StyleSheet, View} from 'react-native';
import React, {ReactNode} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../styles/colors';

type Props = {
  children: ReactNode;
  header?: (backgroundColor: string) => ReactNode;
  backgroundColor?: string;
};

const ScreenLayout = ({
  children,
  header,
  backgroundColor = colors.white,
}: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {backgroundColor, paddingTop: insets.top}]}>
      <StatusBar backgroundColor={backgroundColor} barStyle="dark-content" />
      {header?.(backgroundColor)}
      {children}
    </View>
  );
};

export default ScreenLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
