import { useTranslation } from 'react-i18next'

const MyIntent = () => {
  const { t } = useTranslation()

  return (
    <ul>
      <ul className="mb-2 list-inside list-disc">
        <li>{t('mainSection.content.myIntent.goals.0')}</li>
        <li>{t('mainSection.content.myIntent.goals.1')}</li>
      </ul>
    </ul>
  )
}

export default MyIntent
