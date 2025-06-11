import SectionCourse from './SectionCourse'

const ReactSections = () => {
  return (
    <div className="space-y-4">
      <SectionCourse
        title="
Про React / About React / O React"
      >
        <p>
          <a
            href="https://docs.google.com/document/d/1N9eLQ9uA07g-iPwnZfLPUdYEHbg7rTX8M2kFfBfezPo/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer" //для защиты от атак при взаимодействии с новой вкладкой.
            class="font-bold text-blue-900 hover:text-blue-700"
          >
            переглянути зміст / view contents / просмотреть содержание
          </a>
        </p>
      </SectionCourse>

      <SectionCourse title="React Router">
        <p className="mb-2">
          <strong>React Router DOM</strong> — библиотека маршрутизации для
          одностраничных React-приложений (SPA) в веб-браузере. Позволяет
          отображать разные компоненты в зависимости от текущего URL без
          перезагрузки страницы и осуществляет роутинг на стороне клиента.
        </p>
        <p className="font-bold">Ключевые понятия</p>
        <ul className="mb-2 list-inside list-disc">
          <li>
            <strong>Роутинг</strong> — механизм сопоставления пути{' '}
            <code>URL</code> с компонентами для их отображения.
          </li>
          <li>
            <strong>Маршрут</strong> — указывает, какой компонент рендерить при
            определённом пути (
            <code>{'<Route path="/about" element={<About />} />'}</code>).
          </li>
          <li>
            <strong>Навигация</strong> — переход между маршрутами через{' '}
            <code>{'<Link>'}</code>, <code>{'<NavLink>'}</code> или программно (
            <code>useNavigate()</code>), без перезагрузки.
          </li>
          <li>
            <strong>История браузера</strong> — управление переходами
            вперёд/назад и манипуляция стеком истории (<code>push</code>,{' '}
            <code>replace</code>) с использованием History API браузера.
          </li>
          <li>
            <strong>Маршрут</strong> со свойством<strong> index</strong>{' '}
            используют для отображения компонента по умолчанию внутри
            родительского маршрута, позволяя не указывать дочерний путь.
          </li>
        </ul>

        <p className="font-bold">Основные возможности</p>
        <ul className="mb-2 list-inside list-disc">
          <li>
            <strong>Роутинг</strong>: Настройка маршрутов через{' '}
            <code>{'<BrowserRouter>'}</code>, <code>{'<Routes>'}</code>,{' '}
            <code>{'<Route>'}</code>.
          </li>
          <li>
            <strong>Параметры маршрута</strong>: Динамические сегменты (
            <code>/products/:id</code>) читаются через <code>useParams()</code>.{' '}
            <code>useParams()</code> работает именно с параметрами маршрута.
          </li>
          <li>
            <strong>Вложенные маршруты</strong>: Иерархические уровни интерфейса
            с использованием <code>{'<Outlet />'}</code>.{' '}
            <code>{'<Outlet />'}</code> рендерит вложенные маршруты в
            родительском компоненте как контейнер.
          </li>
          <li>
            <strong>Загрузка данных</strong>: <code>loader</code> (в Data APIs)
            загружает данные до рендера компонента для их немедленной передачи.
          </li>
          <li>
            <strong>Программная навигация и перенаправление</strong>:
            <ul className="mb-2 ml-4 list-inside list-disc">
              <li>
                <code>{'<Navigate to="/path" />'}</code>: Компонент в JSX для
                автоматического перехода (авторизация, 404, перенаправление).
              </li>
              <li>
                <code>useNavigate()</code>: Хук для переходов в обработчиках
                событий (клики, формы), поддерживает <code>replace: true</code>.
              </li>
            </ul>
          </li>
          <li>
            <strong>Обработка строк запроса</strong>: Работа с параметрами (
            <code>?q=react</code>) через <code>useLocation()</code> (данные URL:{' '}
            <code>pathname</code>, <code>search</code>, <code>hash</code>,{' '}
            <code>state</code>) и <code>useSearchParams()</code>{' '}
            (чтение/изменение query).
          </li>
          <li>
            <strong>Страница 404</strong>: Маршрут <code>path="*"</code> для
            отображения компонента при несуществующих путях.
          </li>
          <li>
            <strong>Обработка переходов (в data routers)</strong>: Выполнение
            действий при переходе на другую страницу, например: сброс состояния,
            отправка аналитики или отмена старых запросов.
          </li>
        </ul>
        <hr />
        <h3 className="mb-1 text-xl font-bold">Применение в приложении</h3>
        <ul className="mb-2 list-inside list-disc">
          <li>
            <code>{'<BrowserRouter>'}</code> оборачивает приложение в{' '}
            <code>main.jsx</code>.
          </li>
          <li>
            Используются <code>{'<Routes>'}</code> и <code>{'<Route>'}</code>{' '}
            для маршрутизации.
          </li>
          <li>
            Маршруты плоские, без вложенности, соответствуют текущей структуре.
          </li>
          <li>
            Навигация реализована через <code>{'<NavLink>'}</code> с индикацией
            активного состояния (<code>isActive</code>).
          </li>
          <li>
            Компоненты распределены по функциональным папкам (
            <code>courses/</code>, <code>data/</code>,{' '}
            <code>contentMainData/</code>).
          </li>
          <li>
            Основной контент рендерится внутри тега <code>{'<main>'}</code>.
          </li>
          <li>
            Маршруты отделены от общего макета: <code>{'<Header />'}</code>,{' '}
            <code>{'<Sidebar />'}</code> находятся вне <code>{'<Routes>'}</code>
            .
          </li>
          <li>
            Применяется семантический тег <code>{'<main>'}</code> для маршрутов,
            обеспечивающий структуру и доступность.
          </li>
        </ul>
      </SectionCourse>

      <SectionCourse title="Context API">
        <p className="mb-2">
          <strong>Context API</strong> — встроенный механизм React для передачи
          данных между компонентами без необходимости прокидывания пропсов через
          каждый уровень дерева.
        </p>
        <p>
          <strong>Особенности:</strong>
        </p>
        <ul className="mb-2 list-inside list-disc">
          <li>Встроен в React, не требует установки сторонних пакетов.</li>
          <li>
            Используется для передачи глобальных данных, доступных многим
            компонентам.
          </li>
          <li>
            Позволяет избежать <strong>props drilling</strong> — многократной
            передачи пропсов вниз по иерархии.
          </li>
          <li>
            Подходит для простых приложений — для управления темой,
            локализацией, аутентификацией и т.п.
          </li>
          <li>
            Не подходит для сложного управления состоянием — лучше использовать
            Redux, Zustand или MobX.
          </li>
          <li>
            Все компоненты, использующие контекст, должны быть внутри
            соответствующего <code>Provider</code>.
          </li>
        </ul>
        <p>
          При изменении значения в <code>Provider</code>, все потребители
          контекста перерисовываются. Поиск происходит во время рендеринга, что
          влияет на производительность, если дерево компонентов глубокое.
        </p>
        <p className="mb-2">
          <strong>Разрешение контекста: </strong>React ищет Context.Provider для
          компонента с <code>useContext</code> или <code>Context.Consumer</code>
          , начиная с этого компонента и поднимаясь по дереву компонентов. Поиск
          останавливается на первом <code>Provider</code>, связанном с данным
          контекстом. Если <code>Provider</code>не найден, используется{' '}
          <code>defaultValue</code> из <code>createContext</code>.
        </p>
        <p>
          <strong>Основные элементы Context API:</strong>
        </p>
        <ul className="mb-2 list-inside list-disc">
          <li>React.createContext — создает объект контекста.</li>
          <li>
            <code>Provider</code> — компонент, который предоставляет данные
            контекста дочерним компонентам (оборачивание компонентов
            провайдером).
          </li>
          <li>
            <code>Consumer</code> или хук <code>useContext</code> — способы
            получения значения из контекста.
          </li>
        </ul>

        <p className="mb-2 font-bold">1. Создание контекста</p>
        <pre className="mb-2 rounded bg-gray-800 p-4 text-sm text-white">
          <code>{`import { createContext } from 'react';
export const ThemeContext = createContext('light'); // значение по умолчанию`}</code>
        </pre>
        <p>
          <code>defaultValue</code> — чтобы "код не упал" с ошибкой, если кто-то
          случайно использует <code>useContext(Context)</code> вне{' '}
          <code>Provider</code>, это страховка от ошибок, но не часть хорошей
          практики.
        </p>
        <p>
          <code>defaultValue</code> как <code>undefined</code> само по себе не
          вызывает ошибку, а ошибка может возникнуть из-за неправильной
          обработки <code>undefined</code> в коде.
        </p>
        <p className="mb-2">
          <code>defaultValue</code> не инициализирует состояние приложения — для
          этого используется <code>useState</code>, <code>useReducer</code> и
          т.п.
        </p>

        <p className="font-bold">2. Компонент Provider</p>
        <p className="mb-2">
          Принимает props <code>value</code> и передаёт значения контекста всем
          дочерним компонентам. Используется для оборачивания дерева
          компонентов.
        </p>
        <pre className="mb-2 rounded bg-gray-800 p-4 text-sm text-white">
          <code>{`import { useState } from 'react';
import { ThemeContext } from './ThemeContext';
function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <MyComponent />
    </ThemeContext.Provider>
  );
}`}</code>
        </pre>
        <p className="mb-2">
          Для глобальной передачи данных — <code>App</code> обернуть в{' '}
          <code>Provider</code> в <code>index.js</code> или{' '}
          <code>main.jsx</code>, т.к. доступны все дочерние компоненты. При
          передаче данных для части приложения — <code>Provider</code>{' '}
          оборачивает только нужное “поддерево”.
        </p>

        <p className="font-bold">3. Хук useContext и Context.Consumer</p>
        <p className="mb-2">
          Используются в дочерних компонентах для получения значений.
        </p>
        <pre className="mb-2 rounded bg-gray-800 p-4 text-sm text-white">
          <code>{`import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return <button onClick={() => setTheme('dark')}>Set Dark</button>;
};`}</code>
        </pre>
        <p>
          <strong>render props</strong> — это шаблон проектирования, при котором
          компонент получает функцию как <code>props</code> и вызывает её для
          управления отображением.
        </p>
        <p className="mb-2">
          <code>Context API</code> не использует <strong>render props</strong>{' '}
          напрямую (в новых версиях React).
        </p>
        <pre className="mb-4 rounded bg-gray-800 p-4 text-sm text-white">
          <code>{`<ThemeContext.Consumer>
  {({ theme }) => <div>Theme: {theme}</div>}
</ThemeContext.Consumer>`}</code>
        </pre>
        <hr />
        <h3 className="mb-1 text-xl font-bold">Применение в приложении</h3>
        <p>
          В этом приложении изменен стандартный подход, при котором
          компоненты-потребители обычно используют <code>useContext</code> или{' '}
          <code>Consumer</code> для получения значения контекста.
        </p>
        <ul className="mb-2 list-inside list-disc">
          <li>
            <code>ThemeProvider</code> (в <code>main.jsx</code>) оборачивает{' '}
            <code>App</code>, делая контекст доступным всем компонентам.
          </li>
          <li>
            <code>Header.jsx</code> использует <code>useContext</code> (через{' '}
            <code>useTheme</code>) для управления темой. <code>useContext</code>{' '}
            используется только в <code>ThemeContext.jsx</code> и в{' '}
            <code>Header.jsx</code> для отображения соответствующих иконок и
            переключения темы.
          </li>
          <li>
            Компоненты <code>App</code>, <code>Sidebar</code>,{' '}
            <code>MainSection</code>, <code>Section</code> не используют{' '}
            <code>useContext</code> напрямую, а реагируют на изменение класса{' '}
            <code>dark</code> на <code>&lt;html&gt;</code>, который
            добавляется/удаляется <code>ThemeProvider</code> через{' '}
            <code>useEffect</code>. Это взаимодействие с{' '}
            <strong>Tailwind CSS</strong> (через префикс <code>dark:</code>)
            позволяет компонентам менять стили темы без обращения к контексту.
          </li>
        </ul>
        <p>
          В <code>ThemeContext.jsx</code> определяются и{' '}
          <code>ThemeProvider</code>, и хук <code>useTheme</code>, что является
          стандартной практикой для инкапсуляции (объединения и изоляции) логики
          контекста. Оба экспортируются вместе (
          <code>export &#123; ThemeProvider, useTheme &#125;</code>).
        </p>
      </SectionCourse>

      <SectionCourse title="Redux">
        <p>
          <strong>Redux</strong> — независимая библиотека, используемая не
          только в React.
        </p>
        <p className="mb-2">
          <strong>Redux</strong> — это библиотека управления состоянием
          приложения. Она централизует все состояния (<code>state</code>) в
          одном хранилище (<code>store</code>), обеспечивая предсказуемость
          изменения состояний.
        </p>
        <p className="mb-1 font-bold">Ключевые понятия</p>
        <ol className="mb-2 list-inside list-decimal">
          <li>
            <strong>Store</strong>
            <ul className="mb-1 list-inside list-disc">
              <li>
                Централизованное хранилище состояния, управляемое редюсерами, из
                которого компоненты считывают данные.
              </li>
              <li>
                Создаётся с помощью <code>configureStore()</code> (в Redux
                Toolkit).
              </li>
              <li>
                Подключается к React через{' '}
                <code>{'<Provider store={store}>'}</code> из{' '}
                <code>react-redux</code>.
              </li>
            </ul>
          </li>
          <li>
            <strong>State</strong>
            <ul className="list-inside list-disc">
              <li>
                Объект, описывающий состояние в приложении, находящийся в{' '}
                <code>store</code>.
              </li>
              <li>
                Изменяется только через <code>dispatch</code>.
              </li>
              <li>
                Состояние — неизменяемый объект, поэтому создается новое
                состояние.
              </li>
            </ul>
            <p>
              Используем локальное состояние, если оно нужно в одном компоненте.
            </p>
            <p className="mb-1">
              Можно комбинировать центральное состояние с локальным — в
              отдельных компонентах.
            </p>
          </li>
          <li>
            <strong>Actions</strong> (действия создаются в компонентах)
            <ul className="mb-2 list-inside list-disc">
              <li>
                Объекты с полем <code>type</code>, передает значение "строку",
                т.е. — что должно произойти.
              </li>
              <li>
                Опционально — <code>payload</code> с данными.
              </li>
            </ul>
            <pre className="mb-2 rounded bg-gray-800 p-4 text-sm text-white">
              <code>{`{
  type: 'ADD_TODO',
  payload: {id:"1", text: "Learn Redux", isCompleted:false},
}
...`}</code>
              <br />
              <code>{`const {type, payload} = action`}</code>
            </pre>
          </li>
          <li>
            <strong>Reducers </strong>(создает новое состояние, не изменяя
            текущее)
            <ul className="mb-2 list-inside list-disc">
              <li>
                Функция, принимающая <code>state</code> и <code>action</code> и
                возвращающие новый <code>state</code>; не изменяют старый{' '}
                <code>state</code>.
              </li>
            </ul>
            <pre className="mb-2 rounded bg-gray-800 p-4 text-sm text-white">
              <code>{`const initialState = {
  todos: [], // Начальный пустой массив задач
}

function reducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, payload], // Добавляем новую задачу в массив
      }
    default:
      return state
  }
}`}</code>
            </pre>
            <ul className="mb-1 list-inside list-disc">
              <li>
                Часто используют <code>switch</code>, <code>break</code> не
                используем, т.к. <code>return</code>.
              </li>
              <li>
                Чистые функции — всегда возвращают одинаковый результат при тех
                же аргументах; не изменяют внешние переменные; не зависит от
                внешних переменных и от состояния программы; не взаимодействуют
                с внешними ресурсами (б.д., файловая система, сеть).
              </li>
            </ul>
          </li>
          <li>
            <strong>Dispatch</strong>
            <ul className="list-inside list-disc">
              <li>
                Функция <code>dispatch</code> отправляет <code>action</code> в{' '}
                <code>store</code>, который передает текущее <code>state</code>{' '}
                и <code>action</code> в редюсер.
              </li>
            </ul>
            <p className="mb-2">
              Редюсер возвращает новое <code>state</code>, сохраняемое в{' '}
              <code>store</code>.
            </p>
            <pre className="mb-2 rounded bg-gray-800 p-4 text-sm text-white">
              <code>{`dispatch({
  type: 'ADD_TODO',
  payload: { id: 1, text: 'Позвонить Васе', completed: false }
})
// В state.todos: [{ id: 1, text: 'Позвонить Васе', completed: false }]`}</code>
            </pre>
          </li>
          <li>
            <strong>Slice </strong>
            (Redux Toolkit)
            <ul className="mb-1 list-inside list-disc">
              <li>
                Часть состояния + редьюсеры + <code>actions</code> — всё в
                одном.
              </li>
              <li>
                Определяется с помощью <code>createSlice()</code>.
              </li>
              <li>
                Автоматически создаёт типы действий и функции для их вызова (
                <code>action types</code> и <code>action creators</code>).
              </li>
            </ul>
          </li>
          <li>
            <strong>Selector</strong>
            <ul className="list-inside list-disc">
              <li>
                Функция для извлечения нужной части состояния из{' '}
                <code>store</code>.
              </li>
            </ul>
            <p className="mb-1">
              В React применяется <code>useSelector()</code> для чтения
              состояния в компоненте.
            </p>
          </li>
          <li>
            <strong>Middleware</strong>
            <ul className="list-inside list-disc">
              <li>
                Функции-посредники между <code>dispatch</code> и{' '}
                <code>reducer</code>.
              </li>
            </ul>
            <p className="mb-2">
              Пример: <code>redux-thunk</code> для асинхронных запросов.
            </p>
          </li>
        </ol>
        <p className="font-bold">Важно:</p>
        <p>
          <strong>Redux Toolkit</strong> (RTK):
        </p>
        <ul className="mb-2 list-inside list-disc">
          <li>
            Объединяет <code>actions</code> и <code>reducers</code> через{' '}
            <code>createSlice</code>.
          </li>
          <li>
            Автоматически настраивает <code>store</code> с DevTools и{' '}
            <code>middleware</code>.
          </li>
        </ul>
        <p>
          <strong>Redux DevTools</strong> — расширение для браузера:
        </p>
        <ul className="mb-2 list-inside list-disc">
          <li>Показывает текущее состояние и список действий.</li>
          <li>Поддерживает перемотку состояний (вперёд/назад) для отладки.</li>
        </ul>
        <p className="mb-2">
          <strong>Immer</strong> (встроенная библиотека в RTK) — позволяет
          писать код так, будто <code>state</code> изменяется напрямую, но на
          самом деле создаёт новую копию <code>state</code>, сохраняя его
          иммутабельность (Redux требует, чтобы редюсеры не мутировали
          состояние).
        </p>

        <p className="font-bold">Прочее:</p>
        <ul className="mb-2 list-inside list-disc">
          <li>
            В React+Redux часто один компонент создаёт действие (через{' '}
            <code>useDispatch</code>), а другой потребляет состояние (через{' '}
            <code>useSelector</code>).
          </li>
          <li>
            <code>store.subscribe()</code> — метод используется для получения
            уведомлений о каждом изменении состояния.
            <p>
              Применяется, когда нужно выполнить действия вне компонентов React
              (например, логирование или синхронизацию с внешними системами).
            </p>
          </li>
          <li>Для работы с React подключают два пакета:</li>
          <ol className="ml-4 list-inside list-decimal">
            <li>
              <code>react-redux</code> — интеграция Redux с React:
              <br />
              <ul className="ml-4 list-inside list-disc">
                <li>
                  <code>{'<Provider>'}</code> для «прокидывания»{' '}
                  <code>store</code> во всё приложение;
                </li>
                <li>
                  хук <code>useSelector()</code> для чтения данных из{' '}
                  <code>store</code>;
                </li>
                <li>
                  хук <code>useDispatch()</code> для отправки действий.
                </li>
              </ul>
            </li>
            <li>
              <code>@reduxjs/toolkit</code> — для упрощения работы с Redux:
              <br />
              <ul className="ml-4 list-inside list-disc">
                <li>
                  <code>configureStore()</code> для быстрой настройки{' '}
                  <code>store</code> с DevTools и <code>middleware</code>;
                </li>
                <li>
                  <code>createSlice()</code> для объединения{' '}
                  <code>initialState</code>, <code>reducers</code> и
                  автоматической генерации <code>action-creator’ов</code>;
                </li>
                <li>
                  <code>createAsyncThunk()</code> для удобного создания
                  асинхронных действий.
                </li>
              </ul>
            </li>
          </ol>
        </ul>
        <hr />
        <h3 className="mb-1 text-xl font-bold">Применение в приложении</h3>
        <p>
          Библиотека <strong>Redux</strong> в этом приложении не используется.
          Применяется хук <code>useReducer</code>.
        </p>
        <p>
          Ссылка <code>Go to Home</code> ведёт к компоненту{' '}
          <code>{'<MainSection/>'}</code>, где реализован перевод текста (в
          качестве примера). Компонент <code>{'<MainSection/>'}</code> включает
          в себя компонент <code>{'<Section/>'}</code>, который использует хук{' '}
          <code>useReducer</code> для управления состоянием секций (открыты или
          закрыты). При переключении языка с помощью кнопок <code>EN</code>,{' '}
          <code>UA</code>, <code>RU</code> происходит ререндеринг, но состояния
          секций сохраняются благодаря использованию <code>localStorage</code>.
        </p>
        <p>
          <code>useReducer</code> используется вместо <code>useState</code>, так
          как требуется управление состоянием нескольких секций с сохранением в{' '}
          <code>localStorage</code>. <code>useReducer</code> упрощает логику
          обновления состояния.
        </p>
      </SectionCourse>

      <SectionCourse title="ХУКИ в REACT / HOOKs in REACT / ХУКИ в REACT">
        <h3 className="mb-2 text-xl font-bold">useState</h3>
        <pre className="mb-2 rounded bg-gray-800 p-4 text-sm text-white">
          <code>{`const [state, setState] = useState(initialState);`}</code>
        </pre>
        <p>
          <strong>useState</strong> — это хук, который позволяет добавить
          состояние в функциональные компоненты React.
        </p>
        <p>useState возвращает массив из двух элементов:</p>
        <ul className="mb-2 list-inside list-disc">
          <li>
            <strong>state</strong> — текущее значение состояния. После первого
            рендеринга оно будет равно <code>initialState</code>.
          </li>
          <li>
            <strong>setState</strong> — функция, которая обновляет состояние и
            инициирует повторный рендер.
          </li>
          <li>
            <strong>initialState</strong> — начальное значение состояния,
            которое может быть любого типа (число, строка, объект, массив,{' '}
            <code>null</code>, <code>undefined</code>, функция и т. д.).
          </li>
        </ul>
        <p>
          Если передать функцию в <code>useState</code>, то React вызовет её
          только один раз при инициализации, чтобы получить начальное состояние.
        </p>
        <p className="mb-2">
          При первом рендере <code>useState</code> берёт начальное значение
          состояния, а <code>setState</code> в этот момент ещё не используется.
          Обновление состояния через <code>setState</code> начинается только
          после первого рендера.
        </p>
        <hr />
        <h3 className="mb-2 text-xl font-bold">useEffect</h3>
        <pre className="mb-2 rounded bg-gray-800 p-4 text-sm text-white">
          <code>{`useEffect(() => {
  fetch('https://api.example.com/data')    // Отправка запроса на указанный URL
    .then(res => res.json())               // Преобразование ответа в формат JSON
    .then(data => console.log(data))       // Логирование полученных данных
    .catch(error => console.error(error)); // Обработка ошибок
}, []);`}</code>
        </pre>
        <p>
          Хук <strong>useEffect</strong> выполняет побочные эффекты после
          рендера компонента и синхронизирует компонент с внешними системами.
          Побочные эффекты — всё, что выходит за рамки рендера и ререндера.
        </p>
        <p>useEffect принимает два аргумента:</p>
        <ul className="mb-2 list-inside list-disc">
          <li>
            <strong>функцию-эффект</strong> — которую нужно выполнить после
            рендера компонента.
          </li>
          <li>
            <strong>массив зависимостей</strong> (необязательный) — который
            контролирует, когда нужно выполнять или пересоздавать эффект.
          </li>
        </ul>
        <p>
          <strong>Зависимости</strong> — это значения, при изменении которых{' '}
          <code>useEffect</code> выполняется повторно.
        </p>
        <p>
          Пустой массив зависимостей (<code>[]</code>) — <code>useEffect</code>{' '}
          запускается только один раз при первом рендере компонента.
        </p>
        <p>Могут быть зависимостями:</p>
        <ul className="mb-2 list-inside list-disc">
          <li>
            <strong>state, props, context</strong> → при их изменении происходит
            ререндер, и если они указаны в массиве зависимостей,{' '}
            <code>useEffect</code> будет перезапущен.
          </li>
          <li>
            <strong>refs</strong> → их изменение не вызывает ререндер, только
            перезапуск эффекта.
          </li>
        </ul>
        <p>
          Очистка эффекта (cleanup function) выполняется в следующих случаях:
        </p>
        <ul className="mb-2 list-inside list-disc">
          <li>
            При <strong>анмаунте</strong> (размонтировании) компонента.
          </li>
          <li>Перед повторным запуском эффекта при изменении зависимостей.</li>
        </ul>
        <p>Очистка требуется для:</p>
        <ul className="mb-2 list-inside list-disc">
          <li>
            остановки таймеров (<code>setTimeout</code>,{' '}
            <code>setInterval</code>),
          </li>
          <li>
            завершения подписок (<code>WebSocket</code>,{' '}
            <code>EventListener</code>, <code>API</code>-запросы),
          </li>
          <li>предотвращения утечек памяти,</li>
          <li>освобождения ресурсов.</li>
        </ul>
        <p>
          Используется <code>useEffect</code> для:
        </p>
        <ul className="mb-2 list-inside list-disc">
          <li>
            API-запросов (<code>fetch</code>, <code>axios</code>),
          </li>
          <li>
            работы с <code>localStorage</code>, <code>sessionStorage</code>,
          </li>
          <li>
            подписок (<code>WebSocket</code>, события браузера,{' '}
            <code>Redux</code>/<code>Zustand</code>),
          </li>
          <li>
            таймеров (<code>setTimeout</code>, <code>setInterval</code>),
          </li>
          <li>
            манипуляций с DOM (добавление классов, изменение заголовка страницы
            и т. д.).
          </li>
        </ul>
        <hr />
        <h3 className="mb-2 text-xl font-bold">useRef</h3>
        <pre className="mb-2 rounded bg-gray-800 p-4 text-sm text-white">
          <code>{`const myRef = useRef(initialValue);\nmyRef.current = 42; // Изменяем значение свойства current`}</code>
        </pre>
        <p>
          <strong>useRef</strong> — хук, который создаёт изменяемый объект
          (ref), значение которого сохраняется между рендерами, но его изменение
          не вызывает повторный ререндер.
        </p>
        <p>
          Рефы (refs) дают доступ к DOM-элементам, полезны для фокуса и
          анимаций.
        </p>
        <p>
          <strong> Когда использовать?</strong>
        </p>
        <ul className="mb-2 list-inside list-disc">
          <li>
            Доступ к DOM-элементам (например, управление фокусом на input).
          </li>
          <li>
            Хранение значений между рендерами (например, сохранение предыдущего
            state).
          </li>
          <li>
            Создание изменяемых переменных, которые не зависят от ререндеров
            (например, таймеры, идентификаторы).
          </li>
          <li>
            Хранение ссылок на объекты, которые не должны пересоздаваться при
            рендере (например, экземпляры классов, подписки).
          </li>
        </ul>
        <p>
          <strong>Что возвращает?</strong>
        </p>
        <ul className="mb-2 list-inside list-disc">
          <li>
            Объект <code>{`{ current: значение }`}</code>, где значение{' '}
            <code>current</code> можно изменять напрямую.
          </li>
          <li>
            В отличие от <code>useState</code>, изменение{' '}
            <code>ref.current</code> не вызывает ререндер.
          </li>
        </ul>
        <p>
          <strong>Где используется useRef?</strong>
        </p>
        <ol className="mb-2 list-inside list-decimal">
          <li>
            Работа с DOM – установка фокуса, измерение размеров элементов.
          </li>
          <li>
            Хранение предыдущего значения state – например, сравнение текущего и
            предыдущего значения состояния для условной логики.
          </li>
        </ol>
        <hr />
        <h3 className="mb-2 text-xl font-bold">useMemo</h3>
        <pre className="mb-2 rounded bg-gray-800 p-4 text-sm text-white">
          <code>{`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`}</code>
        </pre>
        <p>
          Хук <strong>useMemo</strong> кэширует (сохраняет) результат вычислений
          и пересчитывает его только при изменении зависимостей.
        </p>
        <ul className="mb-2 list-inside list-disc">
          <li>
            <code>computeExpensiveValue(a, b)</code> — функция, результат
            которой кэшируется
          </li>
          <li>
            <code>[a, b]</code> — зависимости: при их изменении вычисление
            повторится
          </li>
          <li>
            <code>memoizedValue</code> — мемоизированное значение, сохраняющееся
            до изменения зависимостей a и b.
          </li>
        </ul>
        <p>
          <strong>Когда использовать:</strong>
        </p>
        <ul className="mb-2 list-inside list-disc">
          <li>
            Ресурсоёмкие вычисления, не требующие повторов при каждом ререндере
          </li>
          <li>
            Передача колбэков в дочерние компоненты (обычно вместе с
            useCallback)
          </li>
          <li>
            Функции внутри <code>.map()</code>, которые не должны
            пересоздаваться на каждый рендер
          </li>
        </ul>
        <p>
          <strong>Важно:</strong>
        </p>
        <ul className="mb-2 list-inside list-disc">
          <li>кэшируется результат функции, а не сама функция</li>
          <li>
            <code>useMemo</code> не ускоряет вычисления, а лишь предотвращает
            лишние пересчёты
          </li>
          <li>
            не применять <code>useMemo</code> для быстрых вычислений — нет
            смысла.
          </li>
        </ul>
        <p>
          <strong>Применение:</strong>
        </p>
        <ul className="mb-4 list-inside list-disc">
          <li>Математические расчёты (формулы, сложные операции)</li>
          <li>Фильтрация/сортировка данных</li>
          <li>Форматирование данных (даты, валюты, числа)</li>
          <li>Генерация новых объектов/массивов</li>
          <li>Объединение или группировка данных</li>
          <li>Работа с графиками и диаграммами</li>
          <li>Парсинг и обработка строк (JSON, XML)</li>
          <li>
            Оптимизация зависимостей в хуках (<code>useEffect</code>,{' '}
            <code>useCallback</code>)
          </li>
        </ul>
        <hr />
        <h3 className="mb-1 text-xl font-bold">
          Примеры применения в приложении
        </h3>
        <p>
          <strong>useRef</strong> сохраняет ссылки на DOM-элемент{' '}
          <code>&lt;iframe&gt;</code> (<code>iframeRef</code>) и на экземпляр
          YouTube-плеера (<code>playerRef</code>), чтобы напрямую управлять
          видео (воспроизведением и паузой) без повторных ререндеров компонента.
        </p>
        <p>
          <strong>useEffect</strong> подключает YouTube API при первом рендере
          компонента и создаёт экземпляр плеера, устанавливая для него
          обработчики событий — для запуска <code>play</code>, остановки{' '}
          <code>pause</code> видео и отслеживания окончания воспроизведения.
        </p>
        <p>
          <strong>useMemo</strong> мемоизирует (сохраняет) объект{' '}
          <code>&#123; theme, toggleTheme &#125;</code> в{' '}
          <code>ThemeProvider</code>, предотвращая создание нового объекта при
          каждом рендере. Это оптимизирует производительность, уменьшая лишние
          перерисовки компонента <code>Header</code>, который использует{' '}
          <code>useTheme</code> для управления темой.
        </p>
      </SectionCourse>
      <SectionCourse title="Redux в Book Library / Redux in the Book Library app ">
        <p className="mb-3">
          Приложение <strong>Book Library App</strong> развёрнуто: фронтенд — на
          Vercel, бэкенд — на Render. При первом API-запросе к бекенду
          произойдет задержка в 20-30сек., так как на бесплатном тарифе Render
          сервер "засыпает" (spins down) после периода неактивности. Последующие
          запросы обычно выполнятся быстрее, исходя из настроек(2сек.).
        </p>
        <p className="mb-3 text-xl font-bold">
          <a
            href="https://book-library-app-rouge.vercel.app/"
            target="_blank"
            rel="noopener noreferrer" //для защиты от атак при взаимодействии с новой вкладкой.
            class="text-blue-800 hover:text-blue-600"
          >
            Додаток Book Library / Book Library App / Приложение Book Library
          </a>
        </p>

        <h3 className="mb-1 text-xl font-bold">Описание приложения</h3>
        <p className="mb-1 text-xl">Приложение позволяет:</p>
        <ul className="mb-1 list-inside list-disc">
          <li>Добавлять книги: вручную, случайным образом или через API;</li>
          <li>Удалять книги и помечать их как избранные;</li>
          <li>
            Фильтровать список книг по названию, автору и признаку "избранное";
          </li>
          <li>
            Отображать ошибки (незаполненные поля, ошибка сети) и статус
            загрузки при работе с API.
          </li>
        </ul>
        <p className="mb-2">
          Все состояния (книги, фильтры, ошибки, статус загрузки) реализованы с
          использованием <strong>Redux</strong>.
        </p>
        <h3 className="mb-1 text-xl font-bold">
          Краткое описание использование Redux в приложении
        </h3>
        <p>
          В приложении Book Library хранилище <code>store</code> включает три
          среза состояний:
        </p>
        <ul class="list-disc pl-5">
          <li>
            <code>books</code> - здесь хранятся данные о книгах: список, статус
            загрузки,
          </li>
          <li>
            <code>filter</code> - здесь хранятся данные о текущих фильтрах(по
            названию, автору, избранным),
          </li>
          <li>
            <code>error</code> - здесь хранятся сообщения об ошибках.
          </li>
        </ul>
        <p>
          <code>reducer</code> - чистая функция, которая изменяет
          соответствующую часть состояния.
        </p>
        <p>
          <strong>BookForm, BookList, Error, Filter</strong> - компоненты,
          которые передают <code>actions</code>(действия) редюсерам с помощью{' '}
          <code>useDispatch</code>.
        </p>
        <p>
          Редюсеры создают новые состояния на основе полученных{' '}
          <code>actions</code> в <code>store</code>(в соответствующем слайсе).
        </p>
        <p>
          Эти же компоненты получают новые данные соответствующего состояния с
          помощью <code>useSelector</code>, запрашивая их у <code>store</code>.
        </p>
        <p>
          API-запросы реализуются с помощью <code>createAsyncThunk</code> и
          обрабатываются в <code>extraReducers</code>. В приложении
          thunk-функция делает запрос и сама вызывает <code>dispatch</code>,
          чтобы сохранить данные или показать ошибку.
        </p>
        <p className="mb-2">
          Компоненты взаимодействуют с состоянием через селекторы и действия, не
          зная внутренней структуры хранилища.
        </p>
        <h3 class="text-xl font-bold">
          Структура срезов (slices) в Redux Toolkit
        </h3>
        <p>
          Каждый <code>slice</code> (например, <code>booksSlice</code>) обычно
          организован по следующей схеме:
        </p>
        <ol className="mb-2 list-decimal pl-5">
          <li>
            <strong>Импорты</strong>
            <p>
              <code>createSlice</code>, <code>createAsyncThunk</code> из{' '}
              <code>@reduxjs/toolkit</code>, а также утилиты, API-функции,
              константы и т.п.
            </p>
          </li>
          <li>
            <strong>
              Начальное состояние (<code>initialState</code>)
            </strong>
            <p>Указываем объект с начальными значениями состояния</p>
          </li>
          <li>
            <strong>
              Синхронные редьюсеры (<code>reducers</code>)
            </strong>
            <p>
              Обрабатывают простые действия(<code>addBook</code>,{' '}
              <code>deleteBook</code>…)
            </p>
          </li>
          <li>
            <strong>
              Асинхронные редьюсеры (<code>extraReducers</code>)
            </strong>
            <p>
              Обрабатывают <code>createAsyncThunk</code> (например, API-запросы)
            </p>
          </li>
          <li>
            <strong>
              Экспорт <code>reducer</code> по умолчанию
            </strong>
            <p>
              Для подключения в <code>store</code>
            </p>
          </li>
          <li>
            <strong>
              Экспорт <code>actions</code>-функций
            </strong>
            <p>
              Извлекаем из <code>slice.actions</code> нужные действия для
              использования в компонентах
            </p>
            <p>
              <strong>
                Определили → экспортировали → импортировали → отправили
              </strong>
            </p>
          </li>
          <li>
            <strong>
              Экспорт <code>selectors</code>
            </strong>
            <p>
              Функции для доступа к нужным частям состояния, которые компоненты
              используют через <code>useSelector</code> для подписки на
              изменения
            </p>
          </li>
        </ol>
        <h3 class="text-xl font-bold">
          Обзор структуры Redux в Book Library App
        </h3>
        <h3 class="text-xl font-semibold">BookForm</h3>
        <p>
          <strong>
            Отправляет <code>actions</code>:
          </strong>
        </p>
        <ul class="list-disc pl-5">
          <li>
            <code>addBook</code> → <code>booksSlice</code>
          </li>
          <li>
            <code>fetchBook</code> → <code>booksSlice</code> (
            <code>extraReducers</code>, <code>thunk</code>)
          </li>
          <li>
            <code>setError</code> → <code>errorSlice</code>
          </li>
        </ul>
        <p>
          <strong>Подписан на состояния:</strong>
        </p>
        <ul class="list-disc pl-5">
          <li>
            <code>selectIsLoadingViaAPI</code> → <code>booksSlice</code>{' '}
            (Loading Book… и вращающийся spiner)
          </li>
        </ul>
        <h3 class="text-xl font-semibold">BookList</h3>
        <p>
          <strong>
            Отправляет <code>actions</code>:
          </strong>
        </p>
        <ul class="list-disc pl-5">
          <li>
            <code>deleteBook</code> → <code>booksSlice</code>
          </li>
          <li>
            <code>toggleFavorite</code> → <code>booksSlice</code>
          </li>
        </ul>
        <p>
          <strong>Подписан на состояния:</strong>
        </p>
        <ul class="list-disc pl-5">
          <li>
            <code>selectTitleFilter</code> → <code>filterSlice</code>
          </li>
          <li>
            <code>selectAuthorFilter</code> → <code>filterSlice</code>
          </li>
          <li>
            <code>selectOnlyFavoriteFilter</code> → <code>filterSlice</code>{' '}
            (фильтрация избранных)
          </li>
        </ul>
        <h3 class="text-xl font-semibold">Filter</h3>
        <p>
          <strong>
            Отправляет <code>actions</code>:
          </strong>
        </p>
        <ul class="list-disc pl-5">
          <li>
            <code>setTitleFilter</code> → <code>filterSlice</code>
          </li>
          <li>
            <code>setAuthorFilter</code> → <code>filterSlice</code>
          </li>
          <li>
            <code>setOnlyFavoriteFilter</code> → <code>filterSlice</code>
          </li>
          <li>
            <code>resetFilters</code> → <code>filterSlice</code>
          </li>
        </ul>
        <p>
          <strong>Подписан на состояния:</strong>
        </p>
        <ul class="list-disc pl-5">
          <li>
            <code>selectTitleFilter</code> → <code>filterSlice</code>
          </li>
          <li>
            <code>selectAuthorFilter</code> → <code>filterSlice</code>
          </li>
          <li>
            <code>selectOnlyFavoriteFilter</code> → <code>filterSlice</code>
          </li>
        </ul>
        <h3 class="text-xl font-semibold">Error</h3>
        <p>
          <strong>
            Отправляет <code>actions</code>:
          </strong>
        </p>
        <ul class="list-disc pl-5">
          <li>
            <code>clearError</code> → <code>errorSlice</code>
          </li>
        </ul>
        <p>
          <strong>Подписан на состояния:</strong>
        </p>
        <ul class="mb-2 list-disc pl-5">
          <li>
            <code>selectErrorMessage</code> → <code>errorSlice</code>{' '}
            (отображает <code>react-toastify</code> уведомления)
          </li>
        </ul>
        <hr />
        <p>
          <strong>React-Redux</strong> — это библиотека, интегрирующая{' '}
          <code>Redux</code> в <code>React</code> для работы с глобальным
          состоянием через <code>store</code> и хуки - <code>useSelector</code>{' '}
          и <code>useDispatch</code>.
        </p>
        <p>
          Используем npm-пакеты <code>@reduxjs/toolkit</code> и{' '}
          <code>react-redux</code> для управления состоянием.
        </p>
        <p className="mb-2">
          Созданное хранилище <code>store</code> подключаем к корневому файлу{' '}
          <code>main.jsx</code>, обернув компонент <code>{'<App/>'}</code> в
          провайдер <code>{'<Provider store={store}>'}.</code>
        </p>

        <p className="mb-1">
          <strong>Redux Toolkit</strong> включает в себя:
        </p>
        <ul className="mb-2 list-inside list-disc">
          <li>
            <code>createSlice</code> — создает слайсы; слайсы — это части
            глобального состояния, где редьюсеры управляют их изменениями.
            Слайсы могут состоять из нескольких значений, объединенных по
            смыслу;
          </li>
          <li>
            <code>createAsyncThunk</code> — создает thunk-функции для
            асинхронных операций на уровне <code>store</code>;
          </li>
          <li>
            библиотека Immer встроена в <code>createSlice</code> и упрощает
            работу с иммутабельным состоянием;
          </li>
        </ul>
        <p className="mb-2">
          <span className="text-l font-semibold">Иммутабельное состояние</span>{' '}
          — это когда данные нельзя менять напрямую (например, присвоить
          свойству объекта новое значение). Вместо этого создается новая копия
          данных с нужными изменениями, т.к. объекты — ссылочный тип и изменение
          свойства меняет оригинал.
        </p>
        <hr />

        <h3 className="mb-2 text-xl font-semibold">
          Применение библиотеки <strong>Immer</strong> в{' '}
          <strong>React-Redux</strong>
        </h3>
        <p className="mb-2 text-xl font-semibold">Исходное состояние</p>
        <p className="mb-2 text-2xl font-bold">↓</p>
        <p className="mb-2">
          ( <pan className="text-l font-bold">Immer:</pan> создаётся копия
          состояния )
        </p>
        <p className="mb-2">( → вносятся изменения в копию )</p>
        <p className="mb-2">( → создаётся новое состояние )</p>
        <p className="mb-2 text-2xl font-bold">↓</p>
        <p className="mb-2 text-xl font-semibold">Новое состояние</p>
        <p className="text-l mb-2 font-semibold">
          В скобках — скрытая внутренняя работа библиотеки Immer
        </p>
        <p className="mb-2">
          * т.е. при применении библиотеки{' '}
          <span className="text-l font-semibold">Immer</span> функция-reducer не
          использует <code>return</code> и spread-оператор (с точки зрения
          синтаксиса), что делает код короче и читабельнее.
        </p>
        <hr />
        <h3 className="mb-2 text-xl font-semibold">
          Применение <strong>thunk-функций</strong>
        </h3>
        <p className="mb-2">
          В <code>Redux store</code> можно выполнять асинхронные операции через
          thunk'и, не помещая их в компоненты.
        </p>
        <p className="text-l mb-1 font-semibold">
          Почему предпочтительнее в <code>store</code>:
        </p>
        <ul className="mb-2 list-inside list-disc">
          <li>компоненты чище — только показывают данные;</li>
          <li>
            вся логика в одном месте — проще управлять загрузкой, ошибками и
            результатом.
          </li>
        </ul>
        <p className="mb-1">
          <strong>
            <code>redux-thunk</code>
          </strong>{' '}
          — это middleware (уже встроена в <code>Redux Toolkit</code>), которая
          позволяет работать с thunk-функциями и управляет асинхронными
          состояниями (<code>pending</code>, <code>fulfilled</code>,{' '}
          <code>rejected</code>).
        </p>

        <p className="mb-1">
          <strong>
            <code>redux-thunk</code>
          </strong>{' '}
          — проверяет тип действия и, если это функция, вызывает её с
          аргументами:
        </p>
        <ul className="mb-1 list-inside list-disc">
          <li>
            <strong>dispatch</strong> — для отправки других действий;
          </li>
          <li>
            <strong>getState</strong> — для получения текущего состояния.
          </li>
        </ul>
        <p className="mb-2 italic">
          * <strong>thunk</strong>-функция принимает эти аргументы автоматически
          (благодаря{' '}
          <strong>
            <code>redux-thunk</code>
          </strong>{' '}
          middleware), а не «указываются» в явном виде.
        </p>
        <p className="mb-2">
          <strong>thunk</strong>-функция запускает асинхронные операции
          (например, <code>fetch</code>, <code>axios</code>)
        </p>
        <p className="text-l mb-1 font-semibold">Может отправлять действия:</p>
        <ul className="mb-2 list-inside list-disc">
          <li>До загрузки (например, сброс старых данных);</li>
          <li>Во время (например, показать спиннер);</li>
          <li>После (например, сохранить результат или обработать ошибку).</li>
        </ul>
        <p className="text-l mb-1 font-semibold">
          Благодаря пакету <code>Redux Toolkit</code>:
        </p>
        <ul className="mb-2 list-inside list-disc">
          <li>
            <code>createAsyncThunk</code> автоматически создает три состояния:{' '}
            <code>pending</code>, <code>fulfilled</code> и <code>rejected</code>
            .
          </li>
          <li>
            Эти состояния обрабатываются через <code>extraReducers</code> в{' '}
            <code>createSlice</code> (а не в <code>reducers</code>).
          </li>
        </ul>
        <p className="text-l mb-1 font-semibold">
          Внутри <code>extraReducers</code> можно также вручную добавлять
          дополнительные действия, например:
        </p>
        <ul className="mb-2 list-inside list-disc">
          <li>обработку ошибок;</li>
          <li>выполнение побочной логики перед изменением состояния.</li>
        </ul>
      </SectionCourse>
    </div>
  )
}

export default ReactSections
