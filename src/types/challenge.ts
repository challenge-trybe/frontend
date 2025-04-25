export type ChallengeStatus = 'PENDING' | 'ONGOING' | 'DONE';
export type ChallengeCategory =
  | 'SPORTS'
  | 'HOBBY'
  | 'DIET'
  | 'SAVING'
  | 'STUDY'
  | 'LIFE';

export interface ChallengeDetail {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: ChallengeStatus;
  category: ChallengeCategory;
  capacity: number;
  participantCount: number;
  proofWay: string;
  proofCount: number;
  bookmark: Bookmark;
}

export interface ChallengePreview {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  status: ChallengeStatus;
  category: ChallengeCategory;
  capacity: number;
  participantCount: number;
  bookmark: Bookmark;
}

export interface ChallengeSummary {
  id: number;
  title: string;
  description: string;
  status: ChallengeStatus;
  category: ChallengeCategory;
  capacity: number;
}

export interface Bookmark {
  bookmarkCount: number;
  bookmarked: boolean;
}
