// as: 'raw' - позволяет импортировать содержимое модулей ввиде строки
// as: 'url' - позволяет импортировать путь
// eager: true - отключает динамическое поведение функции glob, т.е. несмотря на то, что модули должны быть загружены после клика по слушателю события, они в данном случае загрузятся и выполнятся как загрузится страница
// const modules = import.meta.glob('./src/10/*.js', { as: 'url', eager: true });

// Указываем какие именно данные мы хотим получить, чтобы не экспортировать всё содержимое модулей
// const modules = import.meta.glob('./src/10/*.js', {import: 'name'});

// для стандартного экспорта
// const modules = import.meta.glob('./src/10/*.js', {import: 'default'});

// В данном случае импортирует все модули сразу же при первоначальной загрузке страницы
const modules = import.meta.glob('./src/10/*.js', {eager: true, import: 'name'});

console.log(modules);

// Модули будут загружены только после клика на документе, работает без eager: true
// document.addEventListener('click', () => {
//   Object.values(modules).forEach((module) => {
//     module().then((name) => {
//       console.log(name);
//     })
//   });
// })
