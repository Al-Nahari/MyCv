import type { Locale } from './config'
import type { Dictionary } from './en'

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import('./en').then((m) => m.default),
  ar: () => import('./ar').then((m) => m.default),
}

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  const load = dictionaries[locale] ?? dictionaries.en
  return load()
}
