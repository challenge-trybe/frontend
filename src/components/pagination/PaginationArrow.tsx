import {TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../styles/colors';
import Icon from '../Icon';

type Props = {
  direction: 'left' | 'right';
  onPress: () => void;
};

const PaginationArrow = ({direction, onPress}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Icon
        name={direction === 'left' ? 'chevron-back' : 'chevron-forward'}
        size={20}
        color={colors.gray600}
      />
    </TouchableOpacity>
  );
};

export default PaginationArrow;
