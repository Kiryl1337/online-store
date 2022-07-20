import { cards } from '../../data/cards';

const NUMBER_TWENTY = 20;
const storeCards = document.createElement('div');
storeCards.className = 'store-cards';
document.querySelector('.main-container')?.append(storeCards);

class CardsView {
    public static basketCounter = document.querySelector('.basket-counter');
    public static setBasketCard = new Set<string>();

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
                if (CardsView.setBasketCard.has(cards[i].num)) {
                    storeCard.classList.add('add-to-basket');
                }
                storeCard.addEventListener('click', () => {
                    this.checkCard(storeCard, cards[i].num);
                });
            }
        }
    }
    private checkCard(card: HTMLDivElement, cardsNum: string): void {
        if (CardsView.setBasketCard.has(cardsNum)) {
            card.classList.remove('add-to-basket');
            CardsView.setBasketCard.delete(cardsNum);
        } else {
            if (CardsView.setBasketCard.size < NUMBER_TWENTY) {
                card.classList.add('add-to-basket');
                CardsView.setBasketCard.add(cardsNum);
            } else {
                CardsView.basketCounter?.classList.add('basket-alert');
                alert('Извините, все слоты заполнены');
                setTimeout(() => {
                    CardsView.basketCounter?.classList.remove('basket-alert');
                }, 2000);
            }
        }
        CardsView.basketCounter && (CardsView.basketCounter.innerHTML = CardsView.setBasketCard.size.toString());
        localStorage.setItem('setBasketCard', JSON.stringify([...CardsView.setBasketCard]));
    }
}

export default CardsView;
