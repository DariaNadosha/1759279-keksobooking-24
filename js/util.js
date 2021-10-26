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
function getPrice (min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (max <= min || min<0) ? 'Функция не может быть выполнена'
    :Math.floor(((Math.random() * (max-min)) + min)/500)*500;
}
getPrice(1000, 50000);
const getRandomElement = (array) => array[Math.floor(Math.random()*array.length)];
const createLocation = () => ({
  lat: getRandom (35.65, 35.7),
  lng: getRandom (139.7, 139.8),
});
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

export {getRandomInt, getRandom, getPrice, getRandomElement, createLocation, createArray};
