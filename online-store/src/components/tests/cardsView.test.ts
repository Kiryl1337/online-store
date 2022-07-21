import CardsView from '../cardsView/cardsView';

test('Test size setBasketCard after running checkCard()', () => {
    const cardsView = new CardsView();
    cardsView.checkCard(document.querySelector('.card-item') as HTMLDivElement, '1');
    expect(CardsView.setBasketCard.size).toBe(1);
});
