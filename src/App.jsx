import { Route, Routes } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18n from './i18n' // Импорт экземпляра i18n
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainSection from './components/MainSection'
import JavaScriptCourse from './components/courses/JavaScriptCourse'
import ReactCourse from './components/courses/ReactCourse'
import NodeJsCourse from './components/courses/NodeJsCourse'
import DockerCourse from './components/courses/DockerCourse'
import GitCourse from './components/courses/GitCourse'
import CssCourse from './components/courses/CssCourse'
import MongodbCourse from './components/courses/MongodbCourse'

function App() {
  const { i18n: i18nInstance } = useTranslation()
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <main
          key={i18nInstance.language}
          className="w-[780px] flex-grow bg-gray-200 p-4 dark:bg-gray-500"
        >
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/javaScriptCourse" element={<JavaScriptCourse />} />
            <Route path="/reactCourse" element={<ReactCourse />} />
            <Route path="/nodeJsCourse" element={<NodeJsCourse />} />
            <Route path="/dockerCourse" element={<DockerCourse />} />
            <Route path="/gitCourse" element={<GitCourse />} />
            <Route path="/cssCourse" element={<CssCourse />} />
            <Route path="/mongodbCourse" element={<MongodbCourse />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
