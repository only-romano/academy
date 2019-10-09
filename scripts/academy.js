/*
    Комментарии по academy.html

        ! Пустые script (в head и body) и оба пустых style в (head) используются
        ! в уроках; не трогать, порядок не менять, до них ничего не добавлять.

        codemirror.css - стили для подсветки кода (плагин codemirror);
        neo.css        - стилизация подсветки (используется для css-редактора);
        academy.css    - стили приложения (ниже codemirror и neo).

        <div id="start"> - приложение-открытка;
        <div id="menu">  - приложение Academy;

        Используются фреймворки:
            vue.js        - сборка приложения;
            codemirror.js - подсветка кода, плагины:
                css, htmlextended, javascript, xml (для htmlextended).

        Скрипты приложения:
            academy.js         - главный скрипт приложения;
            templateAcademy.js - template приложения Academy;
            1.js ... 59.js     - скрипты курсов.


    Комментарии по файлам курсов - 1.js, 2.js ... 59.js

        Каждый файл содержит объект LessonsData с набором уроков для выбранного курса.
        Доступ к урокам - LessonsData["lessonXXX"], где XXX - номер урока, к примеру:
            урок 1   - LessonsData["lesson1"],
            урок 255 - LessonsData["lesson255"] и т.д.

        Состав каждого урока (строки, кроме tasks):
            LessonsData["lessonXXX"].html    - изначальный html, доступный в редакторе;
            LessonsData["lessonXXX"].css     - изначальный css, доступный в редакторе;
            LessonsData["lessonXXX"].js      - изначальный js, доступный в редакторе;
            LessonsData["lessonXXX"].hidden  - скрытый css-код;
            LessonsData["lessonXXX"].theory  - html-код теории урока;

            LessonsData["lessonXXX"].tasks   - массив заданий, состав объекта-задания:
                tasks[i].message - текст задания, содержит html-код;
                tasks[i].check   - функция проверки задания, возвращает true или false.

            LessonsData["lessonXXX"].blocked - строка, код для блокировки редакторов:
                "1" - заблокирован html;
                "2" - заблокирован css;
                "3" - заблокирован js;
                "4" - заблокирован html и css;
                "5" - заблокирован html и js;
                "6" - заблокирован css и js;
                "7" - статус для конспектов;
                ""  - все редакторы доступны пользователю.

            LessonsData["lessonXXX"].editorOff - строка, код отключенных по-умолчанию
                редакторов; значения такие же, как и в blocked.
*/


// Cтартовая страница
const startApp = new Vue({
    el: "#start",
    template: `<div id="start-app"><p>Академия для Папы</p></div>`,
});


