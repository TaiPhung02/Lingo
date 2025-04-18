export type ChallengeType = "SELECT" | "ASSIST";

export interface ChallengeOption {
  imageSrc?: string | null;
  correct: boolean;
  text: string;
  audioSrc?: string | null;
}

export interface Challenge {
  type: ChallengeType;
  question: string;
  options: ChallengeOption[];
}

export interface Lesson {
  title: string;
  challenges: Challenge[];
}

export interface KoreanQuizUnit {
  unitId: number;
  title: string;
  description: string;
  order: number;
  lessons: Lesson[];
}
