import { cards } from '../../data/cards';

const NUMBER_TWENTY = 20;
const TWO_SECONDS = 2000;
const STORE_CARDS = document.createElement('div');
STORE_CARDS.className = 'store-cards';
document.querySelector('.main-container')?.append(STORE_CARDS);

class CardsView {
    public static basketCounter = document.querySelector('.basket-counter');
    public static setBasketCard = new Set<string>();

    public createCards(array: Array<number>): void {
        STORE_CARDS && (STORE_CARDS.innerHTML = '');
        if (!array.length) {
            const noResults = document.createElement('div');
            noResults.classList.add('no-results');
            noResults.innerHTML = 'Извините, совпадений не обнаружено';
            STORE_CARDS?.appendChild(noResults);
        } else {
            for (const i of array) {
                const storeCard = document.createElement('div');
                storeCard.className = 'store-card';
                storeCard.setAttribute('data-card-id', `${cards[i].num}`);
                STORE_CARDS?.append(storeCard);
                storeCard.innerHTML = ` <h4 class="store-card__title">${cards[i].name}</h4>
                                              <div class="store-card__img-container"><img class="store-card__img" src="
                                              ${cards[i].img}"></div>
                                              <ul class="store-card__properties">
                                                  <li>Год выхода: <span class="year">${cards[i].year}</span></li>
                                                  <li>Брэнд: <span class="brand">${cards[i].brand}</span></li>
                                                  <li>Цвет: <span class="color">${cards[i].color}</span></li>
                                                  <li>Тип: <span class="type">${cards[i].type}</span></li>
                                                  <li>Популярный: <span class="popular">${
                                                      cards[i].popular ? 'да' : 'нет'
                                                  }</span></li>
                                                  <li>Количество: <span class="total-count">${
                                                      cards[i].count
                                                  }</span></li>
                                              </ul>                 
                                              `;
                if (CardsView.setBasketCard.has(cards[i].num)) {
                    storeCard.classList.add('add-to-basket');
                }
                storeCard.addEventListener('click', () => {
                    this.checkCard(storeCard, cards[i].num);
                });
            }
        }
    }
    public checkCard(card: HTMLDivElement, cardsNum: string): void {
        if (CardsView.setBasketCard.has(cardsNum)) {
            card.classList.remove('add-to-basket');
            CardsView.setBasketCard.delete(cardsNum);
        } else {
            if (CardsView.setBasketCard.size < NUMBER_TWENTY) {
                card?.classList.add('add-to-basket');
                CardsView.setBasketCard.add(cardsNum);
            } else {
                CardsView.basketCounter?.classList.add('basket-alert');
                alert('Извините, все слоты заполнены');
                setTimeout(() => {
                    CardsView.basketCounter?.classList.remove('basket-alert');
                }, TWO_SECONDS);
            }
        }
        CardsView.basketCounter && (CardsView.basketCounter.innerHTML = CardsView.setBasketCard.size.toString());
        localStorage.setItem('setBasketCard', JSON.stringify([...CardsView.setBasketCard]));
    }
}

export default CardsView;
