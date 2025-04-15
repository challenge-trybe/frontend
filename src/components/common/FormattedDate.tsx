import React, {ComponentProps} from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import Text from '../Text';

dayjs.extend(relativeTime);
dayjs.locale('ko');

type Props = {
  date: string;
  type: 'relative' | 'dateTime' | 'date';
} & ComponentProps<typeof Text>;

const FormattedDate = ({date, type, style, ...props}: Props) => {
  let formatted = '';

  switch (type) {
    case 'relative':
      formatted = dayjs(date).fromNow();
      break;
    case 'dateTime':
      formatted = dayjs(date).format('YYYY년 MM월 DD일 HH:mm:ss');
      break;
    case 'date':
      formatted = dayjs(date).format('YYYY년 MM월 DD일');
      break;
  }

  return (
    <Text style={style} {...props}>
      {formatted}
    </Text>
  );
};

export default FormattedDate;
