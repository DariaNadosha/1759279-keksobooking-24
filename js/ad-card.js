import './data.js';
import { varietiesOfBooking } from './data.js';
import { createSingleOffer } from './data.js';
import './util.js';

const mapBlock = document.querySelector('.map__canvas');
const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const typeToNameMap = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const popupFeatures = document.querySelector('.popup__features');
const featuresFragment = document.createDocumentFragment();

const bookingElements = varietiesOfBooking;

bookingElements.forEach((booking) =>
{
  const bookingElement = cardTemplate.cloneNode(true);
  bookingElement.querySelector('.popup__title').textContent = booking.offer.title;
  bookingElement.querySelector('.popup__text--address').textContent = `${booking.offer.address}`;
  bookingElement.querySelector('.popup__text--price').textContent = `${booking.offer.price  } ₽/ночь`;
  bookingElement.querySelector('.popup__type').textContent = typeToNameMap[booking.offer.type];
  bookingElement.querySelector('.popup__text--capacity').textContent = `${booking.offer.rooms  } комнаты для ${booking.offer.guests  } гостей`;
  bookingElement.querySelector('.popup__text--time').textContent = `Заезд после ${booking.offer.checkin  }, выезд до ${booking.offer.checkout  }`;
  bookingElement.querySelector('.popup__features').li = featuresFragment; //исправить - если без изображений, то при обновлении появляются рандомные варианты, есои вместо textContent вставить li, отображаются изобр всех удобств
  bookingElement.querySelector('.popup__description').textContent = booking.offer.description;
  bookingElement.querySelector('.popup__photo').src = booking.offer.photos; //Корректно отображаются только 2 фото из 3х и по одной
  bookingElement.querySelector('.popup__avatar').src = booking.author.avatar;
  mapBlock.appendChild(bookingElement);
});

const noData = () => {
  if (document.getElementsByClassName('popup__description')[0].textContent ===''){
    document.getElementsByClassName('popup__description')[0].style.display = 'none';
  }
};
noData;


const featureWifi = document.createElement('li');
featureWifi.classList.add('popup__feature','popup__feature--wifi');
popupFeatures.appendChild(featureWifi);
const featureDishwasher = document.createElement('li');
featureWifi.classList.add('popup__feature','popup__feature--dishwasher');
popupFeatures.appendChild(featureDishwasher);
const featureParking = document.createElement('li');
featureWifi.classList.add('popup__feature','popup__feature--parking');
popupFeatures.appendChild(featureParking);
const featureWasher = document.createElement('li');
featureWifi.classList.add('popup__feature','popup__feature--washer');
popupFeatures.appendChild(featureWasher);
const featureElevator = document.createElement('li');
featureWifi.classList.add('popup__feature','popup__feature--elevator');
popupFeatures.appendChild(featureElevator);
const featureConditioner = document.createElement('li');
featureWifi.classList.add('popup__feature','popup__feature--conditioner');
popupFeatures.appendChild(featureConditioner);

`${createSingleOffer.offer.features}`.forEach(
  (bookingFeatures) => {
    const featureListItem = popupFeatures.querySelector('.popup__feature--' + bookingFeatures);

    if (featureListItem) {
      featuresFragment.append(featureListItem);
    }
  });
popupFeatures.innerHTML = '';
popupFeatures.append(featuresFragment);

//В список .popup__features выведите все доступные удобства в объявлении.

//В блок .popup__photos выведите все фотографии из списка offer.photos. Каждая из строк массива photos должна записываться как атрибут src соответствующего изображения.

//Предусмотрите ситуацию, когда данных для заполнения не хватает. Например, отсутствует описание. В этом случае соответствующий блок в карточке скрывается.
