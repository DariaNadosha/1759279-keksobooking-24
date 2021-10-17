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

const AMOUNT_OF_OBJECTS = 10;

const AVATAR = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',
];
const TITLE = 'Идеальное предложение!';
const ADDRESS = '{{location.lat}}, {{location.lng}}';
function getPrice (min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (max <= min || min<0) ? 'Функциия не может быть выполнена'
   :Math.round(((Math.random() * (max-min)) + min)/500)*500;
  }
  getPrice(1000,50000);
//console.log (getPrice(1000,50000));
const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
function getRooms (min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (max <= min || min<0) ? 'Функциия не может быть выполнена'
   :Math.floor(Math.random() * (max-min)) + min;
  }
  getRooms(1,5);
  //console.log (getRooms(1,5));
function getGuests (min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (max <= min || min<0) ? 'Функциия не может быть выполнена'
    :Math.floor(Math.random() * (max-min)) + min;
  }
  getGuests(1,11);
  //console.log (getGuests(1,11));
const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];
const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const DESCRIPTION = 'Текст не добавлен. Добавить';
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

function getLat(min, max, fixed=0) {
  return (max <= min || min<0) ? 'Функциия не может быть выполнена'
  :Math.random().toFixed(fixed) * (max - min) + min;
}
getLat(35.65000,35.70000,8);
// console.log(getLat(35.65000,35.70000,8));

function getLng(min, max, fixed=0) {
  return (max <= min || min<0) ? 'Функциия не может быть выполнена'
  :Math.random().toFixed(fixed) * (max - min) + min;
}
getLng(139.70000,139.80000,2);
// console.log(getLng(0,100,8));

const infOfOffer = () => {
  return{
    author: 'Автор объявления: ' + AVATAR[Math.floor(Math.random()*AVATAR.length)],
    offer: 'Информация об объявлении: ' + TITLE + ';' +
    'Адрес: ' + ADDRESS + ';' +
    'Цена: ' + getPrice(1000,50000) + ';' +
    'Вид объекта: ' + TYPE[Math.floor(Math.random()*TYPE.length)] + ';' +
    'Количество комнат: ' + getRooms(1,5) + ';' +
    'Количество гостей: ' + getGuests(1,11) + ';' +
    'Время заселения: ' + CHECKIN[Math.floor(Math.random()*CHECKIN.length)] + ';' +
    'Дополнительно: ' + FEATURES[Math.floor(Math.random()*FEATURES.length)] + ';' +
    'Описание: ' + DESCRIPTION + ';' +
    'Фотографии: ' + PHOTOS[Math.floor(Math.random()*PHOTOS.length)],
    location: 'Расположение: ' + getLat(35.65000,35.70000,8) + ';' + getLng(139.70000,139.80000,2),
  }
}
//console.log(infOfOffer());
const varietiesOfBooking = Array.from(
  {length: AMOUNT_OF_OBJECTS}, infOfOffer
  );

//console.log(varietiesOfBooking);