// Академия
const Academy = new Vue({
    el: "#menu",

    data: {
        level: 1,               // уровень меню (level: 1-4) или урок (level: 5)
        js: false,              // выбранная тема (true: js / false: html/css)
        folder: 0,              // выбранный раздел
        course: 0,              // выбранный текущего курса
        lesson: 0,              // выбранный или последний из выбранных урок
        next: 0,
        nextName: "",
        textNow: "",            // текущий заголовок (урока, курса или раздела)
        tempText: "",           // буфер для хранения заголовка курса (во время урока)

        switchSelection: 1,     // значение для перемещения редакторов
        tasksOpacity: "1",      // значение прозрачности списка задач
        viewScale: "1",         // значение масштаба окон представления

        // Параметры для растягивания ширины редакторов мышкой (нестабильная работа)
        isResizing: false,
        lastDownX: 0,
        resizeLeft: null,
        resizeRight: null,
        notResized: null,

        tasksInterval: null,  // интервал проверки заданий
        vars: {},        // область видимости переменных, созданных в редакторе JS

        // Объекты CodeMirror (во время урока), хранящие содержимое редакторов
        CSS: null,
        HTML: null,
        JS: null,

        // Данные текущего урока - изначальный HTML, CSS, JS, скрытый CSS, теория
        lessonHTML: "",
        lessonCSS: "",
        lessonJS: "",
        hiddenCSS: "",
        theory: "",

        blocked: "",     // значение для блокировки редакторов
        editorOff: "",   // значение для выключения по-умолчанию редакторов
        tasks: [],       // массив объектов заданий урока

        // Буферные значения для загрузки данных из localStorage, а также обновления
        // окон представления после выполнения JS-кода (при редактировании JS-кода).
        currentHTML: "",
        currentCSS: "",
        currentJS: "",

        // Загрузчик скриптов
        loader: false,
    },


    methods: {

        activateDragAndDropSizingForEditors: function() {
            /*
               Добавляет элементам "drag-elem" слушатель события нажатия кнопки мыши,
               при нажатии сохраняются параметры для изменения размера редакторов.

               Переменные:
                   drags  -  невидимые элементы на границе редакторов;

               Запускается: prepareEditors.
               Зависимости: isResizing, lastDownX, notResized, resizeLeft, resizeRight.
            */

            let drags = document.getElementsByClassName('drag-elem');

            for ( let i = 0; i < 2; i++ ) {
                drags[i].addEventListener('mousedown', function(e) {
                    e.preventDefault();
                    Academy.isResizing = !Academy.isResizing;
                    Academy.lastDownX = e.clientX;
                    Academy.resizeRight = e.target.parentNode;
                    Academy.resizeLeft = e.target.parentNode.previousElementSibling;

                    if (e.target.parentNode.nextElementSibling)
                        Academy.notResized = e.target.parentNode.nextElementSibling;
                    else
                        Academy.notResized = Academy.resizeLeft.previousElementSibling;
                });
            }
        },


        addReadOnlyHelpers: function() {
            /*
                Добавляет класс "read-only-helper" div-обёрткам неактивных редакторов.
                Изменеяет текст кнопки теории в конспектах.

                Переменные
                    html, сss, js  :  div-обёртки соответствующих редакторов.

                Запускается: prepareEditors.
                Зависимости: blocked.
            */

            let html = document.querySelector('#lesson-editor .html-editor');
            let css = document.querySelector('#lesson-editor .css-editor');
            let js = document.querySelector('#lesson-editor .js-editor');

            switch (Academy.blocked) {
                case "1":
                    html.classList.add('read-only-helper');
                    css.classList.remove('read-only-helper');
                    js.classList.remove('read-only-helper');
                    break;

                case "2":
                    html.classList.remove('read-only-helper');
                    css.classList.add('read-only-helper');
                    js.classList.remove('read-only-helper');
                    break;


                case "3":
                    html.classList.remove('read-only-helper');
                    css.classList.remove('read-only-helper');
                    js.classList.add('read-only-helper');
                    break;


                case "4":
                    html.classList.add('read-only-helper');
                    css.classList.add('read-only-helper');
                    js.classList.remove('read-only-helper');
                    break;


                case "5":
                    html.classList.add('read-only-helper');
                    css.classList.remove('read-only-helper');
                    js.classList.add('read-only-helper');
                    break;


                case "6":
                    html.classList.remove('read-only-helper');
                    css.classList.add('read-only-helper');
                    js.classList.add('read-only-helper');
                    break;

                default:
                    html.classList.remove('read-only-helper');
                    css.classList.remove('read-only-helper');
                    js.classList.remove('read-only-helper');
                    break;
            }
        },


        bindCSS: function() {
            /*
                Исправляет селекторы CSS-правил урока, привязывая их к окнам
                представления с помощью зарезервированных элементов <style>,
                находящихся в <head> при запуске урока и при сбросе JS-кода.
                Полностью перезаписывает содержимое этих элементов.

                Переменные
                    hide      :  массив скрытых CSS-правил или пустая строка;
                    rules     :  массив открытых CSS-правил или пустая строка;
                    css       :  неизменняемый CSS (исправленные селекторы);
                    css2      :  CSS, доступный в редакторе (исправленные селекторы);
                    index     :  индекс текущего правила (без селектора);
                    selector  :  текущий исправленный селектор;

                Запускается: bindLesson, resetCode.
                Зависимости: currentCSS, hiddenCSS.
                Запускает:   replaceID.
            */

            let hide = this.hiddenCSS ? this.hiddenCSS.split('}') : "";
            let rules = this.currentCSS ? this.currentCSS.split('}') : "";
            let [ css, css2, i, index, selector ] = [ [], [], 0, 0, "" ];

            for ( ; i < hide.length; i++ ) {
                // Перебор неизменяемых CSS-правил для правки селекторов.

                hide[i] = hide[i].replace(/body/gi, ".view-body");
                index = hide[i].indexOf('{');

                if ( ~index && hide[i].indexOf(':') ) {
                    selector = Academy.replaceID( hide[i].slice(0, index) ).replace(/,/gi, ', [id^="view-"] ');
                    if ( selector.replace(/ /gi, '').indexOf('@') == 0 )
                        css.push(selector + hide[i].slice(index) + "} ");
                    else
                        css.push("#view-before " + selector + hide[i].slice(index) + "} ");
                        css.push("#view-after " + selector + hide[i].slice(index) + "} ");
                }
            }

            for ( i = 0; i < rules.length; i++ ) {
                // Перебор CSS-правил, доступных в редакторе для правки селекторов.

                rules[i] = rules[i].replace(/body/gi, ".view-body");
                index = rules[i].indexOf('{');

                if ( ~index && ~rules[i].indexOf(':') ) {
                    selector = Academy.replaceID( rules[i].slice(0, index) ).replace(/,/gi, ', [id^="view-"] ');
                    if ( selector.replace(/ /gi, '').indexOf('@') == 0 )
                        css.push(selector + rules[i].slice(index) + "} ");
                    else {
                        css.push("#view-before " + selector + rules[i].slice(index) + "} ");
                        css2.push("#view-after " + selector + rules[i].slice(index) + "} ");
                    }
                }
            }

            // Запись CSS в выделенные элементы.
            document.head.getElementsByTagName('style')[0].innerHTML = css.join("");
            document.head.getElementsByTagName('style')[1].innerHTML = css2.join("");
        },


        bindHTML: function() {
            /*
                Исправляет и привязывает HTML-код урока к окнам представления,
                выполняется при запуске урока и сбросе JS-кода. Полностью
                перезаписывает содержимое .view-body (аналог <body>) каждого
                из окон представления.

                Переменные
                    html    :  исправленная HTML-строка;
                    index1  :  индекс body;
                    index2  :  индекс конца body;

                Запускается: bindLesson, resetCode.
                Зависимости: lessonHTML.
            */

            let html = this.lessonHTML.replace(/ id=/gi, " data-id=");

            if (~html.indexOf('<title>')) {
                let index0 = html.indexOf('<title>') + 7;
                let index2 = html.indexOf('</title>', index0);
                if (~index2) {
                    let title = html.slice(index0, index2);
                    if (title.length)
                        document.getElementById('view-title').textContent = title;
                    else
                        document.getElementById('view-title').textContent = "...";
                }
            }

            let index1 = html.indexOf('<body');
            let index2 = html.indexOf('</body>');

            if ( ~index1 ) {
                if ( ~index2 )
                    html = html.slice( html.indexOf('>', index1) + 1, index2 );
                else
                    html = html.slice( html.indexOf('>', index1) + 1 );
            }

            document.querySelector('#view-before .view-body').innerHTML = html;
            document.querySelector('#view-after .view-body').innerHTML = html;
        },


        bindLesson: function() {
            /*
                Запускает функции привязки CSS и HTML кода, добавляет текст списку
                заданий, запускает интервал с функцией проверки заданий. Выполняется
                единожды за урок, при запуске урока.

                Переменные
                    tasks  :  элементы <li>, пункты списка заданий;

                Запускается: startLesson.
                Зависимости: tasks, tasksInterval.
                Запускает:   bindCSS, bindHTML, checkTasks.
            */

            let tasks = document.querySelectorAll('#lesson-tasks li');
            Academy.bindHTML();
            Academy.bindCSS();

            for ( let i = 0; i < Academy.tasks.length; i++ )
                tasks[i].innerHTML = Academy.tasks[i].message;

            Academy.tasksInterval = setInterval( Academy.checkTasks, 1000 );
        },


        changeEditorHeight: function(className) {
            /*
                Изменяет высоту редактора указанного класса. Изменяет адрес картинки
                для кнопки, отвечающей за высоту в этом редакторе.

                Переменные
                    editor  :  div-обёртка выбранного редактора;
                    img     :  кнопка-изображение (элемент);

                Запускается: кнопками "#lesson-editor div.класс > img:nth-of-type(2)".
                Атрибуты:    className - класс редактора.
            */

            let editor = document.querySelector('#lesson-editor div.' + className);
            let img = editor.getElementsByTagName('img')[2];

            editor.classList.toggle('full-size');
            img.setAttribute('src', img.getAttribute('src') == 'images/arrow-up.png'
                ? 'images/arrow-down.png' : 'images/arrow-up.png');
        },


        changeEditorScale: function(className) {
            /*
                Добавляет и убирает классы, отвечающие за масштаб текста в редакторе.

                Переменные
                    editor  :  div-обёртка выбранного редактора;

                Запускается: кнопками "#lesson-editor div.класс > img:first-of-type".
                Атрибуты:    className - класс редактора.
            */

            let editor = document.querySelector('#lesson-editor div.' + className);

            if ( editor.classList.contains('big') ) {
                editor.classList.remove('big');
                editor.classList.add('biggest');
            }
            else if ( editor.classList.contains('biggest') )
                editor.classList.remove('biggest');
            else
                editor.classList.add('big');
        },


        changeTasksOpacity: function() {
            /*
                Меняет opacity #lesson-tasks + добавляет\снимает класс off с него.

                Переменные
                    tasks  :  div-обёртка списка задач;

                Запускается: кнопка "#lesson-editor .html-editor > img:nth-of-type(2)".
                Зависимости: tasksOpacity.
            */

            let tasks = document.getElementById('lesson-tasks');

            if ( Academy.tasksOpacity == '0.5' ) {
                tasks.style.opacity = '1';
                Academy.tasksOpacity = '1';

            } else if ( Academy.tasksOpacity == '1' ) {
                tasks.style.opacity = '0';
                Academy.tasksOpacity = '0';
                tasks.classList.add('off');

            } else {
                tasks.style.opacity = '0.5';
                Academy.tasksOpacity = '0.5';
                tasks.classList.remove('off');
            }
        },


        changeTasksPosition: function() {
            /*
                Перемещает панель задач вниз\вверх, добавляя\удаляя дополнительный класс.
                При закреплении панели задач снизу, она перекрывает половину окна редакторов.
                Изображение кнопки меняется в зависимости от текущего состояния панели задач.
                Переменные:
                    img - кнопка-картинка.
            */

            document.getElementById('lesson-tasks').classList.toggle('down-position');
            let img = event.target;
            img.setAttribute('src', img.getAttribute('src') == 'images/arrow-up.png'
                ? 'images/arrow-down.png' : 'images/arrow-up.png');
        },


        changeTasksPin: function() {
            /*
                Закрепляет\открепляет панель задач, добавляя\удаляя дополнительный класс.
                При закреплении панели задач она перекрывает все окна, включая всплывающее меню.
                Изображение кнопки меняется в зависимости от текущего состояния панели задач.
                Переменные:
                    img - кнопка-картинка.
            */

            document.getElementById('lesson-tasks').classList.toggle('pin-power');
            let img = event.target;
            img.setAttribute('src', img.getAttribute('src') == 'images/pin-green.png'
                ? 'images/pin-red.png' : 'images/pin-green.png');
        },


        changeViewScale: function() {
            /*
                Изменяет масштаб окон представления. Включает в себя масштабирование 
                окон (transform: scale; height; width) и их позиционирование (top,
                left). Также меняет подсказку кнопки смены масштаба (показывает текущий
                масштаб).

                Переменные
                    before  :  окно представления 1 - "до изменения";
                    after   :  окно представления 2 - "после изменения";
                    loop    :  кнопка (изображение) масштабирования окон представления.

                Запускается: кнопкой "#lesson-editor > img".
                Зависимости: viewScale.
            */

            let before = document.getElementById('view-before');
            let after = document.getElementById('view-after');
            let loop = document.querySelector('#lesson-editor > img:first-of-type');

            switch ( this.viewScale ) {
                case "1":
                    before.style.transform = after.style.transform = 'scale(0.75)';
                    before.style.height = after.style.height = "67vh";
                    before.style.width = after.style.width = "67%";
                    before.style.top = after.style.top = "-8vh";
                    before.style.left = "-8%";
                    after.style.left = "42%";
                    this.viewScale = '0.75';
                    loop.title = "Текущий масштаб: 75%";
                    break;

                case "0.75":
                    before.style.transform = after.style.transform = 'scale(0.5)';
                    before.style.height = after.style.height = "100vh";
                    before.style.width = after.style.width = "100%";
                    before.style.top = after.style.top = "-25vh";
                    before.style.left = "-25%";
                    after.style.left = "25%";
                    this.viewScale = '0.5';
                    loop.title = "Текущий масштаб: 50%";
                    break;

                case "0.5":
                    before.style.transform = after.style.transform = 'scale(0.25)';
                    before.style.height = after.style.height = "200vh";
                    before.style.width = after.style.width = "200%";
                    before.style.top = after.style.top = "-75vh";
                    before.style.left = "-75%";
                    after.style.left = "-25%";
                    this.viewScale = '0.25';
                    loop.title = "Текущий масштаб: 25%";
                    break;

                case "0.25":
                    before.style.transform = after.style.transform = 'scale(1.25)';
                    before.style.height = after.style.height = "40vh";
                    before.style.width = after.style.width = "40%";
                    before.style.top = after.style.top = "5vh";
                    before.style.left = "5%";
                    after.style.left = "55%";
                    this.viewScale = '1.25';
                    loop.title = "Текущий масштаб: 125%";
                    break;

                case "1.25":
                    before.style.transform = after.style.transform = 'scale(1.66)';
                    before.style.height = after.style.height = "30vh";
                    before.style.width = after.style.width = "30%";
                    before.style.top = after.style.top = "10vh";
                    before.style.left = "10%";
                    after.style.left = "60%";
                    this.viewScale = '1.66';
                    loop.title = "Текущий масштаб: 166%";
                    break;

                default:
                    before.style.transform = after.style.transform = 'scale(1)';
                    before.style.height = after.style.height = "50vh";
                    before.style.width = after.style.width = "50%";
                    before.style.top = after.style.top = "0";
                    before.style.left = "0";
                    after.style.left = "50%";
                    this.viewScale = '1';
                    loop.title = "Текущий масштаб: 100%";
                    break;
            }
        },


        checkTasks: function() {
            /*
                Проверяет выполненность всех задач каждую секунду (интервалом). При
                выполнении задачи, добавляет класс 'done' пункту списка с текстом этой
                задачи, при невыполнении снимает. При выполнении всех задач добавляет
                класс "all-done" обёртке списка задач - #lesson-tasks.

                Переменные
                    count  :  общее количество задач;
                    done   :  количество завершённых задач;
                    i      :  счётчик задач;

                Запускается: bindLesson.
                Зависимости: tasks.
                Запускает:   tasks[i].check.
            */

            let count = Academy.tasks.length;
            let [done, i] = [0, 0];

            for ( ; i < count; ) {
                Academy.tasks[i].done = Academy.tasks[i].check(this.vars);

                if ( Academy.tasks[i].done ) {
                    document.querySelector('#lesson-tasks li:nth-of-type('+(++i)+')')
                        .classList.add('done');
                    done++;
                } else
                    document.querySelector('#lesson-tasks li:nth-of-type('+(++i)+')')
                        .classList.remove('done');
            }

            if ( count == done )
                document.getElementById('lesson-tasks').classList.add('all-done');
            else
                document.getElementById('lesson-tasks').classList.remove('all-done');
        },


        copyToObject: function(code) {
            // Добавляет к объявлению переменных в коде копирование их в объект.
            // Запускается: GLOBAL.consoleInputWork, updateJS.
            code = code.replace(/var (\S\w*)/gi, "var $1 = Academy.vars.$1")
                            .replace(/let (\S\w*)/gi, "let $1 = Academy.vars.$1")
                                .replace(/const (\S\w*)/gi, "const $1 = Academy.vars.$1");

            let array = code.split('function');
            for ( let i = 1; i < array.length; i++ ) {
                let index0 = array[i].indexOf('{');
                let index2 = array[i].indexOf('}');
                let count = 0;
                while( ~index0 ) {
                    index0 = array[i].indexOf('{', index0+1);
                    if ( ~index0 && ~index2 && index0 < index2 )
                        index2 = array[i].indexOf('}', index2+1);
                    else
                        break;
                }
                array[i] = array[i].slice(0, index2).replace(/var (\S\w*) = Academy.vars./gi, "var ")
                            .replace(/let (\S\w*) = Academy.vars./gi, "let ")
                                .replace(/const (\S\w*) = Academy.vars./gi, "const ") + array[i].slice(index2);
            }
            code = array.join('function');

            return code;
        },


        createCodeMirrors: function() {
            /*
                Заменяет textarea редакторов объектами CodeMirror для подсветки кода.
                Блокирует заданные редакторы для урока. Добавляет объектам слушатель
                события на изменение содержимого - функции обновления кода для окон
                представления.

                Переменные
                    textareas  :  коллекция textarea редакторов.

                Запускается: prepareEditors.
                Зависимости: blocked, CSS, HTML, JS.
                Запускает:   updateCSS, updateHTML, updateJS.
            */

            let textareas = document.querySelectorAll('#lesson-editor textarea');

            switch(Academy.blocked) {
                case "1":
                    Academy.HTML = CodeMirror.fromTextArea(textareas[0], {
                            lineNumbers: true,
                            lineWrapping: true,
                            mode: 'htmlmixed',
                            readOnly: true,
                        });

                    Academy.CSS = CodeMirror.fromTextArea(textareas[1], { 
                            lineNumbers: true,
                            lineWrapping: true,
                            mode: 'css',
                            theme: 'neo',
                            indentUnit: 4,
                        });
                    Academy.CSS.on("change", Academy.updateCSS);

                    Academy.JS = CodeMirror.fromTextArea(textareas[2], { 
                            lineNumbers: true,
                            lineWrapping: true,
                            mode: 'javascript',
                            indentUnit: 4,
                        });
                    Academy.JS.on("change", Academy.updateJS)
                    break;

                case "2":
                    Academy.HTML = CodeMirror.fromTextArea(textareas[0], {
                            lineNumbers: true,
                            lineWrapping: true,
                            mode: 'htmlmixed',
                        });
                    Academy.HTML.on("change", Academy.updateHTML);

                    Academy.CSS = CodeMirror.fromTextArea(textareas[1], { 
                            lineNumbers: true,
                            lineWrapping: true,
                            mode: 'css',
                            readOnly: true,
                            theme: 'neo',
                            indentUnit: 4,
                        });

                    Academy.JS = CodeMirror.fromTextArea(textareas[2], { 
                            lineNumbers: true,
                            lineWrapping: true,
                            mode: 'javascript',
                            indentUnit: 4,
                        });
                    Academy.JS.on("change", Academy.updateJS)
                    break;

                case "3":
                    Academy.HTML = CodeMirror.fromTextArea(textareas[0], {
                            lineNumbers: true,
                            lineWrapping: true,
                            mode: 'htmlmixed',
                        });
                    Academy.HTML.on("change", Academy.updateHTML);

                    Academy.CSS = CodeMirror.fromTextArea(textareas[1], { 
                            lineNumbers: true,
                            lineWrapping: true,
                            mode: 'css',
                            theme: 'neo',
                            indentUnit: 4,
                        });
                    Academy.CSS.on("change", Academy.updateCSS);

                    Academy.JS = CodeMirror.fromTextArea(textareas[2], { 
                            lineNumbers: true,
                            lineWrapping: true,
                            mode: 'javascript',
                            readOnly: true,
                            indentUnit: 4,
                        });
                    break;

                case "4":
                    Academy.HTML = CodeMirror.fromTextArea(textareas[0], {
                            lineNumbers: true,
                            lineWrapping: true,
                            mode: 'htmlmixed',
                            readOnly: true,
                        });

                    Academy.CSS = CodeMirror.fromTextArea(textareas[1], { 
                            lineNumbers: true,
                            lineWrapping: true,
                            mode: 'css',
                            readOnly: true,
                            theme: 'neo',
                            indentUnit: 4,
                        });

                    Academy.JS = CodeMirror.fromTextArea(textareas[2], { 
                            lineNumbers: true,
                            lineWrapping: true,
                            mode: 'javascript',
                            indentUnit: 4,
                        });
                    Academy.JS.on("change", Academy.updateJS)
                    break;

                case "5":
                    Academy.HTML = CodeMirror.fromTextArea(textareas[0], {
                            lineNumbers: true,
                            lineWrapping: true,
                            mode: 'htmlmixed',
                            readOnly: true,
                        });

                    Academy.CSS = CodeMirror.fromTextArea(textareas[1], { 
                            lineNumbers: true,
                            lineWrapping: true,
                            mode: 'css',
                            theme: 'neo',
                            indentUnit: 4,
                        });
                    Academy.CSS.on("change", Academy.updateCSS);

                    Academy.JS = CodeMirror.fromTextArea(textareas[2], { 
                            lineNumbers: true,
                            lineWrapping: true,
                            mode: 'javascript',
                            readOnly: true,
                            indentUnit: 4,
                        });
                    break;

                case "6":
                    Academy.HTML = CodeMirror.fromTextArea(textareas[0], {
                            lineNumbers: true,
                            lineWrapping: true,
                            mode: 'htmlmixed',
                        });
                    Academy.HTML.on("change", Academy.updateHTML);

                    Academy.CSS = CodeMirror.fromTextArea(textareas[1], { 
                            lineWrapping: true,
                            lineNumbers: true,
                            mode: 'css',
                            readOnly: true,
                            theme: 'neo',
                            indentUnit: 4,
                        });

                    Academy.JS = CodeMirror.fromTextArea(textareas[2], { 
                            lineNumbers: true,
                            lineWrapping: true,
                            mode: 'javascript',
                            readOnly: true,
                            indentUnit: 4,
                        });
                    break;

                default:
                    Academy.HTML = CodeMirror.fromTextArea(textareas[0], {
                            lineNumbers: true,
                            lineWrapping: true,
                            mode: 'htmlmixed',
                        });
                    Academy.HTML.on("change", Academy.updateHTML)

                    Academy.CSS = CodeMirror.fromTextArea(textareas[1], { 
                            lineNumbers: true,
                            lineWrapping: true,
                            mode: 'css',
                            theme: 'neo',
                            indentUnit: 4,
                        });
                    Academy.CSS.on("change", Academy.updateCSS);

                    Academy.JS = CodeMirror.fromTextArea(textareas[2], { 
                            lineNumbers: true,
                            lineWrapping: true,
                            mode: 'javascript',
                            indentUnit: 4,
                        });
                    Academy.JS.on("change", Academy.updateJS)
                    break;
            }
        },


        editConsole: function() {
            // Добавляет фокус консоли.
            // Запускается: кликом на открытой консоли.
            document.getElementById('console-input').focus();
        },


        getLessonsData: function(lesson) {
            // Получение объекта данных для текущего урока.
            // Запускается: startLesson.
            // Атрибуты:    lesson - номер урока, данные которого нужно получить.
            // Зависимости: GLOBAL.LessonsData.
            lesson = "lesson" + lesson;

            return {
                html: LessonsData[lesson] ? LessonsData[lesson].html : "",
                css: LessonsData[lesson] ? LessonsData[lesson].css : "",
                hidden: LessonsData[lesson] ? LessonsData[lesson].hidden : "",
                js: LessonsData[lesson] ? LessonsData[lesson].js : "",
                theory: LessonsData[lesson] ? LessonsData[lesson].theory : "",
                tasks: LessonsData[lesson] ? LessonsData[lesson].tasks : [],
                blocked: LessonsData[lesson] ? LessonsData[lesson].blocked : "",
                editorOff: LessonsData[lesson] ? LessonsData[lesson].editorOff : "",
            }
        },


        newStart: function() {
            /*
                Выходит из урока с помощью функции setLevel, ищет по названию кнопку
                текущего урока по названию, эмулирует нажатие на кнопку следующего
                урока, если он присутствует в курсе.

                Переменные
                    text     :  название текущего урока;
                    buttons  :  кнопки текущего курса;
                    i        :  счётчик кнопок курса;


                Запускается: кнопкой "#lesson-menu button:nth-of-type(3)".
                Зависимости: this, textNow.
                Запускает:   setLevel.
            */

            let lesson = "lesson" + (this.lesson + 1);
            Academy.setLevel(4);

            setTimeout( function() {
                let buttons = document
                    .querySelectorAll('[class*="menu-level-4-course-"] button');

                for ( let i = 0; i < buttons.length; i++ ) {
                    if ( buttons[i].dataset.lesson === lesson )
                        buttons[i].click();
                }
            }.bind(this), 10 );
        },


        pattertReplacement: function(rep, multi) {
            // Вставляет запрос в функцию поиска с предустановленным паттерном.
            // Атрибуты:    rep - строка запроса, multi - количественный флаг запроса.
            // Запускается: replacePattern.
            return multi
                ? `querySelectorAll("#view-after .view-body " +` + rep + `)`
                : `querySelector("#view-after .view-body " +` + rep + `)`;
        },


        pattertReplacementOld: function(rep, multi) {
            // Вставляет запрос в функцию поиска с предустановленным паттерном.
            // Атрибуты:    rep - строка запроса, multi - количественный флаг запроса.
            // Запускается: replacePattern.
            return multi
                ? `querySelectorAll("#view-after .view-body ` + rep + `")`
                : `querySelector("#view-after .view-body ` + rep + `")`;
        },


        prepareEditors: function() {
            // Запускает функции подготовки редакторов кода.
            // Запускается: startLesson.
            // Запускает:   activateDragAndDropSizingForEditors, addReadOnlyHelpers,
            //              createCodeMirrors, turnOffEditorsByDefault.

            Academy.createCodeMirrors();
            Academy.turnOffEditorsByDefault();
            Academy.addReadOnlyHelpers();
            Academy.activateDragAndDropSizingForEditors();
        },


        turnOffEditorsByDefault: function() {
            /*
                Добавляет класс 'off' выключенным по умолчанию редакторам, убирает этот
                класс у включенных.

                Переменные:
                    html, css, js  -  div-обёртки соответствующих редакторов.

                Запускается: prepareEditors.
                Зависимости: editorOff.
            */

            let html = document.querySelector('#lesson-editor .html-editor');
            let css = document.querySelector('#lesson-editor .css-editor');
            let js = document.querySelector('#lesson-editor .js-editor');

            switch (Academy.editorOff) {
                case '1':
                    html.classList.add('off');
                    css.classList.remove('off');
                    js.classList.remove('off');
                    Academy.CSS.refresh();
                    Academy.JS.refresh();
                    break;
                case '2':
                    html.classList.remove('off');
                    css.classList.add('off');
                    js.classList.remove('off');
                    Academy.HTML.refresh();
                    Academy.JS.refresh();
                    break;
                case '3':
                    html.classList.remove('off');
                    css.classList.remove('off');
                    js.classList.add('off');
                    Academy.HTML.refresh();
                    Academy.CSS.refresh();
                    break;
                case '4':
                    html.classList.add('off');
                    css.classList.add('off');
                    js.classList.remove('off');
                    Academy.JS.refresh();
                    break;
                case '5':
                    html.classList.add('off');
                    css.classList.remove('off');
                    js.classList.add('off');
                    Academy.CSS.refresh();
                    break;
                case '6':
                    html.classList.remove('off');
                    css.classList.add('off');
                    js.classList.add('off');
                    Academy.HTML.refresh();
                    break;
                case '7':
                    html.classList.remove('off');
                    css.classList.remove('off');
                    js.classList.remove('off');
                    document.querySelector('#lesson-theory button')
                        .textContent = 'Хорошо';
                    Academy.HTML.refresh();
                    Academy.CSS.refresh();
                    Academy.JS.refresh();
                    break;
                case '8':
                    html.classList.add('off');
                    css.classList.add('off');
                    js.classList.remove('off');
                    document.getElementById('lesson-console').classList.remove('off');
                    Academy.JS.refresh();
                    break;
                case '9':
                    html.classList.add('off');
                    css.classList.add('off');
                    js.classList.remove('off');
                    document.getElementById('lesson-console').classList.remove('off');
                    document.querySelector('#lesson-theory button')
                        .textContent = 'Хорошо';
                    Academy.JS.refresh();
                    break;
                case '10':
                    html.classList.remove('off');
                    css.classList.add('off');
                    js.classList.remove('off');
                    document.getElementById('lesson-console').classList.remove('off');
                    Academy.JS.refresh();
                    break;
                default:
                    html.classList.remove('off');
                    css.classList.remove('off');
                    js.classList.remove('off');
                    Academy.HTML.refresh();
                    Academy.CSS.refresh();
                    Academy.JS.refresh();
                    break;
            }
        },


        startLesson: function(lesson) {
            /*
                Запуск выбранного урока. Сначала получает объект данных по выбранному
                уроку. Записывает полученные данные в свойства Academy. Проверяет, есть
                ли материалы по уроку в localStorage, при положительном ответе,
                перезаписывает данные по-умолчанию свежими. Через 25 милисекунд
                запускает анонимную функцию, где изменяется html теории, идёт
                привязка данных к окнам представления и подготавливаются редакторы
                кода.

                Переменные:
                    newLesson    -  объект, содержащий данные по уроку;
                    lessonStore  -  объект из localStorage по уроку.

                Запускается: setLesson.
                Атрибуты:    lesson - номер выбранного урока.
                Зависимости: GLOBAL.localStorage, blocked, currentCSS, currentHTML,
                             editorOff, hiddenCSS, lessonCSS, lessonHTML, tasks,
                             textNow, vars.
                Запускает:   bindLesson, getLessonsData, prepareEditors.
            */

            let newLesson = this.getLessonsData(lesson);
            this.vars = {};

            this.currentHTML = this.lessonHTML = newLesson.html;
            this.currentCSS = this.lessonCSS = newLesson.css;
            this.hiddenCSS = newLesson.hidden;
            this.currentJS = this.lessonJS = newLesson.js;
            this.tasks = newLesson.tasks;
            this.blocked = newLesson.blocked;
            this.editorOff = newLesson.editorOff;

            if ( localStorage.getItem('ijacademy-lesson'+lesson) ) {
                let lessonStore = JSON.parse(localStorage.getItem('ijacademy-lesson'+lesson));

                if ( lessonStore.html )
                    this.currentHTML = lessonStore.html;
                if ( lessonStore.css )
                    this.currentCSS = lessonStore.css;
                if ( lessonStore.js )
                    this.currentJS = lessonStore.js;
            }

            setTimeout( function() {
                document.getElementById('lesson-theory').innerHTML += newLesson.theory;
                document.querySelector('p.what-is-now').title = this.textNow;
                document.querySelector('#lesson-menu button:nth-of-type(2)').title = this.tempText;
                document.querySelector('#lesson-menu button:nth-of-type(3)').title = this.nextName;
            }.bind(this), 10 );

            setTimeout( function() {
                this.bindLesson();
                this.prepareEditors();
            }.bind(this), 25 );
        },


        replaceID: function(selector) {
            /*
                Меняет селектор по id на селектор по аттрибуту [data-id]. Максимальная длина
                селектора принята за 100 символов.

                Аттрибуты:      -  selector, селектор.

                Переменные:
                    index       -  индекс селектора по id;
                    space       - индекс ближайшего пробела в селекторе;
                    dot         - индекс ближайшей точки (класса);
                    separator   - индекс ближайшей запятой, разделяющей несколько селекторов;
                    min         - минимальное значение из точки, пробела и запятой.

            */

            selector = selector.replace(/#view-after/gi, '13lediaf');
            selector = selector.replace(/#view-before/gi, '17lediaf');

            if ( ~selector.indexOf('#') ) {
                let index = selector.indexOf('#');
                if ( index == 0 )
                    selector = '[data-id="' + selector.slice(1);
                else
                    selector = selector.slice(0, index) + '[data-id="' +
                               selector.slice(index+1);

                let space = selector.slice(index).indexOf(' ');
                let dot = selector.slice(index).indexOf('.');
                let separator = selector.slice(index).indexOf(',');

                if ( ~space || ~dot || ~separator ) {
                    space = space == -1 ? 100 : space;
                    dot = dot == -1 ? 100 : dot;
                    separator = separator == -1 ? 100 : separator;

                    let min = Math.min(space, dot, separator);
                    selector = this.replaceID(selector.slice(0, index + min) +
                               '"]' + selector.slice(index + min));

                }
                else 
                    selector = selector + '"]';
            }

            selector = selector.replace(/13lediaf/gi, '#view-after');
            selector = selector.replace(/17lediaf/gi, '#view-before');

            return selector;
        },


        replaceEventListeners: function(code) {
            /*
                Подменяет слушатель событий в пользовательском коде со ставящегося на документ
                или тело документа на слушатель тела пользовательского вида представления.
                Аттрибут: code - пользовательский код.
            */

            return code.replace(/document.addEventListener|document.body.addEventListener/gi,
                        'document.querySelector("#view-after .view-body").addEventListener');
        },


        replacePattern: function(code, pattern) {
            /*
                Подменяет поиск по id/tagName/className/name/querySelector/querySelectorAll на
                поиски по querySelector/querySelectorAll внутри пользовательского вида представления.

                ! Для поиска по id/name не поддерживается поиск с запросами в виде переменных
                ! (используется patternReplacementOld() - иначе баг с перебором кавычек)

                Аттрибуты:  code    - пользовательский код.
                            pattern - текущий паттерн замены.

                Переменные:
                    index       - текущий индекс паттерна в пользовательском коде;
                    lateIndex   - текущий индекс конца поискового запроса;
                    rep         - поисковый запрос, включая кавычки;
                    lateStr     - код после текущего поискового запроса;
                    ind         - индекс начала поиска нового паттерна (для querySelector[-All]);
                    nextSq      - следующая скобка в поисковом запросе (для запросов cо скобками [nth-child(1)]);
                    tempInd     - временный индекс для определения конца запроса при наличии в нём скобок.
            */

            if ( ~code.indexOf(pattern) ) {
                let index = code.indexOf(pattern);
                let lateIndex = index + code.slice(index).indexOf(')');
                let rep = code.slice(index + pattern.length + 1, lateIndex);
                let lateStr = "";
                if ( code.length > lateIndex + 2 && ~lateIndex )
                    lateStr = code.slice(lateIndex+1);

                if ( pattern == "getElementById" && ~lateIndex && rep) {
                    rep = `[data-id=` + rep + `]`;
                    code = code.slice(0, index) + this.pattertReplacementOld(rep, false) + lateStr;
                    code = this.replacePattern(code, pattern);
                }

                if ( pattern == "getElementsByTagName" && ~lateIndex && rep ) {
                    code = code.slice(0, index) + this.pattertReplacement(rep, true) + lateStr;
                    code = this.replacePattern(code, pattern);
                }

                if ( pattern == "getElementsByClassName" && ~lateIndex && rep ) {
                    code = code.slice(0, index) + this.pattertReplacement('"."' + "+" + rep, true) + lateStr;
                    code = this.replacePattern(code, pattern);
                }

                if ( pattern == "getElementsByName" && ~lateIndex && rep ) {
                    rep = `[name=` + rep.slice(1, rep.length-1) + `]`;
                    code = code.slice(0, index) + this.pattertReplacementOld(rep, true) + lateStr;
                    code = this.replacePattern(code, pattern);
                }

                if ( pattern == "querySelector" && ~lateIndex && rep ) {
                    let ind = 0;

                    do {
                        lateStr = "";
                        index = code.indexOf(pattern, ind);

                        if ( !~index )
                            break;

                        lateIndex = code.indexOf(')', index);

                        let tempInd;
                        let nextSq = 0;
                        if (index != code.indexOf('querySelectorAll', ind))
                            tempInd = index + pattern.length + 2;
                        else
                            tempInd = index + pattern.length + 4;
                        do {
                            nextSq = code.indexOf('(', tempInd)
                            if ( lateIndex > nextSq && ~nextSq ) {
                                lateIndex = code.indexOf(')', lateIndex+1);
                                tempInd = nextSq + 1;
                            } else
                                break;
                        } while (true)

                        if ( !~lateIndex )
                            break;

                        if ( code.length > lateIndex + 2 && ~lateIndex )
                            lateStr = code.slice(lateIndex+1);

                        if ( code.indexOf(`querySelector("#view-after .view-body`, ind) == index )
                            ind = index + 50;

                        else if ( code.indexOf(`querySelectorAll`, ind) == index ) {
                            ind = index + 16;
                        }

                        else if ( ~index && ~lateIndex && rep ) {
                            rep = code.slice(index + pattern.length + 1, lateIndex);
                            rep = this.replaceID(rep);

                            code = code.slice(0, index) + this.pattertReplacement(rep, false) + lateStr;
                            ind = index + 50;
                        }
                    } while ( ~index && ~lateIndex && rep );
                }

                if ( pattern == "querySelectorAll" && ~lateIndex && rep ) {
                    let ind = 0;

                    do {
                        lateStr = "";
                        index = code.indexOf(pattern, ind);

                        if ( !~index )
                            break;

                        lateIndex = code.indexOf(')', index);

                        let nextSq = 0;
                        let tempInd = index + pattern.length + 2;
                        do {
                            nextSq = code.indexOf('(', tempInd)
                            if ( lateIndex > nextSq && ~nextSq ) {
                                lateIndex = code.indexOf(')', lateIndex+1);
                                tempInd = nextSq + 1;
                            } else
                                break;
                        } while (true)

                        if ( !~lateIndex )
                            break;

                        if ( code.length > lateIndex + 2 && ~lateIndex )
                            lateStr = code.slice(lateIndex+1);

                        if (code.indexOf(`querySelectorAll("#view-after .view-body`, ind) == index)
                            ind = index + 10;
                        else if ( ~index && ~lateIndex && rep ) {
                            rep = code.slice(index + pattern.length + 1, lateIndex);
                            rep = this.replaceID(rep);

                            code = code.slice(0, index) + this.pattertReplacement(rep, true) + lateStr;
                            ind = index + 50;
                        }
                    } while ( ~index && ~lateIndex && rep );
                }

                if ( pattern == "document.body" ) {
                    code = code.replace(/document.body/gi, `document.querySelector("#view-after .view-body")`);
                }

            }

            return code;
        },


        replaceSearches: function(code) {
            /*
                Фабрика по запуску подмены поисковых запросов. На каждый паттерн запускается рекурсивная функция
                replacePattenr() [в случае с querySelector{-All} - циклическая] подмены всех вхождений.

                Аттрибуты:  code    - пользовательский код.

                Переменные:
                    patterns  - массив подменяемых паттернов.
            */

            let patterns = [
                "getElementById",
                "getElementsByTagName",
                "getElementsByClassName",
                "getElementsByName",
                "querySelector",
                "querySelectorAll",
                "document.body",
            ];


            for (let i = 0; i < 7; i++) {
                code = this.replacePattern(code, patterns[i]);
            }

            return code;
        },


        resetCode: function(type, js = "") {
            /*
                Сброс кода выбранного. При сбросе HTML/CSS просто ставит значение по умолчанию в
                редактор кода.
                При сбросе JS стерает все пользовательские и вспомогательные переменные урока, удаляет
                всё содержимое блока пользовательского вида, включая и div.view-body, создаёт новый
                div.view-body. Далее запускает изначальный bind HTML/CSS к окнам представления и
                наконец задаёт и исполняет код JS по умолчанию.

                Аттрибуты:  type    - тип сбрасываемого кода;
                            js      - вроде лишнее.

                Переменные:
                    elem        - родитель окна пользовательского вида - div#view-after;
                    newElem     - новый div.view-body;
                    html        - текущий пользовательский html из редактора;
                    css         - текущий пользовательский css из редактора.
            */

            switch (type) {
                case 'html':
                    this.HTML.setValue(this.lessonHTML);

                    break;
                case 'css':
                    this.CSS.setValue(this.lessonCSS);
                    break;
                case 'js':
                    this.vars = {};
                    var elem = document.getElementById('view-after');
                    elem.removeChild(document.querySelector('#view-after .view-body'))
                    var newElem = document.createElement('div');
                    newElem.classList.add('view-body');
                    newElem.setAttribute('tabindex', "0");
                    elem.insertBefore(newElem, document.getElementById('lesson-console'));

                    let html = this.HTML.getValue();
                    this.currentHTML = this.lessonHTML;

                    let css = this.CSS.getValue();
                    this.currentCSS = this.lessonCSS;

                    this.bindHTML();
                    this.bindCSS();
                    this.HTML.setValue(html);
                    this.CSS.setValue(css);

                    this.JS.setValue(this.lessonJS);
                    break;
            }
        },


        resetLessonDefault: function() {
            /*
                Сброс всех параметров урока при выходе из урока или перед началом нового.
                Удаляет интервал проверки заданий. Стирает все значения кода по-умолчанию (не
                пользовательского, а именно кода по умолчанию) для JS\HTML\CSS. Проверяет,
                пройден ли урок полностью. После стирает массив заданий, теорию и статус
                заблокированных редакторов. Стирает значения для ресайза окон редактора и
                помещает окна редактора в положение и порядок по умолчанию. Стирает все
                пользовательские и вспомогательные переменные. Записывает в localStorage
                пользовательский JS/HTML/CSS, а также статус пройденности урока. Сбрасывает
                весь пользовательский JS/HTML/CSS, статус пройденности урока, стили для
                окон представления ("до" и "пользовательского"), вспомогательные скрипты.

                Переменные:
                    passed          - статус пройденности урока (для записи в localStorage);
                    lessonStore     - объект текущего урока для записи в localStorage;
                    style           - элемент стилей по-умолчанию для окон представления;
                    style2          - элемент стилей с пользовательским кодом.
            */

            if ( this.tasksInterval )
                clearInterval(this.tasksInterval);

            this.lessonHTML = "";
            this.lessonCSS = "";
            this.hiddenCSS = "";
            this.lessonJS = "";

            let passed = false;
            for (let i = 0; i < this.tasks.length; i++) {
                if (!this.tasks[i].done) {
                    passed = false;
                    break;
                }
                passed = true;
            }

            this.tasks = [];
            this.theory = "";
            this.blocked = "";

            this.isResizing = false;
            this.lastDownX = 0;
            this.resizeLeft = null;
            this.resizeRight = null;
            this.switchSelection = 1;

            this.vars = {};

            if ( localStorage ) {
                let lessonStore = {};

                lessonStore.html = this.HTML.getValue();
                lessonStore.css = this.CSS.getValue();
                lessonStore.js = this.JS.getValue();
                lessonStore.passed = passed;

                lessonStore = JSON.stringify(lessonStore);
                localStorage.setItem('ijacademy-lesson' + this.lesson, lessonStore);
            }

            this.currentHTML = "";
            this.currentCSS = "";
            this.currentJS = "";
            this.HTML = null;
            this.CSS = null;
            this.JS = null;
            this.passed = false;

            let style = document.getElementsByTagName('head')[0]
                                .getElementsByTagName('style')[0];

            let style2 = document.getElementsByTagName('head')[0]
                                .getElementsByTagName('style')[1];

            if ( style.styleSheet ) {
                style.styleSheet.cssText = "";
                style2.styleSheet.cssText = "";

            } else {
                style.innerHTML = "";
                style2.innerHTML = "";
            }

            document.getElementsByTagName('head')[0]
                .getElementsByTagName('script')[0].innerHTML = "";
            console.log = this.tcl; // фикс для некоторых старых проверок
        },


        setCourse: function(course) {
            // Задаёт параметр курса для объекта Академии и запускает задание уровня меню уроков.

            this.course = course;
            this.loader = true;
            this.setLevel(4);
        },


        setFolder: function(folder) {
            // Задаёт параметр папки курсов для объекта Академии и запускает задание уровня меню выбора курса.

            this.setLevel(3);
            this.folder = folder;
        },


        setJS: function(js=false) {
            // Задаёт вспомогательный параметр js для объекта Академии (влияет на стили).

            this.setLevel(2);
            this.js = js;
        },


        setLevel: function(level) {
            /*
                Задаёт параметр уровня меню для объекта Академии и выполняет вспомогательные
                функции при изменении уровня. Запоминает название курса\урока. Подгружает скрипт
                текущего курса (при уровне меню == 4), регулирует класс пройденности уроков с
                помощью localStorage. Если уровень < 5, восстанавливает значения по умолчанию,
                сбрасывает номер текущего урока. При соответствующих уровнях сбрасывает значения
                папки курсов, курса и js.

                Переменные:
                    script  - новый элемент скрипта (под замену буфферному) с текущем курсом.
            */

            if ( level == 5 )
                this.tempText = this.textNow;

            this.setTextNow(event.target.textContent)
            this.level = level;

            if ( level < 5 ) {

                if (level == 4) {

                    document.body.removeChild(document.querySelector('body > script:last-of-type'));
                    let script = document.createElement('script');
                    script.setAttribute('src', 'scripts/courses/' + this.course + '.js');
                    document.body.appendChild(script);

                    setTimeout(function() {
                        let buttons = document.querySelectorAll('[data-lesson]');
                        for (var i = 0; i < buttons.length; i++) {
                            var less = buttons[i].dataset.lesson;
                            if (localStorage) {
                                let item = JSON.parse(localStorage.getItem('ijacademy-' + less));
                                if (item && item.passed) {
                                    buttons[i].classList.add('button-passed');
                                } else {
                                    buttons[i].classList.remove('button-passed');
                                }
                            } else {
                                buttons[i].classList.remove('button-passed');
                            }
                        }
                    }, 10);
                }

                if (this.lesson) {
                    this.resetLessonDefault();
                    this.lesson = 0;
                }

                if ( level < 4 ) {
                    this.course = 0;

                    if ( level < 3 ) {
                        this.folder = 0;

                        if ( level < 2 ) {
                            setTimeout( () => {
                                document.getElementsByClassName('menu-level-1')[0]
                                    .style.opacity = 1;
                            }, 100 );

                            this.js = false;
                        }
                    }
                }
            }
        },


        setLesson: function(lesson) {
            /*
                Запускает урок, перед этим запоминая название следующего урока в курсе (если его нет,
                то названием станет "Конец курса!"). Также запускает изменение уровня меню.

                Аттрибуты:
                    lesson  - запускаемый урок.

                Переменные:
                    next    - кнопка с параметром [data-lesson] следующего урока.
            */

            let next = document.querySelector('[data-lesson="lesson'+(lesson+1)+'"]')
            if (next) {
                this.next = lesson+1;
                this.nextName = next.textContent;
            }
            else {
                this.next = 0;
                this.nextName = "Конец курса!";
            }

            this.setLevel(5);
            this.lesson = lesson;
            this.startLesson(lesson);
        },


        setTextNow(text) {
            // Выставляет параметр текущего названия курса\урока.

            if ( text == "Назад" || text == "Следующий" )
                text = this.tempText;
            if ( ~text.indexOf('К меню "') )
                text = text.slice(8, text.length-1);

            this.textNow = text;
        },


        switchCSSHTML: function() {
            // Меняет местами редакторы кода JS/HTML/CSS - три возможных положения. Запоминает
            // текущее положение в параметр объекта Академии.

            switch (Academy.switchSelection) {
                case 1:
                    document.getElementById('lesson-editor').insertBefore(
                        document.querySelector('#lesson-editor > div:nth-of-type(2)'), 
                            document.querySelector('#lesson-editor > div:nth-of-type(1)'))
                    Academy.switchSelection = 2;
                    break;
                case 2:
                    document.getElementById('lesson-editor').insertBefore(
                        document.querySelector('#lesson-editor > div:nth-of-type(3)'), 
                            document.querySelector('#lesson-editor > div:nth-of-type(1)'))
                    Academy.switchSelection = 3;
                    break;
                case 3:
                    document.getElementById('lesson-editor').insertBefore(
                        document.querySelector('#lesson-editor > div:nth-of-type(3)'), 
                            document.querySelector('#lesson-editor > div:nth-of-type(1)'))
                    document.getElementById('lesson-editor').insertBefore(
                        document.querySelector('#lesson-editor > div:nth-of-type(3)'), 
                            document.querySelector('#lesson-editor > div:nth-of-type(2)'))
                    Academy.switchSelection = 1;
                    break;
            }
        },


        toggleConsole: function() {
            // Включает\выключает консоль с помощью класса off.

            document.getElementById('lesson-console').classList.toggle('off');
        },


        toggleEditor: function(className) {
            // Включает\выключает редактор кода с классом, переданным в аттрибуте с помощью класса off.

            document.querySelector('#lesson-editor div.' + className)
                .classList.toggle('off');
            Academy.HTML.refresh();
            Academy.CSS.refresh();
            Academy.JS.refresh();
        },


        toggleLessonMenu: function() {
            // Возможно, лишнее.

            this.lessonMenu = !this.lessonMenu;
        },


        unfreezeCycles: function(code) {
            // Спасатель от бесконечного цикла пользователя.

            let patterns = ['while', 'for']
            for (let i = 0; i < 2; i++) {
                let startIndex = 0;
                let index, lateIndex;

                do {
                    index = code.indexOf(patterns[i], startIndex);
                    lateIndex = code.indexOf(')', index);
                    if (!~lateIndex || !~index)
                        break;
                    if ((index == 0 && patterns[i] == "while" && code.length > index+6 &&
                            (code[index+5] == " " || code[index+5] == "(" || code[index+5] == "\n" || code[index+5] == "\t")) ||

                        (index == 0 && patterns[i] == "for" && code.length > index+4 &&
                            (code[index+3] == " " || code[index+3] == "(" || code[index+3] == "\n" || code[index+3] == "\t")) || 

                        ( index > 0 &&
                            ( code[index-1] == " " || code[index-1] == ";" || code[index-1] == "\n" || code[index-1] == "\t" ) &&
                            patterns[i] == "while" &&
                            (code[index+5] == " " || code[index+5] == "(" || code[index+5] == "\n" || code[index+5] == "\t")) ||  

                        ( index > 0 &&
                            ( code[index-1] == " " || code[index-1] == ";" || code[index-1] == "\n" || code[index-1] == "\t" ) &&
                            patterns[i] == "for" &&
                            (code[index+3] == " " || code[index+3] == "(" || code[index+3] == "\n" || code[index+3] == "\t"))) {
                        let varName = "_tmrunfrzcycle"+index;
                        lateIndex += 20+varName.length;
                        let tempIndex = lateIndex+1;
                        code = code.slice(0, index) + " var "+varName+" = Date.now(); " + code.slice(index);

                        let letter = " ";
                        while (letter == " " || letter == "\n" || letter == "\t") {
                            if (code.length < lateIndex + 2)
                                break;
                            letter = code[lateIndex+1];
                            lateIndex++;
                        }

                        if (letter == " " || letter == "\n" || letter == "\t") {
                            startIndex = lateIndex;
                            break;
                        }

                        if (letter == "{") {
                            code = code.slice(0, lateIndex+1) + "if(Date.now()-" + varName + ">200){Academy.vars.log.push('Timeout error');setTimeout(()=>{printLog('error')},4);break;};" + code.slice(lateIndex+1);
                            startIndex = tempIndex+120;
                        } else {
                            let endIndex = code.indexOf(";", lateIndex);
                            if (!~endIndex) {
                                code = code.slice(0, tempIndex) + "{ break; }" + code.slice(tempIndex);
                                startIndex = lateIndex;
                                break;
                            }
                            code = code.slice(0, tempIndex) + "{if (Date.now() - " + varName + " > 200){Academy.vars.log.push('Timeout error');setTimeout(()=>{printLog('error')},4);break;};" +
                                   code.slice(tempIndex, endIndex+1) + "}" + code.slice(endIndex+1);
                            startIndex = tempIndex + 120;
                        }

                    } else {
                        if (code.length > index + 4)
                            startIndex = index + 3;
                        else
                            break;
                    }
                } while(~index)

            }
            return code;
        },


        updateCSS: function() {
            /*
                Обновление окна предаставления при изменении пользовательского CSS кода. Полностью
                перезаписывает содержимое элемента стиля, ответственного за пользовательский код.
                Также добавляет в каждый селектор необходимые уточнения (#view-after && .view-body)
                для привязки пользовательского кода ТОЛЬКО к окну представления пользователя.

                Аттрибуты:
                    lesson  - запускаемый урок.

                Переменные:
                    css       - текст для записи в элемент стиля;
                    rules     - пользовательский CSS, позднее массив пользовательских CSS-правил;
                    style     - зарезервированный элемент стиля для пользовательских стилей;
                    selector  - селектор текущего CSS-правила.
            */

            let css = [];
            let rules = this.CSS;
            if (!rules)
                return
            else
                rules = rules.getValue();
            let style = document.getElementsByTagName('head')[0]
                        .getElementsByTagName('style')[1];

            if ( rules.indexOf('}') )
                rules = rules.split('}');

            for (let i = 0; i < rules.length; i++) {
                rules[i] = rules[i].replace(/\n/gi, "")
                           .replace(/body/gi, ".view-body");

                if ( ~rules[i].indexOf('{') && ~rules[i].indexOf(':') ) {
                    let selector = this.replaceID(rules[i].slice(0, rules[i].indexOf('{')));
                    if ( selector.replace(/ /gi, '').indexOf('@') == 0 )
                        css.push(selector + rules[i].slice(index) + "} ");
                    else {
                        selector = selector.replace(/,/gi, ', #view-after ');

                        css.push("#view-after " + selector +
                               rules[i].slice(rules[i].indexOf('{')) + "} ");
                    }
                }
            }

            if ( style.styleSheet )
                style.styleSheet.cssText = css.join("");
            else
                style.innerHTML = css.join("");
      },


        updateHTML: function() {
            /*
                Обновление окна предаставления при изменении пользовательского HTML кода. Полностью
                перезаписывает содержимое элемента #view-after .view-body, ответственного за
                пользовательский код. Также добавляет название из тега <title> в специальное поле.
                При задании класса тегу body в пользовательском коде вероятны ошибки. Содержимое вне
                тега body игнорируется (кроме <title>). У всех элементов аттрибут id заменяется на
                атрибут data-id.

                Переменные:
                    html      - пользовательский HTML-код;
                    index0    - индекс начала содержимого тега <title>;
                    index2    - индекс конца содержимого тега </title>;
                    title     - содержимеое тега <title>.
            */

            let html = this.HTML;
            if (!html)
                return
            else
                html = html.getValue();

            if (~html.indexOf('<title>')) {
                let index0 = html.indexOf('<title>') + 7;
                let index2 = html.indexOf('</title>', index0);
                if (~index2) {
                    let title = html.slice(index0, index2);
                    if (title.length)
                        document.getElementById('view-title').textContent = title;
                    else
                        document.getElementById('view-title').textContent = "...";
                }
            }

            if ( ~html.indexOf('<body>') ) {
                if ( ~html.indexOf('</body>') )
                    html = html.slice(html.indexOf('<body>') +
                        6, html.indexOf('</body>'));
                else
                    html = html.slice(html.indexOf('<body>') + 6);

                if (document.getElementById('view-after'))
                    document.getElementById('view-after')
                        .getElementsByClassName('view-body')[0]
                            .innerHTML = html.replace(/ id=/gi, ' data-id=');

            } else {
                if (document.getElementById('view-after'))
                    document.getElementById('view-after')
                        .getElementsByClassName('view-body')[0]
                            .innerHTML = html.replace(/ id=/gi, ' data-id=');
            }
        },


        updateJS: function() {
            /*
                Здесь творится магия. Большинство проблем и работы было связано именно с реализацией
                исполняемого JS. Эта функция представляет вершину этого айсберга. По сути она ответственна
                за исправление и исполнение пользовательского кода.

                Сначала перезаписывается массив выводов в консоль, запускается вспомогательная функция для
                текущего урока, если она присутствует. Определяется функция evalInContext для выполнения
                пользовательского кода в контексте нужного объекта, также она отлавливает первичные ошибки
                кода пользователя (если они в "псевдоглобальной" видимости, то есть не в пользовательских
                функциях). Такие ошибки видны в консоли. Пользовательский код обрабатывается - а именно
                заменяются поисковые функции (getElementById, querySelector и т.д.), "псевдоглобальные"
                переменные копируются в объект-контекст, заменяются слушатели событий для документа и
                тела на тело окна пользовательского представления (#view-after .view-body). Удаляется
                старое тело окна пользовательского представления и создаётся новый элемент. Обновляется
                HTML код для воссоздания окна пользовательского представления. Манипуляция с пересозданием
                этого окна создана для отмены манипуляций, произведённых прошлым JS-кодом. Через таймаут
                15мс исправленный пользовательский код исполняется функцией evalInContext, происходит
                создание содержимого элемента консоли.

                Переменные:
                    executableConst  - содержимое элемента консоли, html-код;
                    log         - массив выводов в консоль, содержит как текст, так и элементы в
                                       отдельном подмассиве под индексом 0;
                    context          - объект-контекст для исполнения кода, содержит пользовательские
                                       и вспомогательные переменные урока;
                    jsEvalCode       - пользовательский JS-код (изначальные, позднее исправленый);
                    html             - пользовательский HTML-код;
                    elem             - элемент-родитель пользовательского окна отображения;
                    newElem          - новый элемент div.view-body пользовательского отображения;
                    iterra           - индекс для перебора выводов в консоль (асинхронный).
            */

            let executableConst = '';
            let log = this.vars.log = [[]];
            let context = this.vars;
            Academy.vars.hI = 1;

            function evalInContext() {
                try {
                    eval(jsEvalCode);
                    Academy.vars.eH=[false,''];
                } catch (e) {
                    Academy.vars.eH=[true,e.message];
                }
            }

            let jsEvalCode = ``
            if (this.JS)
                jsEvalCode += this.JS.getValue();
            jsEvalCode = this.replaceSearches(jsEvalCode);
            jsEvalCode = this.copyToObject(jsEvalCode);
            jsEvalCode = this.replaceEventListeners(jsEvalCode);
            jsEvalCode = this.unfreezeCycles(jsEvalCode);

            let html;
            if (this.HTML)
                html = this.HTML.getValue();
            else
                html = this.lessonHTML;

            let elem = document.getElementById('view-after');
            if (elem) {
                let newElem = document.createElement('div');
                newElem.classList.add('view-body');
                newElem.setAttribute("tabindex", "0");
                elem.removeChild(document.querySelector('#view-after .view-body'))
                elem.insertBefore(newElem, document.getElementById('lesson-console'));
            }

            this.currentHTML = html;

            if (this.HTML)
                this.HTML.setValue(html);

            this.updateHTML()

            setTimeout( (function () {
                evalInContext.call(context);
                let cc=document.querySelector('#lesson-console code');
                if(cc){
                    let c=document.getElementById('console-input');
                    let d=document.getElementById('console-caret');
                    cc.innerHTML="";
                    cc.appendChild(c);
                    cc.appendChild(d);
                    var s=document.createElement('span');
                    s.textContent=" > ";
                    cc.insertBefore(s,c);
                    if (Academy.vars.eH&&Academy.vars.eH[0]){
                        Academy.vars.log.push(Academy.vars.eH[1]);
                        printLog('error message');
                    }
                }
            }).bind(this), 15);
        },

    },


    watch: {
        // Слушатели для изначальной загрузки урока, а также (возможно) при сбросе редакторов.

        currentCSS: function() {
            setTimeout( this.updateCSS.bind(this), 10 );
        },

        currentHTML: function() {
            setTimeout( this.updateHTML.bind(this), 10 );
        },

        currentJS: function() {
            setTimeout( (function() {
                this.updateHTML();
                this.updateCSS();
                setTimeout( this.updateJS.bind(this), 10 );
            }).bind(this), 10 );
        },
    },

    template: AcademyTemplate,
});


// Первое появление меню
setTimeout(() => {
    document.getElementsByClassName('menu-level-1')[0].style.opacity = 1;
}, 100);


// Глобальные функции для вновь-создаваемых элементов

function offtheory() {
    // Объектная функция не хотела работать, пришлось вынести в глобальную.
    document.getElementById('lesson-theory').classList.toggle('off');
}


function consoleInputWork() {
    /*
        Механика работы с консолью напрямую. Если нажат enter исполняет введённую команду.
        Не работают переменные.

        Переменные:
            node        инпут в консоли;
            parent      обёртка внутри консоли;
            content     содержимое инпута;
            span        рабочий элемент консоли, при выводе пользовательского исполнения;
            textNode    пользовательская команда;
            span2       рабочий элемент консоли, при выводе пользовательской команыды.
    */

    if (event.keyCode == 13) {
        event.preventDefault();
        var node = event.target;
        var parent = node.parentNode;
        var content = node.textContent;
        parent.insertBefore(document.createTextNode(content), node);
        parent.insertBefore(document.createElement('br'), node);
        var span = document.createElement('span');
        span.textContent = '... ';
        parent.insertBefore(span, node);
        var textNode = document.createTextNode('');
        parent.insertBefore(textNode, node);
        parent.insertBefore(document.createElement('br'), node);
        var span2 = document.createElement('span');
        span2.textContent = ' > ';
        parent.insertBefore(span2, node);
        node.textContent = '';

        function evalInContext() { return eval(content); }

        content = Academy.replaceSearches(content);
        content = Academy.copyToObject(content);
        content = Academy.replaceSearches(content);
        content = Academy.unfreezeCycles(content);
        try {
            textNode.textContent = eval(content);
        } catch (e) {
            textNode.textContent = e;
        }
    }
}


// Огромный объект уроков
let LessonsData = {};


// Интервал для изменения размеров редакторов с помощью мышки.
var resizeInterval = null;


// Глобальный слушатель на отпускание кнопки мышки для ресайза редакторов.
document.addEventListener('mouseup', function(e) {
    Academy.isResizing = false;
    Academy.lastDownX = 0;
    if (Academy.HTML && Academy.CSS && Academy.JS) {
        let textareas = document.querySelectorAll('#lesson-editor textarea');
        if (!textareas[0].classList.contains('off'))
            Academy.HTML.refresh();
        if (!textareas[1].classList.contains('off'))
            Academy.CSS.refresh();
        if (!textareas[2].classList.contains('off'))
            Academy.JS.refresh();
    }
})


// Глобальный слушатель на движение курсора мышки для ресайза редакторов.
document.addEventListener('mousemove', function(e) {

    if (!Academy.isResizing || !Academy.lastDownX) {
        return;
    }

    let offset = e.clientX - Academy.lastDownX;

    if (Math.abs(offset) < 3) {
        return;
    }

    let leftWidth = Academy.resizeLeft.offsetWidth;
    let rightWidth = Academy.resizeRight.offsetWidth;
    let notResizedElem = Academy.notResized.offsetWidth;
    leftWidth = leftWidth + offset;
    rightWidth = rightWidth - offset;

    let dif = 0;
    if (leftWidth < 200) {
        dif = 200 - leftWidth;
        leftWidth = 200;
        rightWidth = rightWidth - dif;
    } else if (rightWidth < 200) {
        dif = 200 - rightWidth;
        rightWidth = 200;
        leftWidth = leftWidth - dif;
    }

    Academy.notResized.style.width = notResizedElem + 'px';
    Academy.resizeLeft.style.width = leftWidth + 'px';
    Academy.resizeRight.style.width = rightWidth + 'px';

    if (offset > 0) {
        Academy.lastDownX = e.clientX - 1;
    } else {
        Academy.lastDownX = e.clientX + 1;
    }

});


document.addEventListener('keydown',(e)=>{
    var theory = document.getElementById('lesson-theory');
    if (e.keyCode === 27 && theory) theory.classList.add('off');
})



// Кастомная консоль.
let reservedConsoleLog = console.log;
console.log = function() {
    if ( !Academy.vars ) {
        reservedConsoleLog.apply(Academy, arguments)
        return;
    }
    if ( !Academy.vars.log ) {
        reservedConsoleLog.apply(Academy.vars, arguments)
        return;
    }

    let log = Academy.vars.log;

    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == 'object') {
            if (arguments[i] && arguments[i].tagName) {
                let nam = arguments[i].tagName + ", классы: " + arguments[i].classList;
                if (arguments[i].parentNode)
                    var indexN = Array.prototype.indexOf.call(arguments[i].parentNode.children, arguments[i]);
                    nam += ", индекс элемента: " + indexN;
                log.push(nam);
                log[0].push(arguments[i]);
            } else {
                if (arguments[i].length) {
                    if (Array.isArray(arguments[i])) {
                        let prettyArray = "[ ";
                        for (let j = 0; j < arguments[i].length; j++) {
                            if (typeof arguments[i][j] == 'object') {
                                prettyArray += "{ "
                                for (let key in arguments[i][j]) {
                                    prettyArray += key + ': ' + arguments[i][j][key] + ', ';
                                }
                                prettyArray += "}, "
                            } else {
                                prettyArray += arguments[i][j].toString() + ", "
                            }
                        }
                        prettyArray += "]"
                        log.push(prettyArray);
                        log[0].push(arguments[i]);
                    } else {
                        var newStr = "{ ";
                        for (var k = 0; k < arguments[i].length; k++) {
                            if (arguments[i][k] && arguments[i][k].tagName)
                                newStr += arguments[i][k].tagName + ', '
                            else
                                newStr += arguments[i][k] + ', '
                        }
                        newStr += "}";

                        log.push(newStr);
                        log[0].push(arguments[i]);
                    }
                } else {
                    if (arguments[i].__proto__.constructor.keys) {
                        var str = '{ ';
                        for (var key in arguments[i]) {
                            str += key + ': ' + arguments[i][key] + ', ';
                        }
                        str += '}';
                        log.push(str);
                    } else if (arguments[i].length === 0) {
                        if (Array.isArray(arguments[i]))
                            log.push("[ ] (пустой)");
                        else
                            log.push(arguments[i].toString() + " (пустой)")
                    } else {
                        log.push(arguments[i].toString());
                    }
                }
            }
        } else {
            log.push(arguments[i]);
        }
    }
    setTimeout(printLog,10);
};
Academy.tcl=console.log;


