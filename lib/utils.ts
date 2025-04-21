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

function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export const createChallengesFromTemplates = (
  templates: Array<{
    type: ChallengeType;
    question: string;
    correctOption: { text: string; audioSuffix: string };
    wrongOptions: Array<{ text: string; audioSuffix: string }>;
  }>,
  voicePath: string = "voice_kr"
): Challenge[] => {
  return templates.map((template) => {
    const totalOptions = 1 + template.wrongOptions.length;
    const uniqueCharacters = shuffleArray([...CHARACTERS]).slice(
      0,
      totalOptions
    );

    const allOptions = [
      {
        text: template.correctOption.text,
        correct: true,
        audioSrc: `/${voicePath}/${template.correctOption.audioSuffix}.mp3`,
        imageSrc: uniqueCharacters[0],
      },
      ...template.wrongOptions.map((option, index) => ({
        text: option.text,
        correct: false,
        audioSrc: `/${voicePath}/${option.audioSuffix}.mp3`,
        imageSrc: uniqueCharacters[index + 1],
      })),
    ];

    return {
      type: template.type,
      question: template.question,
      options: shuffleArray(allOptions),
    };
  });
};
