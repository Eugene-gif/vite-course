const modules = import.meta.glob('./src/10/*.js', { eager: true });

console.log(modules);

// Модули будут загружены только после клика на документе
// document.addEventListener('click', () => {
//   Object.values(modules).forEach((module) => {
//     module().then((data) => {
//       console.log(data);
//     })
//   });
// })
