import Filter from '../filters/filter';
import { cards, cardItem } from '../../data/cards';

enum SortStatus {
    DOWN_NAME_SORT = 'down-name-sort',
    UP_NAME_SORT = 'up-name-sort',
    UP_YEAR_SORT = 'up-year-sort',
    DOWN_YEAR_SORT = 'down-year-sort',
    UP_COUNT_SORT = 'up-count-sort',
    DOWN_COUNT_SORT = 'down-count-sort',
}

class Sort {
    public static sortSelect = document.querySelector('.sort-select') as HTMLInputElement;

    public sortFilter(): void {
        Sort.sortSelect.onchange = function () {
            localStorage.setItem('sortOption', Sort.sortSelect.value);
            new Filter().filterCards(cards);
        };
    }
    public static sortCards<T extends Array<cardItem>>(resultArray: T, selectedValue: string): T {
        switch (selectedValue) {
            case SortStatus.DOWN_NAME_SORT:
                resultArray.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
                break;
            case SortStatus.UP_NAME_SORT:
                resultArray.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1));
                break;
            case SortStatus.UP_YEAR_SORT:
                resultArray.sort((a, b) => Number(a.year) - Number(b.year));
                break;
            case SortStatus.DOWN_YEAR_SORT:
                resultArray.sort((a, b) => Number(b.year) - Number(a.year));
                break;
            case SortStatus.UP_COUNT_SORT:
                resultArray.sort((a, b) => Number(a.count) - Number(b.count));
                break;
            case SortStatus.DOWN_COUNT_SORT:
                resultArray.sort((a, b) => Number(b.count) - Number(a.count));
                break;
        }
        return resultArray;
    }
}

export default Sort;
