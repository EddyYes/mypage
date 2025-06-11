import SectionCourse from './SectionCourse'

const JavaScriptSections = () => {
  return (
    <div className="space-y-4">
      <SectionCourse
        title="
Зміст курсу JS / JS Course Contents / Содержание курса JS"
      >
        <p>
          <a
            href="https://docs.google.com/document/d/1Iascelwj5JePzpoF4e6AkhpPnOA-NBDXRO9byRaYPrc/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer" //для защиты от атак при взаимодействии с новой вкладкой.
            className="font-bold text-blue-900 hover:text-blue-700"
          >
            переглянути зміст / view contents / просмотреть содержание
          </a>
        </p>
      </SectionCourse>

      <SectionCourse title="Лексичне оточення / Lexical environment / Лексическое окружение">
        <p>
          <span className="font-bold">Лексическое окружение</span>— внутренняя
          структура JS с идентификаторами, их значениями и ссылкой на внешнее
          окружение (<code>[[Environment]]</code>) - “мостом” к переменным
          снаружи.
        </p>
        <p>
          <span className="font-bold">Идентификаторы</span> — это любые имена,
          которые разработчик задаёт для обозначения сущностей в коде, будь то
          переменная, функция, параметр, класс.
        </p>
        <p>
          Поиск переменной: от внутреннего лексического окружения → к внешнему →
          до глобального. Глобальное → за ним → <code>null</code>.
        </p>
        <p>Лексическое окружение может быть глобальным, функции или блока. </p>
        <p>Внутреннее лексическое окружение функции включает: </p>
        <ul className="mb-1 list-inside list-disc">
          <li>имя функции,</li>
          <li>параметры,</li>
          <li>локальные переменные, объявленные внутри функции,</li>
          <li>ссылку на внешнее лексическое окружение.</li>
        </ul>
      </SectionCourse>

      <SectionCourse title="Тимчасова мертва зона / Temporal Dead Zone / Временная мертвая зона">
        <p>
          <strong>Temporal Dead Zone (TDZ)</strong> — это период в лексическом
          окружении, когда недоступны переменные, объявленные с помощью{' '}
          <code>let</code> и <code>const</code> до их инициализации, вызывая{' '}
          <code>ReferenceError</code>.
        </p>
        <p>В JavaScript две фазы выполнения кода:</p>
        <ul className="mb-2 list-inside list-disc">
          <li>
            <strong>Фаза создания:</strong> Движок регистрирует переменные{' '}
            <code>let</code> и <code>const</code> в лексическом окружении,
            помещая их в состояние <code>"uninitialized"</code> — начинается
            TDZ.
          </li>
          <li>
            <strong>Фаза выполнения:</strong> Обращение к <code>let</code>/
            <code>const</code> до строки инициализации вызывает{' '}
            <code>ReferenceError</code>.
          </li>
        </ul>
        <pre className="rounded bg-gray-800 p-4 text-sm text-white">
          <code>{`{
  console.log(myLet); // ReferenceError
  let myLet = 10;     // инициализация переменной
  console.log(myLet); // 10
}`}</code>
        </pre>
      </SectionCourse>

      <SectionCourse title="Підняття / Hoisting / Подъём">
        <p>
          <strong>Hoisting</strong> — это механизм в JavaScript, при котором
          объявления <code>var</code> и <code>function</code> поднимаются вверх
          области видимости, т.е. движок JavaScript на этапе компиляции "видит"
          эти объявления заранее — ещё до выполнения кода и регистрирует их в
          памяти. Переменные <code>var</code> инициализируются как{' '}
          <code>undefined</code>, а функции(Function Declaration) — полностью
          (включая тело).
        </p>
        <p>
          <code>let</code> и <code>const</code> попадают в <strong>TDZ</strong>{' '}
          → <code>"uninitialized"</code> → <code>ReferenceError</code>.
        </p>
        <p>
          Функции(Function Declaration) и переменные обрабатываются JavaScript
          по-разному из-за механизмов <strong>hoisting</strong> и{' '}
          <strong>TDZ</strong>.
        </p>
        <p>В JavaScript две фазы выполнения кода:</p>
        <p>
          <strong>Фаза создания</strong>
        </p>
        <ul className="mb-2 list-inside list-disc">
          <li>
            <code>var</code> поднимается и инициализируется как{' '}
            <code>undefined</code>.
          </li>
          <li>Функции(Function Declaration) поднимаются полностью.</li>
        </ul>
        <p>
          <strong>Фаза выполнения</strong>(код выполняется построчно)
        </p>
        <ul className="mb-2 list-inside list-disc">
          <li>
            <code>console.log(myVar)</code> → выводит <code>undefined</code>,
            так как переменная уже существует, но ещё не инициализирована.
          </li>
          <li>
            После строки <code>myVar = 7</code> → переменная инициализируется.
          </li>
          <li>
            После строки <code>myFunction()</code> → функция выполнится до
            объявления.
          </li>
        </ul>
        <pre className="mb-2 rounded bg-gray-800 p-4 text-sm text-white">
          <code>{`console.log(myVar); // undefined
var myVar = 7;        // инициализация переменной
console.log(myVar);   // 7

myFunction();         // Работает, выводит "Hello"
function myFunction() {
  console.log("Hello");
}`}</code>
        </pre>
        <p>
          <code>var</code> игнорирует блочную область видимости: вне функций
          становится свойством глобального объекта (<code>window</code>/
          <code>global</code>), внутри функций — локальной.
        </p>
      </SectionCourse>

      <SectionCourse title="Замикання /  Closure / Замыкание">
        <p className="mb-2">
          <strong>Замыкание</strong> — это когда внутренняя функция сохраняет
          доступ к переменным из своего внешнего окружения и может использовать
          их после завершения внешней функции. Замыкание позволяет сохранять и
          управлять состоянием через доступ внутренней функции к внешним
          переменным.
        </p>
        <pre className="mb-3 rounded bg-gray-800 p-4 text-sm text-white">
          <code>{`function alpha() {
  let beta = 0; 
  function gamma() { 
    beta++; 
    return beta; 
  }
  return gamma; 

const delta = alpha(); 
console.log(delta()); 
console.log(delta()); `}</code>
        </pre>
        <hr />
        <p>
          <code>let beta = 0;</code> - локальная переменная beta внутри внешней
          функции alpha
        </p>
        <p>
          <code>function gamma() &#123;...&#125;</code> - внутренняя функция
          gamma
        </p>
        <p>
          <code>beta++;</code> - gamma имеет доступ к beta из внешней функции и
          её изменяет
        </p>
        <p>
          <code>return beta;</code> - возвращает текущее значение beta
        </p>
        <p>
          <code>return gamma;</code> - возвращаем саму функцию gamma (не её
          результат). Это создано замыкание (gamma запомнит beta)
        </p>
        <p>
          <code>const delta = alpha();</code> - вызов alpha создаёт новую
          область видимости и возвращает gamma
        </p>
        <p>
          <code>console.log(delta());</code> - 1. при первом вызове beta
          увеличивается с 0 до 1
        </p>
        <p>
          <code>console.log(delta());</code> - 2. beta сохраняется между
          вызовами
        </p>
        <hr className="mb-2" />
        <ul className="mb-2 list-inside list-decimal">
          <li>Внешняя функция содержит внутреннюю функцию.</li>
          <li>
            Внутренняя функция имеет доступ к переменным внешней функции или к
            её параметрам - для работы с ними.
          </li>
          <li>
            Результат вызова внешней функции можно сохранить в переменной и
            вызывать её (т.к. это функция), чтобы данные сохранялись между
            вызовами.
          </li>
        </ul>
        <p>Для классического замыкания достаточно:</p>
        <ul className="mb-1 list-inside list-disc">
          <li>
            Функции, использующей переменные из внешнего контекста (внешняя
            функция).
          </li>
          <li>
            Сохранения ссылки /return внутренней функции/ на это окружение в
            момент создания внутренней функции(т.е.когда выполняется код внешней
            функции).
          </li>
        </ul>
      </SectionCourse>

      <SectionCourse title="Рекурсія / Recursion / Рекурсия">
        <strong>Рекурсия </strong>— это когда функция вызывает саму себя для
        решения задачи, разбивая её на меньшие подзадачи.
        <p>Главное в рекурсии:</p>
        <ul className="mb-2 list-inside list-disc">
          <li>
            <strong>Базовый случай </strong> — это условие, при котором функция
            перестаёт вызывать саму себя, чтобы остановить бесконечный цикл.
          </li>
          <li>
            <strong>Рекурсивный случай</strong> — функция вызывает себя с
            изменённым аргументом.
          </li>
          <li>
            <strong>Контроль глубины</strong> — это способ остановить рекурсию
            вовремя: базовый случай и изменение аргумента предотвращают
            бесконечную рекурсию.
          </li>
        </ul>
        <pre className="rounded bg-gray-800 p-4 text-sm text-white">
          <code>{`function countdown(n) {
  if (n < 1) return; // Базовый случай
  console.log(n); // Выводим число
  countdown(n - 1); // Рекурсивный вызов
}
countdown(5); // Вывод: 5, 4, 3, 2, 1
`}</code>
        </pre>
      </SectionCourse>
    </div>
  )
}

export default JavaScriptSections
