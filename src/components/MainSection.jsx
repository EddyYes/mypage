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
            title={t(section.title)} //перевод заголовка
            component={section.component}
          />
        ))}
      </div>
    </div>
  )
}

export default MainSection
