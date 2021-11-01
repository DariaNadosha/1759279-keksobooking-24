//Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomInt (min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (max <= min || min<0) ? 'Функциия не может быть выполнена'
    :Math.floor(Math.random() * (max-min)) + min;
}
getRandomInt(0,100);
// console.log(getRandomInt(0,100));
//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
function getRandom(min, max, fixed=0) {
  return (max <= min || min<0) ? 'Функциия не может быть выполнена'
    :Math.random().toFixed(fixed) * (max - min) + min;
}
getRandom(0,100,2);
// console.log(getRandom(0,100,2));
const getRandomElement = (array) => array[Math.floor(Math.random()*array.length)];

const createArray  = (array) => {
  const maxLength = array.length;
  const lengthOfArray = getRandomInt(1, maxLength);
  const newArray = [];
  while (newArray.length < lengthOfArray) {
    const indexOfEl = getRandomInt(0, maxLength-1);
    const el = array[indexOfEl];

    if (!newArray.includes(el)) {
      newArray.push(el);
    }
  }
  return newArray;
};

export {getRandomInt, getRandom, getRandomElement, createArray};
