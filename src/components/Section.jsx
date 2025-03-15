import { useState } from 'react'

const Section = ({ title, component: Component }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-4 overflow-hidden rounded-md border-none">
      <button
        className="w-full bg-gray-500 p-3 text-left text-lg text-white hover:bg-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && (
        <div className="bg-gray-300 p-4">
          <Component />
        </div>
      )}
    </div>
  )
}
export default Section
