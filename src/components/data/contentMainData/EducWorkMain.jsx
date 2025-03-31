import { useTranslation } from 'react-i18next'

const EducWorkMain = () => {
  const { t } = useTranslation()

  return (
    <>
      <h2 className="mb text-xl font-semibold">
        {t('mainSection.content.educWork.birthDate')}
      </h2>
      <h2 className="mb text-xl font-semibold">
        {t('mainSection.content.educWork.education')}
      </h2>
      <p className="mb">{t('mainSection.content.educWork.courses')}</p>
      <h2 className="mb text-xl font-semibold">
        {' '}
        {t('mainSection.content.educWork.recentActivityTitle')}
      </h2>
      <ul className="mb-2 list-inside list-disc">
        <li>{t('mainSection.content.educWork.recentActivities.0')}</li>
        <li>{t('mainSection.content.educWork.recentActivities.1')}</li>
        <li>{t('mainSection.content.educWork.recentActivities.2')}</li>
      </ul>
      <p className="mb-4">
        {t('mainSection.content.educWork.responsibilities')}
      </p>
    </>
  )
}

export default EducWorkMain
