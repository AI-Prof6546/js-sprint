const modules = [
  {
    id: 'base',
    title: '1. Введение в JavaScript',
    goal: 'Понять, как устроен язык, как запускать код и как мыслить пошагово.',
    topics: [
      { id: 'intro-1', title: 'Что такое JavaScript и где он работает', desc: 'Роль JS в браузере, связь с HTML и CSS.', duration: '30 мин' },
      { id: 'intro-2', title: 'Подключение скриптов и strict mode', desc: 'script, defer, модульность, дисциплина кода.', duration: '35 мин' },
      { id: 'intro-3', title: 'Переменные, константы и базовые типы', desc: 'let, const, number, string, boolean, null, undefined.', duration: '60 мин' },
      { id: 'intro-4', title: 'Операторы и преобразование типов', desc: 'Сравнения, логика, truthy/falsy.', duration: '50 мин' },
      { id: 'intro-5', title: 'Условия и ветвление', desc: 'if, else, ternary, switch.', duration: '45 мин' }
    ],
    bullets: [
      'Пойми, чем отличается объявление переменной от присваивания.',
      'Научись предсказывать результат выражений до запуска кода.',
      'Закрепи truthy/falsy и строгое сравнение ===.'
    ]
  },
  {
    id: 'loops-functions',
    title: '2. Логика, циклы и функции',
    goal: 'Научиться разбивать задачи на шаги и оформлять решение через функции.',
    topics: [
      { id: 'logic-1', title: 'Циклы while и for', desc: 'Повторение действий, счётчики, границы.', duration: '60 мин' },
      { id: 'logic-2', title: 'break, continue, вложенные циклы', desc: 'Управление потоком выполнения.', duration: '40 мин' },
      { id: 'logic-3', title: 'Функции и параметры', desc: 'Повторное использование кода.', duration: '70 мин' },
      { id: 'logic-4', title: 'Function Expression и стрелочные функции', desc: 'Разные формы записи функций.', duration: '60 мин' },
      { id: 'logic-5', title: 'Область видимости и hoisting', desc: 'Где доступна переменная и почему это важно.', duration: '50 мин' }
    ],
    bullets: [
      'Пиши маленькие функции с одной ответственностью.',
      'Учись читать чужие циклы и находить ошибки в границах.',
      'Отдельно тренируй входные данные и возвращаемое значение.'
    ]
  },
  {
    id: 'data',
    title: '3. Структуры данных',
    goal: 'Уверенно работать с объектами, массивами, строками и числами.',
    topics: [
      { id: 'data-1', title: 'Объекты', desc: 'Ключи, свойства, доступ, перебор.', duration: '70 мин' },
      { id: 'data-2', title: 'Массивы и методы массивов', desc: 'push/pop, map/filter/reduce, поиск.', duration: '90 мин' },
      { id: 'data-3', title: 'Строки и числа', desc: 'Методы, округление, парсинг.', duration: '60 мин' },
      { id: 'data-4', title: 'Деструктуризация и rest/spread', desc: 'Удобная работа с данными.', duration: '50 мин' },
      { id: 'data-5', title: 'JSON и сериализация', desc: 'Подготовка к работе с сетью и API.', duration: '40 мин' }
    ],
    bullets: [
      'Разбери разницу между мутацией и созданием новой структуры.',
      'Отдельно натренируй map/filter/reduce на маленьких массивах.',
      'Используй объекты для структурированных данных, а массивы — для списков.'
    ]
  },
  {
    id: 'advanced-functions',
    title: '4. Продвинутые функции',
    goal: 'Понять внутреннюю механику функций и контекста выполнения.',
    topics: [
      { id: 'adv-1', title: 'Замыкания', desc: 'Функция помнит внешнее окружение.', duration: '80 мин' },
      { id: 'adv-2', title: 'Callback и функции высшего порядка', desc: 'Передача поведения через функции.', duration: '60 мин' },
      { id: 'adv-3', title: 'this, call, apply, bind', desc: 'Контекст вызова и его управление.', duration: '90 мин' },
      { id: 'adv-4', title: 'Рекурсия', desc: 'Когда задача естественно раскладывается на части.', duration: '50 мин' },
      { id: 'adv-5', title: 'Планирование: setTimeout и setInterval', desc: 'Подготовка к асинхронности.', duration: '45 мин' }
    ],
    bullets: [
      'Замыкания — ключ к пониманию приватного состояния и фабрик функций.',
      'this надо учить не по определениям, а по примерам вызова.',
      'Планировщики важны перед событиями и интерфейсами браузера.'
    ]
  },
  {
    id: 'oop-errors',
    title: '5. ООП, прототипы, классы, ошибки',
    goal: 'Понять объектную модель JavaScript и научиться безопасно обрабатывать сбои.',
    topics: [
      { id: 'oop-1', title: 'Прототипное наследование', desc: 'Как объекты делят поведение.', duration: '70 мин' },
      { id: 'oop-2', title: 'Классы и наследование', desc: 'class, extends, super.', duration: '70 мин' },
      { id: 'oop-3', title: 'Инкапсуляция и организация кода', desc: 'Как строить понятные сущности.', duration: '45 мин' },
      { id: 'oop-4', title: 'try..catch и Error', desc: 'Перехват ошибок и свои классы ошибок.', duration: '50 мин' }
    ],
    bullets: [
      'Учись выбирать между простым объектом, фабрикой и классом.',
      'Ошибки — это часть нормальной логики программы, а не только аварии.',
      'Понимание prototype помогает читать чужой код и внутренности JS.'
    ]
  },
  {
    id: 'async',
    title: '6. Асинхронность',
    goal: 'Научиться работать с задержками, запросами и последовательностью асинхронных действий.',
    topics: [
      { id: 'async-1', title: 'Event loop на интуитивном уровне', desc: 'Почему код не всегда идёт строго сверху вниз.', duration: '45 мин' },
      { id: 'async-2', title: 'Promise', desc: 'then, catch, finally и цепочки.', duration: '80 мин' },
      { id: 'async-3', title: 'async/await', desc: 'Понятная запись асинхронного кода.', duration: '60 мин' },
      { id: 'async-4', title: 'fetch и работа с API', desc: 'Запросы, JSON, статусы.', duration: '70 мин' }
    ],
    bullets: [
      'Пойми разницу между синхронным и асинхронным кодом на простых схемах.',
      'Сначала уверенно решай задачи на Promise, потом переходи к async/await.',
      'Научись оборачивать сетевые ошибки в понятные сообщения.'
    ]
  },
  {
    id: 'browser',
    title: '7. Браузер: документ, события, интерфейсы',
    goal: 'Перейти от чистого языка к реальным интерфейсам в браузере.',
    topics: [
      { id: 'dom-1', title: 'DOM-дерево и навигация по документу', desc: 'Как браузер представляет HTML.', duration: '75 мин' },
      { id: 'dom-2', title: 'Поиск и выбор элементов', desc: 'querySelector, closest, коллекции.', duration: '50 мин' },
      { id: 'dom-3', title: 'Изменение содержимого, атрибутов и классов', desc: 'textContent, innerHTML, classList, dataset.', duration: '75 мин' },
      { id: 'dom-4', title: 'Стили и размеры элементов', desc: 'style, computed styles, геометрия.', duration: '60 мин' },
      { id: 'dom-5', title: 'События и обработчики', desc: 'click, input, submit, removeEventListener.', duration: '80 мин' },
      { id: 'dom-6', title: 'Всплытие, погружение и делегирование', desc: 'Эффективная обработка событий.', duration: '70 мин' },
      { id: 'dom-7', title: 'Формы и управление пользовательским вводом', desc: 'value, checked, submit, validation.', duration: '65 мин' },
      { id: 'dom-8', title: 'Браузерные интерфейсы и основы UI-логики', desc: 'window, document, localStorage, простые интерактивные паттерны.', duration: '70 мин' }
    ],
    bullets: [
      'После этого блока ты сможешь собирать реальные мини-проекты в браузере.',
      'События нужно учить не в теории, а на кнопках, списках, формах и модалках.',
      'DOM + события = мост от языка к фронтенд-разработке.'
    ]
  }
];

