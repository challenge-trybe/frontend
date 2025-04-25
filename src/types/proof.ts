import {ChallengeSummary} from './challenge';

export type ProofStatus = '진행예정' | '진행중' | '종료됨';

export interface ProofSummary {
  id: number;
  date: string;
  round: number;
}

export interface ProofDetail {
  challenge: ChallengeSummary;
  id: number;
  date: string;
  round: number;
}
