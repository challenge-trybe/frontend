import {
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import colors from '../styles/colors';
import Text from './Text';

type AlertProps = {
  visible: boolean;
  onClose: () => void;
  title?: string;
  message: string;
};

const Alert = ({visible, onClose, title, message}: AlertProps) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      statusBarTranslucent={true}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop}>
          <TouchableWithoutFeedback>
            <View style={styles.alertBox}>
              {title && (
                <>
                  <Text weight="Bold" size={20} style={styles.title}>
                    {title}
                  </Text>
                  <View style={styles.divider} />
                </>
              )}
              <Text style={styles.message}>{message}</Text>
              <Pressable onPress={onClose} style={styles.button}>
                <Text color={colors.blue500}>확인</Text>
              </Pressable>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default Alert;

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  backdrop: {
    width,
    height,
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertBox: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
    backgroundColor: colors.white,
    borderRadius: 16,
    paddingTop: 12,
    width: '80%',
    overflow: 'hidden',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  title: {
    paddingTop: 6,
    paddingBottom: 8,
  },
  message: {
    width: '80%',
    paddingVertical: 16,
  },
  button: {
    width: '100%',
    backgroundColor: colors.blue100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
});
