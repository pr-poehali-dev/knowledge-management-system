export const employees = [
  {
    name: "Иванов И.И.",
    department: "Отдел IT",
    position: "Разработчик",
    score: 4.2,
    status: "green",
    tests: 15,
    avgScore: 85,
  },
  {
    name: "Петрова А.С.",
    department: "Отдел ФН",
    position: "Бухгалтер",
    score: 3.8,
    status: "yellow",
    tests: 12,
    avgScore: 78,
  },
  {
    name: "Сидоров В.М.",
    department: "ЦТО",
    position: "HR-специалист",
    score: 4.5,
    status: "green",
    tests: 18,
    avgScore: 92,
  },
  {
    name: "Козлова Е.А.",
    department: "Отдел маркетинга",
    position: "Маркетолог",
    score: 3.2,
    status: "red",
    tests: 8,
    avgScore: 65,
  },
  {
    name: "Морозов Д.С.",
    department: "Тех. поддержка",
    position: "Системный администратор",
    score: 4.0,
    status: "green",
    tests: 14,
    avgScore: 82,
  },
  {
    name: "Лебедев А.Н.",
    department: "Сервис",
    position: "Сервис-инженер",
    score: 4.1,
    status: "green",
    tests: 16,
    avgScore: 87,
  },
  {
    name: "Новикова О.П.",
    department: "Крупные клиенты",
    position: "Менеджер",
    score: 3.9,
    status: "green",
    tests: 13,
    avgScore: 84,
  },
  {
    name: "Кузнецов М.И.",
    department: "Партнерка",
    position: "Партнерский менеджер",
    score: 4.3,
    status: "green",
    tests: 19,
    avgScore: 89,
  },
  {
    name: "Волкова Л.В.",
    department: "Отдел заявок",
    position: "Оператор",
    score: 3.7,
    status: "yellow",
    tests: 11,
    avgScore: 76,
  },
  {
    name: "Зайцев П.Р.",
    department: "HoReCa",
    position: "Менеджер по работе с HoReCa",
    score: 4.4,
    status: "green",
    tests: 20,
    avgScore: 91,
  },
  {
    name: "Орлова Н.С.",
    department: "Отдел Тинькофф",
    position: "Менеджер по работе с банком",
    score: 4.0,
    status: "green",
    tests: 17,
    avgScore: 83,
  },
  {
    name: "Попов Г.А.",
    department: "Логистика",
    position: "Логист",
    score: 3.6,
    status: "yellow",
    tests: 10,
    avgScore: 74,
  },
  {
    name: "Макарова Т.К.",
    department: "Отдел маркетплейсы",
    position: "Менеджер маркетплейсов",
    score: 4.2,
    status: "green",
    tests: 15,
    avgScore: 86,
  },
  {
    name: "Логинов Р.В.",
    department: "Отдел сопровождения",
    position: "Консультант",
    score: 3.8,
    status: "yellow",
    tests: 12,
    avgScore: 79,
  },
  {
    name: "Семенов К.Д.",
    department: "1С",
    position: "Программист 1С",
    score: 4.1,
    status: "green",
    tests: 18,
    avgScore: 88,
  },
  {
    name: "Титова Ю.А.",
    department: "Отдел ЦМ",
    position: "Специалист по ЦМ",
    score: 3.9,
    status: "green",
    tests: 14,
    avgScore: 81,
  },
];

