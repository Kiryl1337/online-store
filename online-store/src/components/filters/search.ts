import { cardItem } from '../../data/cards';
import Filter from './filter';

class Search {
    public searchElement = document.querySelector('.search') as HTMLInputElement;

    public searchInput(cards: Array<cardItem>) {
        const search = this.searchElement;
        search.oninput = function () {
            localStorage.setItem('searchInput', search.value);
            new Filter().filterCards(cards);
        };
    }
}

export default Search;
