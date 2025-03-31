import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    console.log('Выбран язык:', lng) // Лог в консоль
    i18n.changeLanguage(lng).then(() => {
      console.log('Текущий язык:', i18n.language)
    })
  }

  return (
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
  )
}

export default LanguageSwitcher
