import Filter from '../../filters/filter';
import { cardItem } from '../../../data/cards';

const testcards: Array<cardItem> = [
    {
        num: '1',
        name: 'Aspire',
        year: '2017',
        brand: 'Asus',
        color: 'серый',
        type: 'игровой',
        popular: true,
        count: '7',
    },
];

test('Test renderNumArr value after running filterCards()', () => {
    const filter = new Filter();
    filter.filterCards(testcards);
    expect(filter.renderNumArr).toEqual([]);
});
