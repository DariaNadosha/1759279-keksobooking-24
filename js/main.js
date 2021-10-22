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
const getRandomElement = (array) => {
  return array[Math.floor(Math.random()*array.length)];
};
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
const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const CHECKIN_CHECKOUT = [
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
const DESCRIPTION = 'Здесь вы сможете провести отпуск ни о чем не беспокоясь.';
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const createSingleOffer = () => {
  const location = createLocation();

  return{
    author: {
      avatar: getRandomElement(AVATAR),
    },
    offer: {
      title: TITLE,
      address: `${location.lat} ${location.lng}`,
      price: getPrice(1000,50000),
      type: getRandomElement (TYPE),
      rooms: getRandomInt(1,5),
      guests: getRandomInt(1,8),
      checkin: getRandomElement (CHECKIN_CHECKOUT),
      checkout: getRandomElement (CHECKIN_CHECKOUT),
      features: createArray (FEATURES),
      description: DESCRIPTION,
      photos: createArray (PHOTOS),
    },
    location: location,
  };
};
//console.log(createSingleOffer());

const AMOUNT_OF_OBJECTS = 10;
const varietiesOfBooking = Array.from(
  {length: AMOUNT_OF_OBJECTS}, createSingleOffer
  );
varietiesOfBooking;
//console.log(varietiesOfBooking);
