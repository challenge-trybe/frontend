import {ProofStatus} from '../../types/proof';

export const proofColors = {
  statusColors: {
    진행예정: {
      primary: '#3A7D1C',
      secondary: '#C8E8BA',
    },
    진행중: {
      primary: '#3F64A9',
      secondary: '#CED7E6',
    },
    종료됨: {
      primary: '#525252',
      secondary: '#E5E5E5',
    },
  },
};

export const getStatusColors = (status: ProofStatus) => {
  return (
    proofColors.statusColors[status] || proofColors.statusColors['진행예정']
  );
};
