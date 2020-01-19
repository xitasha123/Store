Version Requirement
================================

Node Version
--------------------------------
node 8.*

Gulp Version
--------------------------------
gulp 3.9.1

# Description of the assembly of Gulp, BEM and the work as a whole

## Content
- [Install Node.js and create modules for Gulp](#markdown-header-install-nodejs-and-create-modules-for-gulp)
- [Assembly documentation](#markdown-header-assembly-documentation)
    - [File system](#markdown-header-file-system)
    - [Contents of folders](#markdown-header-contents-of-folders)
    - [Description of folders and files](#markdown-header-description-of-folders-and-files)

___

## Install Node.js and create modules for Gulp

- ##### Если не установлен на компьютере node.js, то для начала работы нужно все подготовить и установить:
***Для Windows***
    - На сайте <https://nodejs.org> скачиваем и устанавливаем node.js
    - Далее, через **командную строку node.js** мы устанавливаем глобально клиент gulp: `npm i gulp-cli -g`

- ##### Установка модулей для Gulp
    - В терминале (windows node.js терминал, lynux терминал или терминал IDE) переходим в папку "markup" роекта и прописываем следующее:
`npm i --save-dev browser-sync del gulp-autoprefixer gulp-cache gulp-changed gulp-csso gulp-group-css-media-queries gulp-html-prettify gulp-if gulp-imagemin gulp-load-plugins gulp-newer gulp-notify gulp-plumber gulp-pug gulp-remove-html gulp-rename gulp-rigger gulp-sass gulp-sourcemaps gulp-tinypng-nokey gulp-uglify gulp.spritesmith imagemin-pngquant vinyl-ftp`

## Сommands for the terminal
================================
___

**gulp** - создание папки build build для markup
___

**gulp html** - создание папки html для заливки на bitbucket
___

**gulp sprite** - сгенерировать спрайты phg

___

## Assembly documentation

#### File system
```
project/
│
├─── markup/
|    ├───gulp-task/
│    |   ├─── config/
|    |   |    ├───config.js
|    |   |    └───path-var.js
|    |   └─── task/
|    |        ├─── deploy.js
|    |        ├─── image.js
|    |        ├─── js.js
|    |        ├─── other.js
|    |        ├─── html.js
|    |        ├─── serve.js
|    |        └─── watch.js
|    ├─── bower.json
|    ├─── gulpfile.js
│    ├─── package.json
|    ├─── pass.js
|    |
|    └──src/
│       ├─── fonts/
│       ├─── images/
│       ├─── img/
│       ├─── js/
│       │   │
│       │   ├─── components/
│       │   └─── pages/
│       │
│       ├─── style/
│       │   │
│       │   ├─── base/
│       │   │   │
│       │   │   ├─── _index.scss
│       │   │   ├─── _fonts.scss
│       │   │   ├─── _normalize.scss
│       │   │   └─── _reset.scss
│       │   │
│       │   ├─── setting/
│       │   │   │
│       │   │   ├─── _index.scss
│       │   │   ├─── _mixins.scss
│       │   │   └─── _vars.scss
│       │   │
│       │   ├─── components/
│       │   │
│       │   ├─── pages/
│       │   │
|       |   └─── theme/
|       |        |
│       │        └─── _index.scss
|       |
│       ├─── tpl/
│       │   │
│       │   ├─── layout/
│       │   │   │
│       │   │   ├─── head-tpl.html
│       │   │   └─── footer-tpl.html
|       |   |  
|       |   ├─── components/
│       │   │
│       │   ├─── pages/
│       │   │
│       │   └─── index.html
│       │
│       ├─── vendors/
│       │   │
│       │   ├─── libs/
│       │   └─── plugins/
│       │      
└───────┘
```

[Back to top](#markdowns-header-description-of-the-assembly-of-gulp-bem-and-the-work-as-a-whole)

___

#### Contents of folders

```
src/			        # рабочие (исходные) файлы front-end разработчика
    | - tpl/			# *.html, *.jade, *.pug …
    | - style/			# *.css, *.scss, *.sass, *.less, *.styl …
    | - js/			    # *.js, *.ts, *.coffee …
    | - fonts/			# *.ttf, *.woff, *.woff2, *.eot …
    | - img/			# *.svg, *.png, *.jpg ... ( ! статические изображения, иконки )
    | - images/			# *.jpg, *.png, *.svg … ( ! заменяемые)
    | - vendors/	    # *.* (js, css, img, font, *.json … )
    |  package.json		# список зависимостей нужных для разработки
    |  gulpfile.js	    # настройки для сборщика gulp (grunt … )
```

[Back to top](#markdown-header-description-of-the-assembly-of-gulp-bem-and-the-work-as-a-whole)

___

#### Description of folders and files

Шаблоны                           | 
----------------------------------|----------------------
./tpl/                            | В папке tpl или templates хранятся исходные файлы которые служат для создания итоговой разметки веб-страницы. Это могут быть файлы с расширениям *.html, *.jade, *.pug или другие.
./tpl/index.html                  | Файл index.html содержит только ссылки на уже разработанные страницы.
./tpl/layout/                     | В папку layout скалываем файлы, которые принимают участие в построении общей структуры сайта. Содержимое этих файлов является служебным и используется почти на всех страницах. Чтобы понимать, что файлы являются служебными и их можно использовать как шаблоны (template), к именам добавляется постфикс “-tpl”. Например: head-tpl.html, header-tpl.html, footer-tpl.html и т.д. 
./tpl/components/                 | Файлы, которые размещаются в папке components, также  являются служебными и применяются для построения веб страниц. Их главное различие с файлами папки layout  в том, что содержимое может быть добавлено только на определенные страницы. Например: breadcrumbs-tpl.html, modal-tpl.html и т.д.
./tpl/pages/                      | Папка pages предназначена для хранения разработанных (рабочих) страниц веб-сайта. Под рабочими страницами подразумевается то, что они собираются с шаблонов с использованием дополнительных элементов.

Стили                             |
----------------------------------|------------------------
./style/	                  | Здесь храним файлы со стилями,  *.css, *.scss, *.sass, *.less, *.styl ...
./style/utils/                    | Папка utils собирает все инструменты и помощники по стилям в проекте. Каждая глобальная переменная, функция и примесь должна быть помещена сюда.
./style/base/                     | Папка base/ содержит то, что мы можем назвать общим шаблоном проекта. В ней вы можете найти файл сброса, общие типографские правила, а так же файл стилей (_common.scss), определяющие некоторые стандартные стили для часто используемых элементов HTML.
./style/blocks/                   | Здесь хранятся все основные (*.css, *.scss, *.sass, *.less, *.styl ...) файлы, отвечающие за постройку всего сайта. Каждый файл обязательно должен быть назван по названию блока в HTML. В этом файле описывается поведение блока, его элементов и модификаторов, как для самого блока, так и для элементов блока. <https://ru.bem.info/methodology/quick-start/>
./style/theme/                    | Папку theme складываем стили для разных версий сайта (цветовая схема, версия для печати, админка)

JavaScript                        | JavaScript  (Как организовать - <https://habrahabr.ru/post/218485/> )
----------------------------------|-----------------------
./js/                             | *.js, *.ts, *.coffee …                             
./js/modules/                     | Модули компонентов (то что желательно писать своими руками).                                                                               

Шрифты                            |
----------------------------------|-----------------------
./fonts/                          | *.ttf, *.woff, *.woff2, *.eot …
./fonts/roboto/                   | Папка для конкретного шрифта и его вариаций
./fonts/roboto/light/             | Папка для конкретной вариации шрифта

Изображения                       |
----------------------------------|-----------------------
./img/                            | *.svg, *.png, *.jpg ... статические изображения для front-end разработчика
./images/                         | *.jpg, *.png, *.svg … изображения, которые могут добавляться через админку, заменяться разработчиком, тестировщиком. В общем динамические.

Сторонние Библиотеки/плагины      |
----------------------------------|------------------------
./vendors/                        | *.* (js, css, img, font, *.json … )
./vendors/libs/                   | Сюда складываем библиотеки. Например jQuery создав для этого одноименную папку внутри папки libs/
./vendors/plugin/                 | Сюда плагины со своим содержимым

Файлы для сборки и git            |
----------------------------------|-----------------------
./package.json                    | Список зависимостей нужных для разработки
./gulpfile.js                     | Настройки для сборщика gulp (grunt … ) <http://webdesign-master.ru/blog/tools/2016-03-09-gulp-beginners.html>
./.gitignore                      | Общий для всех разработчиков


[Back to top](#markdown-header-description-of-the-assembly-of-gulp-bem-and-the-work-as-a-whole)

___


Package
=====================
___

gulp-pug                     - компиляция PUG в HTML.                     
___

gulp-html-prettify           - форматирует HTML после pug компиляции.            
___

gulp-remove-html             - очищает HTML с помощью селекторов и атрибутов CSS.        
___

gulp-sass                    - компиляция SASS/SCSS в СSS.
___

gulp-autoprefixer            - добавляет вендорные префиксы СSS.
___

gulp-group-css-media-queries - группирует медиазапросы
___

gulp-csso                    - оптимизирует и минимизирует СSS.
___

gulp-html-imagemin           - для сжатия изображений.        
___

gulp-tinypng-nokey           - для сжатия изображений.          
___

gulp-cache                  - плагин для кэширования изображений.
___

imagemin-pngquant            - позволяет преобразовывать png с 24 и 32 битами на пиксель в png с палитрой (8 бит).     
___

gulp.spritesmith             - автоматическая генерация спрайтов.           
___

del                         - очищает и копирует указанные исходники.          
___

gulp-changed                -  запускауе таски только для изменившихся файлов (pug).        
___

gulp-newer                  -  запускауе таски только для изменившихся файлов (img, js, scss/sass).
___

gulp-if                     -  разбивает команды gulp.
___

gulp-rename                 -  переименовывает файлы.     
___

gulp-notify                 -  выводит ошибки при сборке Gulp в виде системных сообщений, а главное то, что работает для разных операционных систем. 
___

gulp-plumber                -  предохраняет задачи от остановки во время их выполнения.
___

gulp-sourcemaps             - генерирует файл-маппер, который содержит информацию об исходных файлах.
___

gulp-load-plugins           -  позволяет не создавать переменные с инициализацией пакетов в gulpfile.js.
Чтобы обратиться к какому-либо пакету, достаточно перед подключением, написать, переменную с инициализации пакета gulp-load-plugins (пример: ```js .pipe(gp.pug({}) ```).
___

browser-sync                - автообновление страницы в браузере, синхронизация нескольких браузеров и устройств.
___

gulp-watch                  - следит за всеми указанными файлами или целыми директориями и в случае каких-либо изменений выполняет описанные в конфигурациях таски. 
___

vinyl-ftp                   -  плагин для подключения по ftp.
___

gulp-rigger                 -  плагин позволяет хранить статичные части сайта.
___

gulp-uglify                 -  JavaScript компрессор.
___

