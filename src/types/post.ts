import {UserSummary} from './User';

export type PostCategory = 'QNA' | 'PROMOTION' | 'ETC';

export interface PostDetail {
  id: number;
  title: string;
  content: string;
  category: PostCategory;
  writer: UserSummary;
  createdAt: string;
  likeCount: number;
  //   challengs: ChallengeSummary[];
}

export interface PostSummary {
  id: number;
  title: string;
  category: PostCategory;
  writer: UserSummary;
  createdAt: string;
}

export interface PostLike {
  likeCount: number;
  isLiked: boolean;
}
