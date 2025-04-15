import {PostSummary} from './post';
import {UserSummary} from './User';

export interface CommentDetail {
  id: number;
  post: PostSummary;
  writer: UserSummary;
  content: string;
  createdAt: string;
}

export interface CommentSummary {
  id: number;
  writer: UserSummary;
  content: string;
  createdAt: string;
}
