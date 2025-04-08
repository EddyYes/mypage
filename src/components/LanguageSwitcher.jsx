import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage')
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage)
    }
  }, [i18n])

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('selectedLanguage', lng)
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-2">
        <button
          className="cursor-pointer transition-all duration-300 hover:scale-110"
          onClick={() => changeLanguage('en')}
        >
          EN
        </button>
        <button
          className="cursor-pointer transition-all duration-300 hover:scale-110"
          onClick={() => changeLanguage('uk')}
        >
          UA
        </button>
        <button
          className="cursor-pointer transition-all duration-300 hover:scale-110"
          onClick={() => changeLanguage('ru')}
        >
          RU
        </button>
      </div>
      <div className="mt-1 text-sm text-gray-500">Перевод для Home</div>
    </div>
  )
}

export default LanguageSwitcher