const practiceTasks = [
  {
    level: 'База',
    title: 'Калькулятор возраста',
    desc: 'Закрепи переменные, числа, условия и функции.',
    steps: [
      'Создай функцию, которая принимает год рождения.',
      'Посчитай возраст относительно текущего года.',
      'Если возраст меньше 0 или слишком большой — верни сообщение об ошибке.'
    ],
    hint: 'Используй new Date().getFullYear() и обычный if.',
    check: 'Функция возвращает число для корректного года и понятное сообщение для некорректного.'
  },
  {
    level: 'База',
    title: 'Фильтр чётных чисел',
    desc: 'Практика массивов и методов.',
    steps: [
      'Есть массив чисел.',
      'Верни новый массив только с чётными числами.',
      'Затем посчитай их сумму.'
    ],
    hint: 'Сначала filter, потом reduce.',
    check: 'Не мутируешь исходный массив, решение читаемое и короткое.'
  },
  {
    level: 'Средний',
    title: 'Счётчик с замыканием',
    desc: 'Пойми, как функция хранит внутреннее состояние.',
    steps: [
      'Напиши функцию createCounter().',
      'Она должна возвращать другую функцию.',
      'При каждом вызове вложенная функция увеличивает счётчик на 1.'
    ],
    hint: 'Внешняя переменная остаётся доступной внутренней функции.',
    check: 'Каждый новый счётчик независим от других.'
  },
  {
    level: 'Средний',
    title: 'Карточки товаров и делегирование событий',
    desc: 'Практика DOM и работы с кликами.',
    steps: [
      'Создай список карточек товаров.',
      'Добавь одну общую обработку клика на контейнер.',
      'По кнопке внутри карточки удаляй нужный элемент.'
    ],
    hint: 'Используй event.target и closest.',
    check: 'Один обработчик управляет всеми карточками, новые карточки тоже работают.'
  },
  {
    level: 'Средний',
    title: 'Форма обратной связи',
    desc: 'Работа с submit, value и валидацией.',
    steps: [
      'Сделай форму с именем и email.',
      'Запрещай отправку, если поля пустые.',
      'Показывай сообщение об успехе без перезагрузки страницы.'
    ],
    hint: 'Нужны preventDefault(), trim() и проверка input.value.',
    check: 'Страница не перезагружается, ошибки понятны, успешное сообщение отображается.'
  },
  {
    level: 'Продвинутый',
    title: 'Мини todo с localStorage',
    desc: 'Связка массива, DOM, событий и браузерного интерфейса.',
    steps: [
      'Добавляй задачи через форму.',
      'Рендери список в DOM.',
      'Сохраняй задачи в localStorage и восстанавливай после перезагрузки.'
    ],
    hint: 'Используй JSON.stringify, JSON.parse и отдельную функцию render().',
    check: 'После обновления страницы задачи остаются, а интерфейс не ломается.'
  }
];

