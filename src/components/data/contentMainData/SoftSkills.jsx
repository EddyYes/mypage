import { useTranslation } from 'react-i18next'

const SoftSkills = () => {
  const { t } = useTranslation()
  return (
    <>
      <h2 className="mb text-xl font-semibold">
        {t('mainSection.content.softSkills.skills.0.title')}
      </h2>
      <ul className="mb-2 list-inside list-disc">
        <li>{t('mainSection.content.softSkills.skills.0.description')}</li>
      </ul>

      <h2 className="mb text-xl font-semibold">
        {t(' ')}
        {t('mainSection.content.softSkills.skills.1.title')}
      </h2>
      <ul className="mb-2 list-inside list-disc">
        <li>{t('mainSection.content.softSkills.skills.1.description')}</li>
      </ul>

      <h2 className="mb text-xl font-semibold">
        {t('mainSection.content.softSkills.skills.2.title')}
      </h2>
      <ul className="mb-2 list-inside list-disc">
        <li>{t('mainSection.content.softSkills.skills.2.description')}</li>
      </ul>

      <h2 className="mb text-xl font-semibold">
        {t('mainSection.content.softSkills.skills.3.title')}
      </h2>
      <ul className="mb-2 list-inside list-disc">
        <li>{t('mainSection.content.softSkills.skills.3.description')}</li>
      </ul>

      <h2 className="mb text-xl font-semibold">
        {t('mainSection.content.softSkills.skills.4.title')}
      </h2>
      <ul className="mb-2 list-inside list-disc">
        <li>{t('mainSection.content.softSkills.skills.4.description')}</li>
      </ul>

      <h2 className="mb text-xl font-semibold">
        {t('mainSection.content.softSkills.skills.5.title')}
      </h2>
      <ul className="mb-2 list-inside list-disc">
        <li>{t('mainSection.content.softSkills.skills.5.description')}</li>
      </ul>

      <h2 className="mb text-xl font-semibold">
        {t('mainSection.content.softSkills.skills.6.title')}
      </h2>
      <ul className="mb-2 list-inside list-disc">
        <li>{t('mainSection.content.softSkills.skills.6.description')}</li>
      </ul>

      <h2 className="mb text-xl font-semibold">
        {t('mainSection.content.softSkills.skills.7.title')}
      </h2>
      <ul className="mb-2 list-inside list-disc">
        <li>{t('mainSection.content.softSkills.skills.7.description')}</li>
      </ul>

      <h2 className="mb text-xl font-semibold">
        {t('mainSection.content.softSkills.skills.8.title')}
      </h2>
      <ul className="mb-2 list-inside list-disc">
        <li>{t('mainSection.content.softSkills.skills.8.description')}</li>
      </ul>

      <h2 className="mb text-xl font-semibold">
        {t('mainSection.content.softSkills.skills.9.title')}
      </h2>
      <ul className="mb-2 list-inside list-disc">
        <li>{t('mainSection.content.softSkills.skills.9.description')}</li>
      </ul>
    </>
  )
}

export default SoftSkills
