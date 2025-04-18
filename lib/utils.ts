import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { CHARACTERS } from "@/constant";
import { Challenge, ChallengeType } from "@/types/courses";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export const getRandomCharacter = (): string => {
  return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
};

export const createChallengesFromTemplates = (
  templates: Array<{
    type: ChallengeType;
    question: string;
    correctOption: { text: string; audioSuffix: string };
    wrongOptions: Array<{ text: string; audioSuffix: string }>;
  }>,
  voicePath: string = "voice_kr"
): Challenge[] => {
  return templates.map((template) => ({
    type: template.type,
    question: template.question,
    options: [
      {
        text: template.correctOption.text,
        correct: true,
        audioSrc: `/${voicePath}/${template.correctOption.audioSuffix}.mp3`,
        imageSrc: getRandomCharacter(),
      },
      ...template.wrongOptions.map((option) => ({
        text: option.text,
        correct: false,
        audioSrc: `/${voicePath}/${option.audioSuffix}.mp3`,
        imageSrc: getRandomCharacter(),
      })),
    ],
  }));
};
