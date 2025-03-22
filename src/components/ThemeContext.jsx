import { createContext, useContext, useState, useEffect } from 'react'
// 1. Создаем контекст для управления темой
const ThemeContext = createContext()
// 2. Создаем провайдер для темы
const ThemeProvider = ({ children }) => {
  // 3. Читаем тему из localStorage (или по умолчанию 'light') - lazy init(// Ленивая инициализация: читаем тему из localStorage только при первом рендере)
  const [theme, setTheme] = useState(() => {
    return typeof window !== 'undefined' && localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : 'light'
  })
  // Функция переключения темы
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme) // Сохраняем в localStorage
  }
  // Добавляет/удаляет класс 'dark' в <html> при изменении theme
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => useContext(ThemeContext)

export { ThemeProvider, useTheme }
