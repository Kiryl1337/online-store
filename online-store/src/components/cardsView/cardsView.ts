import { cards } from '../../data/cards';

const storeCards = document.createElement('div');
storeCards.className = 'store-cards';
document.querySelector('.main-container')?.append(storeCards);
const basketCounter = document.querySelector('.basket-counter');
const setBasketCard = new Set<string>();

class CardsView {
    public createCards(array: Array<number>): void {
        storeCards && (storeCards.innerHTML = '');
        if (array.length === 0) {
            const noResults = document.createElement('div');
            noResults.classList.add('no-results');
            noResults.innerHTML = 'Извините, совпадений не обнаружено';
            storeCards?.appendChild(noResults);
        } else {
            for (const i of array) {
                const storeCard = document.createElement('div');
                storeCard.className = 'store-card';
                storeCard.setAttribute('data-card-id', `${cards[i].num}`);
                storeCards?.append(storeCard);
                storeCard.innerHTML = ` <h4 class="store-card__title">${cards[i].name}</h4>
                                              <div class="store-card__img-container"><img class="store-card__img" src="
                                              ${cards[i].img}"></div>
                                              <ul class="store-card__properties">
                                                  <li>Год выхода: <span class="year">${cards[i].year}</span></li>
                                                  <li>Брэнд: <span class="brand">${cards[i].brand}</span></li>
                                                  <li>Цвет: <span class="color">${cards[i].color}</span></li>
                                                  <li>Тип: <span class="type">${cards[i].type}</span></li>
                                                  <li>Популярный: <span class="popular">${
                                                      cards[i].popular === true ? 'да' : 'нет'
                                                  }</span></li>
                                                  <li>Количество: <span class="total-count">${
                                                      cards[i].count
                                                  }</span></li>
                                              </ul>                 
                                              `;
            }
        }
    }
}

export default CardsView;