const roadmapGrid = document.getElementById('roadmapGrid');
const moduleAccordion = document.getElementById('moduleAccordion');
const practiceList = document.getElementById('practiceList');
const taskTitle = document.getElementById('taskTitle');
const taskDesc = document.getElementById('taskDesc');
const taskSteps = document.getElementById('taskSteps');
const taskHint = document.getElementById('taskHint');
const taskCheck = document.getElementById('taskCheck');
const taskLevel = document.getElementById('taskLevel');
const completedCount = document.getElementById('completedCount');
const totalCount = document.getElementById('totalCount');
const progressValue = document.getElementById('progressValue');
const progressBar = document.getElementById('progressBar');
const nextTopics = document.getElementById('nextTopics');
const resetProgress = document.getElementById('resetProgress');
const mainNav = document.getElementById('mainNav');
const menuToggle = document.getElementById('menuToggle');

const getAllTopics = () => modules.flatMap(module => module.topics);
const storageKey = 'js-sprint-progress';
const readProgress = () => JSON.parse(localStorage.getItem(storageKey) || '{}');
const writeProgress = (value) => localStorage.setItem(storageKey, JSON.stringify(value));

function renderRoadmap() {
  const progress = readProgress();
  roadmapGrid.innerHTML = modules.map(module => {
    const completedInModule = module.topics.filter(topic => progress[topic.id]).length;
    return `
      <article class="roadmap-card glass">
        <header>
          <div>
            <span class="eyebrow">Модуль</span>
            <h3>${module.title}</h3>
          </div>
          <span class="topic-tag">${completedInModule}/${module.topics.length}</span>
        </header>
        <p>${module.goal}</p>
        <div class="topic-list">
          ${module.topics.map(topic => `
            <label class="topic-item">
              <input type="checkbox" data-topic-id="${topic.id}" ${progress[topic.id] ? 'checked' : ''} />
              <div>
                <strong>${topic.title}</strong>
                <p>${topic.desc}</p>
              </div>
              <span class="topic-duration">${topic.duration}</span>
            </label>
          `).join('')}
        </div>
      </article>
    `;
  }).join('');
}

