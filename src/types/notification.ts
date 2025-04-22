export type NotificationType =
  | 'CHAT'
  | 'CHALLENGE'
  | 'CHALLENGE_PARTICIPATION'
  | 'PROOF'
  | 'PROOF_HISTORY';

export interface Notification {
  id: number;
  type: NotificationType;
  typeId: number;
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}
