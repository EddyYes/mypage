import Section from './Section'
import mainSectionData from './data/mainSectionData'

const MainSection = () => {
  return (
    <>
      <div className="space-y-4">
        {mainSectionData.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            component={section.component}
          />
        ))}
      </div>
    </>
  )
}

export default MainSection