function renderModules() {
  moduleAccordion.innerHTML = modules.map((module, index) => `
    <article class="accordion-item ${index === 0 ? 'open' : ''}">
      <button class="accordion-trigger" type="button">
        <span>${module.title}</span>
        <span>${module.topics.length} тем</span>
      </button>
      <div class="accordion-content">
        <p>${module.goal}</p>
        <ul class="bullet-list">
          ${module.bullets.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.accordion-trigger').forEach(button => {
    button.addEventListener('click', () => {
      button.parentElement.classList.toggle('open');
    });
  });
}

function renderPractice() {
  practiceList.innerHTML = practiceTasks.map((task, index) => `
    <article class="practice-card ${index === 0 ? 'active' : ''}" data-index="${index}">
      <span class="topic-tag">${task.level}</span>
      <h3>${task.title}</h3>
      <p>${task.desc}</p>
    </article>
  `).join('');

  showTask(0);

  document.querySelectorAll('.practice-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.practice-card').forEach(item => item.classList.remove('active'));
      card.classList.add('active');
      showTask(Number(card.dataset.index));
    });
  });
}

function showTask(index) {
  const task = practiceTasks[index];
  taskLevel.textContent = task.level;
  taskTitle.textContent = task.title;
  taskDesc.textContent = task.desc;
  taskHint.textContent = task.hint;
  taskCheck.textContent = task.check;
  taskSteps.innerHTML = task.steps.map(step => `<li>${step}</li>`).join('');
}

function updateStats() {
  const allTopics = getAllTopics();
  const progress = readProgress();
  const done = allTopics.filter(topic => progress[topic.id]).length;
  const percent = Math.round((done / allTopics.length) * 100) || 0;

  completedCount.textContent = done;
  totalCount.textContent = allTopics.length;
  progressValue.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;

  const upcoming = allTopics.filter(topic => !progress[topic.id]).slice(0, 3);
  nextTopics.innerHTML = upcoming.length
    ? upcoming.map(topic => `
      <div class="next-topic">
        <div>
          <small>Следующая тема</small>
          <strong>${topic.title}</strong>
        </div>
        <span class="topic-duration">${topic.duration}</span>
      </div>
    `).join('')
    : `<div class="next-topic"><div><small>Готово</small><strong>Ты завершил весь маршрут до DOM и интерфейсов</strong></div><span>🔥</span></div>`;
}

function bindProgressEvents() {
  document.querySelectorAll('[data-topic-id]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const progress = readProgress();
      progress[checkbox.dataset.topicId] = checkbox.checked;
      writeProgress(progress);
      renderRoadmap();
      bindProgressEvents();
      updateStats();
    });
  });
}

resetProgress.addEventListener('click', () => {
  localStorage.removeItem(storageKey);
  renderRoadmap();
  bindProgressEvents();
  updateStats();
});

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

renderRoadmap();
renderModules();
renderPractice();
bindProgressEvents();
updateStats();
