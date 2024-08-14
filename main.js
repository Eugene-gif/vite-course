import data from './src/assets/07.json';
// Если нам нужны только определённые поля объекта, то можно выполнить деструктурирование
import { name, age } from './src/assets/07.json';

console.log(data);
console.log(name, age);