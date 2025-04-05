import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import React, {useRef} from 'react';

type InputProps = TextInputProps & {
  errorMessage?: string;
};

const Input = ({errorMessage, editable, style, ...props}: InputProps) => {
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
      outputRange: ['#fff', '#F4F6FF'],
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
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
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
    borderColor: '#c9c9c9',
  },
  input: {
    fontFamily: 'NanumGothic-Regular',
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#c9c9c9',
    borderRadius: 6,
  },
  inputDisabled: {
    backgroundColor: '#f0f0f0',
    color: '#606060',
  },
  errorMessage: {
    color: 'red',
    fontSize: 14,
    paddingLeft: 10,
  },
});
