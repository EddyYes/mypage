import EducWorkMain from './contentMainData/EducWorkMain'
import HardSkills from './contentMainData/HardSkills'
import SoftSkills from './contentMainData/SoftSkills'
import MyIntent from './contentMainData/MyIntent'

const mainSectionData = [
  {
    title: 'Освіта та досвід роботи (не розробником)',
    component: EducWorkMain,
  },
  {
    title: 'Hard skills (у будівництві)',
    component: HardSkills,
  },
  {
    title: 'SoftSkills',
    component: SoftSkills,
  },
  {
    title: 'Мій задум',
    component: MyIntent,
  },
]

export default mainSectionData
