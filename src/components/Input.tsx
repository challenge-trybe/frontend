import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import colors from '../styles/colors';

type InputProps = TextInputProps & {
  helperText?: string;
  helperTextColor?: string;
};

const Input = ({
  helperText,
  helperTextColor,
  editable,
  style,
  ...props
}: InputProps) => {
  const animValue = useRef(new Animated.Value(0)).current;

  const handleFocus = () => {
    Animated.timing(animValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    Animated.timing(animValue, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const animatedStyle = {
    backgroundColor: animValue.interpolate({
      inputRange: [0, 1],
      outputRange: [colors.white, colors.blue100],
    }),
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedInputWrapper, animatedStyle]}>
        <TextInput
          style={[
            styles.input,
            editable === false && styles.inputDisabled,
            style,
          ]}
          {...props}
          onFocus={handleFocus}
          onBlur={handleBlur}
          editable={editable}
        />
      </Animated.View>
      {helperText && (
        <Text
          style={[
            styles.helperText,
            helperTextColor && {color: helperTextColor},
          ]}>
          {helperText}
        </Text>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'column',
    gap: 2,
  },
  animatedInputWrapper: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray200,
  },
  input: {
    fontFamily: 'NanumGothic-Regular',
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.gray200,
    borderRadius: 6,
  },
  inputDisabled: {
    backgroundColor: colors.gray100,
    color: colors.gray600,
  },
  helperText: {
    color: colors.red500,
    fontSize: 14,
    paddingLeft: 10,
  },
});
