import { useReducer } from 'react'

const sectionReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE': {
      const newState = {
        ...state,
        [action.sectionKey]: !state[action.sectionKey],
      }
      localStorage.setItem('sectionsState', JSON.stringify(newState))//сохр. ключ и значение(в json)
      return newState
    }
    default:
      return state
  }
}

const Section = ({ title, component: Component, sectionKey }) => {
  const savedState = JSON.parse(localStorage.getItem('sectionsState')) || {} //получим либо данные либо пустой объект
  const initialState = {
    ...savedState,
    [sectionKey]:
      savedState[sectionKey] !== undefined ? savedState[sectionKey] : false,
  }

  const [state, dispatch] = useReducer(sectionReducer, initialState)

  const toggleSection = () => {
    dispatch({ type: 'TOGGLE', sectionKey })
  }

  return (
    <div className="mb-4 overflow-hidden rounded-md border-none">
      <button
        className="w-full bg-gray-500 p-3 text-left text-lg text-white hover:bg-gray-600 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
        onClick={toggleSection}
      >
        {title}
      </button>
      {state[sectionKey] && (
        <div className="bg-gray-300 p-4 dark:bg-gray-500">
          <Component />
        </div>
      )}
    </div>
  )
}

export default Section
/**
 * sectionReducer — управлятет состоянием секций (открыта/закрыта) в приложении.
Обрабатывает экшен 'TOGGLE', переключает состояние секции и сохраняет его в localStorage для сохранения настроек при перезагрузке.
 *...state - содержит все текущие секции и их состояния.
 *title, component, sectionKey - эти переменные используются для отображения/сокрытия секций на основании значений true/false
 * Связь между action и sectionKey устанавливается в функции toggleSection
 через  .dispatch({ type: 'TOGGLE', sectionKey }), который передает объект действия type: 'TOGGLE' с  и sectionKey в редюсер, который использует  для изменения состояния соответствующей секции.
*/