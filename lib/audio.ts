// lib/audio.ts
import fs from "fs";
import path from "path";
import { Readable } from "stream";
import { finished } from "stream/promises";
import { ElevenLabsClient } from "elevenlabs";

// Helper: convert stream to file
export async function streamToFile(stream: Readable, filePath: string): Promise<void> {
  const writeStream = fs.createWriteStream(filePath);
  stream.pipe(writeStream);
  return finished(writeStream);
}

// Helper: check if audio file exists
export const audioFileExists = (audioPath: string): boolean => {
  const filePath = path.join(process.cwd(), 'public', audioPath);
  return fs.existsSync(filePath);
};

// Helper: generate audio with ElevenLabs
export const generateAudio = async (text: string, fileName: string): Promise<boolean> => {
  try {
    const apiKey = process.env.ELEVENLABS_API_KEY;
    if (!apiKey) {
      console.error("ElevenLabs API key is not configured");
      return false;
    }

    const client = new ElevenLabsClient({ apiKey });
    const voiceId = "pNInz6obpgDQGcFmaJgB"; // Korean voice

    const audioStream = await client.textToSpeech.convert(voiceId, {
      output_format: "mp3_44100_128",
      text,
      model_id: "eleven_multilingual_v2",
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75
      }
    });

    const publicDir = path.join(process.cwd(), "public");
    const voiceDir = path.join(publicDir, "voice_kr");
    const filePath = path.join(voiceDir, `${fileName}.mp3`);

    await streamToFile(audioStream, filePath);

    console.log(`🎧 Generated audio: /voice_kr/${fileName}.mp3`);
    return true;
  } catch (error) {
    console.error(`❌ Error generating audio for ${fileName}:`, error);
    return false;
  }
};
