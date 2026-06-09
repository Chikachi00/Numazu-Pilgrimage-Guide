import { type Language } from "../utils/i18n";
import { STORAGE_KEYS } from "../utils/storage";
import { useLocalStorage } from "./useLocalStorage";

export function useLanguage() {
  const [language, setLanguage] = useLocalStorage<Language>(STORAGE_KEYS.language, "zh");

  return { language, setLanguage };
}
