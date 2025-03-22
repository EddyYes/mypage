import MongodbSections from '../courseSections/MongodbSections'

const MongodbCourse = () => {
  return (
    <div className="rounded-md bg-gray-400 p-4 text-black dark:bg-gray-800 dark:text-gray-200">
      <h1 className="pb-2.5 text-[#f7f7b9]">MongoDB</h1>
      <MongodbSections />
    </div>
  )
}

export default MongodbCourse
