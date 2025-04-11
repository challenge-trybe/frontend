export type Gender = 'MALE' | 'FEMALE' | 'NULL';

export interface UserDetail {
  id: number;
  nickname: string;
  userId: string;
  email: string;
  gender: Gender;
  birth: string;
}

export interface UserSummary {
  id: number;
  userId: string;
  nickname: string;
}
