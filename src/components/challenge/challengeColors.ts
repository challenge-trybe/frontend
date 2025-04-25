import {ChallengeCategory, ChallengeStatus} from '../../types/challenge';

export const challengeColors = {
  statusColors: {
    PENDING: {
      primary: '#3F64A9',
      secondary: '#CED7E6',
    },
    ONGOING: {
      primary: '#3A7D1C',
      secondary: '#C8E8BA',
    },
    DONE: {
      primary: '#525252',
      secondary: '#E5E5E5',
    },
  },

  categoryColors: {
    SPORTS: {
      backgroundColor: '#5E95B8',
      textColor: '#EDF1FF',
    },
    HOBBY: {
      backgroundColor: '#8F829F',
      textColor: '#EFE2FF',
    },
    DIET: {
      backgroundColor: '#C3685C',
      textColor: '#FFEBE6',
    },
    SAVING: {
      backgroundColor: '#6CA25F',
      textColor: '#DFFFD0',
    },
    STUDY: {
      backgroundColor: '#5D918B',
      textColor: '#BDF1EB',
    },
    LIFE: {
      backgroundColor: '#E0AF55',
      textColor: '#FFF9EF',
    },
  },
};

export const getStatusColors = (status: ChallengeStatus) => {
  return (
    challengeColors.statusColors[status] ||
    challengeColors.statusColors['PENDING']
  );
};

export const getCategoryColors = (category: ChallengeCategory) => {
  return (
    challengeColors.categoryColors[category] ||
    challengeColors.categoryColors['SPORTS']
  );
};
