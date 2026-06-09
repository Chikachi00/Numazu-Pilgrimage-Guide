import type { LocalizedText } from "../types/spot";

export type Language = "zh" | "ja" | "en";

export function getLocalizedText(text: LocalizedText, language: Language): string {
  return text[language] ?? text.zh;
}
