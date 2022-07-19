import { cardItem } from '../../data/cards';
import Sort from '../filters/sort';

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
    {
        num: '2',
        name: 'Blender',
        year: '2021',
        brand: 'Asus',
        color: 'белый',
        type: 'игровой',
        popular: true,
        count: '4',
    },
    {
        num: '3',
        name: 'ConceptD',
        year: '2022',
        brand: 'Asus',
        color: 'белый',
        type: 'домашний',
        popular: false,
        count: '3',
    },
];
const downNameSort = testcards.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
const downYearSort = testcards.sort((a, b) => Number(b.year) - Number(a.year));
const upCountSort = testcards.sort((a, b) => Number(a.count) - Number(b.count));

describe('Sort test', () => {
    const testCase = [
        {
            inputArr: testcards,
            inputSort: 'down-name-sort',
            expected: downNameSort,
        },
        {
            inputArr: testcards,
            inputSort: 'down-year-sort',
            expected: downYearSort,
        },
        {
            inputArr: testcards,
            inputSort: 'up-count-sort',
            expected: upCountSort,
        },
    ];
    testCase.forEach((test) => {
        it('Test', () => {
            expect(Sort.sortCards(test.inputArr, test.inputSort)).toEqual(test.expected);
        });
    });
});
