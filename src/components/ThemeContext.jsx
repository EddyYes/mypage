import { createContext, useContext, useState, useEffect, useMemo } from 'react'
// 1. Создаём контекст темы с начальными значениями
const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} })
// 2. Создаем провайдер для темы
const ThemeProvider = ({ children }) => {
// 3. Ленивая инициализация: читаем тему из localStorage (по умолчанию 'light')
  const [theme, setTheme] = useState(() => {
    return typeof window !== 'undefined' && localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : 'light'
  })
  // Переключение темы и сохранение в localStorage
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme) // Сохраняем в localStorage
  }
  //Мемоизация значения value для предотвращения лишних перерисовок
  const value = useMemo(() => ({ theme, toggleTheme }), [theme])

  // Добавляет/удаляет класс 'dark' на <html> для работы темной темы в Tailwind
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
// Хук доступа к теме
const useTheme = () => useContext(ThemeContext)

export { ThemeProvider, useTheme }
//Ленивая инициализация в useState позволяет вычислить начальное состояние только при первом рендере, передавая функцию, а не значение.