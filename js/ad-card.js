import './data.js';
import { varietiesOfBooking } from './data.js';
import './util.js';

const mapBlock = document.querySelector('.map__canvas');
const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');


const bookingElements = varietiesOfBooking;

bookingElements.forEach((booking) =>
{
  const bookingElement = cardTemplate.cloneNode(true);
  bookingElement.querySelector('.popup__title').textContent = booking.offer.title;
  bookingElement.querySelector('.popup__text--address').textContent = `${booking.offer.address}`;
  bookingElement.querySelector('.popup__text--price').textContent = `${booking.offer.price  } ₽/ночь`;
  bookingElement.querySelector('.popup__type').textContent = booking.offer.type; //исправить
  bookingElement.querySelector('.popup__text--capacity').textContent = `${booking.offer.rooms  } комнаты для ${booking.offer.guests  } гостей`;
  bookingElement.querySelector('.popup__text--time').textContent = `Заезд после ${booking.offer.checkin  }, выезд до ${booking.offer.checkout  }`;
  bookingElement.querySelector('.popup__features').textContent = booking.offer.features; //исправить - если без изображений, то при обновлении появляются рандомные варианты, есои вместо textContent вставить li, отображаются изобр всех удобств
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

//В блок .popup__type выведите тип жилья offer.type, сопоставив с подписями:
//Квартира для flat
//Бунгало для bungalow
//Дом для house
//Дворец для palace
//Отель для hotel

//В список .popup__features выведите все доступные удобства в объявлении.

//В блок .popup__photos выведите все фотографии из списка offer.photos. Каждая из строк массива photos должна записываться как атрибут src соответствующего изображения.

//Предусмотрите ситуацию, когда данных для заполнения не хватает. Например, отсутствует описание. В этом случае соответствующий блок в карточке скрывается.

