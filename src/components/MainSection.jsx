import { useTranslation } from 'react-i18next'
import Section from './Section'
import mainSectionData from './data/mainSectionData'

const MainSection = () => {
  const { t } = useTranslation()
  return (
    <div className="rounded-md bg-gray-400 p-4 text-black dark:bg-gray-800 dark:text-gray-200">
      <div className="space-y-4">
        {mainSectionData.map((section, index) => (
          <Section
            key={index}
            title={t(section.title)}
            component={section.component}
            sectionKey={section.title} // Уникальный ключ для каждой секции
          />
        ))}
      </div>
    </div>
  )
}

export default MainSection
/**
 * i18n.js – содержит настройки i18n и ссылки на ресурсы (переводы).
useTranslation – подключается к i18n и позволяет через t получать строки перевода.
В MainSection.jsx:
t(section.title) переводит заголовки секций,
component={section.component} передаёт нужный компонент для отображения
section-локальная переменная внутри .map()
sectionKey={section.title} // Уникальный ключ каждой секции использ title
 */