export const testsData = [
  {
    id: "1",
    title: "Основы информационной безопасности",
    description:
      "Тест на знание основных принципов информационной безопасности",
    category: "Безопасность",
    difficulty: "medium",
    timeLimit: 30,
    department: "Все отделы",
    createdBy: "Администратор",
    createdAt: "2024-01-15",
    status: "published",
    totalAttempts: 45,
    averageScore: 78,
    questions: [
      {
        id: "1",
        question: "Что такое фишинг?",
        options: [
          "Вид рыбалки",
          "Мошенничество через поддельные сайты",
          "Антивирусная программа",
          "Тип шифрования",
        ],
        correctAnswer: 1,
        explanation:
          "Фишинг - это вид интернет-мошенничества, при котором злоумышленники используют поддельные сайты для кражи личных данных.",
      },
      {
        id: "2",
        question: "Какой пароль считается надежным?",
        options: ["123456", "password", "MyP@ssw0rd123!", "qwerty"],
        correctAnswer: 2,
        explanation:
          "Надежный пароль должен содержать большие и маленькие буквы, цифры и специальные символы.",
      },
      {
        id: "3",
        question: "Что нужно делать при получении подозрительного email?",
        options: [
          "Сразу открыть вложения",
          "Переслать коллегам",
          "Проверить отправителя и не открывать подозрительные ссылки",
          "Ответить на письмо",
        ],
        correctAnswer: 2,
        explanation:
          "При получении подозрительного email нужно всегда проверять отправителя и не открывать подозрительные ссылки или вложения.",
      },
    ],
  },
  {
    id: "2",
    title: "Работа с клиентами",
    description:
      "Тест на знание принципов работы с клиентами и клиентского сервиса",
    category: "Клиентский сервис",
    difficulty: "easy",
    timeLimit: 20,
    department: "Сервис",
    createdBy: "Преподаватель",
    createdAt: "2024-01-10",
    status: "published",
    totalAttempts: 23,
    averageScore: 85,
    questions: [
      {
        id: "1",
        question: "Как правильно приветствовать клиента?",
        options: [
          "Привет",
          "Добро пожаловать! Как дела?",
          "Здравствуйте! Чем могу помочь?",
          "Что нужно?",
        ],
        correctAnswer: 2,
        explanation:
          "Профессиональное приветствие должно быть вежливым и предлагать помощь.",
      },
      {
        id: "2",
        question: "Что делать, если не знаете ответ на вопрос клиента?",
        options: [
          'Сказать "не знаю"',
          "Придумать любой ответ",
          "Сказать, что найдете информацию и обязательно перезвоните",
          "Перевести на другого сотрудника",
        ],
        correctAnswer: 2,
        explanation: "Честность и обязательность - основа доверия клиентов.",
      },
    ],
  },
  {
    id: "3",
    title: "Работа с кассовым оборудованием",
    description:
      "Тест на знание принципов работы с ККТ и фискальными накопителями",
    category: "Технические знания",
    difficulty: "medium",
    timeLimit: 25,
    department: "Отдел ФН",
    createdBy: "Специалист ФН",
    createdAt: "2024-01-20",
    status: "published",
    totalAttempts: 18,
    averageScore: 72,
    questions: [
      {
        id: "1",
        question: "Что такое ФН в контексте ККТ?",
        options: [
          "Федеральный налог",
          "Фискальный накопитель",
          "Финансовый норматив",
          "Функциональный номер",
        ],
        correctAnswer: 1,
        explanation:
          "ФН - это фискальный накопитель, криптографическое средство защиты информации.",
      },
      {
        id: "2",
        question: "Как часто нужно передавать данные в ОФД?",
        options: [
          "Раз в месяц",
          "Раз в неделю",
          "Не позднее 30 дней",
          "Сразу после каждой операции",
        ],
        correctAnswer: 2,
        explanation:
          "Данные должны передаваться в ОФД не позднее 30 дней с момента формирования документа.",
      },
    ],
  },
  {
    id: "4",
    title: "Основы работы с 1С",
    description: "Тест на знание основных функций системы 1С",
    category: "Программное обеспечение",
    difficulty: "hard",
    timeLimit: 40,
    department: "1С",
    createdBy: "Ведущий программист",
    createdAt: "2024-01-25",
    status: "published",
    totalAttempts: 12,
    averageScore: 68,
    questions: [
      {
        id: "1",
        question: "Что такое конфигурация в 1С?",
        options: [
          "Настройки компьютера",
          "Набор метаданных, определяющих структуру базы данных",
          "Версия программы",
          "Тип лицензии",
        ],
        correctAnswer: 1,
        explanation:
          "Конфигурация - это набор метаданных, определяющих структуру информационной базы и алгоритмы работы системы.",
      },
      {
        id: "2",
        question: "Какой язык программирования используется в 1С?",
        options: ["JavaScript", "Python", "Встроенный язык 1С", "C++"],
        correctAnswer: 2,
        explanation:
          "1С:Предприятие использует собственный встроенный язык программирования.",
      },
    ],
  },
  {
    id: "5",
    title: "Логистика и доставка",
    description: "Тест на знание основ логистики и организации доставки",
    category: "Логистика",
    difficulty: "easy",
    timeLimit: 15,
    department: "Логистика",
    createdBy: "Менеджер логистики",
    createdAt: "2024-01-30",
    status: "published",
    totalAttempts: 8,
    averageScore: 82,
    questions: [
      {
        id: "1",
        question: 'Что означает термин "последняя миля" в логистике?',
        options: [
          "Последний километр маршрута",
          "Финальный этап доставки до получателя",
          "Самая дорогая часть доставки",
          "Последний день доставки",
        ],
        correctAnswer: 1,
        explanation:
          "Последняя миля - это финальный этап доставки товара от последнего звена логистической цепи до конечного получателя.",
      },
    ],
  },
];

