//Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomInt (min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (max <= min || min<0) {
    return('Функциия не может быть выполнена');
  }

  return Math.floor(Math.random() * (max-min)) + min;
}
getRandomInt(0,100);
// console.log(getRandomInt(0,100));
//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
function getRandom(min, max, fixed=0) {
  if (max <= min || min<0) {
    return('Функциия не может быть выполнена');
  }
  return Math.random().toFixed(fixed) * (max - min) + min;
}
getRandom(0,100,2);
  // console.log(getRandom(0,100,2));
