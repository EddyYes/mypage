import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
// Импорт JSON-файлов
import enTranslation from './languages/enTranslation.json'
import ruTranslation from './languages/ruTranslation.json'
import ukTranslation from './languages/ukTranslation.json'

// Настройка ресурсов
const resources = {
  en: { translation: enTranslation },
  ru: { translation: ruTranslation },
  uk: { translation: ukTranslation },
}
// Инициализация i18n
i18n
  .use(LanguageDetector) // Определение и сохранение языка в localStorage
  .use(initReactI18next) // Подключение к React
  .init({
    resources,
    fallbackLng: 'en', // Резервный язык
    detection: {
      order: ['localStorage', 'navigator', 'queryString'], // Порядок определения языка
      caches: ['localStorage'], // Сохранение языка в localStorage
    },
    interpolation: {
      escapeValue: false, // Отключение экранирования
    },
    debug: true, // Включить отладку для разработки
  })
// window.i18n = i18n

export default i18n