export const knowledgeBase = [
  {
    id: 1,
    title: "Основы React",
    description: "Изучение основных концепций React для начинающих",
    category: "Программирование",
    difficulty: "Начинающий",
    duration: "2 часа",
    rating: 4.8,
    enrollments: 234,
  },
  {
    id: 2,
    title: "TypeScript для разработчиков",
    description: "Глубокое изучение TypeScript и его применение",
    category: "Программирование",
    difficulty: "Средний",
    duration: "3 часа",
    rating: 4.9,
    enrollments: 189,
  },
  {
    id: 3,
    title: "Корпоративная культура",
    description: "Основы корпоративной этики и взаимодействия",
    category: "Мягкие навыки",
    difficulty: "Начинающий",
    duration: "1 час",
    rating: 4.3,
    enrollments: 567,
  },
  {
    id: 4,
    title: "Управление проектами",
    description: "Методики эффективного управления проектами",
    category: "Менеджмент",
    difficulty: "Продвинутый",
    duration: "4 часа",
    rating: 4.7,
    enrollments: 123,
  },
  {
    id: 5,
    title: "Информационная безопасность",
    description: "Защита данных и информационная безопасность",
    category: "Безопасность",
    difficulty: "Средний",
    duration: "2.5 часа",
    rating: 4.6,
    enrollments: 345,
  },
  {
    id: 6,
    title: "Дизайн интерфейсов",
    description: "Принципы создания удобных пользовательских интерфейсов",
    category: "Дизайн",
    difficulty: "Средний",
    duration: "3.5 часа",
    rating: 4.5,
    enrollments: 278,
  },
];

export const chartData = [
  { month: "Янв", tests: 120, employees: 85 },
  { month: "Фев", tests: 135, employees: 88 },
  { month: "Мар", tests: 148, employees: 92 },
  { month: "Апр", tests: 162, employees: 95 },
  { month: "Май", tests: 178, employees: 98 },
  { month: "Июн", tests: 195, employees: 102 },
];

export const pieData = [
  { name: "Программирование", value: 35, color: "#3B82F6" },
  { name: "Дизайн", value: 25, color: "#10B981" },
  { name: "Маркетинг", value: 20, color: "#8B5CF6" },
  { name: "Менеджмент", value: 15, color: "#F59E0B" },
  { name: "Другое", value: 5, color: "#EF4444" },
];

export const chartConfig = {
  tests: {
    label: "Тесты",
    color: "#3B82F6",
  },
  employees: {
    label: "Сотрудники",
    color: "#10B981",
  },
};