var printLog = (text="console.log") => {
    var l=Academy.vars.log.length;
    if(l>1){
        var i=Academy.vars.hI?Academy.vars.hI:1;
        if(i<l){
            var a=Academy.vars.log;
            var c=document.getElementById('console-caret');
            var p=c.parentNode;
            var s;
            p.insertBefore(document.createTextNode(text),c);
            p.insertBefore(document.createElement('br'),c);
            for(i;i<l;i++){
                s=document.createElement('span');
                s.textContent='... ';
                p.insertBefore(s,c);
                p.insertBefore(document.createTextNode(a[i]),c);
                p.insertBefore(document.createElement('br'),c);
            }
            s=document.createElement('span');
            s.textContent=" > ";
            p.insertBefore(s,c);
            p.insertBefore(document.getElementById('console-input'),c);
            Academy.vars.hI=i;
        }
    }
}



// Вспомогательные функции для уроков.
var getC = (a) => Academy.CSS? a? Academy.CSS.getValue() :Academy.CSS.getValue().replace(/ |\n|\t/gi,'') :"";
var getH = (a) => Academy.HTML? a? Academy.HTML.getValue() :Academy.HTML.getValue().replace(/ |\n|\t/gi,'') :"";
var getJ = () => Academy.JS? Academy.JS.getValue().replace(/ |\n|\t/gi,'') :"";
var getF = (f)=> typeof f=='function'? f.toString().replace(/ |\n|\t/gi,''):"";

var setT = () => {
    document.querySelector('#lesson-tasks ul').classList.add('test-list');
    var m = document.querySelectorAll('#lesson-tasks img');
    m[0].click();
    m[1].click();
}

var getR = (t,o=null) => {
    var e=document.getElementById('lesson-tasks').classList;
    if (t) {
        e.remove('failed-test');
        e.add('passed-test');
        Academy.vars.hA=true;
        setTimeout(function(){
            e.remove('passed-test')
        }.bind(this),2500)
    } else {
        e.remove('passed-test');
        e.add('failed-test');
        Academy.vars.hA=false;
        if(o) o.classList.add('failed-test-item');
        setTimeout(function(){
            e.remove('failed-test');
            if(o) o.classList.remove('failed-test-item');
        }.bind(this),2500)
    }
}

var hL=()=>{Academy.loader=false};

var keks,fH1,fH2,fH3,fH4,fH5,tb1,tb2,tb3,tc1,tj1,tj2,th1,th2;
