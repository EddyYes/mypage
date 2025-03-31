import { useTranslation } from 'react-i18next'

const HardSkills = () => {
  const { t } = useTranslation()
  return (
    <>
      <h2 className="mb text-xl font-semibold">
        {' '}
        {t('mainSection.content.hardSkills.technicalSkillsTitle')}
      </h2>

      <ul className="mb-2 list-inside list-disc">
        <li>{t('mainSection.content.hardSkills.technicalSkills.0')}</li>
        <li>{t('mainSection.content.hardSkills.technicalSkills.1')}</li>
        <li>{t('mainSection.content.hardSkills.technicalSkills.2')}</li>
        <li>{t('mainSection.content.hardSkills.technicalSkills.3')}</li>
        <li>{t('mainSection.content.hardSkills.technicalSkills.4')}</li>
        <li>{t('mainSection.content.hardSkills.technicalSkills.5')}</li>
      </ul>
      <h2 className="mb text-xl font-semibold">
        {' '}
        {t('mainSection.content.hardSkills.managementSkillsTitle')}
      </h2>

      <ul className="mb-2 list-inside list-disc">
        <li>{t('mainSection.content.hardSkills.managementSkills.0')}</li>
        <li>{t('mainSection.content.hardSkills.managementSkills.1')}</li>
        <li>{t('mainSection.content.hardSkills.managementSkills.2')}</li>
        <li>{t('mainSection.content.hardSkills.managementSkills.3')}</li>
      </ul>
    </>
  )
}

export default HardSkills
