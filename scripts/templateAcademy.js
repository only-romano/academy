/* template для приложения Academy */

const AcademyTemplate =
`<div id="menu-app">

  <div class="menu-level-1" v-if="level == 1">
    <button @click="setJS()"></button>
    <button @click="setJS(true)"></button>
  </div>


  <div class="menu-level-2-html" v-if="level == 2 && !js">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setFolder(1)"><img src="images/folders/base-html.svg">Основы <b class="marked-name">HTML</b></button>
    <button @click="setFolder(2)"><img src="images/folders/base-css.svg">Основы <b class="marked-name">CSS</b></button>
    <button @click="setFolder(3)"><img src="images/folders/layout.svg">Построение сеток</button>
    <button @click="setFolder(4)"><img src="images/folders/decoration.svg">Декоративные элементы</button>
    <button @click="setFolder(5)"><img src="images/folders/text.svg">Оформление текста</button>
    <button @click="setFolder(6)"><img src="images/folders/workshop.svg">Мастерские</button>
    <button @click="setFolder(7)"><img src="images/folders/svg.svg"><b class="marked-name">SVG</b> графика</button>
    <button @click="setFolder(8)"><img src="images/folders/dynamic.svg">Динамические эффекты</button>
    <button @click="setFolder(9)"><img src="images/folders/less.svg">Препроцессор <b class="marked-name">LESS</b></button>
    <button @click="setFolder(10)"><img src="images/folders/keksby.svg">Великий Кексби</button>
  </div>

  <div class="menu-level-2-js" v-if="level == 2 && js">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setFolder(11)"><img src="images/folders/base-js.svg">Основы <b class="marked-js">JavaScript</b></button>
    <button @click="setFolder(12)"><img src="images/folders/js-browser.svg"><b class="marked-js">JavaScript</b> в браузере</button>
  </div>


  <div class="menu-level-3-folder-1" v-if="level == 3 && folder == 1">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setCourse(1)"><img src="images/courses/base-html1.svg">Знакомство c <b class="marked-name">HTML</b></button>
    <button @click="setCourse(2)"><img src="images/courses/base-html2.svg">Структура <b class="marked-name">HTML</b>-документа</button>
    <button @click="setCourse(3)"><img src="images/courses/base-html3.svg">Разметка текста</button>
    <button @click="setCourse(4)"><img src="images/courses/base-html4.svg">Ссылки и изображения</button>
    <button @click="setCourse(5)"><img src="images/courses/base-html5.svg">Знакомство с таблицами</button>
    <button @click="setCourse(6)"><img src="images/courses/base-html6.svg">Знакомство с формами</button>
    <button @click="setCourse(7)"><img src="images/courses/base-html7.svg">Знакомство с <b class="marked-name">HTML5</b></button>
    <button @click="setCourse(8)"><img src="images/courses/base-html8.svg">Формы и <b class="marked-name">HTML5</b></button>
  </div>

  <div class="menu-level-3-folder-2" v-if="level == 3 && folder == 2">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setCourse(9)"><img src="images/courses/base-css1.svg">Знакомство с <b class="marked-name">CSS</b></button>
    <button @click="setCourse(10)"><img src="images/courses/base-css2.svg">Селекторы, часть 1</button>
    <button @click="setCourse(11)"><img src="images/courses/base-css3.svg">Наследование и каскадирование</button>
    <button @click="setCourse(12)"><img src="images/courses/base-css4.svg">Селекторы, часть 2</button>
    <button @click="setCourse(13)"><img src="images/courses/base-css5.svg">Селекторы, часть 3</button>
  </div>

  <div class="menu-level-3-folder-3" v-if="level == 3 && folder == 3">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setCourse(14)"><img src="images/courses/layout1.svg">Блочная модель документа</button>
    <button @click="setCourse(15)"><img src="images/courses/layout2.svg">Сетки</button>
    <button @click="setCourse(16)"><img src="images/courses/layout3.svg">Таблицы на <b class="marked-name">CSS</b></button>
    <button @click="setCourse(17)"><img src="images/courses/layout4.svg"><b class="marked-name">Флексбокс</b>, часть 1</button>
    <button @click="setCourse(18)"><img src="images/courses/layout5.svg"><b class="marked-name">Флексбокс</b>, часть 2</button>
    <button @click="setCourse(19)"><img src="images/courses/layout6.svg">Знакомство с <b class="marked-name">гридами</b></button>
  </div>

  <div class="menu-level-3-folder-4" v-if="level == 3 && folder == 4">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setCourse(20)"><img src="images/courses/decor1.svg">Позиционирование</button>
    <button @click="setCourse(21)"><img src="images/courses/decor2.svg">Фоны, часть 1</button>
    <button @click="setCourse(22)"><img src="images/courses/decor3.svg">Рамки и фоны, часть 2</button>
    <button @click="setCourse(23)"><img src="images/courses/decor4.svg">Игра теней</button>
    <button @click="setCourse(24)"><img src="images/courses/decor5.svg">Линейные градиенты</button>
    <button @click="setCourse(25)"><img src="images/courses/decor6.svg">Кекстаграм: Начало. <b class="marked-name">CSS</b>-фильтры</button>
  </div>

  <div class="menu-level-3-folder-5" v-if="level == 3 && folder == 5">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setCourse(26)"><img src="images/courses/text1.svg">Оформление текста, часть 1</button>
    <button @click="setCourse(27)"><img src="images/courses/text2.svg">Оформление текста, часть 2</button>
  </div>

  <div class="menu-level-3-folder-6" v-if="level == 3 && folder == 6">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setCourse(28)"><img src="images/courses/workshop1.svg">Мастерская: создаём меню</button>
    <button @click="setCourse(29)"><img src="images/courses/workshop2.svg">Мастерская: декоративные элементы</button>
    <button @click="setCourse(30)"><img src="images/courses/workshop3.svg">Мастерская: декоративные эффекты на <b class="marked-name">CSS3</b></button>
  </div>

  <div class="menu-level-3-folder-7" v-if="level == 3 && folder == 7">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setCourse(31)"><img src="images/courses/svg1.svg">Знакомство с <b class="marked-name">SVG</b></button>
    <button @click="setCourse(32)"><img src="images/courses/svg2.svg">Оформление <b class="marked-name">SVG</b>-фигур</button>
    <button @click="setCourse(33)"><img src="images/courses/svg3.svg">Размеры в <b class="marked-name">SVG</b></button>
  </div>

  <div class="menu-level-3-folder-8" v-if="level == 3 && folder == 8">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setCourse(34)"><img src="images/courses/dynamic1.svg">Двумерные трансформации</button>
    <button @click="setCourse(35)"><img src="images/courses/dynamic2.svg">Плавные переходы</button>
    <button @click="setCourse(36)"><img src="images/courses/dynamic3.svg">Анимация</button>
  </div>

  <div class="menu-level-3-folder-9" v-if="level == 3 && folder == 9">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setCourse(37)"><img src="images/courses/less1.svg">Знакомство с <b class="marked-name">LESS</b></button>
    <button @click="setCourse(38)"><img src="images/courses/less2.svg">Примеси в <b class="marked-name">LESS</b></button>
  </div>

  <div class="menu-level-3-folder-10" v-if="level == 3 && folder == 10">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS<img src="images/html5.png"></button>
    <button @click="setCourse(39)"><img src="images/courses/keksby1.png">Кексби. Знакомство</button>
    <button @click="setCourse(40)"><img src="images/courses/keksby2.svg">Кексби. Разметка, оформление текста</button>
    <button @click="setCourse(41)"><img src="images/courses/keksby3.svg">Кексби. Ссылки и изображения</button>
    <button @click="setCourse(42)"><img src="images/courses/keksby4.svg">Кексби. Таблицы</button>
    <button @click="setCourse(43)"><img src="images/courses/keksby5.svg">Кексби. Формы</button>
    <button @click="setCourse(44)"><img src="images/courses/keksby6.svg">Кексби. Промежуточное испытание</button>
    <button @click="setCourse(45)"><img src="images/courses/keksby7.svg">Кексби. Базовая стилизация</button>
    <button @click="setCourse(46)"><img src="images/courses/keksby8.svg">Кексби. Графика и оформление</button>
    <button @click="setCourse(47)"><img src="images/courses/keksby9.svg">Кексби. Сетки</button>
    <button @click="setCourse(48)"><img src="images/courses/keksby10.svg">Кексби. Четвертьфинал</button>
    <button @click="setCourse(49)"><img src="images/courses/keksby11.svg">Кексби. Полуфинал</button>
    <button @click="setCourse(50)"><img src="images/courses/keksby12.svg">Кексби. Финал</button>
  </div>

  <div class="menu-level-3-folder-11" v-if="level == 3 && folder == 11">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-js">JS</b><img src="images/js.png"></button>
    <button @click="setCourse(51)"><img src="images/courses/base-js1.svg">Знакомство с <b class="marked-js">JavaScript</b></button>
    <button @click="setCourse(52)"><img src="images/courses/base-js2.svg"><b class="marked-name">Условия</b></button>
    <button @click="setCourse(53)"><img src="images/courses/base-js3.svg"><b class="marked-name">Циклы</b></button>
    <button @click="setCourse(54)"><img src="images/courses/base-js4.svg"><b class="marked-name">Массивы</b></button>
    <button @click="setCourse(55)"><img src="images/courses/base-js5.svg"><b class="marked-name">Функции</b></button>
    <button @click="setCourse(56)"><img src="images/courses/base-js6.svg"><b class="marked-name">Объекты</b></button>
  </div>

  <div class="menu-level-3-folder-12" v-if="level == 3 && folder == 12">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-js">JS</b><img src="images/js.png"></button>
    <button @click="setCourse(57)"><img src="images/courses/browser-js1.svg">Знакомство с <b class="marked-js">JavaScript</b> в браузере</button>
    <button @click="setCourse(58)"><img src="images/courses/browser-js2.svg">Знакомство с <b class="marked-name">событиями</b></button>
    <button @click="setCourse(59)"><img src="images/courses/browser-js3.svg">Кекстаграм: Эпилог. <b class="marked-js">JavaScript</b></button>
  </div>


  <div class="menu-level-4-course-1" v-if="level == 4 && course == 1">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Основы <b class="marked-name">HTML</b>"<img src="images/folders/base-html.svg"></button>
    <button @click="setLesson(1)" data-lesson="lesson1"><img src="images/lesson-theory.png">Поехали!</button>
    <button @click="setLesson(2)" data-lesson="lesson2"><img src="images/lesson-theory.png"><b class="marked-name">CSS</b> в действии</button>
    <button @click="setLesson(3)" data-lesson="lesson3"><img src="images/lesson-theory.png">Закрепление</button>
    <button @click="setLesson(4)" data-lesson="lesson4"><img src="images/lesson-theory.png">Азы <b class="marked-name">HTML</b></button>
    <button @click="setLesson(5)" data-lesson="lesson5"><img src="images/lesson-theory.png">Одиночные <b class="marked-name">HTML</b>-теги</button>
    <button @click="setLesson(6)" data-lesson="lesson6"><img src="images/lesson-theory.png">Атрибуты <b class="marked-name">HTML</b>-тегов</button>
    <button @click="setLesson(7)" data-lesson="lesson7"><img src="images/lesson-theory.png">Ищем ошибки</button>
    <button @click="setLesson(8)" data-lesson="lesson8"><img src="images/lesson-theory.png">Азы <b class="marked-name">CSS</b></button>
    <button @click="setLesson(9)" data-lesson="lesson9"><img src="images/lesson-theory.png">Другие способы подключения <b class="marked-name">CSS</b></button>
    <button @click="setLesson(10)" data-lesson="lesson10"><img src="images/lesson-theory.png">Селекторы в <b class="marked-name">CSS</b></button>
    <button @click="setLesson(11)" data-lesson="lesson11"><img src="images/lesson-theory.png">Классы в <b class="marked-name">CSS</b></button>
    <button @click="setLesson(12)" data-lesson="lesson12"><img src="images/lesson-theory.png">Свойства и значения <b class="marked-name">CSS</b></button>
    <button @click="setLesson(13)" data-lesson="lesson13"><img src="images/lesson-theory.png">Работа над ошибками</button>
    <button @click="setLesson(14)" data-lesson="lesson14"><img src="images/lesson-test.png">Первое испытание</button>
  </div>

  <div class="menu-level-4-course-2" v-if="level == 4 && course == 2">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Основы <b class="marked-name">HTML</b>"<img src="images/folders/base-html.svg"></button>
    <button @click="setLesson(15)" data-lesson="lesson15"><img src="images/lesson-theory.png">С чего начинается <b class="marked-name">HTML</b></button>
    <button @click="setLesson(16)" data-lesson="lesson16"><img src="images/lesson-theory.png">Простейшая <b class="marked-name">HTML</b>-страница</button>
    <button @click="setLesson(17)" data-lesson="lesson17"><img src="images/lesson-theory.png">Заголовок <b class="marked-name">HTML</b>-страницы</button>
    <button @click="setLesson(18)" data-lesson="lesson18"><img src="images/lesson-theory.png">Кодировка <b class="marked-name">HTML</b>-cтраницы</button>
    <button @click="setLesson(19)" data-lesson="lesson19"><img src="images/lesson-theory.png">Ключевые слова</button>
    <button @click="setLesson(20)" data-lesson="lesson20"><img src="images/lesson-theory.png">Описание содержания страницы</button>
    <button @click="setLesson(21)" data-lesson="lesson21"><img src="images/lesson-theory.png"><b class="marked-name">HTML</b>-комментарии</button>
    <button @click="setLesson(22)" data-lesson="lesson22"><img src="images/lesson-theory.png">Подключение стилей</button>
    <button @click="setLesson(23)" data-lesson="lesson23"><img src="images/lesson-theory.png">Подключение внешних стилей</button>
    <button @click="setLesson(24)" data-lesson="lesson24"><img src="images/lesson-theory.png">Тайна <b class="marked-name">CSS</b>-редактора</button>
    <button @click="setLesson(25)" data-lesson="lesson25"><img src="images/lesson-theory.png">Подключение <b class="marked-name">скриптов</b></button>
    <button @click="setLesson(26)" data-lesson="lesson26"><img src="images/lesson-theory.png">Подключение внешних <b class="marked-name">скриптов</b></button>
    <button @click="setLesson(27)" data-lesson="lesson27"><img src="images/lesson-theory.png">Первое итоговое задание</button>
    <button @click="setLesson(28)" data-lesson="lesson28"><img src="images/lesson-theory.png">Второе итоговое задание</button>
  </div>

  <div class="menu-level-4-course-3" v-if="level == 4 && course == 3">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Основы <b class="marked-name">HTML</b>"<img src="images/folders/base-html.svg"></button>
    <button @click="setLesson(29)" data-lesson="lesson29"><img src="images/lesson-theory.png">Абзацы</button>
    <button @click="setLesson(30)" data-lesson="lesson30"><img src="images/lesson-theory.png">Заголовки и подзаголовки</button>
    <button @click="setLesson(31)" data-lesson="lesson31"><img src="images/lesson-theory.png">Неупорядоченный список</button>
    <button @click="setLesson(32)" data-lesson="lesson32"><img src="images/lesson-theory.png">Упорядоченный список</button>
    <button @click="setLesson(33)" data-lesson="lesson33"><img src="images/lesson-theory.png">Многоуровневый список</button>
    <button @click="setLesson(34)" data-lesson="lesson34"><img src="images/lesson-theory.png">Ещё более многоуровневый список</button>
    <button @click="setLesson(35)" data-lesson="lesson35"><img src="images/lesson-theory.png">Список определений</button>
    <button @click="setLesson(36)" data-lesson="lesson36"><img src="images/lesson-theory.png">Важность. Теги <b class="marked-menu">strong</b> и <b class="marked-menu">b</b></button>
    <button @click="setLesson(37)" data-lesson="lesson37"><img src="images/lesson-theory.png">Акцентируем внимание. Теги <b class="marked-menu">em</b> и <b class="marked-menu">i</b></button>
    <button @click="setLesson(38)" data-lesson="lesson38"><img src="images/lesson-theory.png">Переносы и разделители. Теги <b class="marked-menu">br</b> и <b class="marked-menu">hr</b></button>
    <button @click="setLesson(39)" data-lesson="lesson39"><img src="images/lesson-theory.png">Цитаты</button>
    <button @click="setLesson(40)" data-lesson="lesson40"><img src="images/lesson-theory.png">Верхние и нижние индексы</button>
    <button @click="setLesson(41)" data-lesson="lesson41"><img src="images/lesson-theory.png">Помечаем изменения. Теги <b class="marked-menu">del</b> и <b class="marked-menu">ins</b></button>
    <button @click="setLesson(42)" data-lesson="lesson42"><img src="images/lesson-theory.png">Преформатированный текст</button>
    <button @click="setLesson(43)" data-lesson="lesson43"><img src="images/lesson-theory.png">Просто выделенный текст</button>
    <button @click="setLesson(44)" data-lesson="lesson44"><img src="images/lesson-test.png">Испытание: разметка статьи</button>
    <button @click="setLesson(45)" data-lesson="lesson45"><img src="images/lesson-test.png">Испытание: рецепт</button>
  </div>

  <div class="menu-level-4-course-4" v-if="level == 4 && course == 4">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Основы <b class="marked-name">HTML</b>"<img src="images/folders/base-html.svg"></button>
    <button @click="setLesson(46)" data-lesson="lesson46"><img src="images/lesson-theory.png">Что такое ссылка?</button>
    <button @click="setLesson(47)" data-lesson="lesson47"><img src="images/lesson-theory.png">Задаём адрес ссылки</button>
    <button @click="setLesson(48)" data-lesson="lesson48"><img src="images/lesson-theory.png">Абсолютные адреса</button>
    <button @click="setLesson(49)" data-lesson="lesson49"><img src="images/lesson-theory.png">Относительные адреса</button>
    <button @click="setLesson(50)" data-lesson="lesson50"><img src="images/lesson-theory.png">Ссылка на файл</button>
    <button @click="setLesson(51)" data-lesson="lesson51"><img src="images/lesson-theory.png">Ссылка на изображение</button>
    <button @click="setLesson(52)" data-lesson="lesson52"><img src="images/lesson-theory.png">Ссылка с якорем</button>
    <button @click="setLesson(53)" data-lesson="lesson53"><img src="images/lesson-theory.png">Всплывающая подсказка</button>
    <button @click="setLesson(54)" data-lesson="lesson54"><img src="images/lesson-theory.png">Добавим изображение</button>
    <button @click="setLesson(55)" data-lesson="lesson55"><img src="images/lesson-theory.png">Размеры изображения</button>
    <button @click="setLesson(56)" data-lesson="lesson56"><img src="images/lesson-theory.png">Альтернативный текст</button>
    <button @click="setLesson(57)" data-lesson="lesson57"><img src="images/lesson-theory.png">Изображение-ссылка</button>
    <button @click="setLesson(58)" data-lesson="lesson58"><img src="images/lesson-theory.png">Фоторепортаж</button>
  </div>

  <div class="menu-level-4-course-5" v-if="level == 4 && course == 5">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Основы <b class="marked-name">HTML</b>"<img src="images/folders/base-html.svg"></button>
    <button @click="setLesson(59)" data-lesson="lesson59"><img src="images/lesson-theory.png">Простейшая таблица</button>
    <button @click="setLesson(60)" data-lesson="lesson60"><img src="images/lesson-theory.png">Добавляем строки</button>
    <button @click="setLesson(61)" data-lesson="lesson61"><img src="images/lesson-theory.png">Добавляем столбцы</button>
    <button @click="setLesson(62)" data-lesson="lesson62"><img src="images/lesson-theory.png">Задаём рамки с помощью <b class="marked-name">CSS</b></button>
    <button @click="setLesson(63)" data-lesson="lesson63"><img src="images/lesson-theory.png">Улучшаем отображение рамок</button>
    <button @click="setLesson(64)" data-lesson="lesson64"><img src="images/lesson-theory.png">Горизонтальные и вертикальные рамки</button>
    <button @click="setLesson(65)" data-lesson="lesson65"><img src="images/lesson-theory.png">Отступы внутри ячеек</button>
    <button @click="setLesson(66)" data-lesson="lesson66"><img src="images/lesson-theory.png">Отступы между ячейками</button>
    <button @click="setLesson(67)" data-lesson="lesson67"><img src="images/lesson-test.png">Испытание: простая, но аккуратная таблица</button>
    <button @click="setLesson(68)" data-lesson="lesson68"><img src="images/lesson-theory.png">Ячейки-заголовки</button>
    <button @click="setLesson(69)" data-lesson="lesson69"><img src="images/lesson-theory.png">Заголовок таблицы</button>
    <button @click="setLesson(70)" data-lesson="lesson70"><img src="images/lesson-theory.png">Объединяем ячейки в строках</button>
    <button @click="setLesson(71)" data-lesson="lesson71"><img src="images/lesson-theory.png">Объединяем ячейки в столбцах</button>
    <button @click="setLesson(72)" data-lesson="lesson72"><img src="images/lesson-theory.png">Закрепление <b class="marked-css">colspan</b></button>
    <button @click="setLesson(73)" data-lesson="lesson73"><img src="images/lesson-theory.png">Закрепление <b class="marked-css">rowspan</b></button>
    <button @click="setLesson(74)" data-lesson="lesson74"><img src="images/lesson-theory.png">Комбо: <b class="marked-css">colspan</b> + <b class="marked-css">rowspan</b></button>
    <button @click="setLesson(75)" data-lesson="lesson75"><img src="images/lesson-test.png">Испытание: таблица посложнее</button>
    <button @click="setLesson(76)" data-lesson="lesson76"><img src="images/lesson-theory.png">Выравнивание содержимого в ячейках</button>
    <button @click="setLesson(77)" data-lesson="lesson77"><img src="images/lesson-theory.png">Добавим цвета</button>
    <button @click="setLesson(78)" data-lesson="lesson78"><img src="images/lesson-theory.png">Раскрашиваем строки</button>
    <button @click="setLesson(79)" data-lesson="lesson79"><img src="images/lesson-theory.png">Задаём размеры таблицы</button>
    <button @click="setLesson(80)" data-lesson="lesson80"><img src="images/lesson-theory.png">Задаём размеры отдельных ячеек и столбцов</button>
    <button @click="setLesson(81)" data-lesson="lesson81"><img src="images/lesson-test.png">Испытание: итоговая таблица</button>
  </div>

  <div class="menu-level-4-course-6" v-if="level == 4 && course == 6">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Основы <b class="marked-name">HTML</b>"<img src="images/folders/base-html.svg"></button>
    <button @click="setLesson(82)" data-lesson="lesson82"><img src="images/lesson-theory.png">Первая форма</button>
    <button @click="setLesson(83)" data-lesson="lesson83"><img src="images/lesson-theory.png">Текстовое поле ввода</button>
    <button @click="setLesson(84)" data-lesson="lesson84"><img src="images/lesson-theory.png">Идентификатор и значение по умолчанию</button>
    <button @click="setLesson(85)" data-lesson="lesson85"><img src="images/lesson-theory.png">Подпись для поля ввода</button>
    <button @click="setLesson(86)" data-lesson="lesson86"><img src="images/lesson-theory.png">Связываем подпись и поле по <b class="marked-name">id</b></button>
    <button @click="setLesson(87)" data-lesson="lesson87"><img src="images/lesson-theory.png">Добавим ещё одно поле</button>
    <button @click="setLesson(88)" data-lesson="lesson88"><img src="images/lesson-theory.png">Поле для ввода пароля</button>
    <button @click="setLesson(89)" data-lesson="lesson89"><img src="images/lesson-theory.png">Кнопка отправки формы</button>
    <button @click="setLesson(90)" data-lesson="lesson90"><img src="images/lesson-theory.png">Многострочное поле ввода</button>
    <button @click="setLesson(91)" data-lesson="lesson91"><img src="images/lesson-theory.png">Чекбокс или "галочка"</button>
    <button @click="setLesson(92)" data-lesson="lesson92"><img src="images/lesson-test.png">Испытание: форма регистрации</button>
    <button @click="setLesson(93)" data-lesson="lesson93"><img src="images/lesson-theory.png">Переключатель или "радиобаттон"</button>
    <button @click="setLesson(94)" data-lesson="lesson94"><img src="images/lesson-theory.png">Группа переключателей</button>
    <button @click="setLesson(95)" data-lesson="lesson95"><img src="images/lesson-theory.png">Раскрывающийся список или "селект"</button>
    <button @click="setLesson(96)" data-lesson="lesson96"><img src="images/lesson-theory.png">"Мультиселект"</button>
    <button @click="setLesson(97)" data-lesson="lesson97"><img src="images/lesson-theory.png">Поле для загрузки файлов</button>
    <button @click="setLesson(98)" data-lesson="lesson98"><img src="images/lesson-theory.png">Скрытое поле</button>
    <button @click="setLesson(99)" data-lesson="lesson99"><img src="images/lesson-test.png">Испытание: редактирование профиля</button>
  </div>

  <div class="menu-level-4-course-7" v-if="level == 4 && course == 7">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Основы <b class="marked-name">HTML</b>"<img src="images/folders/base-html.svg"></button>
    <button @click="setLesson(100)" data-lesson="lesson100"><img src="images/lesson-theory.png">Хедер и футер. Теги <b class="marked-menu">header</b> и <b class="marked-menu">footer</b></button>
    <button @click="setLesson(101)" data-lesson="lesson101"><img src="images/lesson-theory.png">Основное содержание. Тег <b class="marked-menu">main</b></button>
    <button @click="setLesson(102)" data-lesson="lesson102"><img src="images/lesson-theory.png">Разделы страницы. Теги <b class="marked-menu">article</b> и <b class="marked-menu">section</b></button>
    <button @click="setLesson(103)" data-lesson="lesson103"><img src="images/lesson-theory.png">Изображения в формате <b class="marked-name">SVG</b></button>
    <button @click="setLesson(104)" data-lesson="lesson104"><img src="images/lesson-theory.png">Навигация. Тег <b class="marked-menu">nav</b></button>
    <button @click="setLesson(105)" data-lesson="lesson105"><img src="images/lesson-theory.png">Завершаем футер</button>
    <button @click="setLesson(106)" data-lesson="lesson106"><img src="images/lesson-theory.png">Использование нестандартных шрифтов</button>
    <button @click="setLesson(107)" data-lesson="lesson107"><img src="images/lesson-theory.png">Подробнее о шрифтах. Правило <b class="marked-css">@font-face</button>
    <button @click="setLesson(108)" data-lesson="lesson108"><img src="images/lesson-theory.png">Дополнительное содержание. Тег <b class="marked-menu">aside</b></button>
    <button @click="setLesson(109)" data-lesson="lesson109"><img src="images/lesson-theory.png">Ещё раз про <b class="marked-menu">article</b>. Анонс поста</button>
    <button @click="setLesson(110)" data-lesson="lesson110"><img src="images/lesson-theory.png">Завершаем главную: наполнение</button>
    <button @click="setLesson(111)" data-lesson="lesson111"><img src="images/lesson-theory.png">Внутренняя страница: структура поста</button>
    <button @click="setLesson(112)" data-lesson="lesson112"><img src="images/lesson-theory.png">Даты для людей и машин. Тег <b class="marked-menu">time</b></button>
    <button @click="setLesson(113)" data-lesson="lesson113"><img src="images/lesson-theory.png">Картинки с подписями. Теги <b class="marked-menu">figure</b> и <b class="marked-menu">figcaption</b></button>
    <button @click="setLesson(114)" data-lesson="lesson114"><img src="images/lesson-theory.png">Видео. Тег <b class="marked-menu">video</b></button>
    <button @click="setLesson(115)" data-lesson="lesson115"><img src="images/lesson-theory.png">Форматы и источники видео</button>
    <button @click="setLesson(116)" data-lesson="lesson116"><img src="images/lesson-theory.png">Аудио. Тег <b class="marked-menu">audio</b></button>
    <button @click="setLesson(117)" data-lesson="lesson117"><img src="images/lesson-theory.png">Форматы и источники звука</button>
    <button @click="setLesson(118)" data-lesson="lesson118"><img src="images/lesson-test.png">Испытание: другой вариант главной</button>
  </div>

  <div class="menu-level-4-course-8" v-if="level == 4 && course == 8">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Основы <b class="marked-name">HTML</b>"<img src="images/folders/base-html.svg"></button>
    <button @click="setLesson(119)" data-lesson="lesson119"><img src="images/lesson-test.png">Испытание: формы - вспомнить всё</button>
    <button @click="setLesson(120)" data-lesson="lesson120"><img src="images/lesson-theory.png">Сброс введённых значений</button>
    <button @click="setLesson(121)" data-lesson="lesson121"><img src="images/lesson-theory.png">Простая кнопка</button>
    <button @click="setLesson(122)" data-lesson="lesson122"><img src="images/lesson-theory.png">Кнопка-изображение</button>
    <button @click="setLesson(123)" data-lesson="lesson123"><img src="images/lesson-theory.png">Альтернативный способ задания кнопок</button>
    <button @click="setLesson(124)" data-lesson="lesson124"><img src="images/lesson-theory.png">Обязательные поля</button>
    <button @click="setLesson(125)" data-lesson="lesson125"><img src="images/lesson-theory.png">Поле выбора даты</button>
    <button @click="setLesson(126)" data-lesson="lesson126"><img src="images/lesson-theory.png">Поле выбора времени</button>
    <button @click="setLesson(127)" data-lesson="lesson127"><img src="images/lesson-theory.png">Список возможных значений</button>
    <button @click="setLesson(128)" data-lesson="lesson128"><img src="images/lesson-theory.png">Поле ввода числового значения</button>
    <button @click="setLesson(129)" data-lesson="lesson129"><img src="images/lesson-theory.png">Поле поиска</button>
    <button @click="setLesson(130)" data-lesson="lesson130"><img src="images/lesson-theory.png">Автофокус</button>
    <button @click="setLesson(131)" data-lesson="lesson131"><img src="images/lesson-theory.png">Другие поля для ввода дат</button>
    <button @click="setLesson(132)" data-lesson="lesson132"><img src="images/lesson-theory.png">Выбор из диапозона</button>
    <button @click="setLesson(133)" data-lesson="lesson133"><img src="images/lesson-theory.png">Область для вывода результата</button>
    <button @click="setLesson(134)" data-lesson="lesson134"><img src="images/lesson-theory.png">Группировка полей формы</button>
    <button @click="setLesson(135)" data-lesson="lesson135"><img src="images/lesson-theory.png">Паттерны значений полей</button>
    <button @click="setLesson(136)" data-lesson="lesson136"><img src="images/lesson-theory.png">Поле ввода телефона</button>
    <button @click="setLesson(137)" data-lesson="lesson137"><img src="images/lesson-theory.png">Подсказка при заполнении полей</button>
    <button @click="setLesson(138)" data-lesson="lesson138"><img src="images/lesson-theory.png">Поля ввода адресов сайтов и email</button>
    <button @click="setLesson(139)" data-lesson="lesson139"><img src="images/lesson-theory.png">Поле выбора цвета</button>
    <button @click="setLesson(140)" data-lesson="lesson140"><img src="images/lesson-theory.png">Группировка элеметнов списка</button>
    <button @click="setLesson(141)" data-lesson="lesson141"><img src="images/lesson-theory.png">Запрет редактирования полей</button>
    <button @click="setLesson(142)" data-lesson="lesson142"><img src="images/lesson-theory.png">Управление автозаполнением полей</button>
    <button @click="setLesson(143)" data-lesson="lesson143"><img src="images/lesson-theory.png">Переключение между полями</button>
    <button @click="setLesson(144)" data-lesson="lesson144"><img src="images/lesson-theory.png"><b class="marked-name">localStorage</b></button>
    <button @click="setLesson(145)" data-lesson="lesson145"><img src="images/lesson-theory.png">Проверяем работу <b class="marked-name">localStorage</b></button>
    <button @click="setLesson(146)" data-lesson="lesson146"><img src="images/lesson-test.png">Испытание: через тернии к звёздам</button>
  </div>

  <div class="menu-level-4-course-9" v-if="level == 4 && course == 9">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Основы <b class="marked-name">CSS</b>"<img src="images/folders/base-css.svg"></button>
    <button @click="setLesson(147)" data-lesson="lesson147"><img src="images/lesson-theory.png">Введение в <b class="marked-name">CSS</b></button>
    <button @click="setLesson(148)" data-lesson="lesson148"><img src="images/lesson-theory.png"><b class="marked-name">CSS</b>-правила</button>
    <button @click="setLesson(149)" data-lesson="lesson149"><img src="images/lesson-theory.png">Продвинутые селекторы</button>
    <button @click="setLesson(150)" data-lesson="lesson150"><img src="images/lesson-theory.png">Свойства для оформления текста</button>
    <button @click="setLesson(151)" data-lesson="lesson151"><img src="images/lesson-theory.png">Свойства для задания размеров и отступов</button>
    <button @click="setLesson(152)" data-lesson="lesson152"><img src="images/lesson-theory.png">Позиционирование элеметнов</button>
    <button @click="setLesson(153)" data-lesson="lesson153"><img src="images/lesson-theory.png">Создание сетки страницы</button>
    <button @click="setLesson(154)" data-lesson="lesson154"><img src="images/lesson-theory.png">Декоративные свойства</button>
    <button @click="setLesson(155)" data-lesson="lesson155"><img src="images/lesson-theory.png">Каскадность</button>
    <button @click="setLesson(156)" data-lesson="lesson156"><img src="images/lesson-theory.png">Каскадность. Переопределение стилей</button>
    <button @click="setLesson(157)" data-lesson="lesson157"><img src="images/lesson-theory.png">Каскадность и приоритеты</button>
    <button @click="setLesson(158)" data-lesson="lesson158"><img src="images/lesson-theory.png">Каскадность. Коктейль из классов</button>
    <button @click="setLesson(159)" data-lesson="lesson159"><img src="images/lesson-theory.png">Наследование</button>
    <button @click="setLesson(160)" data-lesson="lesson160"><img src="images/lesson-theory.png">Ненаследуемые свойства</button>
    <button @click="setLesson(161)" data-lesson="lesson161"><img src="images/lesson-test.png">Испытание: макет-прототип</button>
  </div>

  <div class="menu-level-4-course-10" v-if="level == 4 && course == 10">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Основы <b class="marked-name">CSS</b>"<img src="images/folders/base-css.svg"></button>
    <button @click="setLesson(162)" data-lesson="lesson162"><img src="images/lesson-theory.png">Нелёгкая жизнь без селекторов</button>
    <button @click="setLesson(163)" data-lesson="lesson163"><img src="images/lesson-theory.png">Селекторы по тегам</button>
    <button @click="setLesson(164)" data-lesson="lesson164"><img src="images/lesson-theory.png">Селекторы по классам</button>
    <button @click="setLesson(165)" data-lesson="lesson165"><img src="images/lesson-theory.png">Отрабатываем селекторы по классам</button>
    <button @click="setLesson(166)" data-lesson="lesson166"><img src="images/lesson-theory.png">Контекстные селекторы</button>
    <button @click="setLesson(167)" data-lesson="lesson167"><img src="images/lesson-theory.png">Соседние селекторы</button>
    <button @click="setLesson(168)" data-lesson="lesson168"><img src="images/lesson-theory.png">Контекстные и соседние селекторы</button>
    <button @click="setLesson(169)" data-lesson="lesson169"><img src="images/lesson-theory.png">Дочерние селекторы</button>
    <button @click="setLesson(170)" data-lesson="lesson170"><img src="images/lesson-theory.png">Псевдоклассы</button>
    <button @click="setLesson(171)" data-lesson="lesson171"><img src="images/lesson-theory.png">Псевдокласс <b class="marked-class">:nth-child</b></button>
    <button @click="setLesson(172)" data-lesson="lesson172"><img src="images/lesson-theory.png"><b class="marked-class">:nth-child</b> и контекстные селекторы</button>
    <button @click="setLesson(173)" data-lesson="lesson173"><img src="images/lesson-theory.png">Псевдокласс <b class="marked-class">:hover</b></button>
    <button @click="setLesson(174)" data-lesson="lesson174"><img src="images/lesson-theory.png">Динамические эффекты с помощью <b class="marked-class">:hover</b></button>
    <button @click="setLesson(175)" data-lesson="lesson175"><img src="images/lesson-theory.png">Псевдоклассы <b class="marked-class">:link</b>, <b class="marked-class">:visited</b>, <b class="marked-class">:active</b></button>
    <button @click="setLesson(176)" data-lesson="lesson176"><img src="images/lesson-theory.png">Псевдокласс <b class="marked-class">:focus</b></button>
    <button @click="setLesson(177)" data-lesson="lesson177"><img src="images/lesson-theory.png">Селекторы атрибутов</button>
    <button @click="setLesson(178)" data-lesson="lesson178"><img src="images/lesson-theory.png">Селектор по <b class="marked-name">id</b></button>
    <button @click="setLesson(179)" data-lesson="lesson179"><img src="images/lesson-test.png">Испытание. Дуэль</button>
  </div>

  <div class="menu-level-4-course-11" v-if="level == 4 && course == 11">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Основы <b class="marked-name">CSS</b>"<img src="images/folders/base-css.svg"></button>
    <button @click="setLesson(180)" data-lesson="lesson180"><img src="images/lesson-theory.png">Иерархическое дерево</button>
    <button @click="setLesson(181)" data-lesson="lesson181"><img src="images/lesson-theory.png">Наследование</button>
    <button @click="setLesson(182)" data-lesson="lesson182"><img src="images/lesson-theory.png">Наследование "на пальцах"</button>
    <button @click="setLesson(183)" data-lesson="lesson183"><img src="images/lesson-theory.png">Ещё немного про наследование</button>
    <button @click="setLesson(184)" data-lesson="lesson184"><img src="images/lesson-theory.png">Наследуемые свойства</button>
    <button @click="setLesson(185)" data-lesson="lesson185"><img src="images/lesson-theory.png">Ненаследуемые свойства</button>
    <button @click="setLesson(186)" data-lesson="lesson186"><img src="images/lesson-theory.png">Принудительное наследование</button>
    <button @click="setLesson(187)" data-lesson="lesson187"><img src="images/lesson-theory.png">Каскадирование</button>
    <button @click="setLesson(188)" data-lesson="lesson188"><img src="images/lesson-theory.png">Битва за курочку</button>
    <button @click="setLesson(189)" data-lesson="lesson189"><img src="images/lesson-theory.png">Битва за курочку. Раунд второй</button>
    <button @click="setLesson(190)" data-lesson="lesson190"><img src="images/lesson-theory.png">Битва за курочку. Раунд третий</button>
    <button @click="setLesson(191)" data-lesson="lesson191"><img src="images/lesson-theory.png">Битва за курочку. Борьба накаляется</button>
    <button @click="setLesson(192)" data-lesson="lesson192"><img src="images/lesson-theory.png">Битва за курочку. Запрещённый приём</button>
    <button @click="setLesson(193)" data-lesson="lesson193"><img src="images/lesson-theory.png">Ещё одна задачка на специфичность</button>
    <button @click="setLesson(194)" data-lesson="lesson194"><img src="images/lesson-theory.png">Расчёт значения специфичности</button>
    <button @click="setLesson(195)" data-lesson="lesson195"><img src="images/lesson-theory.png">Ещё задачка на порядок кода</button>
    <button @click="setLesson(196)" data-lesson="lesson196"><img src="images/lesson-theory.png">Перекрёстное наследование</button>
    <button @click="setLesson(197)" data-lesson="lesson197"><img src="images/lesson-test.png">Испытание: взломанный котопрофайл</button>
  </div>

  <div class="menu-level-4-course-12" v-if="level == 4 && course == 12">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Основы <b class="marked-name">CSS</b>"<img src="images/folders/base-css.svg"></button>
    <button @click="setLesson(198)" data-lesson="lesson198"><img src="images/lesson-theory.png">Объединение селекторов</button>
    <button @click="setLesson(199)" data-lesson="lesson199"><img src="images/lesson-theory.png">Псевдокласс <b class="marked-class">:not</b></button>
    <button @click="setLesson(200)" data-lesson="lesson200"><img src="images/lesson-theory.png">Комбинируем <b class="marked-class">:not</b></button>
    <button @click="setLesson(201)" data-lesson="lesson201"><img src="images/lesson-theory.png">Псевдокласс <b class="marked-class">:nth-last-child</b></button>
    <button @click="setLesson(202)" data-lesson="lesson202"><img src="images/lesson-theory.png">Псевдокласс <b class="marked-class">:first-of-type</b></button>
    <button @click="setLesson(203)" data-lesson="lesson203"><img src="images/lesson-theory.png">Псевдокласс <b class="marked-class">:last-of-type</b></button>
    <button @click="setLesson(204)" data-lesson="lesson204"><img src="images/lesson-theory.png">Псевдокласс <b class="marked-class">:nth-of-type</b></button>
    <button @click="setLesson(205)" data-lesson="lesson205"><img src="images/lesson-theory.png">Псевдокласс <b class="marked-class">:nth-last-of-type</b></button>
    <button @click="setLesson(206)" data-lesson="lesson206"><img src="images/lesson-test.png">Испытание: первая раскладка</button>
    <button @click="setLesson(207)" data-lesson="lesson207"><img src="images/lesson-theory.png">Селектор последующих элементов</button>
    <button @click="setLesson(208)" data-lesson="lesson208"><img src="images/lesson-theory.png">Псевдокласс <b class="marked-class">:empty</b></button>
    <button @click="setLesson(209)" data-lesson="lesson209"><img src="images/lesson-theory.png">Псевдокласс <b class="marked-class">:only-child</b></button>
    <button @click="setLesson(210)" data-lesson="lesson210"><img src="images/lesson-theory.png">Псевдокласс <b class="marked-class">:only-of-type</b></button>
    <button @click="setLesson(211)" data-lesson="lesson211"><img src="images/lesson-theory.png">Псевдоэлемент <b class="marked-menu">::before</b></button>
    <button @click="setLesson(212)" data-lesson="lesson212"><img src="images/lesson-theory.png">Псевдоэлемент <b class="marked-menu">::after</b></button>
    <button @click="setLesson(213)" data-lesson="lesson213"><img src="images/lesson-theory.png">Позиционирование псевдоэлементов</button>
    <button @click="setLesson(214)" data-lesson="lesson214"><img src="images/lesson-theory.png">Фон для псевдоэлементов</button>
    <button @click="setLesson(215)" data-lesson="lesson215"><img src="images/lesson-theory.png">Псевдоэлементы <b class="marked-menu">::first-line</b> и <b class="marked-menu">::first-letter</b></button>
    <button @click="setLesson(216)" data-lesson="lesson216"><img src="images/lesson-test.png">Испытание: псевдоэлементы</button>
    <button @click="setLesson(217)" data-lesson="lesson217"><img src="images/lesson-test.png">Испытание: вторая раскладка</button>
  </div>

  <div class="menu-level-4-course-13" v-if="level == 4 && course == 13">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Основы <b class="marked-name">CSS</b>"<img src="images/folders/base-css.svg"></button>
    <button @click="setLesson(218)" data-lesson="lesson218"><img src="images/lesson-theory.png">Ищем в начале строки: <b class="marked-class">[foo<b class="marked-menu">^=</b>"bar"]</b></button>
    <button @click="setLesson(219)" data-lesson="lesson219"><img src="images/lesson-theory.png">Ищем в конце строки: <b class="marked-class">[foo<b class="marked-menu">$=</b>"bar"]</b></button>
    <button @click="setLesson(220)" data-lesson="lesson220"><img src="images/lesson-theory.png">Поиск подстроки везде: <b class="marked-class">[foo<b class="marked-menu">*=</b>"bar"]</b></button>
    <button @click="setLesson(221)" data-lesson="lesson221"><img src="images/lesson-theory.png">Поиск слов внутри строки: <b class="marked-class">[foo<b class="marked-menu">~=</b>"bar"]</b></button>
    <button @click="setLesson(222)" data-lesson="lesson222"><img src="images/lesson-theory.png">Поиск префиксов: <b class="marked-class">[foo<b class="marked-menu">|=</b>"bar"]</b></button>
    <button @click="setLesson(223)" data-lesson="lesson223"><img src="images/lesson-theory.png">Поиски котов. Часть 1</button>
    <button @click="setLesson(224)" data-lesson="lesson224"><img src="images/lesson-theory.png">Поиски котов. Часть 2</button>
    <button @click="setLesson(225)" data-lesson="lesson225"><img src="images/lesson-theory.png">Котография 9 на 12</button>
    <button @click="setLesson(226)" data-lesson="lesson226"><img src="images/lesson-theory.png">Псевдоклассы <b class="marked-class">:enabled</b> и <b class="marked-class">:disabled</b></button>
    <button @click="setLesson(227)" data-lesson="lesson227"><img src="images/lesson-theory.png">Псевдоклассы <b class="marked-class">:read-only</b> и <b class="marked-class">:read-write</b></button>
    <button @click="setLesson(228)" data-lesson="lesson228"><img src="images/lesson-theory.png">Псевдокласс <b class="marked-class">:required</b></button>
    <button @click="setLesson(229)" data-lesson="lesson229"><img src="images/lesson-theory.png">Псевдокласс <b class="marked-class">:optional</b></button>
    <button @click="setLesson(230)" data-lesson="lesson230"><img src="images/lesson-theory.png">Псевдокласс <b class="marked-class">:checked</b></button>
    <button @click="setLesson(231)" data-lesson="lesson231"><img src="images/lesson-theory.png">Псевдоклассы <b class="marked-class">:invalid</b> и <b class="marked-class">:valid</b></button>
    <button @click="setLesson(232)" data-lesson="lesson232"><img src="images/lesson-theory.png">Псевдоклассы <b class="marked-class">:in-range</b> и <b class="marked-class">:out-of-range</b></button>
    <button @click="setLesson(233)" data-lesson="lesson233"><img src="images/lesson-theory.png">Объединяй и властвуй</button>
    <button @click="setLesson(234)" data-lesson="lesson234"><img src="images/lesson-theory.png">Чудеса с <b class="marked-class">~</b> и <b class="marked-class">:checked</b></button>
    <button @click="setLesson(235)" data-lesson="lesson235"><img src="images/lesson-test.png">Испытание: <b class="marked-name">UI</b>-кит для формы</button>
  </div>

  <div class="menu-level-4-course-14" v-if="level == 4 && course == 14">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Построение сеток"<img src="images/folders/layout.svg"></button>
    <button @click="setLesson(236)" data-lesson="lesson236"><img src="images/lesson-theory.png">Блочные элементы</button>
    <button @click="setLesson(237)" data-lesson="lesson237"><img src="images/lesson-theory.png">Строчные элементы</button>
    <button @click="setLesson(238)" data-lesson="lesson238"><img src="images/lesson-theory.png">Ширина и высота</button>
    <button @click="setLesson(239)" data-lesson="lesson239"><img src="images/lesson-theory.png">Внутренние отступы, свойство <b class="marked-css">padding</b></button>
    <button @click="setLesson(240)" data-lesson="lesson240"><img src="images/lesson-theory.png">Внешние отступы, свойство <b class="marked-css">margin</b></button>
    <button @click="setLesson(241)" data-lesson="lesson241"><img src="images/lesson-theory.png">Рамки</button>
    <button @click="setLesson(242)" data-lesson="lesson242"><img src="images/lesson-theory.png">Стандартная блочная модель</button>
    <button @click="setLesson(243)" data-lesson="lesson243"><img src="images/lesson-test.png">Первое испытание</button>
    <button @click="setLesson(244)" data-lesson="lesson244"><img src="images/lesson-theory.png">"Схлопывание" внешних отступов</button>
    <button @click="setLesson(245)" data-lesson="lesson245"><img src="images/lesson-theory.png">"Выпадание" внешних отступов</button>
    <button @click="setLesson(246)" data-lesson="lesson246"><img src="images/lesson-theory.png">Как отцентровать элемент?</button>
    <button @click="setLesson(247)" data-lesson="lesson247"><img src="images/lesson-theory.png">Блочная модель и строчные элементы</button>
    <button @click="setLesson(248)" data-lesson="lesson248"><img src="images/lesson-theory.png">Ширина <b class="marked-css">100%</b> и ширина по умолчанию</button>
    <button @click="setLesson(249)" data-lesson="lesson249"><img src="images/lesson-theory.png">Проблемы обычной блочной модели</button>
    <button @click="setLesson(250)" data-lesson="lesson250"><img src="images/lesson-theory.png">Изменяем блочную модель, свойство <b class="marked-css">box-sizing</b></button>
    <button @click="setLesson(251)" data-lesson="lesson251"><img src="images/lesson-test.png">Второе испытание</button>
    <button @click="setLesson(252)" data-lesson="lesson252"><img src="images/lesson-theory.png">Управление типом элемента, свойство <b class="marked-css">display</b></button>
    <button @click="setLesson(253)" data-lesson="lesson253"><img src="images/lesson-theory.png"><b class="marked-css">display: inline-block</b></button>
    <button @click="setLesson(254)" data-lesson="lesson254"><img src="images/lesson-theory.png"><b class="marked-css">display: table</b></button>
    <button @click="setLesson(255)" data-lesson="lesson255"><img src="images/lesson-theory.png"><b class="marked-css">display: table-row</b></button>
    <button @click="setLesson(256)" data-lesson="lesson256"><img src="images/lesson-theory.png"><b class="marked-css">display: table-cell</b></button>
    <button @click="setLesson(257)" data-lesson="lesson257"><img src="images/lesson-theory.png"><b class="marked-css">display: none</b></button>
    <button @click="setLesson(258)" data-lesson="lesson258"><img src="images/lesson-test.png">Последнее испытание</button>
  </div>

  <div class="menu-level-4-course-15" v-if="level == 4 && course == 15">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Построение сеток"<img src="images/folders/layout.svg"></button>
    <button @click="setLesson(259)" data-lesson="lesson259"><img src="images/lesson-theory.png">Пробуем управлять потоком</button>
    <button @click="setLesson(260)" data-lesson="lesson260"><img src="images/lesson-theory.png">Упревление потоком, шаг 2</button>
    <button @click="setLesson(261)" data-lesson="lesson261"><img src="images/lesson-theory.png">Управление потоком, шаг 3</button>
    <button @click="setLesson(262)" data-lesson="lesson262"><img src="images/lesson-theory.png">Создадим другой поток</button>
    <button @click="setLesson(263)" data-lesson="lesson263"><img src="images/lesson-theory.png">Другой поток, шаг 2</button>
    <button @click="setLesson(264)" data-lesson="lesson264"><img src="images/lesson-theory.png">Другой поток, шаг 3</button>
    <button @click="setLesson(265)" data-lesson="lesson265"><img src="images/lesson-theory.png">Другой поток, финал</button>
    <button @click="setLesson(266)" data-lesson="lesson266"><img src="images/lesson-theory.png">Погружение во флоаты</button>
    <button @click="setLesson(267)" data-lesson="lesson267"><img src="images/lesson-theory.png"><b class="marked-css">float</b> и ширина</button>
    <button @click="setLesson(268)" data-lesson="lesson268"><img src="images/lesson-theory.png"><b class="marked-css">float</b> и выпадание из потока</button>
    <button @click="setLesson(269)" data-lesson="lesson269"><img src="images/lesson-theory.png">Флоат рядом с флоатом</button>
    <button @click="setLesson(270)" data-lesson="lesson270"><img src="images/lesson-theory.png">Когда флоатов много, а места мало</button>
    <button @click="setLesson(271)" data-lesson="lesson271"><img src="images/lesson-test.png">Испытание: пазл на флоатах</button>
    <button @click="setLesson(272)" data-lesson="lesson272"><img src="images/lesson-theory.png">Свойство <b class="marked-css">clear</b></button>
    <button @click="setLesson(273)" data-lesson="lesson273"><img src="images/lesson-theory.png">Борьба с выпаданием флоатов: распорки</button>
    <button @click="setLesson(274)" data-lesson="lesson274"><img src="images/lesson-theory.png">Борьба с выпаданием флоатов: псевдораспорки</button>
    <button @click="setLesson(275)" data-lesson="lesson275"><img src="images/lesson-theory.png">Простейшая сетка, шаг 1</button>
    <button @click="setLesson(276)" data-lesson="lesson276"><img src="images/lesson-theory.png">Простейшая сетка, шаг 2</button>
    <button @click="setLesson(277)" data-lesson="lesson277"><img src="images/lesson-theory.png">Простейшая сетка, финал</button>
    <button @click="setLesson(278)" data-lesson="lesson278"><img src="images/lesson-theory.png">Сетка посложнее, шаг 1</button>
    <button @click="setLesson(279)" data-lesson="lesson279"><img src="images/lesson-theory.png">Сетка посложнее, шаг 2</button>
    <button @click="setLesson(280)" data-lesson="lesson280"><img src="images/lesson-theory.png">Сетка посложнее, шаг 3</button>
    <button @click="setLesson(281)" data-lesson="lesson281"><img src="images/lesson-theory.png">Сетка посложнее, добавляем содержание</button>
    <button @click="setLesson(282)" data-lesson="lesson282"><img src="images/lesson-theory.png">Последняя сетка, шаг 1</button>
    <button @click="setLesson(283)" data-lesson="lesson283"><img src="images/lesson-theory.png">Последняя сетка, шаг 2</button>
    <button @click="setLesson(284)" data-lesson="lesson284"><img src="images/lesson-theory.png">Последняя сетка завершена</button>
    <button @click="setLesson(285)" data-lesson="lesson285"><img src="images/lesson-test.png">Испытание: строим сетку</button>
    <button @click="setLesson(286)" data-lesson="lesson286"><img src="images/lesson-theory.png">Погружение в <b class="marked-css">inline-block</b></button>
    <button @click="setLesson(287)" data-lesson="lesson287"><img src="images/lesson-theory.png"><b class="marked-css">float</b> vs. <b class="marked-css">inline-block</b></button>
    <button @click="setLesson(288)" data-lesson="lesson288"><img src="images/lesson-theory.png">Простая сетка на <b class="marked-css">inline-block</b></button>
    <button @click="setLesson(289)" data-lesson="lesson289"><img src="images/lesson-theory.png"><b class="marked-css">inline-block</b> и пробелы в коде</button>
    <button @click="setLesson(290)" data-lesson="lesson290"><img src="images/lesson-test.png">Испытание: котогалерея на <b class="marked-css">inline-block</b></button>
  </div>

  <div class="menu-level-4-course-16" v-if="level == 4 && course == 16">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Построение сеток"<img src="images/folders/layout.svg"></button>
    <button @click="setLesson(291)" data-lesson="lesson291"><img src="images/lesson-theory.png"><b class="marked-name">CSS</b>-таблица</button>
    <button @click="setLesson(292)" data-lesson="lesson292"><img src="images/lesson-theory.png">Ряды и ячейки таблицы</button>
    <button @click="setLesson(293)" data-lesson="lesson293"><img src="images/lesson-theory.png">Заголовок таблицы</button>
    <button @click="setLesson(294)" data-lesson="lesson294"><img src="images/lesson-theory.png">Группировка верхних рядов и ячеек</button>
    <button @click="setLesson(295)" data-lesson="lesson295"><img src="images/lesson-theory.png">Группировка нижних рядов и ячеек</button>
    <button @click="setLesson(296)" data-lesson="lesson296"><img src="images/lesson-theory.png">Группировка основных рядов и ячеек, часть 1</button>
    <button @click="setLesson(297)" data-lesson="lesson297"><img src="images/lesson-theory.png">Группировка основных рядов и ячеек, часть 2</button>
    <button @click="setLesson(298)" data-lesson="lesson298"><img src="images/lesson-theory.png">Колонка таблицы</button>
    <button @click="setLesson(299)" data-lesson="lesson299"><img src="images/lesson-theory.png">Группировка колонок таблицы</button>
    <button @click="setLesson(300)" data-lesson="lesson300"><img src="images/lesson-test.png">Испытание: строим таблицу на <b class="marked-name">CSS</b></button>
    <button @click="setLesson(301)" data-lesson="lesson301"><img src="images/lesson-theory.png">Строчная таблица</button>
    <button @click="setLesson(302)" data-lesson="lesson302"><img src="images/lesson-theory.png">Горизонтальное выравнивание таблицы</button>
    <button @click="setLesson(303)" data-lesson="lesson303"><img src="images/lesson-theory.png">Горизонтальное и вертикальное выравнивание</button>
    <button @click="setLesson(304)" data-lesson="lesson304"><img src="images/lesson-theory.png">Ячейки и границы таблицы</button>
    <button @click="setLesson(305)" data-lesson="lesson305"><img src="images/lesson-theory.png">Holy Grail, часть 1</button>
    <button @click="setLesson(306)" data-lesson="lesson306"><img src="images/lesson-theory.png">Holy Grail, часть 2</button>
    <button @click="setLesson(307)" data-lesson="lesson307"><img src="images/lesson-theory.png">Holy Grail, часть 3</button>
    <button @click="setLesson(308)" data-lesson="lesson308"><img src="images/lesson-test.png">Испытание: ещё одна <b class="marked-name">CSS</b>-таблица</button>
  </div>

  <div class="menu-level-4-course-17" v-if="level == 4 && course == 17">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Построение сеток"<img src="images/folders/layout.svg"></button>
    <button @click="setLesson(309)" data-lesson="lesson309"><img src="images/lesson-theory.png"><b class="marked-name">Флексбокс</b>, display: flex</b></button>
    <button @click="setLesson(310)" data-lesson="lesson310"><img src="images/lesson-theory.png">Главная ось, <b class="marked-css">flex-direction</b></button>
    <button @click="setLesson(311)" data-lesson="lesson311"><img src="images/lesson-theory.png">Поперечная ось</button>
    <button @click="setLesson(312)" data-lesson="lesson312"><img src="images/lesson-theory.png">Распределение флекс-элементов, <b class="marked-css">justify-content</b></button>
    <button @click="setLesson(313)" data-lesson="lesson313"><img src="images/lesson-theory.png">В начале и в конце главной оси</button>
    <button @click="setLesson(314)" data-lesson="lesson314"><img src="images/lesson-theory.png">Равномерное распределение</button>
    <button @click="setLesson(315)" data-lesson="lesson315"><img src="images/lesson-theory.png">Выравнивание флекс-элементов, <b class="marked-css">align-items</b></button>
    <button @click="setLesson(316)" data-lesson="lesson316"><img src="images/lesson-theory.png">В начале и в конце поперечной оси</button>
    <button @click="setLesson(317)" data-lesson="lesson317"><img src="images/lesson-theory.png">Выравнивание элементов по базовой линии</button>
    <button @click="setLesson(318)" data-lesson="lesson318"><img src="images/lesson-theory.png">Эгоистичное выравнивание, <b class="marked-css">align-self</b></button>
    <button @click="setLesson(319)" data-lesson="lesson319"><img src="images/lesson-theory.png">Выравнивание одного элемента по базовой линии</button>
    <button @click="setLesson(320)" data-lesson="lesson320"><img src="images/lesson-test.png">Испытание: простая палитра</button>
    <button @click="setLesson(321)" data-lesson="lesson321"><img src="images/lesson-theory.png">Перенос флекс-элементов, <b class="marked-css">flex-wrap</b></button>
    <button @click="setLesson(322)" data-lesson="lesson322"><img src="images/lesson-theory.png">Перенос в обратном порядке</button>
    <button @click="setLesson(323)" data-lesson="lesson323"><img src="images/lesson-theory.png">Выравнивание строк флекс-контейнера <b class="marked-css">align-content</b></button>
    <button @click="setLesson(324)" data-lesson="lesson324"><img src="images/lesson-theory.png"><b class="marked-css">align-content: stretch</b> и <b class="marked-css">align-items</b></button>
    <button @click="setLesson(325)" data-lesson="lesson325"><img src="images/lesson-theory.png"><b class="marked-css">align-content: не-stretch</b> и <b class="marked-css">align-items</b></button>
    <button @click="setLesson(326)" data-lesson="lesson326"><img src="images/lesson-theory.png">Остальные значения <b class="marked-css">align-content</b></button>
    <button @click="setLesson(327)" data-lesson="lesson327"><img src="images/lesson-theory.png">Порядковый номер флекс-элемента, <b class="marked-css">order</b></button>
    <button @click="setLesson(328)" data-lesson="lesson328"><img src="images/lesson-test.png">Испытание: палитра посложнее</button>
    <button @click="setLesson(329)" data-lesson="lesson329"><img src="images/lesson-theory.png">Идеальное центрирование, <b class="marked-css">margin: auto</b></button>
    <button @click="setLesson(330)" data-lesson="lesson330"><img src="images/lesson-theory.png">Идеальное центрирование, флекс-выравнивания</button>
    <button @click="setLesson(331)" data-lesson="lesson331"><img src="images/lesson-theory.png">"Гибкое" меню</button>
    <button @click="setLesson(332)" data-lesson="lesson332"><img src="images/lesson-theory.png">"Гибкое" меню, часть 2</button>
    <button @click="setLesson(333)" data-lesson="lesson333"><img src="images/lesson-theory.png">"Гибкое" меню, часть 3</button>
    <button @click="setLesson(334)" data-lesson="lesson334"><img src="images/lesson-theory.png">Вертикальный ряд иконок</button>
    <button @click="setLesson(335)" data-lesson="lesson335"><img src="images/lesson-theory.png">Вертикальный ряд иконок, часть 2</button>
    <button @click="setLesson(336)" data-lesson="lesson336"><img src="images/lesson-theory.png">Вертикальный ряд иконок, часть 3</button>
    <button @click="setLesson(337)" data-lesson="lesson337"><img src="images/lesson-theory.png">Сортировка элементов на <b class="marked-name">CSS</b></button>
    <button @click="setLesson(338)" data-lesson="lesson338"><img src="images/lesson-theory.png">Блоки одинаковой высоты</button>
    <button @click="setLesson(339)" data-lesson="lesson339"><img src="images/lesson-test.png">Испытание: сложные палитры</button>
  </div>

  <div class="menu-level-4-course-18" v-if="level == 4 && course == 18">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Построение сеток"<img src="images/folders/layout.svg"></button>
    <button @click="setLesson(340)" data-lesson="lesson340"><img src="images/lesson-theory.png">Флекс-элементы и блочная модель</button>
    <button @click="setLesson(341)" data-lesson="lesson341"><img src="images/lesson-theory.png">Особенности свойства <b class="marked-css">margin</b></button>
    <button @click="setLesson(342)" data-lesson="lesson342"><img src="images/lesson-theory.png">Выравнивание и внешние отступы</button>
    <button @click="setLesson(343)" data-lesson="lesson343"><img src="images/lesson-theory.png">Направление главной оси и внешние отступы</button>
    <button @click="setLesson(344)" data-lesson="lesson344"><img src="images/lesson-theory.png">Базовый размер флекс-элемента, <b class="marked-css">flex-basis</b></button>
    <button @click="setLesson(345)" data-lesson="lesson345"><img src="images/lesson-test.png">Испытание: кубизм</button>
    <button @click="setLesson(346)" data-lesson="lesson346"><img src="images/lesson-theory.png">Коэффициент растягивания элементов, <b class="marked-css">flex-grow</b></button>
    <button @click="setLesson(347)" data-lesson="lesson347"><img src="images/lesson-theory.png">Пропорциональное растягивание элементов</button>
    <button @click="setLesson(348)" data-lesson="lesson348"><img src="images/lesson-theory.png">Расчёт итогового размера с <b class="marked-css">flex-grow</b></button>
    <button @click="setLesson(349)" data-lesson="lesson349"><img src="images/lesson-theory.png">Коэффициент сжатия элементов, <b class="marked-css">flex-shrink</b></button>
    <button @click="setLesson(350)" data-lesson="lesson350"><img src="images/lesson-theory.png">Пропорциональное сжатие элементов</button>
    <button @click="setLesson(351)" data-lesson="lesson351"><img src="images/lesson-theory.png">Расчёт итогового размера с <b class="marked-css">flex-shrink</b></button>
    <button @click="setLesson(352)" data-lesson="lesson352"><img src="images/lesson-theory.png"><b class="marked-css">flex-shrink</b> и <b class="marked-css">min-width</b></button>
    <button @click="setLesson(353)" data-lesson="lesson353"><img src="images/lesson-test.png">Испытание: мастер коэффициентов</button>
    <button @click="setLesson(354)" data-lesson="lesson354"><img src="images/lesson-theory.png">Сокращённое свойство <b class="marked-css">flex</b></button>
    <button @click="setLesson(355)" data-lesson="lesson355"><img src="images/lesson-theory.png">Многострочный флекс-контейнер и <b class="marked-css">flex-shrink</b></button>
    <button @click="setLesson(356)" data-lesson="lesson356"><img src="images/lesson-theory.png">Многострочный флекс-контейнер и <b class="marked-css">flex-grow</b></button>
    <button @click="setLesson(357)" data-lesson="lesson357"><img src="images/lesson-theory.png"><b class="marked-css">flex-basis: 100%</b> и <b class="marked-css">flex-wrap</b></button>
    <button @click="setLesson(358)" data-lesson="lesson358"><img src="images/lesson-theory.png">Заголовок с описанием на <b class="marked-name">флексбоксах</b></button>
    <button @click="setLesson(359)" data-lesson="lesson359"><img src="images/lesson-theory.png">Заголовок с описанием, часть 2</button>
    <button @click="setLesson(360)" data-lesson="lesson360"><img src="images/lesson-theory.png">"Гибкое" меню с переполнением</button>
    <button @click="setLesson(361)" data-lesson="lesson361"><img src="images/lesson-theory.png">"Гибкое" меню с переполнением, часть 2</button>
    <button @click="setLesson(362)" data-lesson="lesson362"><img src="images/lesson-theory.png">Поля ввода с динамической шириной</button>
    <button @click="setLesson(363)" data-lesson="lesson363"><img src="images/lesson-theory.png">Карточка курса</button>
    <button @click="setLesson(364)" data-lesson="lesson364"><img src="images/lesson-theory.png">Карточка курса, часть 2</button>
    <button @click="setLesson(365)" data-lesson="lesson365"><img src="images/lesson-theory.png">Карточка курса, часть 3</button>
    <button @click="setLesson(366)" data-lesson="lesson366"><img src="images/lesson-theory.png">Много карточек</button>
    <button @click="setLesson(367)" data-lesson="lesson367"><img src="images/lesson-test.png">Испытание: гибкий поток</button>
  </div>

  <div class="menu-level-4-course-19" v-if="level == 4 && course == 19">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Построение сеток"<img src="images/folders/layout.svg"></button>
    <button @click="setLesson(368)" data-lesson="lesson368"><img src="images/lesson-theory.png">Координаты <b class="marked-name">грид</b>-элементов: <b class="marked-css">grid-row-start</b> и <b class="marked-css">grid-column-start</b></button>
    <button @click="setLesson(369)" data-lesson="lesson369"><img src="images/lesson-theory.png">Координаты <b class="marked-name">грид</b>-элементов: <b class="marked-css">grid-column-start</b> и <b class="marked-css">grid-column-end</b></button>
    <button @click="setLesson(370)" data-lesson="lesson370"><img src="images/lesson-theory.png">Координаты <b class="marked-name">грид</b>-элементов: <b class="marked-css">grid-row-start</b> и <b class="marked-css">grid-row-end</b></button>
    <button @click="setLesson(371)" data-lesson="lesson371"><img src="images/lesson-theory.png">Отрицательные значения <b class="marked-css">grid-column-start</b> и <b class="marked-css">grid-column-end</b></button>
    <button @click="setLesson(372)" data-lesson="lesson372"><img src="images/lesson-theory.png">Отрицательные значения <b class="marked-css">grid-row-start</b> и <b class="marked-css">grid-row-end</b></button>
    <button @click="setLesson(373)" data-lesson="lesson373"><img src="images/lesson-theory.png">Наложение элементов <b class="marked-name">грида</b></button>
    <button @click="setLesson(374)" data-lesson="lesson374"><img src="images/lesson-theory.png">Наложение элементов <b class="marked-name">грида</b> и свойство <b class="marked-css">z-index</b></button>
    <button @click="setLesson(375)" data-lesson="lesson375"><img src="images/lesson-conspect.png">Конспект "<b class="marked-name">Гриды</b>: расположение <b class="marked-name">грид</b>-элементов"</button>
    <button @click="setLesson(376)" data-lesson="lesson376"><img src="images/lesson-test.png">Испытание: наводим мосты</button>
    <button @click="setLesson(377)" data-lesson="lesson377"><img src="images/lesson-theory.png">Именованные области <b class="marked-name">грида</b>: свойство <b class="marked-css">grid-template-areas</b></button>
    <button @click="setLesson(378)" data-lesson="lesson378"><img src="images/lesson-theory.png">Свойство <b class="marked-css">grid-template-areas</b> и пустые области <b class="marked-name">грида</b></button>
    <button @click="setLesson(379)" data-lesson="lesson379"><img src="images/lesson-theory.png">Автоматические координаты элементов в <b class="marked-name">гриде</b>: столбцы</button>
    <button @click="setLesson(380)" data-lesson="lesson380"><img src="images/lesson-theory.png">Автоматические координаты элементов в <b class="marked-name">гриде</b>: столбцы и ряды</button>
    <button @click="setLesson(381)" data-lesson="lesson381"><img src="images/lesson-theory.png">Комбинируем автоматические и явные координаты</button>
    <button @click="setLesson(382)" data-lesson="lesson382"><img src="images/lesson-theory.png">Комбинируем автоматические и явные координаты, часть 2</button>
    <button @click="setLesson(383)" data-lesson="lesson383"><img src="images/lesson-theory.png">Нефиксированная ширина столбцов</button>
    <button @click="setLesson(384)" data-lesson="lesson384"><img src="images/lesson-theory.png">Нефиксированная ширина столбцов и рядов</button>
    <button @click="setLesson(385)" data-lesson="lesson385"><img src="images/lesson-theory.png"><b class="marked-name">Грид</b>-интервал: свойство <b class="marked-css">grip-gap</b></button>
    <button @click="setLesson(386)" data-lesson="lesson386"><img src="images/lesson-theory.png"><b class="marked-name">Грид</b>-интервал: свойства <b class="marked-css">grip-row-gap</b> и <b class="marked-css">grid-column-gap</b></button>
    <button @click="setLesson(387)" data-lesson="lesson387"><img src="images/lesson-conspect.png">Конспект: "<b class="marked-name">Гриды</b>: создание раскладки"</button>
    <button @click="setLesson(388)" data-lesson="lesson388"><img src="images/lesson-test.png">Испытание: разбиваем парк</button>
    <button @click="setLesson(389)" data-lesson="lesson389"><img src="images/lesson-theory.png">Раскладка простой страницы: создаём <b class="marked-name">грид</b></button>
    <button @click="setLesson(390)" data-lesson="lesson390"><img src="images/lesson-theory.png">Раскладка простой страницы: шапка</button>
    <button @click="setLesson(391)" data-lesson="lesson391"><img src="images/lesson-theory.png">Раскладка простой страницы: промоблок</button>
    <button @click="setLesson(392)" data-lesson="lesson392"><img src="images/lesson-theory.png">Раскладка простой страницы: боковая колонка</button>
    <button @click="setLesson(393)" data-lesson="lesson393"><img src="images/lesson-theory.png">Раскладка простой страницы: блог</button>
    <button @click="setLesson(394)" data-lesson="lesson394"><img src="images/lesson-theory.png">Раскладка простой страницы: завершение</button>
    <button @click="setLesson(395)" data-lesson="lesson395"><img src="images/lesson-theory.png">Раскладка каталога интернет-магазина: создаём внутренний <b class="marked-name">грид</b></button>
    <button @click="setLesson(396)" data-lesson="lesson396"><img src="images/lesson-theory.png">Раскладка каталога интернет-магазина: блок сортировки</button>
    <button @click="setLesson(397)" data-lesson="lesson397"><img src="images/lesson-theory.png">Раскладка каталога интернет-магазина: блок с фильтром</button>
    <button @click="setLesson(398)" data-lesson="lesson398"><img src="images/lesson-theory.png">Раскладка каталога интернет-магазина: завершение</button>
    <button @click="setLesson(399)" data-lesson="lesson399"><img src="images/lesson-test.png">Испытание: <b class="marked-name">грид</b>-раскладка страницы</button>
  </div>

  <div class="menu-level-4-course-20" v-if="level == 4 && course == 20">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Декоративные эффекты"<img src="images/folders/decoration.svg"></button>
    <button @click="setLesson(400)" data-lesson="lesson400"><img src="images/lesson-theory.png">Поток документа</button>
    <button @click="setLesson(401)" data-lesson="lesson401"><img src="images/lesson-theory.png">Относительные позиционирование</button>
    <button @click="setLesson(402)" data-lesson="lesson402"><img src="images/lesson-theory.png"><b class="marked-css">position: relative</b> и свойство <b class="marked-css">top</b></button>
    <button @click="setLesson(403)" data-lesson="lesson403"><img src="images/lesson-theory.png"><b class="marked-css">position: relative</b> и свойство <b class="marked-css">left</b></button>
    <button @click="setLesson(404)" data-lesson="lesson404"><img src="images/lesson-theory.png"><b class="marked-css">position: relative</b> и свойство <b class="marked-css">bottom</b></button>
    <button @click="setLesson(405)" data-lesson="lesson405"><img src="images/lesson-theory.png"><b class="marked-css">position: relative</b> и свойство <b class="marked-css">right</b></button>
    <button @click="setLesson(406)" data-lesson="lesson406"><img src="images/lesson-theory.png">Относительное позиционирование на практике</button>
    <button @click="setLesson(407)" data-lesson="lesson407"><img src="images/lesson-theory.png">Абсолютное позиционирование</button>
    <button @click="setLesson(408)" data-lesson="lesson408"><img src="images/lesson-theory.png">Абсолютное позиционирование и строчные элементы</button>
    <button @click="setLesson(409)" data-lesson="lesson409"><img src="images/lesson-theory.png"><b class="marked-css">position: absolute</b> и свойство <b class="marked-css">left</b></button>
    <button @click="setLesson(410)" data-lesson="lesson410"><img src="images/lesson-theory.png"><b class="marked-css">position: absolute</b> и свойство <b class="marked-css">top</b></button>
    <button @click="setLesson(411)" data-lesson="lesson411"><img src="images/lesson-theory.png"><b class="marked-css">position: absolute</b> и свойство <b class="marked-css">right</b></button>
    <button @click="setLesson(412)" data-lesson="lesson412"><img src="images/lesson-theory.png"><b class="marked-css">position: absolute</b> и свойство <b class="marked-css">bottom</b></button>
    <button @click="setLesson(413)" data-lesson="lesson413"><img src="images/lesson-theory.png">Точка отсчёта координат</button>
    <button @click="setLesson(414)" data-lesson="lesson414"><img src="images/lesson-theory.png">Тренируемся задавать координаты</button>
    <button @click="setLesson(415)" data-lesson="lesson415"><img src="images/lesson-theory.png">Неявная точка отсчёта</button>
    <button @click="setLesson(416)" data-lesson="lesson416"><img src="images/lesson-theory.png">Абсолютное позиционирование на практике</button>
    <button @click="setLesson(417)" data-lesson="lesson417"><img src="images/lesson-theory.png">Фиксированное позиционирование</button>
    <button @click="setLesson(418)" data-lesson="lesson418"><img src="images/lesson-theory.png"><b class="marked-css">z-index</b> или кто кого перекроет</button>
    <button @click="setLesson(419)" data-lesson="lesson419"><img src="images/lesson-test.png">Испытание: собери слово "вечность"</button>
  </div>

  <div class="menu-level-4-course-21" v-if="level == 4 && course == 21">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Декоративные эффекты"<img src="images/folders/decoration.svg"></button>
    <button @click="setLesson(420)" data-lesson="lesson420"><img src="images/lesson-theory.png">Свойство <b class="marked-css">background-color</b></button>
    <button @click="setLesson(421)" data-lesson="lesson421"><img src="images/lesson-theory.png">Свойство <b class="marked-css">background-image</b></button>
    <button @click="setLesson(422)" data-lesson="lesson422"><img src="images/lesson-theory.png">Свойство <b class="marked-css">background-repeat</b></button>
    <button @click="setLesson(423)" data-lesson="lesson423"><img src="images/lesson-theory.png">Свойство <b class="marked-css">background-position</b></button>
    <button @click="setLesson(424)" data-lesson="lesson424"><img src="images/lesson-theory.png">Ещё немного <b class="marked-css">background-position</b></button>
    <button @click="setLesson(425)" data-lesson="lesson425"><img src="images/lesson-theory.png">Свойство <b class="marked-css">background-attachment</b></button>
    <button @click="setLesson(426)" data-lesson="lesson426"><img src="images/lesson-theory.png">Свойство <b class="marked-css">background</b></button>
    <button @click="setLesson(427)" data-lesson="lesson427"><img src="images/lesson-test.png">Испытание: котокомикс</button>
    <button @click="setLesson(428)" data-lesson="lesson428"><img src="images/lesson-theory.png">Формат <b class="marked-name">JPEG</b></button>
    <button @click="setLesson(429)" data-lesson="lesson429"><img src="images/lesson-theory.png">Формат <b class="marked-name">PNG-8</b></button>
    <button @click="setLesson(430)" data-lesson="lesson430"><img src="images/lesson-theory.png">Формат <b class="marked-name">PNG-24</b></button>
    <button @click="setLesson(431)" data-lesson="lesson431"><img src="images/lesson-theory.png">Формат <b class="marked-name">GIF</b></button>
    <button @click="setLesson(432)" data-lesson="lesson432"><img src="images/lesson-theory.png">Несколько фонов</button>
    <button @click="setLesson(433)" data-lesson="lesson433"><img src="images/lesson-theory.png">Эффекты с повторяющимся фоном</button>
    <button @click="setLesson(434)" data-lesson="lesson434"><img src="images/lesson-theory.png"><b class="marked-name">Спрайты</b></button>
    <button @click="setLesson(435)" data-lesson="lesson435"><img src="images/lesson-test.png">Испытание: CAT Academy</button>
  </div>

  <div class="menu-level-4-course-22" v-if="level == 4 && course == 22">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Декоративные эффекты"<img src="images/folders/decoration.svg"></button>
    <button @click="setLesson(436)" data-lesson="lesson436"><img src="images/lesson-theory.png">Подготовка</button>
    <button @click="setLesson(437)" data-lesson="lesson437"><img src="images/lesson-theory.png">Размер фона, шаг 1</button>
    <button @click="setLesson(438)" data-lesson="lesson438"><img src="images/lesson-theory.png">Размер фона, шаг 2</button>
    <button @click="setLesson(439)" data-lesson="lesson439"><img src="images/lesson-theory.png">Границы фона</button>
    <button @click="setLesson(440)" data-lesson="lesson440"><img src="images/lesson-theory.png">Обрезка фона</button>
    <button @click="setLesson(441)" data-lesson="lesson441"><img src="images/lesson-theory.png">Множественный фон</button>
    <button @click="setLesson(442)" data-lesson="lesson442"><img src="images/lesson-theory.png">Позиция фона от разных сторон</button>
    <button @click="setLesson(443)" data-lesson="lesson443"><img src="images/lesson-theory.png">Повторение фона: <b class="marked-css">background-repeat: round</b></button>
    <button @click="setLesson(444)" data-lesson="lesson444"><img src="images/lesson-theory.png">Повторение фона: <b class="marked-css">background-repeat: space</b></button>
    <button @click="setLesson(445)" data-lesson="lesson445"><img src="images/lesson-theory.png">Внешняя рамка</button>
    <button @click="setLesson(446)" data-lesson="lesson446"><img src="images/lesson-theory.png">Скругление углов, часть 1</button>
    <button @click="setLesson(447)" data-lesson="lesson447"><img src="images/lesson-theory.png">Скругление углов, часть 2</button>
    <button @click="setLesson(448)" data-lesson="lesson448"><img src="images/lesson-theory.png">Изображение рамки: <b class="marked-css">border-image-source</b></button>
    <button @click="setLesson(449)" data-lesson="lesson449"><img src="images/lesson-theory.png">Изображение рамки: <b class="marked-css">border-image-slice</b></button>
    <button @click="setLesson(450)" data-lesson="lesson450"><img src="images/lesson-theory.png">Нарезка несимметричных картинок</button>
    <button @click="setLesson(451)" data-lesson="lesson451"><img src="images/lesson-theory.png">Изображение рамки: <b class="marked-css">border-image-repeat</b>, часть 1</button>
    <button @click="setLesson(452)" data-lesson="lesson452"><img src="images/lesson-theory.png">Изображение рамки: <b class="marked-css">border-image-repeat</b>, часть 2</button>
    <button @click="setLesson(453)" data-lesson="lesson453"><img src="images/lesson-theory.png">Изображение рамки: <b class="marked-css">border-image-width</b></button>
    <button @click="setLesson(454)" data-lesson="lesson454"><img src="images/lesson-theory.png">Изображение рамки: <b class="marked-css">border-image-outset</b></button>
    <button @click="setLesson(455)" data-lesson="lesson455"><img src="images/lesson-theory.png">Королевская рамка Кексика</button>
    <button @click="setLesson(456)" data-lesson="lesson456"><img src="images/lesson-theory.png">Эко-рамка Кексика</button>
    <button @click="setLesson(457)" data-lesson="lesson457"><img src="images/lesson-theory.png">Круглая рамка Кексика, часть 1</button>
    <button @click="setLesson(458)" data-lesson="lesson458"><img src="images/lesson-theory.png">Круглая рамка Кексика, часть 2</button>
    <button @click="setLesson(459)" data-lesson="lesson459"><img src="images/lesson-test.png">Испытание: морской волк</button>
    <button @click="setLesson(460)" data-lesson="lesson460"><img src="images/lesson-theory.png">Рамки и треугольники, часть 1</button>
    <button @click="setLesson(461)" data-lesson="lesson461"><img src="images/lesson-theory.png">Рамки и треугольники, часть 2</button>
    <button @click="setLesson(462)" data-lesson="lesson462"><img src="images/lesson-theory.png">Рамки и треугольники, часть 3</button>
    <button @click="setLesson(463)" data-lesson="lesson463"><img src="images/lesson-theory.png">Стрелка с помощью рамки</button>
    <button @click="setLesson(464)" data-lesson="lesson464"><img src="images/lesson-theory.png">Круглая стрелка с помощью рамки, часть 1</button>
    <button @click="setLesson(465)" data-lesson="lesson465"><img src="images/lesson-theory.png">Круглая стрелка с помощью рамки, часть 2</button>
    <button @click="setLesson(466)" data-lesson="lesson466"><img src="images/lesson-theory.png">Треугольники в жизни, часть 1</button>
    <button @click="setLesson(467)" data-lesson="lesson467"><img src="images/lesson-theory.png">Треугольники в жизни, часть 2</button>
    <button @click="setLesson(468)" data-lesson="lesson468"><img src="images/lesson-test.png">Испытание: ювелирная работа</button>
  </div>

  <div class="menu-level-4-course-23" v-if="level == 4 && course == 23">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Декоративные эффекты"<img src="images/folders/decoration.svg"></button>
    <button @click="setLesson(469)" data-lesson="lesson469"><img src="images/lesson-theory.png">Свойство <b class="marked-css">box-shadow</b></button>
    <button @click="setLesson(470)" data-lesson="lesson470"><img src="images/lesson-theory.png">Смещение тени по горизонтали</button>
    <button @click="setLesson(471)" data-lesson="lesson471"><img src="images/lesson-theory.png">Смещение тени по вертикали</button>
    <button @click="setLesson(472)" data-lesson="lesson472"><img src="images/lesson-theory.png">Размытие тени</button>
    <button @click="setLesson(473)" data-lesson="lesson473"><img src="images/lesson-theory.png">Растяжение тени</button>
    <button @click="setLesson(474)" data-lesson="lesson474"><img src="images/lesson-theory.png">Размытие + растяжение</button>
    <button @click="setLesson(475)" data-lesson="lesson475"><img src="images/lesson-theory.png">Цвет тени</button>
    <button @click="setLesson(476)" data-lesson="lesson476"><img src="images/lesson-theory.png">Внутренняя тень</button>
    <button @click="setLesson(477)" data-lesson="lesson477"><img src="images/lesson-test.png">Испытание: тусклые тени</button>
    <button @click="setLesson(478)" data-lesson="lesson478"><img src="images/lesson-theory.png">Полупрозрачная тень</button>
    <button @click="setLesson(479)" data-lesson="lesson479"><img src="images/lesson-theory.png">Тень только с одной стороны</button>
    <button @click="setLesson(480)" data-lesson="lesson480"><img src="images/lesson-theory.png">Множественные тени</button>
    <button @click="setLesson(481)" data-lesson="lesson481"><img src="images/lesson-theory.png">Несколько рамок у одного элемента</button>
    <button @click="setLesson(482)" data-lesson="lesson482"><img src="images/lesson-theory.png">Теневое искусство - 1</button>
    <button @click="setLesson(483)" data-lesson="lesson483"><img src="images/lesson-theory.png">Теневое искусство - 2</button>
    <button @click="setLesson(484)" data-lesson="lesson484"><img src="images/lesson-theory.png">Теневое искусство - 3</button>
    <button @click="setLesson(485)" data-lesson="lesson485"><img src="images/lesson-test.png">Испытание: зловещие тени</button>
  </div>

  <div class="menu-level-4-course-24" v-if="level == 4 && course == 24">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Декоративные эффекты"<img src="images/folders/decoration.svg"></button>
    <button @click="setLesson(486)" data-lesson="lesson486"><img src="images/lesson-theory.png">Hello, <b class="marked-css">linear-gradient</b>!</button>
    <button @click="setLesson(487)" data-lesson="lesson487"><img src="images/lesson-theory.png">Направление градиента</button>
    <button @click="setLesson(488)" data-lesson="lesson488"><img src="images/lesson-theory.png">Градиенты по диагоналям</button>
    <button @click="setLesson(489)" data-lesson="lesson489"><img src="images/lesson-theory.png">Градиенты под углом</button>
    <button @click="setLesson(490)" data-lesson="lesson490"><img src="images/lesson-theory.png">Диагонали против градусов</button>
    <button @click="setLesson(491)" data-lesson="lesson491"><img src="images/lesson-test.png">Испытание: иконки iOS</button>
    <button @click="setLesson(492)" data-lesson="lesson492"><img src="images/lesson-theory.png">Nyan cat наносит ответный удар</button>
    <button @click="setLesson(493)" data-lesson="lesson493"><img src="images/lesson-theory.png">Пропорции цветов колорстопы</button>
    <button @click="setLesson(494)" data-lesson="lesson494"><img src="images/lesson-theory.png">Резкие переходы цветов</button>
    <button @click="setLesson(495)" data-lesson="lesson495"><img src="images/lesson-theory.png">Псевдоколонки на градиентах</button>
    <button @click="setLesson(496)" data-lesson="lesson496"><img src="images/lesson-test.png">Испытание: флаги</button>
    <button @click="setLesson(497)" data-lesson="lesson497"><img src="images/lesson-theory.png">Цветовые переходы в <b class="marked-css">px</b></button>
    <button @click="setLesson(498)" data-lesson="lesson498"><img src="images/lesson-theory.png">Полупрозрачные градиенты</button>
    <button @click="setLesson(499)" data-lesson="lesson499"><img src="images/lesson-theory.png">Повторяющийся линейный градиент</button>
    <button @click="setLesson(500)" data-lesson="lesson500"><img src="images/lesson-theory.png">Строим сложный фон - часть 1</button>
    <button @click="setLesson(501)" data-lesson="lesson501"><img src="images/lesson-theory.png">Строим сложный фон - часть 2</button>
    <button @click="setLesson(502)" data-lesson="lesson502"><img src="images/lesson-theory.png">Строим сложный фон - часть 3</button>
    <button @click="setLesson(503)" data-lesson="lesson503"><img src="images/lesson-theory.png">Строим сложный фон - финал</button>
    <button @click="setLesson(504)" data-lesson="lesson504"><img src="images/lesson-theory.png">Кнопки - часть 1</button>
    <button @click="setLesson(505)" data-lesson="lesson505"><img src="images/lesson-theory.png">Кнопки - часть 2</button>
    <button @click="setLesson(506)" data-lesson="lesson506"><img src="images/lesson-theory.png">Кнопки - часть 3</button>
    <button @click="setLesson(507)" data-lesson="lesson507"><img src="images/lesson-test.png">Испытание: орнамент из сюрикенов</button>
    <button @click="setLesson(508)" data-lesson="lesson508"><img src="images/lesson-test.png">Испытание: спутники</button>
  </div>

  <div class="menu-level-4-course-25" v-if="level == 4 && course == 25">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Декоративные эффекты"<img src="images/folders/decoration.svg"></button>
    <button @click="setLesson(509)" data-lesson="lesson509"><img src="images/lesson-theory.png">Яркость и контрастность, <b class="marked-css">brightness</b> и <b class="marked-css">contrast</b></button>
    <button @click="setLesson(510)" data-lesson="lesson510"><img src="images/lesson-theory.png">Бесцветность и сепия, <b class="marked-css">grayscale</b> и <b class="marked-css">sepia</b></button>
    <button @click="setLesson(511)" data-lesson="lesson511"><img src="images/lesson-theory.png">Инверсия и насыщенность, <b class="marked-css">invert</b> и <b class="marked-css">saturate</b></button>
    <button @click="setLesson(512)" data-lesson="lesson512"><img src="images/lesson-theory.png">Поворот цвета, <b class="marked-css">hue-rotate</b></button>
    <button @click="setLesson(513)" data-lesson="lesson513"><img src="images/lesson-theory.png">Размытость и непрозрачность, <b class="marked-css">blur</b> и <b class="marked-css">opacity</b></button>
    <button @click="setLesson(514)" data-lesson="lesson514"><img src="images/lesson-theory.png">Тень, <b class="marked-css">drop-shadow</b></button>
    <button @click="setLesson(515)" data-lesson="lesson515"><img src="images/lesson-theory.png">Отличие <b class="marked-css">box-shadow</b> и <b class="marked-css">drop-shadow</b></button>
    <button @click="setLesson(516)" data-lesson="lesson516"><img src="images/lesson-theory.png">Применение <b class="marked-name">CSS</b>-фильтров к тексту</button>
    <button @click="setLesson(517)" data-lesson="lesson517"><img src="images/lesson-test.png">Испытание: разные фильтры</button>
    <button @click="setLesson(518)" data-lesson="lesson518"><img src="images/lesson-theory.png">Комбинация фильтров</button>
    <button @click="setLesson(519)" data-lesson="lesson519"><img src="images/lesson-theory.png">Комбинация фильтров <b class="marked-css">drop-shadow</b></button>
    <button @click="setLesson(520)" data-lesson="lesson520"><img src="images/lesson-theory.png">Анимация <b class="marked-name">CSS</b>-фильтров</button>
    <button @click="setLesson(521)" data-lesson="lesson521"><img src="images/lesson-theory.png">Плавные переходы и <b class="marked-name">CSS</b>-фильтры</button>
    <button @click="setLesson(522)" data-lesson="lesson522"><img src="images/lesson-test.png">Испытание: комбинации фильтров</button>
  </div>

  <div class="menu-level-4-course-26" v-if="level == 4 && course == 26">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Оформление текста"<img src="images/folders/text.svg"></button>
    <button @click="setLesson(523)" data-lesson="lesson523"><img src="images/lesson-theory.png">Главный текстовый тег - <b class="marked-css">span</b></button>
    <button @click="setLesson(524)" data-lesson="lesson524"><img src="images/lesson-theory.png">Свойство <b class="marked-css">font-size</b>: задаём размер шрифта</button>
    <button @click="setLesson(525)" data-lesson="lesson525"><img src="images/lesson-theory.png">Свойство <b class="marked-css">font-weight</b>: толщина начертания</button>
    <button @click="setLesson(526)" data-lesson="lesson526"><img src="images/lesson-theory.png">Свойство <b class="marked-css">font-style</b>: курсив</button>
    <button @click="setLesson(527)" data-lesson="lesson527"><img src="images/lesson-theory.png">Свойство <b class="marked-css">font-family</b>: шрифт</button>
    <button @click="setLesson(528)" data-lesson="lesson528"><img src="images/lesson-theory.png">Свойство <b class="marked-css">color</b>: цвет текста</button>
    <button @click="setLesson(529)" data-lesson="lesson529"><img src="images/lesson-theory.png">Свойство <b class="marked-css">text-decoration</b>: подчёркивание и другие эффекты</button>
    <button @click="setLesson(530)" data-lesson="lesson530"><img src="images/lesson-theory.png">Декоративное подчёркивание</button>
    <button @click="setLesson(531)" data-lesson="lesson531"><img src="images/lesson-theory.png">Задаём регистр символов с помощью <b class="marked-css">text-transform</b></button>
    <button @click="setLesson(532)" data-lesson="lesson532"><img src="images/lesson-theory.png">Управляем пробелами: <b class="marked-css">white-space</b></button>
    <button @click="setLesson(533)" data-lesson="lesson533"><img src="images/lesson-theory.png">Горизонтальное выравнивание текста: <b class="marked-css">text-align</b></button>
    <button @click="setLesson(534)" data-lesson="lesson534"><img src="images/lesson-theory.png">Вертикальное выравнивание: <b class="marked-css">vertical-align</b></button>
    <button @click="setLesson(535)" data-lesson="lesson535"><img src="images/lesson-theory.png">Верхние и нижние индексы на <b class="marked-name">CSS</b></button>
    <button @click="setLesson(536)" data-lesson="lesson536"><img src="images/lesson-theory.png">Свойство <b class="marked-css">line-height</b>: управляем высотой строки</button>
    <button @click="setLesson(537)" data-lesson="lesson537"><img src="images/lesson-theory.png">Вертикальный ритм текста</button>
    <button @click="setLesson(538)" data-lesson="lesson538"><img src="images/lesson-test.png">Испытание: рецепт на <b class="marked-name">CSS</b></button>
  </div>

  <div class="menu-level-4-course-27" v-if="level == 4 && course == 27">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Оформление текста"<img src="images/folders/text.svg"></button>
    <button @click="setLesson(539)" data-lesson="lesson539"><img src="images/lesson-theory.png"><b class="marked-name">Unicode</b>-символы</button>
    <button @click="setLesson(540)" data-lesson="lesson540"><img src="images/lesson-theory.png">Свойство <b class="marked-css">text-shadow</b></button>
    <button @click="setLesson(541)" data-lesson="lesson541"><img src="images/lesson-theory.png">Смещение текстовой тени по горизонтали</button>
    <button @click="setLesson(542)" data-lesson="lesson542"><img src="images/lesson-theory.png">Смещение текстовой тени по вертикали</button>
    <button @click="setLesson(543)" data-lesson="lesson543"><img src="images/lesson-theory.png">Размытие текстовой тени</button>
    <button @click="setLesson(544)" data-lesson="lesson544"><img src="images/lesson-theory.png">Цвет текстовой тени</button>
    <button @click="setLesson(545)" data-lesson="lesson545"><img src="images/lesson-theory.png">Эффект вдавленного текста</button>
    <button @click="setLesson(546)" data-lesson="lesson546"><img src="images/lesson-theory.png">Декоративная ретро-тень</button>
    <button @click="setLesson(547)" data-lesson="lesson547"><img src="images/lesson-test.png">Испытание: психоделическая тень</button>
    <button @click="setLesson(548)" data-lesson="lesson548"><img src="images/lesson-theory.png">Логотип: нестандартный шрифт</button>
    <button @click="setLesson(549)" data-lesson="lesson549"><img src="images/lesson-theory.png">Логотип: иконочный шрифт</button>
    <button @click="setLesson(550)" data-lesson="lesson550"><img src="images/lesson-theory.png">Логотип: выравнивание размеров</button>
    <button @click="setLesson(551)" data-lesson="lesson551"><img src="images/lesson-theory.png">Декоративная стилизация строки, шаг 1</button>
    <button @click="setLesson(552)" data-lesson="lesson552"><img src="images/lesson-theory.png">Декоративная стилизация строки, шаг 2</button>
    <button @click="setLesson(553)" data-lesson="lesson553"><img src="images/lesson-theory.png">Свойство text-indent</b></button>
    <button @click="setLesson(554)" data-lesson="lesson554"><img src="images/lesson-theory.png">Псевдоэлемент <b class="marked-menu">::first-letter</b></button>
    <button @click="setLesson(555)" data-lesson="lesson555"><img src="images/lesson-theory.png">Псевдоэлемент <b class="marked-menu">::first-line</b></button>
    <button @click="setLesson(556)" data-lesson="lesson556"><img src="images/lesson-theory.png">Колоночная разметка: свойство <b class="marked-css">column-count</b></button>
    <button @click="setLesson(557)" data-lesson="lesson557"><img src="images/lesson-theory.png">Колоночная разметка: свойство <b class="marked-css">column-width</b></button>
    <button @click="setLesson(558)" data-lesson="lesson558"><img src="images/lesson-theory.png">Колоночная разметка: свойство <b class="marked-css">column-gap</b></button>
    <button @click="setLesson(559)" data-lesson="lesson559"><img src="images/lesson-theory.png">Направление текста</button>
    <button @click="setLesson(560)" data-lesson="lesson560"><img src="images/lesson-theory.png">Направление текста и таблицы</button>
    <button @click="setLesson(561)" data-lesson="lesson561"><img src="images/lesson-theory.png">Переполнение текста</button>
    <button @click="setLesson(562)" data-lesson="lesson562"><img src="images/lesson-theory.png">Интервал между словами</button>
    <button @click="setLesson(563)" data-lesson="lesson563"><img src="images/lesson-test.png">Испытание: why so serious?</button>
    <button @click="setLesson(564)" data-lesson="lesson564"><img src="images/lesson-test.png">Испытание: поиграйся со шрифтами</button>
  </div>

  <div class="menu-level-4-course-28" v-if="level == 4 && course == 28">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Мастерские"<img src="images/folders/workshop.svg"></button>
    <button @click="setLesson(565)" data-lesson="lesson565"><img src="images/lesson-theory.png">Создаём вертикальное меню</button>
    <button @click="setLesson(566)" data-lesson="lesson566"><img src="images/lesson-theory.png">Добавляем ссылки</button>
    <button @click="setLesson(567)" data-lesson="lesson567"><img src="images/lesson-theory.png">Сбрасываем стили списка</button>
    <button @click="setLesson(568)" data-lesson="lesson568"><img src="images/lesson-theory.png">Оформляем контейнер меню</button>
    <button @click="setLesson(569)" data-lesson="lesson569"><img src="images/lesson-theory.png">Оформляем пункты, простой вариант</button>
    <button @click="setLesson(570)" data-lesson="lesson570"><img src="images/lesson-theory.png">Более сложное оформление пунктов</button>
    <button @click="setLesson(571)" data-lesson="lesson571"><img src="images/lesson-theory.png">Добавляем разделители</button>
    <button @click="setLesson(572)" data-lesson="lesson572"><img src="images/lesson-theory.png">Оформляем состояния пунктов</button>
    <button @click="setLesson(573)" data-lesson="lesson573"><img src="images/lesson-test.png">Испытание: вертикальное меню</button>
    <button @click="setLesson(574)" data-lesson="lesson574"><img src="images/lesson-theory.png">Многоуровневое вертикальное меню</button>
    <button @click="setLesson(575)" data-lesson="lesson575"><img src="images/lesson-theory.png">Устраняем проблемы оформления</button>
    <button @click="setLesson(576)" data-lesson="lesson576"><img src="images/lesson-theory.png">Переносим рамки, задаём отступы подменю</button>
    <button @click="setLesson(577)" data-lesson="lesson577"><img src="images/lesson-theory.png">Оформляем пункты подменю</button>
    <button @click="setLesson(578)" data-lesson="lesson578"><img src="images/lesson-theory.png">Тестируем на большой вложенности</button>
    <button @click="setLesson(579)" data-lesson="lesson579"><img src="images/lesson-test.png">Испытание: многоуровневое меню</button>
    <button @click="setLesson(580)" data-lesson="lesson580"><img src="images/lesson-theory.png">Горизонтальное меню</button>
    <button @click="setLesson(581)" data-lesson="lesson581"><img src="images/lesson-theory.png">Что делать, если пункты не влезают?</button>
    <button @click="setLesson(582)" data-lesson="lesson582"><img src="images/lesson-theory.png">Усложнённое оформление пунктов</button>
    <button @click="setLesson(583)" data-lesson="lesson583"><img src="images/lesson-theory.png">Завершаем оформление пунктов</button>
    <button @click="setLesson(584)" data-lesson="lesson584"><img src="images/lesson-test.png">Испытание: горизонтальное меню</button>
    <button @click="setLesson(585)" data-lesson="lesson585"><img src="images/lesson-theory.png">Вертикальное меню с выпадающим подменю</button>
    <button @click="setLesson(586)" data-lesson="lesson586"><img src="images/lesson-theory.png">Позиционируем выпадающее подменю</button>
    <button @click="setLesson(587)" data-lesson="lesson587"><img src="images/lesson-theory.png">Отображаем подменю при наведении</button>
    <button @click="setLesson(588)" data-lesson="lesson588"><img src="images/lesson-theory.png">Горизонтальное меню с выпадающим подменю</button>
    <button @click="setLesson(589)" data-lesson="lesson589"><img src="images/lesson-theory.png">Оформляем выпадающее меню</button>
    <button @click="setLesson(590)" data-lesson="lesson590"><img src="images/lesson-theory.png">Включаем механизм выпадания</button>
    <button @click="setLesson(591)" data-lesson="lesson591"><img src="images/lesson-theory.png">Состояние "открытое подменю"</button>
    <button @click="setLesson(592)" data-lesson="lesson592"><img src="images/lesson-test.png">Испытание: выпадающее меню</button>
  </div>

  <div class="menu-level-4-course-29" v-if="level == 4 && course == 29">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Мастерские"<img src="images/folders/workshop.svg"></button>
    <button @click="setLesson(593)" data-lesson="lesson593"><img src="images/lesson-theory.png">Социальные кнопки, шаг 1</button>
    <button @click="setLesson(594)" data-lesson="lesson594"><img src="images/lesson-theory.png">Социальные кнопки, шаг 2</button>
    <button @click="setLesson(595)" data-lesson="lesson595"><img src="images/lesson-theory.png">Социальные кнопки, шаг 3</button>
    <button @click="setLesson(596)" data-lesson="lesson596"><img src="images/lesson-theory.png">Переключатель страниц, шаг 1</button>
    <button @click="setLesson(597)" data-lesson="lesson597"><img src="images/lesson-theory.png">Переключатель страниц, шаг 2</button>
    <button @click="setLesson(598)" data-lesson="lesson598"><img src="images/lesson-theory.png">Переключатель страниц, шаг 3</button>
    <button @click="setLesson(599)" data-lesson="lesson599"><img src="images/lesson-theory.png">Переключатель страниц, шаг 4</button>
    <button @click="setLesson(600)" data-lesson="lesson600"><img src="images/lesson-theory.png">Переключатель страниц, тестирование</button>
    <button @click="setLesson(601)" data-lesson="lesson601"><img src="images/lesson-test.png">Испытание: карточка курса</button>
    <button @click="setLesson(602)" data-lesson="lesson602"><img src="images/lesson-theory.png">Контакты, шаг 1</button>
    <button @click="setLesson(603)" data-lesson="lesson603"><img src="images/lesson-theory.png">Контакты, шаг 2</button>
    <button @click="setLesson(604)" data-lesson="lesson604"><img src="images/lesson-theory.png">Контакты, шаг 3</button>
    <button @click="setLesson(605)" data-lesson="lesson605"><img src="images/lesson-theory.png">Комментарии, шаг 1</button>
    <button @click="setLesson(606)" data-lesson="lesson606"><img src="images/lesson-theory.png">Комментарии, шаг 2</button>
    <button @click="setLesson(607)" data-lesson="lesson607"><img src="images/lesson-theory.png">Комментарии, шаг 3</button>
    <button @click="setLesson(608)" data-lesson="lesson608"><img src="images/lesson-theory.png">Комментарии, шаг 4</button>
    <button @click="setLesson(609)" data-lesson="lesson609"><img src="images/lesson-theory.png">Комментарии, шаг 5</button>
    <button @click="setLesson(610)" data-lesson="lesson610"><img src="images/lesson-test.png">Испытание: анонс поста</button>
  </div>

  <div class="menu-level-4-course-30" v-if="level == 4 && course == 30">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Мастерские"<img src="images/folders/workshop.svg"></button>
    <button @click="setLesson(611)" data-lesson="lesson611"><img src="images/lesson-theory.png">Маска при наведении, шаг 1</button>
    <button @click="setLesson(612)" data-lesson="lesson612"><img src="images/lesson-theory.png">Маска при наведении, шаг 2</button>
    <button @click="setLesson(613)" data-lesson="lesson613"><img src="images/lesson-theory.png">Маска при наведении, шаг 3</button>
    <button @click="setLesson(614)" data-lesson="lesson614"><img src="images/lesson-theory.png">Маска при наведении, шаг 4</button>
    <button @click="setLesson(615)" data-lesson="lesson615"><img src="images/lesson-theory.png">Выдвигающееся описание, шаг 1</button>
    <button @click="setLesson(616)" data-lesson="lesson616"><img src="images/lesson-theory.png">Выдвигающееся описание, шаг 2</button>
    <button @click="setLesson(617)" data-lesson="lesson617"><img src="images/lesson-theory.png">Выдвигающееся описание, шаг 3</button>
    <button @click="setLesson(618)" data-lesson="lesson618"><img src="images/lesson-theory.png">Эффектные ссылки, шаг 1</button>
    <button @click="setLesson(619)" data-lesson="lesson619"><img src="images/lesson-theory.png">Эффектные ссылки, шаг 2</button>
    <button @click="setLesson(620)" data-lesson="lesson620"><img src="images/lesson-theory.png">Эффектные ссылки, шаг 3</button>
    <button @click="setLesson(621)" data-lesson="lesson621"><img src="images/lesson-theory.png">Эффектные ссылки, шаг 4</button>
    <button @click="setLesson(622)" data-lesson="lesson622"><img src="images/lesson-theory.png">Эффектные ссылки, шаг 5</button>
    <button @click="setLesson(623)" data-lesson="lesson623"><img src="images/lesson-theory.png">Эффектные ссылки, шаг 6</button>
    <button @click="setLesson(624)" data-lesson="lesson624"><img src="images/lesson-theory.png">Эффектные ссылки, всё вместе</button>
    <button @click="setLesson(625)" data-lesson="lesson625"><img src="images/lesson-theory.png">Закруглённые внутрь углы, шаг 1</button>
    <button @click="setLesson(626)" data-lesson="lesson626"><img src="images/lesson-theory.png">Закруглённые внутрь углы, шаг 2</button>
    <button @click="setLesson(627)" data-lesson="lesson627"><img src="images/lesson-theory.png">Закруглённые внутрь углы, шаг 3</button>
    <button @click="setLesson(628)" data-lesson="lesson628"><img src="images/lesson-theory.png">Закруглённые внутрь углы, шаг 4</button>
    <button @click="setLesson(629)" data-lesson="lesson629"><img src="images/lesson-test.png">Испытание: статистика браузеров</button>
    <button @click="setLesson(630)" data-lesson="lesson630"><img src="images/lesson-theory.png">Слайдер на <b class="marked-name">CSS</b>, шаг 1</button>
    <button @click="setLesson(631)" data-lesson="lesson631"><img src="images/lesson-theory.png">Слайдер на <b class="marked-name">CSS</b>, шаг 2</button>
    <button @click="setLesson(632)" data-lesson="lesson632"><img src="images/lesson-theory.png">Слайдер на <b class="marked-name">CSS</b>, шаг 3</button>
    <button @click="setLesson(633)" data-lesson="lesson633"><img src="images/lesson-theory.png">Слайдер на <b class="marked-name">CSS</b>, шаг 4</button>
    <button @click="setLesson(634)" data-lesson="lesson634"><img src="images/lesson-theory.png">Хлебные крошки, шаг 1</button>
    <button @click="setLesson(635)" data-lesson="lesson635"><img src="images/lesson-theory.png">Хлебные крошки, шаг 2</button>
    <button @click="setLesson(636)" data-lesson="lesson636"><img src="images/lesson-theory.png">Хлебные крошки, шаг 3</button>
    <button @click="setLesson(637)" data-lesson="lesson637"><img src="images/lesson-theory.png">Хлебные крошки, шаг 4</button>
    <button @click="setLesson(638)" data-lesson="lesson638"><img src="images/lesson-theory.png">Хлебные крошки, шаг 5</button>
    <button @click="setLesson(639)" data-lesson="lesson639"><img src="images/lesson-theory.png">Маркер на карте, шаг 1</button>
    <button @click="setLesson(640)" data-lesson="lesson640"><img src="images/lesson-theory.png">Маркер на карте, шаг 2</button>
    <button @click="setLesson(641)" data-lesson="lesson641"><img src="images/lesson-test.png">Испытание: щит Завтрамэна</button>
  </div>

  <div class="menu-level-4-course-31" v-if="level == 4 && course == 31">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "<b class="marked-name">SVG</b>-графика"<img src="images/folders/svg.svg"></button>
    <button @click="setLesson(642)" data-lesson="lesson642"><img src="images/lesson-theory.png">Привет, <b class="marked-name">SVG</b>!</button>
    <button @click="setLesson(643)" data-lesson="lesson643"><img src="images/lesson-theory.png">Рисуем прямоугольник</button>
    <button @click="setLesson(644)" data-lesson="lesson644"><img src="images/lesson-theory.png">Координаты прямоугольника</button>
    <button @click="setLesson(645)" data-lesson="lesson645"><img src="images/lesson-theory.png">Скругление углов</button>
    <button @click="setLesson(646)" data-lesson="lesson646"><img src="images/lesson-test.png">Испытание: починка телевизора</button>
    <button @click="setLesson(647)" data-lesson="lesson647"><img src="images/lesson-theory.png">Многоугольники</button>
    <button @click="setLesson(648)" data-lesson="lesson648"><img src="images/lesson-test.png">Испытание: пирамиды</button>
    <button @click="setLesson(649)" data-lesson="lesson649"><img src="images/lesson-theory.png">Рисуем окружность</button>
    <button @click="setLesson(650)" data-lesson="lesson650"><img src="images/lesson-test.png">Испытание: мишень</button>
    <button @click="setLesson(651)" data-lesson="lesson651"><img src="images/lesson-theory.png">Рисуем эллипс</button>
    <button @click="setLesson(652)" data-lesson="lesson652"><img src="images/lesson-test.png">Испытание: удивлённый смайлик</button>
    <button @click="setLesson(653)" data-lesson="lesson653"><img src="images/lesson-theory.png">Рисуем линии</button>
    <button @click="setLesson(654)" data-lesson="lesson654"><img src="images/lesson-test.png">Испытание: арифметические знаки</button>
    <button @click="setLesson(655)" data-lesson="lesson655"><img src="images/lesson-theory.png">Рисуем ломаные линии</button>
    <button @click="setLesson(656)" data-lesson="lesson656"><img src="images/lesson-test.png">Испытание: воздушные шары</button>
  </div>

  <div class="menu-level-4-course-32" v-if="level == 4 && course == 32">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "<b class="marked-name">SVG</b>-графика"<img src="images/folders/svg.svg"></button>
    <button @click="setLesson(657)" data-lesson="lesson657"><img src="images/lesson-theory.png">Заливки</button>
    <button @click="setLesson(658)" data-lesson="lesson658"><img src="images/lesson-theory.png">Прозрачность заливки</button>
    <button @click="setLesson(659)" data-lesson="lesson659"><img src="images/lesson-theory.png">Отсутствие заливки</button>
    <button @click="setLesson(660)" data-lesson="lesson660"><img src="images/lesson-test.png">Испытание: разноцветные квадраты</button>
    <button @click="setLesson(661)" data-lesson="lesson661"><img src="images/lesson-theory.png">Обводки</button>
    <button @click="setLesson(662)" data-lesson="lesson662"><img src="images/lesson-theory.png">Толщина обводки</button>
    <button @click="setLesson(663)" data-lesson="lesson663"><img src="images/lesson-theory.png">Прозрачность обводки</button>
    <button @click="setLesson(664)" data-lesson="lesson664"><img src="images/lesson-test.png">Испытание: толщина и прозрачность обводки</button>
    <button @click="setLesson(665)" data-lesson="lesson665"><img src="images/lesson-theory.png">Концы линий</button>
    <button @click="setLesson(666)" data-lesson="lesson666"><img src="images/lesson-theory.png">Вид сгибов</button>
    <button @click="setLesson(667)" data-lesson="lesson667"><img src="images/lesson-test.png">Испытание: зигзаг</button>
    <button @click="setLesson(668)" data-lesson="lesson668"><img src="images/lesson-theory.png">Пунктирные линии, часть 1</button>
    <button @click="setLesson(669)" data-lesson="lesson669"><img src="images/lesson-theory.png">Пунктирные линии, часть 2</button>
    <button @click="setLesson(670)" data-lesson="lesson670"><img src="images/lesson-test.png">Испытание: восход солнца</button>
    <button @click="setLesson(671)" data-lesson="lesson671"><img src="images/lesson-theory.png">Спасательный круг, часть 1</button>
    <button @click="setLesson(672)" data-lesson="lesson672"><img src="images/lesson-theory.png">Спасательный круг, часть 2</button>
    <button @click="setLesson(673)" data-lesson="lesson673"><img src="images/lesson-theory.png">Спасательный круг, часть 3</button>
    <button @click="setLesson(674)" data-lesson="lesson674"><img src="images/lesson-theory.png">Спасательный круг, часть 4</button>
    <button @click="setLesson(675)" data-lesson="lesson675"><img src="images/lesson-theory.png">Сдвиг обводки</button>
    <button @click="setLesson(676)" data-lesson="lesson676"><img src="images/lesson-test.png">Испытание: леденец</button>
  </div>

  <div class="menu-level-4-course-33" v-if="level == 4 && course == 33">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "<b class="marked-name">SVG</b>-графика"<img src="images/folders/svg.svg"></button>
    <button @click="setLesson(677)" data-lesson="lesson677"><img src="images/lesson-theory.png">Ширина и высота <b class="marked-name">SVG</b></button>
    <button @click="setLesson(678)" data-lesson="lesson678"><img src="images/lesson-theory.png">Атрибут <b class="marked-css">viewBox</b></button>
    <button @click="setLesson(679)" data-lesson="lesson679"><img src="images/lesson-theory.png"><b class="marked-css">viewBox</b> и размеры</button>
    <button @click="setLesson(680)" data-lesson="lesson680"><img src="images/lesson-test.png">Испытание: рыбка</button>
    <button @click="setLesson(681)" data-lesson="lesson681"><img src="images/lesson-theory.png">Атрибут <b class="marked-css">preserveAspectRatio</b></button>
    <button @click="setLesson(682)" data-lesson="lesson682"><img src="images/lesson-theory.png">Резиновый фон с <b class="marked-css">preserveAspectRatio</b></button>
    <button @click="setLesson(683)" data-lesson="lesson683"><img src="images/lesson-test.png">Испытание: резиновые полосы</button>
    <button @click="setLesson(684)" data-lesson="lesson684"><img src="images/lesson-theory.png">Выравнивание в <b class="marked-css">preserveAspectRatio</b></button>
    <button @click="setLesson(685)" data-lesson="lesson685"><img src="images/lesson-theory.png"><b class="marked-css">preserveAspectRatio</b> и <b class="marked-css">viewBox</b></button>
    <button @click="setLesson(686)" data-lesson="lesson686"><img src="images/lesson-theory.png">Заполнение пространства</button>
    <button @click="setLesson(687)" data-lesson="lesson687"><img src="images/lesson-test.png">Испытание: радуга</button>
    <button @click="setLesson(688)" data-lesson="lesson688"><img src="images/lesson-theory.png">Единицы измерения</button>
    <button @click="setLesson(689)" data-lesson="lesson689"><img src="images/lesson-theory.png">Системы координат</button>
    <button @click="setLesson(690)" data-lesson="lesson690"><img src="images/lesson-theory.png">Системы координат и трансформации</button>
    <button @click="setLesson(691)" data-lesson="lesson691"><img src="images/lesson-test.png">Испытание: жёлтый лист</button>
  </div>

  <div class="menu-level-4-course-34" v-if="level == 4 && course == 34">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Динамические эффекты"<img src="images/folders/dynamic.svg"></button>
    <button @click="setLesson(692)" data-lesson="lesson692"><img src="images/lesson-theory.png">Перемещение по горизонтали</button>
    <button @click="setLesson(693)" data-lesson="lesson693"><img src="images/lesson-theory.png">Перемещение по вертикали</button>
    <button @click="setLesson(694)" data-lesson="lesson694"><img src="images/lesson-theory.png">Тренировка фаерболов</button>
    <button @click="setLesson(695)" data-lesson="lesson695"><img src="images/lesson-theory.png">Увеличение, уменьшение</button>
    <button @click="setLesson(696)" data-lesson="lesson696"><img src="images/lesson-theory.png">Защита города</button>
    <button @click="setLesson(697)" data-lesson="lesson697"><img src="images/lesson-theory.png">Начало путешествия</button>
    <button @click="setLesson(698)" data-lesson="lesson698"><img src="images/lesson-theory.png">Лабиринт</button>
    <button @click="setLesson(699)" data-lesson="lesson699"><img src="images/lesson-theory.png">Битва - часть 1</button>
    <button @click="setLesson(700)" data-lesson="lesson700"><img src="images/lesson-theory.png">Битва - часть 2</button>
    <button @click="setLesson(701)" data-lesson="lesson701"><img src="images/lesson-test.png">Испытание: таинственная карта</button>
    <button @click="setLesson(702)" data-lesson="lesson702"><img src="images/lesson-theory.png">Битва - часть 3</button>
    <button @click="setLesson(703)" data-lesson="lesson703"><img src="images/lesson-test.png">Испытание: расколотый кристалл</button>
    <button @click="setLesson(704)" data-lesson="lesson704"><img src="images/lesson-theory.png">Финальная битва</button>
    <button @click="setLesson(705)" data-lesson="lesson705"><img src="images/lesson-theory.png">Особенности <b class="marked-css">transform-origin</b> - часть 1</button>
    <button @click="setLesson(706)" data-lesson="lesson706"><img src="images/lesson-theory.png">Особенности <b class="marked-css">transform-origin</b> - часть 2</button>
    <button @click="setLesson(707)" data-lesson="lesson707"><img src="images/lesson-theory.png">Особенности <b class="marked-css">transform-origin</b> - часть 3</button>
    <button @click="setLesson(708)" data-lesson="lesson708"><img src="images/lesson-theory.png">Особенности <b class="marked-css">transform-origin</b> - часть 4</button>
    <button @click="setLesson(709)" data-lesson="lesson709"><img src="images/lesson-theory.png">Центровка с помощью <b class="marked-css">transform: translate</button>
    <button @click="setLesson(710)" data-lesson="lesson710"><img src="images/lesson-theory.png">Поворот текста в блоках</button>
    <button @click="setLesson(711)" data-lesson="lesson711"><img src="images/lesson-theory.png">Поворот текста в фоне</button>
    <button @click="setLesson(712)" data-lesson="lesson712"><img src="images/lesson-theory.png">Нестандартные тени</button>
    <button @click="setLesson(713)" data-lesson="lesson713"><img src="images/lesson-theory.png">Эффекты при наведении: кнопки - часть 1</button>
    <button @click="setLesson(714)" data-lesson="lesson714"><img src="images/lesson-theory.png">Эффекты при наведении: кнопки - часть 2</button>
    <button @click="setLesson(715)" data-lesson="lesson715"><img src="images/lesson-theory.png">Эффекты при наведении: кнопки - часть 3</button>
    <button @click="setLesson(716)" data-lesson="lesson716"><img src="images/lesson-theory.png">Эффекты при наведении: галерея</button>
    <button @click="setLesson(717)" data-lesson="lesson717"><img src="images/lesson-theory.png">"Стопка" карт</button>
    <button @click="setLesson(718)" data-lesson="lesson718"><img src="images/lesson-theory.png">Круговое меню, подготовка</button>
    <button @click="setLesson(719)" data-lesson="lesson719"><img src="images/lesson-theory.png">Круговое меню, шаг 1</button>
    <button @click="setLesson(720)" data-lesson="lesson720"><img src="images/lesson-theory.png">Круговое меню, шаг 2</button>
    <button @click="setLesson(721)" data-lesson="lesson721"><img src="images/lesson-theory.png">Круговое меню, шаг 3</button>
    <button @click="setLesson(722)" data-lesson="lesson722"><img src="images/lesson-theory.png">Круговое меню, финал</button>
    <button @click="setLesson(723)" data-lesson="lesson723"><img src="images/lesson-test.png">Испытание: раскладка карт</button>
  </div>

  <div class="menu-level-4-course-35" v-if="level == 4 && course == 35">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Динамические эффекты"<img src="images/folders/dynamic.svg"></button>
    <button @click="setLesson(724)" data-lesson="lesson724"><img src="images/lesson-theory.png">Длительность перехода, <b class="marked-css">transition-duration</b></button>
    <button @click="setLesson(725)" data-lesson="lesson725"><img src="images/lesson-theory.png">Длительность перехода, шаг 2</button>
    <button @click="setLesson(726)" data-lesson="lesson726"><img src="images/lesson-theory.png"><b class="marked-css">transition-property</b>: какие свойства изменять плавно?</button>
    <button @click="setLesson(727)" data-lesson="lesson727"><img src="images/lesson-theory.png">Задержка перехода, <b class="marked-css">transition-delay</b></button>
    <button @click="setLesson(728)" data-lesson="lesson728"><img src="images/lesson-theory.png">"Форма" перехода, <b class="marked-css">transition-timing-function</b></button>
    <button @click="setLesson(729)" data-lesson="lesson729"><img src="images/lesson-theory.png"><b class="marked-css">transition-timing-function</b>, шаг 2</button>
    <button @click="setLesson(730)" data-lesson="lesson730"><img src="images/lesson-theory.png"><b class="marked-css">transition-timing-function</b>, шаг 3</button>
    <button @click="setLesson(731)" data-lesson="lesson731"><img src="images/lesson-theory.png"><b class="marked-css">transition-timing-function</b>, шаг 4</button>
    <button @click="setLesson(732)" data-lesson="lesson732"><img src="images/lesson-theory.png">Бумажные кнопки, шаг 1</button>
    <button @click="setLesson(733)" data-lesson="lesson733"><img src="images/lesson-theory.png">Бумажные кнопки, шаг 2</button>
    <button @click="setLesson(734)" data-lesson="lesson734"><img src="images/lesson-theory.png">Бумажные кнопки, шаг 3</button>
    <button @click="setLesson(735)" data-lesson="lesson735"><img src="images/lesson-theory.png">Чекбоксы, шаг 1</button>
    <button @click="setLesson(736)" data-lesson="lesson736"><img src="images/lesson-theory.png">Чекбоксы, шаг 2</button>
    <button @click="setLesson(737)" data-lesson="lesson737"><img src="images/lesson-theory.png">Чекбоксы, шаг 3</button>
    <button @click="setLesson(738)" data-lesson="lesson738"><img src="images/lesson-theory.png">Радио-кнопки, шаг 1</button>
    <button @click="setLesson(739)" data-lesson="lesson739"><img src="images/lesson-theory.png">Радио-кнопки, шаг 2</button>
    <button @click="setLesson(740)" data-lesson="lesson740"><img src="images/lesson-theory.png">Радио-кнопки, шаг 3</button>
    <button @click="setLesson(741)" data-lesson="lesson741"><img src="images/lesson-theory.png">Переключатели, шаг 1</button>
    <button @click="setLesson(742)" data-lesson="lesson742"><img src="images/lesson-theory.png">Переключатели, шаг 2</button>
    <button @click="setLesson(743)" data-lesson="lesson743"><img src="images/lesson-theory.png">Переключатели, шаг 3</button>
    <button @click="setLesson(744)" data-lesson="lesson744"><img src="images/lesson-theory.png">Переключатели, шаг 4</button>
    <button @click="setLesson(745)" data-lesson="lesson745"><img src="images/lesson-theory.png">Иконка-трансформер, шаг 1</button>
    <button @click="setLesson(746)" data-lesson="lesson746"><img src="images/lesson-theory.png">Иконка-трансформер, шаг 2</button>
    <button @click="setLesson(747)" data-lesson="lesson747"><img src="images/lesson-theory.png">Иконка-трансформер, шаг 3</button>
    <button @click="setLesson(748)" data-lesson="lesson748"><img src="images/lesson-theory.png">Иконка-трансформер, шаг 4</button>
    <button @click="setLesson(749)" data-lesson="lesson749"><img src="images/lesson-theory.png">Текстовое поле ввода, шаг 1</button>
    <button @click="setLesson(750)" data-lesson="lesson750"><img src="images/lesson-theory.png">Текстовое поле ввода, шаг 2</button>
    <button @click="setLesson(751)" data-lesson="lesson751"><img src="images/lesson-theory.png">Текстовое поле ввода, шаг 3</button>
    <button @click="setLesson(752)" data-lesson="lesson752"><img src="images/lesson-theory.png">Текстовое поле ввода, шаг 4</button>
  </div>

  <div class="menu-level-4-course-36" v-if="level == 4 && course == 36">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Динамические эффекты"<img src="images/folders/dynamic.svg"></button>
    <button @click="setLesson(753)" data-lesson="lesson753"><img src="images/lesson-theory.png">Привет, <b class="marked-css">animation</b>!</button>
    <button @click="setLesson(754)" data-lesson="lesson754"><img src="images/lesson-theory.png"><b class="marked-css">@keyframes</b>: раскадровка</button>
    <button @click="setLesson(755)" data-lesson="lesson755"><img src="images/lesson-theory.png"><b class="marked-css">@keyframes</b>: from</b> и to</b></button>
    <button @click="setLesson(756)" data-lesson="lesson756"><img src="images/lesson-theory.png"><b class="marked-css">@keyframes</b>: группировка кадров</button>
    <button @click="setLesson(757)" data-lesson="lesson757"><img src="images/lesson-theory.png">Множественная анимация, шаг 1</button>
    <button @click="setLesson(758)" data-lesson="lesson758"><img src="images/lesson-theory.png">Множественная анимация, шаг 2</button>
    <button @click="setLesson(759)" data-lesson="lesson759"><img src="images/lesson-theory.png">Водное путешествие</button>
    <button @click="setLesson(760)" data-lesson="lesson760"><img src="images/lesson-theory.png">Количество проигрываний анимации: <b class="marked-css">animation-iteration-count</b></button>
    <button @click="setLesson(761)" data-lesson="lesson761"><img src="images/lesson-theory.png">Направление анимации: <b class="marked-css">animation-direction</b>, шаг 1</button>
    <button @click="setLesson(762)" data-lesson="lesson762"><img src="images/lesson-theory.png">Направление анимации: <b class="marked-css">animation-direction</b>, шаг 2</button>
    <button @click="setLesson(763)" data-lesson="lesson763"><img src="images/lesson-theory.png">Задержка начала анимации: <b class="marked-css">animation-delay</b>, шаг 1</button>
    <button @click="setLesson(764)" data-lesson="lesson764"><img src="images/lesson-theory.png">Задержка начала анимации: <b class="marked-css">animation-delay</b>, шаг 2</button>
    <button @click="setLesson(765)" data-lesson="lesson765"><img src="images/lesson-theory.png">Задержка начала анимации: <b class="marked-css">animation-delay</b>, шаг 3</button>
    <button @click="setLesson(766)" data-lesson="lesson766"><img src="images/lesson-theory.png">Воздушное путешествие</button>
    <button @click="setLesson(767)" data-lesson="lesson767"><img src="images/lesson-theory.png">Состояние до и после анимации: <b class="marked-css">animation-fill-mode</b>, шаг 1</button>
    <button @click="setLesson(768)" data-lesson="lesson768"><img src="images/lesson-theory.png">Состояние до и после анимации: <b class="marked-css">animation-fill-mode</b>, шаг 2</button>
    <button @click="setLesson(769)" data-lesson="lesson769"><img src="images/lesson-theory.png">Состояние до и после анимации: <b class="marked-css">animation-fill-mode</b>, шаг 3</button>
    <button @click="setLesson(770)" data-lesson="lesson770"><img src="images/lesson-theory.png">Состояние до и после анимации: <b class="marked-css">animation-fill-mode</b>, шаг 4</button>
    <button @click="setLesson(771)" data-lesson="lesson771"><img src="images/lesson-theory.png">Состояние до и после анимации: <b class="marked-css">animation-fill-mode</b>, шаг 5</button>
    <button @click="setLesson(772)" data-lesson="lesson772"><img src="images/lesson-theory.png">Запуск фабрики, шаг 1</button>
    <button @click="setLesson(773)" data-lesson="lesson773"><img src="images/lesson-theory.png">Запуск фабрики, шаг 2</button>
    <button @click="setLesson(774)" data-lesson="lesson774"><img src="images/lesson-theory.png">Остановка и запуск анимации: <b class="marked-css">animation-play-state</b></button>
    <button @click="setLesson(775)" data-lesson="lesson775"><img src="images/lesson-theory.png">"Форма" анимации, <b class="marked-css">animation-timing-function</b></button>
    <button @click="setLesson(776)" data-lesson="lesson776"><img src="images/lesson-theory.png"><b class="marked-css">animation-timing-function</b>, шаг 2</button>
    <button @click="setLesson(777)" data-lesson="lesson777"><img src="images/lesson-theory.png"><b class="marked-css">animation-timing-function</b>, шаг 3</button>
    <button @click="setLesson(778)" data-lesson="lesson778"><img src="images/lesson-theory.png"><b class="marked-css">animation-timing-function</b>, шаг 4</button>
    <button @click="setLesson(779)" data-lesson="lesson779"><img src="images/lesson-theory.png">Ракета на старт, шаг 1</button>
    <button @click="setLesson(780)" data-lesson="lesson780"><img src="images/lesson-theory.png">Ракета на старт, шаг 2</button>
    <button @click="setLesson(781)" data-lesson="lesson781"><img src="images/lesson-theory.png">Посадка, шаг 1</button>
    <button @click="setLesson(782)" data-lesson="lesson782"><img src="images/lesson-theory.png">Посадка, шаг 2</button>
    <button @click="setLesson(783)" data-lesson="lesson783"><img src="images/lesson-theory.png">Посадка, шаг 3</button>
  </div>

  <div class="menu-level-4-course-37" v-if="level == 4 && course == 37">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Препроцессор <b class="marked-name">LESS</b>"<img src="images/folders/less.svg"></button>
    <button @click="setLesson(784)" data-lesson="lesson784"><img src="images/lesson-theory.png">Введение</button>
    <button @click="setLesson(785)" data-lesson="lesson785"><img src="images/lesson-theory.png">Переменные, шаг 1</button>
    <button @click="setLesson(786)" data-lesson="lesson786"><img src="images/lesson-theory.png">Переменные, шаг 2</button>
    <button @click="setLesson(787)" data-lesson="lesson787"><img src="images/lesson-theory.png">Цветовые функции, шаг 1</button>
    <button @click="setLesson(788)" data-lesson="lesson788"><img src="images/lesson-theory.png">Вложенные правила, шаг 1</button>
    <button @click="setLesson(789)" data-lesson="lesson789"><img src="images/lesson-theory.png">Вложенные правила, шаг 2</button>
    <button @click="setLesson(790)" data-lesson="lesson790"><img src="images/lesson-theory.png">Математические операции, шаг 1</button>
    <button @click="setLesson(791)" data-lesson="lesson791"><img src="images/lesson-theory.png">Математические операции, шаг 2</button>
    <button @click="setLesson(792)" data-lesson="lesson792"><img src="images/lesson-theory.png">Математические операции, шаг 3</button>
    <button @click="setLesson(793)" data-lesson="lesson793"><img src="images/lesson-theory.png">Цветовые функции, шаг 2</button>
    <button @click="setLesson(794)" data-lesson="lesson794"><img src="images/lesson-theory.png">Цветовые функции, шаг 3</button>
    <button @click="setLesson(795)" data-lesson="lesson795"><img src="images/lesson-theory.png">Цветовые функции, шаг 4</button>
    <button @click="setLesson(796)" data-lesson="lesson796"><img src="images/lesson-theory.png">Цветовые функции, шаг 5</button>
    <button @click="setLesson(797)" data-lesson="lesson797"><img src="images/lesson-test.png">Испытание: палитра</button>
  </div>

  <div class="menu-level-4-course-38" v-if="level == 4 && course == 38">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Препроцессор <b class="marked-name">LESS</b>"<img src="images/folders/less.svg"></button>
    <button @click="setLesson(798)" data-lesson="lesson798"><img src="images/lesson-theory.png">Вспоминаем переменные</button>
    <button @click="setLesson(799)" data-lesson="lesson799"><img src="images/lesson-theory.png"><b class="marked-name">Примеси</b></button>
    <button @click="setLesson(800)" data-lesson="lesson800"><img src="images/lesson-theory.png">Несколько <b class="marked-name">примесей</b></button>
    <button @click="setLesson(801)" data-lesson="lesson801"><img src="images/lesson-theory.png"><b class="marked-name">Примесь</b> с параметром</button>
    <button @click="setLesson(802)" data-lesson="lesson802"><img src="images/lesson-theory.png"><b class="marked-name">Примесь</b> с параметром, часть 2</button>
    <button @click="setLesson(803)" data-lesson="lesson803"><img src="images/lesson-theory.png">Значение параметра <b class="marked-name">примеси</b> по умолчанию</button>
    <button @click="setLesson(804)" data-lesson="lesson804"><img src="images/lesson-theory.png"><b class="marked-name">Примесь</b> с несколькими параметрами</button>
    <button @click="setLesson(805)" data-lesson="lesson805"><img src="images/lesson-test.png">Испытание: части головоломки</button>
    <button @click="setLesson(806)" data-lesson="lesson806"><img src="images/lesson-theory.png">Шаблоны <b class="marked-name">примесей</b></button>
    <button @click="setLesson(807)" data-lesson="lesson807"><img src="images/lesson-theory.png">Шаблоны <b class="marked-name">примесей</b>, часть 2</button>
    <button @click="setLesson(808)" data-lesson="lesson808"><img src="images/lesson-theory.png">Шаблоны <b class="marked-name">примесей</b>, часть 3</button>
    <button @click="setLesson(809)" data-lesson="lesson809"><img src="images/lesson-test.png">Испытание: <b class="marked-name">примеси</b> и портреты</button>
    <button @click="setLesson(810)" data-lesson="lesson810"><img src="images/lesson-theory.png"><b class="marked-name">Примесь</b> с условием</button>
    <button @click="setLesson(811)" data-lesson="lesson811"><img src="images/lesson-theory.png"><b class="marked-name">Примесь</b> с условием, часть 2</button>
    <button @click="setLesson(812)" data-lesson="lesson812"><img src="images/lesson-theory.png">Условия и внешние переменные</button>
    <button @click="setLesson(813)" data-lesson="lesson813"><img src="images/lesson-theory.png">Условия и типы параметров</button>
    <button @click="setLesson(814)" data-lesson="lesson814"><img src="images/lesson-test.png">Испытание: <b class="marked-name">примеси</b> и портреты, часть 2</button>
    <button @click="setLesson(815)" data-lesson="lesson815"><img src="images/lesson-theory.png">Переменные-вставки</button>
    <button @click="setLesson(816)" data-lesson="lesson816"><img src="images/lesson-theory.png">Цикл</button>
    <button @click="setLesson(817)" data-lesson="lesson817"><img src="images/lesson-theory.png">Цикл, часть 2</button>
    <button @click="setLesson(818)" data-lesson="lesson818"><img src="images/lesson-test.png">Испытание: разноцветные ступеньки</button>
    <button @click="setLesson(819)" data-lesson="lesson819"><img src="images/lesson-theory.png">Вертикальный ритм текста</button>
    <button @click="setLesson(820)" data-lesson="lesson820"><img src="images/lesson-theory.png">Вертикальный ритм текста, часть 2</button>
    <button @click="setLesson(821)" data-lesson="lesson821"><img src="images/lesson-theory.png">Цвета блоков-оповещений</button>
    <button @click="setLesson(822)" data-lesson="lesson822"><img src="images/lesson-theory.png">Цвета блоков-оповещений, часть 2</button>
    <button @click="setLesson(823)" data-lesson="lesson823"><img src="images/lesson-theory.png"><b class="marked-name">Примесь</b> для центрировки блока</button>
    <button @click="setLesson(824)" data-lesson="lesson824"><img src="images/lesson-theory.png"><b class="marked-name">Примесь</b> для треугольных форм</button>
    <button @click="setLesson(825)" data-lesson="lesson825"><img src="images/lesson-theory.png"><b class="marked-name">Примесь</b> для треугольных форм, часть 2</button>
    <button @click="setLesson(826)" data-lesson="lesson826"><img src="images/lesson-theory.png"><b class="marked-name">Примесь</b> для треугольных форм, часть 3</button>
    <button @click="setLesson(827)" data-lesson="lesson827"><img src="images/lesson-test.png">Испытание: круглая стрелка с помощью рамки</button>
  </div>

  <div class="menu-level-4-course-39" v-if="level == 4 && course == 39">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Великий Кексби"<img src="images/folders/keksby.svg"></button>
    <button @click="setLesson(828)" data-lesson="lesson828"><img src="images/lesson-theory.png">"Шапка" сайта</button>
    <button @click="setLesson(829)" data-lesson="lesson829"><img src="images/lesson-theory.png">Раздел "Наши особенности"</button>
    <button @click="setLesson(830)" data-lesson="lesson830"><img src="images/lesson-theory.png">Раздел "Наши особенности", часть 2</button>
    <button @click="setLesson(831)" data-lesson="lesson831"><img src="images/lesson-theory.png">Раздел "Немного теории"</button>
    <button @click="setLesson(832)" data-lesson="lesson832"><img src="images/lesson-theory.png">Раздел "Отзывы"</button>
    <button @click="setLesson(833)" data-lesson="lesson833"><img src="images/lesson-theory.png">Раздел "Отзывы", часть 2</button>
    <button @click="setLesson(834)" data-lesson="lesson834"><img src="images/lesson-theory.png">Раздел "Популярные товары"</button>
    <button @click="setLesson(835)" data-lesson="lesson835"><img src="images/lesson-theory.png">Раздел "Популярные товары", часть 2</button>
    <button @click="setLesson(836)" data-lesson="lesson836"><img src="images/lesson-theory.png">"Подвал" сайта</button>
    <button @click="setLesson(837)" data-lesson="lesson837"><img src="images/lesson-theory.png">"Подвал" сайта, часть 2</button>
  </div>

  <div class="menu-level-4-course-40" v-if="level == 4 && course == 40">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Великий Кексби"<img src="images/folders/keksby.svg"></button>
    <button @click="setLesson(838)" data-lesson="lesson838"><img src="images/lesson-theory.png">Язык и кодировка страницы</button>
    <button @click="setLesson(839)" data-lesson="lesson839"><img src="images/lesson-theory.png">Навигационное меню в шапке</button>
    <button @click="setLesson(840)" data-lesson="lesson840"><img src="images/lesson-theory.png">Раздел "Наши особенности"</button>
    <button @click="setLesson(841)" data-lesson="lesson841"><img src="images/lesson-theory.png">Раздел "Немного теории"</button>
    <button @click="setLesson(842)" data-lesson="lesson842"><img src="images/lesson-theory.png">Раздел "Немного теории", часть 2</button>
    <button @click="setLesson(843)" data-lesson="lesson843"><img src="images/lesson-theory.png">Раздел "Немного теории", часть 3</button>
    <button @click="setLesson(844)" data-lesson="lesson844"><img src="images/lesson-theory.png">Раздел "Отзывы"</button>
    <button @click="setLesson(845)" data-lesson="lesson845"><img src="images/lesson-theory.png">Раздел "Популярные товары"</button>
    <button @click="setLesson(846)" data-lesson="lesson846"><img src="images/lesson-theory.png">Навигация в подвале</button>
    <button @click="setLesson(847)" data-lesson="lesson847"><img src="images/lesson-theory.png">Навигация в подвале, часть 2</button>
    <button @click="setLesson(848)" data-lesson="lesson848"><img src="images/lesson-theory.png">Навигация в подвале, часть 3</button>
  </div>

  <div class="menu-level-4-course-41" v-if="level == 4 && course == 41">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Великий Кексби"<img src="images/folders/keksby.svg"></button>
    <button @click="setLesson(849)" data-lesson="lesson849"><img src="images/lesson-theory.png">Логотип в шапке сайта</button>
    <button @click="setLesson(850)" data-lesson="lesson850"><img src="images/lesson-theory.png">Ссылки навигационного меню</button>
    <button @click="setLesson(851)" data-lesson="lesson851"><img src="images/lesson-theory.png">Другие ссылки в шапке</button>
    <button @click="setLesson(852)" data-lesson="lesson852"><img src="images/lesson-theory.png">Ссылка "Справочник"</button>
    <button @click="setLesson(853)" data-lesson="lesson853"><img src="images/lesson-theory.png">Ссылки на источники в разделе "Немного теории"</button>
    <button @click="setLesson(854)" data-lesson="lesson854"><img src="images/lesson-theory.png">Иллюстрации статей в разделе "Немного теории"</button>
    <button @click="setLesson(855)" data-lesson="lesson855"><img src="images/lesson-theory.png">Ссылка "Все отзывы"</button>
    <button @click="setLesson(856)" data-lesson="lesson856"><img src="images/lesson-theory.png">Ссылка "Каталог"</button>
    <button @click="setLesson(857)" data-lesson="lesson857"><img src="images/lesson-theory.png">Изображения товаров</button>
    <button @click="setLesson(858)" data-lesson="lesson858"><img src="images/lesson-theory.png">Оставшиеся изображения товаров</button>
    <button @click="setLesson(859)" data-lesson="lesson859"><img src="images/lesson-theory.png">Кнопки в товарах</button>
    <button @click="setLesson(860)" data-lesson="lesson860"><img src="images/lesson-theory.png">Завершаем верхнюю часть подвала</button>
    <button @click="setLesson(861)" data-lesson="lesson861"><img src="images/lesson-theory.png">Завершаем навигацию в подвале</button>
    <button @click="setLesson(862)" data-lesson="lesson862"><img src="images/lesson-theory.png">"Социальный" раздел</button>
    <button @click="setLesson(863)" data-lesson="lesson863"><img src="images/lesson-theory.png">Раздел о разработчиках</button>
  </div>

  <div class="menu-level-4-course-42" v-if="level == 4 && course == 42">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Великий Кексби"<img src="images/folders/keksby.svg"></button>
    <button @click="setLesson(864)" data-lesson="lesson864"><img src="images/lesson-theory.png">Добавим заголовок и таблицу</button>
    <button @click="setLesson(865)" data-lesson="lesson865"><img src="images/lesson-theory.png">"Шапка" таблицы</button>
    <button @click="setLesson(866)" data-lesson="lesson866"><img src="images/lesson-theory.png">Ещё одна строка в таблице</button>
    <button @click="setLesson(867)" data-lesson="lesson867"><img src="images/lesson-theory.png">Оставшиеся строки в таблице</button>
    <button @click="setLesson(868)" data-lesson="lesson868"><img src="images/lesson-theory.png">Рамки ячеек таблицы</button>
    <button @click="setLesson(869)" data-lesson="lesson869"><img src="images/lesson-theory.png">Оформляем рамки таблицы</button>
    <button @click="setLesson(870)" data-lesson="lesson870"><img src="images/lesson-theory.png">Оформляем ячейки таблицы</button>
    <button @click="setLesson(871)" data-lesson="lesson871"><img src="images/lesson-theory.png">Ячейки с номерами</button>
    <button @click="setLesson(872)" data-lesson="lesson872"><img src="images/lesson-theory.png">Ячейки с названиями услуг</button>
  </div>

  <div class="menu-level-4-course-43" v-if="level == 4 && course == 43">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Великий Кексби"<img src="images/folders/keksby.svg"></button>
    <button @click="setLesson(873)" data-lesson="lesson873"><img src="images/lesson-theory.png">Подготавливаем блок отзывов</button>
    <button @click="setLesson(874)" data-lesson="lesson874"><img src="images/lesson-theory.png">Добавляем форму</button>
    <button @click="setLesson(875)" data-lesson="lesson875"><img src="images/lesson-theory.png">Поле "Имя"</button>
    <button @click="setLesson(876)" data-lesson="lesson876"><img src="images/lesson-theory.png">Поле "Телефон"</button>
    <button @click="setLesson(877)" data-lesson="lesson877"><img src="images/lesson-theory.png">Поле "Email"</button>
    <button @click="setLesson(878)" data-lesson="lesson878"><img src="images/lesson-theory.png">Галочка "Хочу спам!"</button>
    <button @click="setLesson(879)" data-lesson="lesson879"><img src="images/lesson-theory.png">Список с темами обращений</button>
    <button @click="setLesson(880)" data-lesson="lesson880"><img src="images/lesson-theory.png">Темы обращений</button>
    <button @click="setLesson(881)" data-lesson="lesson881"><img src="images/lesson-theory.png">Поле для сообщения</button>
    <button @click="setLesson(882)" data-lesson="lesson882"><img src="images/lesson-theory.png">Кнопка отправки формы</button>
    <button @click="setLesson(883)" data-lesson="lesson883"><img src="images/lesson-theory.png">Отступы в форме</button>
  </div>

  <div class="menu-level-4-course-44" v-if="level == 4 && course == 44">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Великий Кексби"<img src="images/folders/keksby.svg"></button>
    <button @click="setLesson(884)" data-lesson="lesson884"><img src="images/lesson-test.png">Промежуточное испытание, часть 1</button>
    <button @click="setLesson(885)" data-lesson="lesson885"><img src="images/lesson-test.png">Промежуточное испытание, часть 2</button>
    <button @click="setLesson(886)" data-lesson="lesson886"><img src="images/lesson-test.png">Промежуточное испытание, часть 3</button>
    <button @click="setLesson(887)" data-lesson="lesson887"><img src="images/lesson-test.png">Промежуточное испытание, часть 4</button>
    <button @click="setLesson(888)" data-lesson="lesson888"><img src="images/lesson-test.png">Промежуточное испытание, часть 5</button>
    <button @click="setLesson(889)" data-lesson="lesson889"><img src="images/lesson-test.png">Промежуточное испытание, часть 6</button>
    <button @click="setLesson(890)" data-lesson="lesson890"><img src="images/lesson-test.png">Промежуточное испытание, часть 7</button>
    <button @click="setLesson(891)" data-lesson="lesson891"><img src="images/lesson-test.png">Промежуточное испытание, часть 8</button>
  </div>

  <div class="menu-level-4-course-45" v-if="level == 4 && course == 45">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Великий Кексби"<img src="images/folders/keksby.svg"></button>
    <button @click="setLesson(892)" data-lesson="lesson892"><img src="images/lesson-theory.png">Начинаем стилизацию!</button>
    <button @click="setLesson(893)" data-lesson="lesson893"><img src="images/lesson-theory.png">Глобальные параметры текста</button>
    <button @click="setLesson(894)" data-lesson="lesson894"><img src="images/lesson-theory.png">Шапка и навигация</button>
    <button @click="setLesson(895)" data-lesson="lesson895"><img src="images/lesson-theory.png">Навигационные ссылки</button>
    <button @click="setLesson(896)" data-lesson="lesson896"><img src="images/lesson-theory.png">Текстовые стили кнопки</button>
    <button @click="setLesson(897)" data-lesson="lesson897"><img src="images/lesson-theory.png">Промо-надпись</button>
    <button @click="setLesson(898)" data-lesson="lesson898"><img src="images/lesson-theory.png">Преимущества, часть 1</button>
    <button @click="setLesson(899)" data-lesson="lesson899"><img src="images/lesson-theory.png">Преимущества, часть 2</button>
    <button @click="setLesson(900)" data-lesson="lesson900"><img src="images/lesson-theory.png">Общие стили раздела "Немного теории"</button>
    <button @click="setLesson(901)" data-lesson="lesson901"><img src="images/lesson-theory.png">Заголовок и источник статьи</button>
    <button @click="setLesson(902)" data-lesson="lesson902"><img src="images/lesson-theory.png">Анонс статьи</button>
    <button @click="setLesson(903)" data-lesson="lesson903"><img src="images/lesson-theory.png">Ссылка на источник</button>
    <button @click="setLesson(904)" data-lesson="lesson904"><img src="images/lesson-theory.png">Отзывы</button>
    <button @click="setLesson(905)" data-lesson="lesson905"><img src="images/lesson-theory.png">Популярные товары</button>
    <button @click="setLesson(906)" data-lesson="lesson906"><img src="images/lesson-theory.png">Прайс-лист</button>
    <button @click="setLesson(907)" data-lesson="lesson907"><img src="images/lesson-theory.png">Форма обратной связи</button>
    <button @click="setLesson(908)" data-lesson="lesson908"><img src="images/lesson-theory.png">Поля ввода в форме обратной связи</button>
    <button @click="setLesson(909)" data-lesson="lesson909"><img src="images/lesson-theory.png">Чекбокс в форме обратной связи</button>
    <button @click="setLesson(910)" data-lesson="lesson910"><img src="images/lesson-theory.png">Подвал</button>
    <button @click="setLesson(911)" data-lesson="lesson911"><img src="images/lesson-theory.png">Заголовок и списки в подвале</button>
    <button @click="setLesson(912)" data-lesson="lesson912"><img src="images/lesson-theory.png">Ссылки в подвале</button>
    <button @click="setLesson(913)" data-lesson="lesson913"><img src="images/lesson-theory.png">Соцсети в подвале</button>
    <button @click="setLesson(914)" data-lesson="lesson914"><img src="images/lesson-theory.png">Копирайт</button>
  </div>

  <div class="menu-level-4-course-46" v-if="level == 4 && course == 46">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Великий Кексби"<img src="images/folders/keksby.svg"></button>
    <button @click="setLesson(915)" data-lesson="lesson915"><img src="images/lesson-theory.png">Фоновое изображение шапки</button>
    <button @click="setLesson(916)" data-lesson="lesson916"><img src="images/lesson-theory.png">Иконки в блоке преимуществ, часть 1</button>
    <button @click="setLesson(917)" data-lesson="lesson917"><img src="images/lesson-theory.png">Иконки в блоке преимуществ, часть 2</button>
    <button @click="setLesson(918)" data-lesson="lesson918"><img src="images/lesson-theory.png">Иконки в блоке преимуществ, часть 3</button>
    <button @click="setLesson(919)" data-lesson="lesson919"><img src="images/lesson-theory.png">Изображения в форме, часть 1</button>
    <button @click="setLesson(920)" data-lesson="lesson920"><img src="images/lesson-theory.png">Изображения в форме, часть 2</button>
  </div>

  <div class="menu-level-4-course-47" v-if="level == 4 && course == 47">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Великий Кексби"<img src="images/folders/keksby.svg"></button>
    <button @click="setLesson(921)" data-lesson="lesson921"><img src="images/lesson-theory.png">Минимальная ширина <b class="marked-menu">body</b></button>
    <button @click="setLesson(922)" data-lesson="lesson922"><img src="images/lesson-theory.png">Подготовка сетки в шапке</button>
    <button @click="setLesson(923)" data-lesson="lesson923"><img src="images/lesson-theory.png">Колонки в шапке</button>
    <button @click="setLesson(924)" data-lesson="lesson924"><img src="images/lesson-theory.png">Завершаем сетку шапки</button>
    <button @click="setLesson(925)" data-lesson="lesson925"><img src="images/lesson-theory.png">Начинаем сетку преимуществ</button>
    <button @click="setLesson(926)" data-lesson="lesson926"><img src="images/lesson-theory.png">Колонки в преимуществах</button>
    <button @click="setLesson(927)" data-lesson="lesson927"><img src="images/lesson-theory.png">Завершаем сетку преимуществ</button>
    <button @click="setLesson(928)" data-lesson="lesson928"><img src="images/lesson-theory.png">Начинаем сетку в справочнике</button>
    <button @click="setLesson(929)" data-lesson="lesson929"><img src="images/lesson-theory.png">Отступы между статьями в справочнике</button>
    <button @click="setLesson(930)" data-lesson="lesson930"><img src="images/lesson-theory.png">Начинаем сетку в отзывах</button>
    <button @click="setLesson(931)" data-lesson="lesson931"><img src="images/lesson-theory.png">Завершаем сетку в отзывах</button>
    <button @click="setLesson(932)" data-lesson="lesson932"><img src="images/lesson-theory.png">Контейнер товаров и прайс-листа</button>
    <button @click="setLesson(933)" data-lesson="lesson933"><img src="images/lesson-theory.png">Колонки в товарах</button>
    <button @click="setLesson(934)" data-lesson="lesson934"><img src="images/lesson-theory.png">Теперь точно товары в три колонки</button>
    <button @click="setLesson(935)" data-lesson="lesson935"><img src="images/lesson-theory.png">Сетка формы обратной связи</button>
    <button @click="setLesson(936)" data-lesson="lesson936"><img src="images/lesson-theory.png">Контейнер подвала</button>
    <button @click="setLesson(937)" data-lesson="lesson937"><img src="images/lesson-theory.png">Отступы внутренних блоков подвала</button>
    <button @click="setLesson(938)" data-lesson="lesson938"><img src="images/lesson-theory.png">Сетка верхнего раздела в подвале</button>
    <button @click="setLesson(939)" data-lesson="lesson939"><img src="images/lesson-theory.png">Сетка среднего раздела в подвале</button>
    <button @click="setLesson(940)" data-lesson="lesson940"><img src="images/lesson-theory.png">Сетка нижнего раздела в подвале</button>
  </div>

  <div class="menu-level-4-course-48" v-if="level == 4 && course == 48">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Великий Кексби"<img src="images/folders/keksby.svg"></button>
    <button @click="setLesson(941)" data-lesson="lesson941"><img src="images/lesson-theory.png">Изображение логотипа</button>
    <button @click="setLesson(942)" data-lesson="lesson942"><img src="images/lesson-theory.png">Навигация</button>
    <button @click="setLesson(943)" data-lesson="lesson943"><img src="images/lesson-theory.png">Общие стили кнопок, часть 1</button>
    <button @click="setLesson(944)" data-lesson="lesson944"><img src="images/lesson-theory.png">Общие стили кнопок, часть 2</button>
    <button @click="setLesson(945)" data-lesson="lesson945"><img src="images/lesson-theory.png">Состояния кнопок</button>
    <button @click="setLesson(946)" data-lesson="lesson946"><img src="images/lesson-theory.png">Кнопка заказа</button>
    <button @click="setLesson(947)" data-lesson="lesson947"><img src="images/lesson-theory.png">Состояния кнопки заказа</button>
    <button @click="setLesson(948)" data-lesson="lesson948"><img src="images/lesson-theory.png">Текстовые элементы в преимуществах</button>
    <button @click="setLesson(949)" data-lesson="lesson949"><img src="images/lesson-theory.png">Оптимизация преимуществ, <b class="marked-name">спрайты</b></button>
    <button @click="setLesson(950)" data-lesson="lesson950"><img src="images/lesson-theory.png">Позиционирование <b class="marked-name">спрайтов</b></button>
    <button @click="setLesson(951)" data-lesson="lesson951"><img src="images/lesson-theory.png">Завершаем <b class="marked-name">спрайты</b> преимуществ</button>
    <button @click="setLesson(952)" data-lesson="lesson952"><img src="images/lesson-theory.png">Завершаем заголовки разделов</button>
    <button @click="setLesson(953)" data-lesson="lesson953"><img src="images/lesson-theory.png">Кнопка "Справочник"</button>
    <button @click="setLesson(954)" data-lesson="lesson954"><img src="images/lesson-theory.png">Список статей, часть 1</button>
    <button @click="setLesson(955)" data-lesson="lesson955"><img src="images/lesson-theory.png">Список статей, часть 2</button>
    <button @click="setLesson(956)" data-lesson="lesson956"><img src="images/lesson-theory.png">Заголовки статей</button>
    <button @click="setLesson(957)" data-lesson="lesson957"><img src="images/lesson-theory.png">Завершаем справочник</button>
  </div>

  <div class="menu-level-4-course-49" v-if="level == 4 && course == 49">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Великий Кексби"<img src="images/folders/keksby.svg"></button>
    <button @click="setLesson(958)" data-lesson="lesson958"><img src="images/lesson-theory.png">Кнопка "Все отзывы"</button>
    <button @click="setLesson(959)" data-lesson="lesson959"><img src="images/lesson-theory.png">Завершаем отзывы</button>
    <button @click="setLesson(960)" data-lesson="lesson960"><img src="images/lesson-theory.png">Кнопка "Каталог"</button>
    <button @click="setLesson(961)" data-lesson="lesson961"><img src="images/lesson-theory.png">Карточка товара</button>
    <button @click="setLesson(962)" data-lesson="lesson962"><img src="images/lesson-theory.png">Изображение товара</button>
    <button @click="setLesson(963)" data-lesson="lesson963"><img src="images/lesson-theory.png">Название товара</button>
    <button @click="setLesson(964)" data-lesson="lesson964"><img src="images/lesson-theory.png">Цена товара</button>
    <button @click="setLesson(965)" data-lesson="lesson965"><img src="images/lesson-theory.png">Кнопки в товарах</button>
    <button @click="setLesson(966)" data-lesson="lesson966"><img src="images/lesson-theory.png">Станьте, кнопки, станьте в ряд!</button>
    <button @click="setLesson(967)" data-lesson="lesson967"><img src="images/lesson-theory.png">Состояния кнопок товаров</button>
    <button @click="setLesson(968)" data-lesson="lesson968"><img src="images/lesson-theory.png">Прайс-лист</button>
    <button @click="setLesson(969)" data-lesson="lesson969"><img src="images/lesson-theory.png">Точные ширины колонок</button>
    <button @click="setLesson(970)" data-lesson="lesson970"><img src="images/lesson-theory.png">Завершаем прайс-лист</button>
  </div>

  <div class="menu-level-4-course-50" v-if="level == 4 && course == 50">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-name">HTML/CSS</b><img src="images/html5.png"></button>
    <button @click="setLevel(3)">К меню "Великий Кексби"<img src="images/folders/keksby.svg"></button>
    <button @click="setLesson(971)" data-lesson="lesson971"><img src="images/lesson-theory.png">Подсказка в форме обратной связи</button>
    <button @click="setLesson(972)" data-lesson="lesson972"><img src="images/lesson-theory.png">Контейнер поля и подписи</button>
    <button @click="setLesson(973)" data-lesson="lesson973"><img src="images/lesson-theory.png">Поля ввода</button>
    <button @click="setLesson(974)" data-lesson="lesson974"><img src="images/lesson-theory.png">Поля в две колонки</button>
    <button @click="setLesson(975)" data-lesson="lesson975"><img src="images/lesson-theory.png">"Галочка" и текст обращения</button>
    <button @click="setLesson(976)" data-lesson="lesson976"><img src="images/lesson-theory.png">Кнопка отправки формы</button>
    <button @click="setLesson(977)" data-lesson="lesson977"><img src="images/lesson-theory.png">Состояния кнопки отправки</button>
    <button @click="setLesson(978)" data-lesson="lesson978"><img src="images/lesson-theory.png">Изображение логотипа в подвале</button>
    <button @click="setLesson(979)" data-lesson="lesson979"><img src="images/lesson-theory.png">Меню в подвале</button>
    <button @click="setLesson(980)" data-lesson="lesson980"><img src="images/lesson-theory.png">Ссылки на соцсети</button>
    <button @click="setLesson(981)" data-lesson="lesson981"><img src="images/lesson-theory.png">Ссылки на соцсети, часть 2</button>
    <button @click="setLesson(982)" data-lesson="lesson982"><img src="images/lesson-theory.png">Иконки соцсетей</button>
    <button @click="setLesson(983)" data-lesson="lesson983"><img src="images/lesson-theory.png">Иконки соцсетей, часть 2</button>
    <button @click="setLesson(984)" data-lesson="lesson984"><img src="images/lesson-theory.png">Состояния ссылок на соцсети</button>
    <button @click="setLesson(985)" data-lesson="lesson985"><img src="images/lesson-theory.png">Копирайт</button>
  </div>

  <div class="menu-level-4-course-51" v-if="level == 4 && course == 51">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-js">JavaScript</b><img src="images/js.png"></button>
    <button @click="setLevel(3)">К меню "Основы <b class="marked-js">JavaScript</b>"<img src="images/folders/base-js.svg"></button>
    <button @click="setLesson(986)" data-lesson="lesson986"><img src="images/lesson-theory.png">Начало карьеры</button>
    <button @click="setLesson(987)" data-lesson="lesson987"><img src="images/lesson-theory.png">Усложняем программу</button>
    <button @click="setLesson(988)" data-lesson="lesson988"><img src="images/lesson-theory.png">Вывод в консоль</button>
    <button @click="setLesson(989)" data-lesson="lesson989"><img src="images/lesson-theory.png">Типы данных</button>
    <button @click="setLesson(990)" data-lesson="lesson990"><img src="images/lesson-theory.png">Сложные типы данных</button>
    <button @click="setLesson(991)" data-lesson="lesson991"><img src="images/lesson-theory.png">Неизвестные данные</button>
    <button @click="setLesson(992)" data-lesson="lesson992"><img src="images/lesson-theory.png">Переменные</button>
    <button @click="setLesson(993)" data-lesson="lesson993"><img src="images/lesson-theory.png">Объявление и присваивание переменных</button>
    <button @click="setLesson(994)" data-lesson="lesson994"><img src="images/lesson-theory.png">Операции</button>
    <button @click="setLesson(995)" data-lesson="lesson995"><img src="images/lesson-theory.png">Порядок операций</button>
    <button @click="setLesson(996)" data-lesson="lesson996"><img src="images/lesson-theory.png">Ещё немного операций</button>
    <button @click="setLesson(997)" data-lesson="lesson997"><img src="images/lesson-theory.png">Релиз Завтракомера v0.1</button>
    <button @click="setLesson(998)" data-lesson="lesson998"><img src="images/lesson-theory.png">Релиз Завтракомера v0.1, часть 2</button>
    <button @click="setLesson(999)" data-lesson="lesson999"><img src="images/lesson-conspect.png">Конспект "Знакомство с <b class="marked-js">JavaScript</b>"</button>
    <button @click="setLesson(1000)" data-lesson="lesson1000"><img src="images/lesson-test.png">Первая программа: KeksoFit v0.1</button>
    <button @click="setLesson(1001)" data-lesson="lesson1001"><img src="images/lesson-easy.png">Простые задачи: "Конвертер валют"</button>
    <button @click="setLesson(1002)" data-lesson="lesson1002"><img src="images/lesson-easy.png">Простые задачи: "Считаем долги"</button>
    <button @click="setLesson(1003)" data-lesson="lesson1003"><img src="images/lesson-easy.png">Простые задачи: "Быстрее всех"</button>
    <button @click="setLesson(1004)" data-lesson="lesson1004"><img src="images/lesson-medium.png">Задачи среднего уровня: "Путешествие продолжается"</button>
    <button @click="setLesson(1005)" data-lesson="lesson1005"><img src="images/lesson-medium.png">Задачи среднего уровня: "Жара в Висконсине"</button>
    <button @click="setLesson(1006)" data-lesson="lesson1006"><img src="images/lesson-medium.png">Задачи среднего уровня: "Контроль показателей - ключ к победе!"</button>
    <button @click="setLesson(1007)" data-lesson="lesson1007"><img src="images/lesson-hard.png">Продвинутые задачи: "Пробежки по треугольному парку"</button>
    <button @click="setLesson(1008)" data-lesson="lesson1008"><img src="images/lesson-hard.png">Продвинутые задачи: "Эффективная ЧСС"</button>
    <button @click="setLesson(1009)" data-lesson="lesson1009"><img src="images/lesson-hard.png">Продвинутые задачи: "Кубики куются на кухне"</button>
  </div>

  <div class="menu-level-4-course-52" v-if="level == 4 && course == 52">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-js">JavaScript</b><img src="images/js.png"></button>
    <button @click="setLevel(3)">К меню "Основы <b class="marked-js">JavaScript</b>"<img src="images/folders/base-js.svg"></button>
    <button @click="setLesson(1010)" data-lesson="lesson1010"><img src="images/lesson-theory.png">Простое ветвление</button>
    <button @click="setLesson(1011)" data-lesson="lesson1011"><img src="images/lesson-theory.png">Используем альтернативу</button>
    <button @click="setLesson(1012)" data-lesson="lesson1012"><img src="images/lesson-theory.png">Простые сравнения</button>
    <button @click="setLesson(1013)" data-lesson="lesson1013"><img src="images/lesson-theory.png">Сравнения, допускающие равенство</button>
    <button @click="setLesson(1014)" data-lesson="lesson1014"><img src="images/lesson-theory.png">Равенство, неравенство</button>
    <button @click="setLesson(1015)" data-lesson="lesson1015"><img src="images/lesson-theory.png">Строгое сравнение строк</button>
    <button @click="setLesson(1016)" data-lesson="lesson1016"><img src="images/lesson-theory.png">Строгое сравнение чисел</button>
    <button @click="setLesson(1017)" data-lesson="lesson1017"><img src="images/lesson-theory.png">Действия по условию</button>
    <button @click="setLesson(1018)" data-lesson="lesson1018"><img src="images/lesson-theory.png">Если условие не выполнено</button>
    <button @click="setLesson(1019)" data-lesson="lesson1019"><img src="images/lesson-theory.png">Значения как условие</button>
    <button @click="setLesson(1020)" data-lesson="lesson1020"><img src="images/lesson-theory.png">Вложенные условия</button>
    <button @click="setLesson(1021)" data-lesson="lesson1021"><img src="images/lesson-theory.png">Логические операторы: <b class="marked-menu">&&</b>, <b class="marked-menu">||</b></button>
    <button @click="setLesson(1022)" data-lesson="lesson1022"><img src="images/lesson-theory.png">Ловушки логики</button>
    <button @click="setLesson(1023)" data-lesson="lesson1023"><img src="images/lesson-theory.png">Логическое отрицание</button>
    <button @click="setLesson(1024)" data-lesson="lesson1024"><img src="images/lesson-theory.png">Комбинируем логические операторы</button>
    <button @click="setLesson(1025)" data-lesson="lesson1025"><img src="images/lesson-conspect.png">Конспект "Условия"</button>
    <button @click="setLesson(1026)" data-lesson="lesson1026"><img src="images/lesson-test.png">Вторая программа: "Сколько гулять?"</button>
    <button @click="setLesson(1027)" data-lesson="lesson1027"><img src="images/lesson-easy.png">Простые задачи: "Неприличный вопрос"</button>
    <button @click="setLesson(1028)" data-lesson="lesson1028"><img src="images/lesson-easy.png">Простые задачи: "Умные весы"</button>
    <button @click="setLesson(1029)" data-lesson="lesson1029"><img src="images/lesson-easy.png">Простые задачи: "FizzBuzz"</button>
    <button @click="setLesson(1030)" data-lesson="lesson1030"><img src="images/lesson-medium.png">Задачи среднего уровня: "Творческий доход"</button>
    <button @click="setLesson(1031)" data-lesson="lesson1031"><img src="images/lesson-medium.png">Задачи среднего уровня: "Путь к молоку"</button>
    <button @click="setLesson(1032)" data-lesson="lesson1032"><img src="images/lesson-hard.png">Продвинутая задача: "Длительность прогулки"</button>
  </div>

  <div class="menu-level-4-course-53" v-if="level == 4 && course == 53">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-js">JavaScript</b><img src="images/js.png"></button>
    <button @click="setLevel(3)">К меню "Основы <b class="marked-js">JavaScript</b>"<img src="images/folders/base-js.svg"></button>
    <button @click="setLesson(1033)" data-lesson="lesson1033"><img src="images/lesson-theory.png">Новый проект: разработка драйвера</button>
    <button @click="setLesson(1034)" data-lesson="lesson1034"><img src="images/lesson-theory.png">Управление количеством копий</button>
    <button @click="setLesson(1035)" data-lesson="lesson1035"><img src="images/lesson-theory.png">Разбираем цикл <b class="marked-menu">for</b></button>
    <button @click="setLesson(1036)" data-lesson="lesson1036"><img src="images/lesson-theory.png">Исправляем цикл</button>
    <button @click="setLesson(1037)" data-lesson="lesson1037"><img src="images/lesson-theory.png">Печатаем страницы в обратном порядке</button>
    <button @click="setLesson(1038)" data-lesson="lesson1038"><img src="images/lesson-theory.png">Печатаем только нечётные страницы</button>
    <button @click="setLesson(1039)" data-lesson="lesson1039"><img src="images/lesson-theory.png">Печатаем только чётные страницы</button>
    <button @click="setLesson(1040)" data-lesson="lesson1040"><img src="images/lesson-theory.png">Драйвер печати: режим копий</button>
    <button @click="setLesson(1041)" data-lesson="lesson1041"><img src="images/lesson-theory.png">Драйвер печати: все страницы</button>
    <button @click="setLesson(1042)" data-lesson="lesson1042"><img src="images/lesson-theory.png">Драйвер печати: страницы в обратном порядке</button>
    <button @click="setLesson(1043)" data-lesson="lesson1043"><img src="images/lesson-theory.png">Драйвер печати: чётные и нечётные страницы</button>
    <button @click="setLesson(1044)" data-lesson="lesson1044"><img src="images/lesson-theory.png">Драйвер печати: переключение чётных и нечётных</button>
    <button @click="setLesson(1045)" data-lesson="lesson1045"><img src="images/lesson-theory.png">Накопление в цикле</button>
    <button @click="setLesson(1046)" data-lesson="lesson1046"><img src="images/lesson-theory.png">Проверки в циклах</button>
    <button @click="setLesson(1047)" data-lesson="lesson1047"><img src="images/lesson-theory.png">Поиск чётного числа</button>
    <button @click="setLesson(1048)" data-lesson="lesson1048"><img src="images/lesson-theory.png">Сколько стоит печать?</button>
    <button @click="setLesson(1049)" data-lesson="lesson1049"><img src="images/lesson-theory.png">Экономичная печать</button>
    <button @click="setLesson(1050)" data-lesson="lesson1050"><img src="images/lesson-theory.png">Экономим краску</button>
    <button @click="setLesson(1051)" data-lesson="lesson1051"><img src="images/lesson-conspect.png">Конспект "Циклы", часть 1</button>
    <button @click="setLesson(1052)" data-lesson="lesson1052"><img src="images/lesson-test.png">Третья программа: "Протеиновый коктейль!"</button>
    <button @click="setLesson(1053)" data-lesson="lesson1053"><img src="images/lesson-theory.png">Привет, "пока"!</button>
    <button @click="setLesson(1054)" data-lesson="lesson1054"><img src="images/lesson-theory.png">Цикл <b class="marked-menu">while</b>, суммирование</button>
    <button @click="setLesson(1055)" data-lesson="lesson1055"><img src="images/lesson-theory.png">Ещё один проект: дартс-машина</button>
    <button @click="setLesson(1056)" data-lesson="lesson1056"><img src="images/lesson-theory.png">Дартс-машина: накапливаем промахи</button>
    <button @click="setLesson(1057)" data-lesson="lesson1057"><img src="images/lesson-theory.png">Дартс-машина: поражение</button>
    <button @click="setLesson(1058)" data-lesson="lesson1058"><img src="images/lesson-theory.png">Дартс-машина: итоговое табло</button>
    <button @click="setLesson(1059)" data-lesson="lesson1059"><img src="images/lesson-conspect.png">Конспект "Циклы", часть 2</button>
    <button @click="setLesson(1060)" data-lesson="lesson1060"><img src="images/lesson-test.png">Четвёртая программа: "Бешеная сушка"</button>
    <button @click="setLesson(1061)" data-lesson="lesson1061"><img src="images/lesson-easy.png">Простые задачи: "Геометрическая прогрессия"</button>
    <button @click="setLesson(1062)" data-lesson="lesson1062"><img src="images/lesson-easy.png">Простые задачи: "Сумма чисел"</button>
    <button @click="setLesson(1063)" data-lesson="lesson1063"><img src="images/lesson-easy.png">Простые задачи: "Произведение чётных"</button>
    <button @click="setLesson(1064)" data-lesson="lesson1064"><img src="images/lesson-easy.png">Простые задачи: "Делители"</button>
    <button @click="setLesson(1065)" data-lesson="lesson1065"><img src="images/lesson-medium.png">Задача среднего уровня: "Сколько цифр?"</button>
    <button @click="setLesson(1066)" data-lesson="lesson1066"><img src="images/lesson-hard.png">Продвинутые задачи: "Запасы протеина"</button>
    <button @click="setLesson(1067)" data-lesson="lesson1067"><img src="images/lesson-hard.png">Продвинутые задачи: "Сортировка выбросом"</button>
    <button @click="setLesson(1068)" data-lesson="lesson1068"><img src="images/lesson-hard.png">Продвинутые задачи: "Палиндром"</button>
  </div>

  <div class="menu-level-4-course-54" v-if="level == 4 && course == 54">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-js">JavaScript</b><img src="images/js.png"></button>
    <button @click="setLevel(3)">К меню "Основы <b class="marked-js">JavaScript</b>"<img src="images/folders/base-js.svg"></button>
    <button @click="setLesson(1069)" data-lesson="lesson1069"><img src="images/lesson-theory.png">Маленький Кекс и Большие Данные</button>
    <button @click="setLesson(1070)" data-lesson="lesson1070"><img src="images/lesson-theory.png">Среднее значение</button>
    <button @click="setLesson(1071)" data-lesson="lesson1071"><img src="images/lesson-theory.png">Завершаем анализатор посещаемости</button>
    <button @click="setLesson(1072)" data-lesson="lesson1072"><img src="images/lesson-theory.png">Новые данные</button>
    <button @click="setLesson(1073)" data-lesson="lesson1073"><img src="images/lesson-theory.png">Масса данных? Массив!</button>
    <button @click="setLesson(1074)" data-lesson="lesson1074"><img src="images/lesson-theory.png">Чтение из массива по <b class="marked-class">индексу</b></button>
    <button @click="setLesson(1075)" data-lesson="lesson1075"><img src="images/lesson-theory.png">Переменная как <b class="marked-class">индекс</b></button>
    <button @click="setLesson(1076)" data-lesson="lesson1076"><img src="images/lesson-theory.png">Длина массива</button>
    <button @click="setLesson(1077)" data-lesson="lesson1077"><img src="images/lesson-theory.png">Ударим циклами по массивам</button>
    <button @click="setLesson(1078)" data-lesson="lesson1078"><img src="images/lesson-theory.png">Суммирование в цикле</button>
    <button @click="setLesson(1079)" data-lesson="lesson1079"><img src="images/lesson-theory.png">Завершаем <b class="marked-name">рефакторинг</b></button>
    <button @click="setLesson(1080)" data-lesson="lesson1080"><img src="images/lesson-theory.png">Одно маленькое аналитическое расследование</button>
    <button @click="setLesson(1081)" data-lesson="lesson1081"><img src="images/lesson-theory.png">Запись в массив по <b class="marked-class">индексу</b></button>
    <button @click="setLesson(1082)" data-lesson="lesson1082"><img src="images/lesson-theory.png">Убийца - дворецкий!</button>
    <button @click="setLesson(1083)" data-lesson="lesson1083"><img src="images/lesson-conspect.png">Конспект "Массивы", часть 1</button>
    <button @click="setLesson(1084)" data-lesson="lesson1084"><img src="images/lesson-test.png">Пятая программа: "Начинающий дешифровщик"</button>
    <button @click="setLesson(1085)" data-lesson="lesson1085"><img src="images/lesson-theory.png">Смутные подозрения</button>
    <button @click="setLesson(1086)" data-lesson="lesson1086"><img src="images/lesson-theory.png">Меняем элементы местами</button>
    <button @click="setLesson(1087)" data-lesson="lesson1087"><img src="images/lesson-theory.png">Ищем минимальный элемент</button>
    <button @click="setLesson(1088)" data-lesson="lesson1088"><img src="images/lesson-theory.png">Минимальный элемент найден!</button>
    <button @click="setLesson(1089)" data-lesson="lesson1089"><img src="images/lesson-theory.png">Начинаем сортировку</button>
    <button @click="setLesson(1090)" data-lesson="lesson1090"><img src="images/lesson-theory.png">Продолжаем сортировку</button>
    <button @click="setLesson(1091)" data-lesson="lesson1091"><img src="images/lesson-theory.png">Завершаем сортировку</button>
    <button @click="setLesson(1092)" data-lesson="lesson1092"><img src="images/lesson-theory.png">Тестируем сортировку</button>
    <button @click="setLesson(1093)" data-lesson="lesson1093"><img src="images/lesson-theory.png">Медиана на нечётном количестве элементов</button>
    <button @click="setLesson(1094)" data-lesson="lesson1094"><img src="images/lesson-theory.png">Медиана на чётном количестве элементов</button>
    <button @click="setLesson(1095)" data-lesson="lesson1095"><img src="images/lesson-theory.png">Зелёный свет</button>
    <button @click="setLesson(1096)" data-lesson="lesson1096"><img src="images/lesson-theory.png">Убийца снова дворецкий!</button>
    <button @click="setLesson(1097)" data-lesson="lesson1097"><img src="images/lesson-conspect.png">Конспект "Массивы", часть 2</button>
    <button @click="setLesson(1098)" data-lesson="lesson1098"><img src="images/lesson-test.png">Шестая программа: "Рекорды по прыжкам в длину"</button>
    <button @click="setLesson(1099)" data-lesson="lesson1099"><img src="images/lesson-easy.png">Простые задачи: "Смузи, маффин, гироскутер"</button>
    <button @click="setLesson(1100)" data-lesson="lesson1100"><img src="images/lesson-easy.png">Простые задачи: "Список покупок"</button>
    <button @click="setLesson(1101)" data-lesson="lesson1101"><img src="images/lesson-medium.png">Задачи среднего уровня: "В поисках элемента"</button>
    <button @click="setLesson(1102)" data-lesson="lesson1102"><img src="images/lesson-medium.png">Задачи среднего уровня: "Собираемся в отпуск"</button>
    <button @click="setLesson(1103)" data-lesson="lesson1103"><img src="images/lesson-medium.png">Задачи среднего уровня: "Список для чтения"</button>
    <button @click="setLesson(1104)" data-lesson="lesson1104"><img src="images/lesson-medium.png">Задачи среднего уровня: "Великий дешифровщик"</button>
    <button @click="setLesson(1105)" data-lesson="lesson1105"><img src="images/lesson-hard.png">Продвинутые задачи: "Аналитика пользователей"</button>
    <button @click="setLesson(1106)" data-lesson="lesson1106"><img src="images/lesson-hard.png">Продвинутые задачи: "Числа Фибоначчи"</button>
    <button @click="setLesson(1107)" data-lesson="lesson1107"><img src="images/lesson-hard.png">Продвинутые задачи: "Быстрее, выше, сильнее"</button>
    <button @click="setLesson(1108)" data-lesson="lesson1108"><img src="images/lesson-hard.png">Продвинутые задачи: "Уникальные элементы"</button>
    <button @click="setLesson(1109)" data-lesson="lesson1109"><img src="images/lesson-hard.png">Продвинутые задачи: "Задом наперёд"</button>
  </div>

  <div class="menu-level-4-course-55" v-if="level == 4 && course == 55">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-js">JavaScript</b><img src="images/js.png"></button>
    <button @click="setLevel(3)">К меню "Основы <b class="marked-js">JavaScript</b>"<img src="images/folders/base-js.svg"></button>
    <button @click="setLesson(1110)" data-lesson="lesson1110"><img src="images/lesson-theory.png">Пристегните ремни</button>
    <button @click="setLesson(1111)" data-lesson="lesson1111"><img src="images/lesson-theory.png">Дальний перелёт</button>
    <button @click="setLesson(1112)" data-lesson="lesson1112"><img src="images/lesson-theory.png">Идём на второй круг</button>
    <button @click="setLesson(1113)" data-lesson="lesson1113"><img src="images/lesson-theory.png"><b class="marked-class">Функция</b>-помощник</button>
    <button @click="setLesson(1114)" data-lesson="lesson1114"><img src="images/lesson-theory.png"><b class="marked-class">Функция</b>, я вызываю тебя!</button>
    <button @click="setLesson(1115)" data-lesson="lesson1115"><img src="images/lesson-theory.png">У меня для тебя параметр</button>
    <button @click="setLesson(1116)" data-lesson="lesson1116"><img src="images/lesson-theory.png">Порядок параметров</button>
    <button @click="setLesson(1117)" data-lesson="lesson1117"><img src="images/lesson-theory.png">Возвращение из <b class="marked-class">функции</b></button>
    <button @click="setLesson(1118)" data-lesson="lesson1118"><img src="images/lesson-conspect.png">Конспект "<b class="marked-class">Функции</b>", часть 1</button>
    <button @click="setLesson(1119)" data-lesson="lesson1119"><img src="images/lesson-test.png">Седьмая программа: «От зарплаты до зарплаты»</button>
    <button @click="setLesson(1120)" data-lesson="lesson1120"><img src="images/lesson-theory.png">Деловая поездка</button>
    <button @click="setLesson(1121)" data-lesson="lesson1121"><img src="images/lesson-theory.png">Пиши, упрощай</button>
    <button @click="setLesson(1122)" data-lesson="lesson1122"><img src="images/lesson-theory.png">Отбрось всё лишнее</button>
    <button @click="setLesson(1123)" data-lesson="lesson1123"><img src="images/lesson-theory.png">Сделай мне красиво</button>
    <button @click="setLesson(1124)" data-lesson="lesson1124"><img src="images/lesson-theory.png">Просто добавь процент</button>
    <button @click="setLesson(1125)" data-lesson="lesson1125"><img src="images/lesson-theory.png">Позови меня тихо по имени</button>
    <button @click="setLesson(1126)" data-lesson="lesson1126"><img src="images/lesson-theory.png">Вижу цель</button>
    <button @click="setLesson(1127)" data-lesson="lesson1127"><img src="images/lesson-theory.png">Сколько вешать в полётах?</button>
    <button @click="setLesson(1128)" data-lesson="lesson1128"><img src="images/lesson-theory.png">Немного приберёмся</button>
    <button @click="setLesson(1129)" data-lesson="lesson1129"><img src="images/lesson-theory.png">Кто быстрей?</button>
    <button @click="setLesson(1130)" data-lesson="lesson1130"><img src="images/lesson-theory.png">Копим на кругосветку</button>
    <button @click="setLesson(1131)" data-lesson="lesson1131"><img src="images/lesson-conspect.png">Конспект «<b class="marked-class">Функции</b>», часть 2</button>
    <button @click="setLesson(1132)" data-lesson="lesson1132"><img src="images/lesson-test.png">Восьмая программа: «Деньги к деньгам»</button>
    <button @click="setLesson(1133)" data-lesson="lesson1133"><img src="images/lesson-test.png">Девятая программа: «Вечный вопрос»</button>
    <button @click="setLesson(1134)" data-lesson="lesson1134"><img src="images/lesson-medium.png">Задачи среднего уровня: "Калькулятор"</button>
    <button @click="setLesson(1135)" data-lesson="lesson1135"><img src="images/lesson-medium.png">Задачи среднего уровня: "Как ты мне дорог"</button>
  </div>

  <div class="menu-level-4-course-56" v-if="level == 4 && course == 56">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-js">JavaScript</b><img src="images/js.png"></button>
    <button @click="setLevel(3)">К меню "Основы <b class="marked-js">JavaScript</b>"<img src="images/folders/base-js.svg"></button>
    <button @click="setLesson(1136)" data-lesson="lesson1136"><img src="images/lesson-theory.png">Сыграем?</button>
    <button @click="setLesson(1137)" data-lesson="lesson1137"><img src="images/lesson-theory.png">Игроки, в студию!</button>
    <button @click="setLesson(1138)" data-lesson="lesson1138"><img src="images/lesson-theory.png">Моя попытка номер раз</button>
    <button @click="setLesson(1139)" data-lesson="lesson1139"><img src="images/lesson-theory.png">Привет, <b class="marked-class">объект</b>!</button>
    <button @click="setLesson(1140)" data-lesson="lesson1140"><img src="images/lesson-theory.png">Читаем из <b class="marked-class">объекта</b></button>
    <button @click="setLesson(1141)" data-lesson="lesson1141"><img src="images/lesson-theory.png">По порядку рассчитайсь!</button>
    <button @click="setLesson(1142)" data-lesson="lesson1142"><img src="images/lesson-theory.png">Переопределяем свойства <b class="marked-class">объекта</b></button>
    <button @click="setLesson(1143)" data-lesson="lesson1143"><img src="images/lesson-theory.png">Передаём <b class="marked-class">объект</b> по ссылке</button>
    <button @click="setLesson(1144)" data-lesson="lesson1144"><img src="images/lesson-theory.png">Моя игра</button>
    <button @click="setLesson(1145)" data-lesson="lesson1145"><img src="images/lesson-theory.png">Раздаём попытки</button>
    <button @click="setLesson(1146)" data-lesson="lesson1146"><img src="images/lesson-theory.png">Кому отдать победу?</button>
    <button @click="setLesson(1147)" data-lesson="lesson1147"><img src="images/lesson-theory.png">Огласите весь список, пожалуйста</button>
    <button @click="setLesson(1148)" data-lesson="lesson1148"><img src="images/lesson-theory.png">Ищем результативного кота</button>
    <button @click="setLesson(1149)" data-lesson="lesson1149"><img src="images/lesson-theory.png">Никому не спрятаться</button>
    <button @click="setLesson(1150)" data-lesson="lesson1150"><img src="images/lesson-theory.png">Новые условия</button>
    <button @click="setLesson(1151)" data-lesson="lesson1151"><img src="images/lesson-theory.png">Большая редкость</button>
    <button @click="setLesson(1152)" data-lesson="lesson1152"><img src="images/lesson-theory.png">Выводим на чистую воду</button>
    <button @click="setLesson(1153)" data-lesson="lesson1153"><img src="images/lesson-theory.png">Бросайте кости, господа коты!</button>
    <button @click="setLesson(1154)" data-lesson="lesson1154"><img src="images/lesson-theory.png">Внесём корректировки</button>
    <button @click="setLesson(1155)" data-lesson="lesson1155"><img src="images/lesson-conspect.png">Конспект "<b class="marked-class">Объекты</b>", часть 1</button>
    <button @click="setLesson(1156)" data-lesson="lesson1156" data-lesson="lesson11"><img src="images/lesson-test.png">Десятая программа: "Золотой мяч"</button>
    <button @click="setLesson(1157)" data-lesson="lesson1157"><img src="images/lesson-theory.png">Собери сам!</button>
    <button @click="setLesson(1158)" data-lesson="lesson1158"><img src="images/lesson-theory.png">Мой первый <b class="marked-class">метод</b></button>
    <button @click="setLesson(1159)" data-lesson="lesson1159"><img src="images/lesson-theory.png">Реализуем <b class="marked-class">методы</b></button>
    <button @click="setLesson(1160)" data-lesson="lesson1160"><img src="images/lesson-theory.png"><b class="marked-class">Объект</b> как словарь</button>
    <button @click="setLesson(1161)" data-lesson="lesson1161"><img src="images/lesson-theory.png"><b class="marked-name">Скобочная нотация</b></button>
    <button @click="setLesson(1162)" data-lesson="lesson1162"><img src="images/lesson-theory.png">Не будем вырывать из контекста</button>
    <button @click="setLesson(1163)" data-lesson="lesson1163"><img src="images/lesson-theory.png">Проверка магазина</button>
    <button @click="setLesson(1164)" data-lesson="lesson1164"><img src="images/lesson-conspect.png">Конспект "<b class="marked-class">Объекты</b>", часть 2</button>
    <button @click="setLesson(1165)" data-lesson="lesson1165"><img src="images/lesson-test.png">Одинадцатая программа: "Дом, который построил Кекс"</button>
  </div>

  <div class="menu-level-4-course-57" v-if="level == 4 && course == 57">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-js">JavaScript</b><img src="images/js.png"></button>
    <button @click="setLevel(3)">К меню "<b class="marked-js">JavaScript</b> в браузере"<img src="images/folders/js-browser.svg"></button>
    <button @click="setLesson(1166)" data-lesson="lesson1166"><img src="images/lesson-theory.png"><b class="marked-name">Скрипт</b> на старт!</button>
    <button @click="setLesson(1167)" data-lesson="lesson1167"><img src="images/lesson-theory.png">Я иду искать</button>
    <button @click="setLesson(1168)" data-lesson="lesson1168"><img src="images/lesson-theory.png">Первый класс</button>
    <button @click="setLesson(1169)" data-lesson="lesson1169"><img src="images/lesson-theory.png">Найти всех до единого</button>
    <button @click="setLesson(1170)" data-lesson="lesson1170"><img src="images/lesson-theory.png">Под прикрытием</button>
    <button @click="setLesson(1171)" data-lesson="lesson1171"><img src="images/lesson-theory.png">Временно недоступен</button>
    <button @click="setLesson(1172)" data-lesson="lesson1172"><img src="images/lesson-theory.png">Специальное предложение</button>
    <button @click="setLesson(1173)" data-lesson="lesson1173"><img src="images/lesson-conspect.png">Конспект "<b class="marked-js">JS</b> в браузере", часть 1</button>
    <button @click="setLesson(1174)" data-lesson="lesson1174"><img src="images/lesson-test.png">Двенадцатая программа: "Испытание мороженым"</button>
    <button @click="setLesson(1175)" data-lesson="lesson1175"><img src="images/lesson-theory.png">Осторожно, дети!</button>
    <button @click="setLesson(1176)" data-lesson="lesson1176"><img src="images/lesson-theory.png">Создаём карточку</button>
    <button @click="setLesson(1177)" data-lesson="lesson1177"><img src="images/lesson-theory.png">Опиши себя</button>
    <button @click="setLesson(1178)" data-lesson="lesson1178"><img src="images/lesson-theory.png">Не повторяйся</button>
    <button @click="setLesson(1179)" data-lesson="lesson1179"><img src="images/lesson-theory.png">Сокращай и властвуй</button>
    <button @click="setLesson(1180)" data-lesson="lesson1180"><img src="images/lesson-theory.png">Добавляем иллюстрацию</button>
    <button @click="setLesson(1181)" data-lesson="lesson1181"><img src="images/lesson-theory.png">Ещё одна <b class="marked-class">функция</b></button>
    <button @click="setLesson(1182)" data-lesson="lesson1182"><img src="images/lesson-theory.png">Проверь себя</button>
    <button @click="setLesson(1183)" data-lesson="lesson1183"><img src="images/lesson-theory.png">Живые данные</button>
    <button @click="setLesson(1184)" data-lesson="lesson1184"><img src="images/lesson-theory.png">В наличие есть? А если найду?</button>
    <button @click="setLesson(1185)" data-lesson="lesson1185"><img src="images/lesson-theory.png">Спецпредложение</button>
    <button @click="setLesson(1186)" data-lesson="lesson1186"><img src="images/lesson-theory.png">Запускаем конвейер</button>
    <button @click="setLesson(1187)" data-lesson="lesson1187"><img src="images/lesson-conspect.png">Конспект "<b class="marked-js">JS</b> в браузере", часть 2</button>
    <button @click="setLesson(1188)" data-lesson="lesson1188"><img src="images/lesson-test.png">Тринадцатая программа: "Мороженое. Возвращение"</button>
  </div>

  <div class="menu-level-4-course-58" v-if="level == 4 && course == 58">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-js">JavaScript</b><img src="images/js.png"></button>
    <button @click="setLevel(3)">К меню "<b class="marked-js">JavaScript</b> в браузере"<img src="images/folders/js-browser.svg"></button>
    <button @click="setLesson(1189)" data-lesson="lesson1189"><img src="images/lesson-theory.png">Знакомимся с <b class="marked-css">событиями</b></button>
    <button @click="setLesson(1190)" data-lesson="lesson1190"><img src="images/lesson-theory.png">Как добавить <b class="marked-class">обработчик</b></button>
    <button @click="setLesson(1191)" data-lesson="lesson1191"><img src="images/lesson-theory.png">Как устроены <b class="marked-css">события</b></button>
    <button @click="setLesson(1192)" data-lesson="lesson1192"><img src="images/lesson-theory.png">Действия по умолчанию</button>
    <button @click="setLesson(1193)" data-lesson="lesson1193"><img src="images/lesson-theory.png">Передайте <b class="marked-class">функцию</b>, пожалуйста</button>
    <button @click="setLesson(1194)" data-lesson="lesson1194"><img src="images/lesson-theory.png">Прячем всплывающее окно</button>
    <button @click="setLesson(1195)" data-lesson="lesson1195"><img src="images/lesson-theory.png">Жми на клавишу</button>
    <button @click="setLesson(1196)" data-lesson="lesson1196"><img src="images/lesson-theory.png">Выбор клавиши</button>
    <button @click="setLesson(1197)" data-lesson="lesson1197"><img src="images/lesson-theory.png">Одним нажатием</button>
    <button @click="setLesson(1198)" data-lesson="lesson1198"><img src="images/lesson-conspect.png">Конспект "<b class="marked-css">События</b> в <b class="marked-js">JavaScript</b>", часть 1</button>
    <button @click="setLesson(1199)" data-lesson="lesson1199"><img src="images/lesson-test.png">Четырнадцатая программа: "Не надо стесняться"</button>
    <button @click="setLesson(1200)" data-lesson="lesson1200"><img src="images/lesson-theory.png">Добро пожаловать в нашу галерею</button>
    <button @click="setLesson(1201)" data-lesson="lesson1201"><img src="images/lesson-theory.png">Click 'Em All!</button>
    <button @click="setLesson(1202)" data-lesson="lesson1202"><img src="images/lesson-theory.png">Добавим картинку</button>
    <button @click="setLesson(1203)" data-lesson="lesson1203"><img src="images/lesson-theory.png">В систему закралась ошибка</button>
    <button @click="setLesson(1204)" data-lesson="lesson1204"><img src="images/lesson-theory.png"><b class="marked-name">Область видимости</b></button>
    <button @click="setLesson(1205)" data-lesson="lesson1205"><img src="images/lesson-theory.png"><b class="marked-name">Глобальная область видимости</b></button>
    <button @click="setLesson(1206)" data-lesson="lesson1206"><img src="images/lesson-theory.png">Перемены снаружи - перемены внутри</button>
    <button @click="setLesson(1207)" data-lesson="lesson1207"><img src="images/lesson-theory.png">Стань независимым</button>
    <button @click="setLesson(1208)" data-lesson="lesson1208"><img src="images/lesson-theory.png"><b class="marked-name">Замыкания</b></button>
    <button @click="setLesson(1209)" data-lesson="lesson1209"><img src="images/lesson-theory.png">Собираемся в школу</button>
    <button @click="setLesson(1210)" data-lesson="lesson1210"><img src="images/lesson-theory.png">Чиним галерею</button>
    <button @click="setLesson(1211)" data-lesson="lesson1211"><img src="images/lesson-theory.png">Дело раскрыто</button>
    <button @click="setLesson(1212)" data-lesson="lesson1212"><img src="images/lesson-conspect.png">Конспект "<b class="marked-css">События</b> в <b class="marked-js">JavaScript</b>", часть 2</button>
    <button @click="setLesson(1213)" data-lesson="lesson1213"><img src="images/lesson-test.png">Пятнадцатая программа: "Сеньор Помидор"</button>
  </div>

  <div class="menu-level-4-course-59" v-if="level == 4 && course == 59">
    <button @click="setLevel(1)">К начальному меню<img src="images/back.png"></button>
    <button @click="setLevel(2)">К меню <b class="marked-js">JavaScript</b><img src="images/js.png"></button>
    <button @click="setLevel(3)">К меню "<b class="marked-js">JavaScript</b> в браузере"<img src="images/folders/js-browser.svg"></button>
    <button @click="setLesson(1214)" data-lesson="lesson1214"><img src="images/lesson-theory.png">Разметка</button>
    <button @click="setLesson(1215)" data-lesson="lesson1215"><img src="images/lesson-theory.png">Первый фильтр</button>
    <button @click="setLesson(1216)" data-lesson="lesson1216"><img src="images/lesson-theory.png">Репетируем переключение</button>
    <button @click="setLesson(1217)" data-lesson="lesson1217"><img src="images/lesson-theory.png">Второй фильтр</button>
    <button @click="setLesson(1218)" data-lesson="lesson1218"><img src="images/lesson-theory.png">Наконец-то <b class="marked-js">JavaScript</b></button>
    <button @click="setLesson(1219)" data-lesson="lesson1219"><img src="images/lesson-theory.png">Играем с <b class="marked-css">классами</b></button>
    <button @click="setLesson(1220)" data-lesson="lesson1220"><img src="images/lesson-theory.png">Расшифровка кода</button>
    <button @click="setLesson(1221)" data-lesson="lesson1221"><img src="images/lesson-theory.png">Третий фильтр</button>
    <button @click="setLesson(1222)" data-lesson="lesson1222"><img src="images/lesson-test.png">Испытание: испорченные портреты</button>
    <button @click="setLesson(1223)" data-lesson="lesson1223"><img src="images/lesson-theory.png">Строки и переменные</button>
    <button @click="setLesson(1224)" data-lesson="lesson1224"><img src="images/lesson-theory.png">Используем <b class="marked-class">функцию</b></button>
    <button @click="setLesson(1225)" data-lesson="lesson1225"><img src="images/lesson-theory.png">Экспериментируем с вызовом <b class="marked-class">функции</b></button>
    <button @click="setLesson(1226)" data-lesson="lesson1226"><img src="images/lesson-theory.png">Добавляем <b class="marked-css">data-атрибуты</b></button>
    <button @click="setLesson(1227)" data-lesson="lesson1227"><img src="images/lesson-theory.png">Используем <b class="marked-css">data-атрибуты</b></button>
    <button @click="setLesson(1228)" data-lesson="lesson1228"><img src="images/lesson-theory.png">Знакомимся с циклом</button>
    <button @click="setLesson(1229)" data-lesson="lesson1229"><img src="images/lesson-theory.png">Используем цикл</button>
    <button @click="setLesson(1230)" data-lesson="lesson1230"><img src="images/lesson-theory.png">Завершаем <b class="marked-class">функцию</b> переключения</button>
    <button @click="setLesson(1231)" data-lesson="lesson1231"><img src="images/lesson-theory.png">Программируем переключатели, часть 1</button>
    <button @click="setLesson(1232)" data-lesson="lesson1232"><img src="images/lesson-theory.png">Программируем переключатели, часть 2</button>
    <button @click="setLesson(1233)" data-lesson="lesson1233"><img src="images/lesson-theory.png">Завершаем переключатели</button>
    <button @click="setLesson(1234)" data-lesson="lesson1234"><img src="images/lesson-theory.png">Сравнение фото</button>
    <button @click="setLesson(1235)" data-lesson="lesson1235"><img src="images/lesson-theory.png">Ползунок-разделитель</button>
    <button @click="setLesson(1236)" data-lesson="lesson1236"><img src="images/lesson-theory.png">Двигаем ползунок</button>
    <button @click="setLesson(1237)" data-lesson="lesson1237"><img src="images/lesson-theory.png">Четвёртый фильтр</button>
    <button @click="setLesson(1238)" data-lesson="lesson1238"><img src="images/lesson-theory.png">Четвёртый фильтр, завершение</button>
    <button @click="setLesson(1239)" data-lesson="lesson1239"><img src="images/lesson-theory.png">Кекстаграм: финал</button>
    <button @click="setLesson(1240)" data-lesson="lesson1240"><img src="images/lesson-test.png">Испытание: игровые фишки</button>
  </div>

  <div v-bind:class="[js ? '' : 'html', 'what-is-now']" v-if="level == 3 || level == 4">{{textNow}}</div>

  <div id="lesson-engine" v-if="level == 5" spellcheck="false">
    <div id="view-before">
      <div class="view-body" tabIndex="0"></div>
    </div>
    <div id="view-after">
      <div class="view-body" tabIndex="0"></div>
      <div id="lesson-console" class="off" @click="editConsole()">
        <code>
            <span> > </span>
            <span id="console-input" contentEditable onkeydown="consoleInputWork()"> </span>
            <span id="console-caret">|</span>
        </code>
      </div>
      <span id="view-title"></span>
    </div>

    <div id="lesson-menu">
      <span title="Так было до изменения кода">⮦ Было</span>
      <button @click="setLevel(1)" title="На главную страницу">На главную</button>
      <button @click="setLevel(4)" title="">Назад</button>
      <button @click="newStart()" title="Следующий урок">Следующий</button>
      <button @click="toggleEditor('html-editor')" title="Убрать/показать HTML-редактор"><img src="images/html5.png"></button>
      <button @click="toggleEditor('css-editor')" title="Убрать/показать CSS-редактор"><img src="images/css3.png"></button>
      <button @click="toggleEditor('js-editor')" title="Убрать/показать JS-редактор"><img src="images/js.png"></button>
      <p class="what-is-now" title="">{{textNow}}</p>
      <span title="Так стало, благодаря тому, что вы изменили">Стало ⮧</span>
    </div>

    <div id="lesson-editor">
      <div class="html-editor">
        <textarea v-model="currentHTML" spellcheck="false"></textarea>
        <img src="images/html5.png" @click="changeEditorScale('html-editor')" title="Изменить размер шрифта для HTML-редактора">
        <img src="images/eye.png" @click="changeTasksOpacity()" title="Изменить прозрачность блока задач"/>
        <img src="images/arrow-up.png" @click="changeEditorHeight('html-editor')" title="Изменить размер окна HTML-редактора">
        <img src="images/reset.png" @click="resetCode('html')" title="Сбросить HTML-код до значения по-умолчанию">
      </div>
      <div class="css-editor">
        <textarea v-model="currentCSS" spellcheck="false"></textarea>
        <div class="drag-elem"></div>
        <img src="images/css3.png" @click="changeEditorScale('css-editor')" title="Изменить размер шрифта для CSS-редактора">
        <img src="images/arrow-both.png" @click="switchCSSHTML()" title="Поменять CSS-редактор и HTML-редактор местами">
        <img src="images/arrow-up.png" @click="changeEditorHeight('css-editor')" title="Изменить размер окна CSS-редактора">
        <img src="images/reset.png" @click="resetCode('css')" title="Сбросить CSS-код до значения по-умолчанию">
      </div>
      <div class="js-editor">
        <textarea v-model="currentJS" spellcheck="false"></textarea>
        <div class="drag-elem"></div>
        <img src="images/js.png" @click="changeEditorScale('js-editor')" title="Изменить размер шрифта для JS-редактора">
        <img src="images/console.png" @click="toggleConsole()" title="Показать/скрыть консоль">
        <img src="images/arrow-up.png" @click="changeEditorHeight('js-editor')" title="Изменить размер окна JS-редактора">
        <img src="images/reset.png" @click="resetCode('js')" title="Сбросить JS-код до значения по-умолчанию">
      </div>
      <img src="images/loop.png" @click="changeViewScale()" title="Текущий масштаб: 100%" />
    </div>

    <div id="lesson-tasks">
      <ul>
        <li v-for="item in tasks"></li>
      </ul>
      <button onclick="offtheory()" title="Показать теорию для этого урока">Теория</button>
      <img src="images/arrow-down.png" @click="changeTasksPosition()" title="Изменить местоположение панели задач">
      <img src="images/pin-green.png" @click="changeTasksPin()" title="Закрепить/открепить панель задач">
    </div>

    <div id="lesson-theory">
      <button class="closeTheory" onclick="offtheory()">Приступить к уроку</button>
    </div>

  </div>

  <div id="loader" v-if="loader" @click="hL()">
      <div class="loader__loader">
        <div class="loader__ball loader__one"><div class="loader__inner"></div></div>
        <div class="loader__ball loader__two"><div class="loader__inner"></div></div>
        <div class="loader__ball loader__three"><div class="loader__inner"></div></div>
        <div class="loader__ball loader__four"><div class="loader__inner"></div></div>
        <div class="loader__ball loader__five"><div class="loader__inner"></div></div>
        <div class="loader__ball loader__six"><div class="loader__inner"></div></div>
        <div class="loader__ball loader__center"><div class="loader__inner"></div></div>
      </div>
  </div>
</div>`
