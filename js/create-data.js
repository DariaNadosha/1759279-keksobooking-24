import {getRandomInt, getPrice, getRandomElement, createLocation, createArray} from './util.js';
import {AVATAR, TITLE, TYPE, CHECKIN_CHECKOUT, FEATURES, DESCRIPTION, PHOTOS} from './data';

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
  {length: AMOUNT_OF_OBJECTS}, createSingleOffer,
);
varietiesOfBooking;
//console.log(varietiesOfBooking);

export {createSingleOffer, createLocation, AMOUNT_OF_OBJECTS, varietiesOfBooking};
