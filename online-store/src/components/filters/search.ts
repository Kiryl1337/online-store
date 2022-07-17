import { cards } from '../../data/cards';
import Filter from './filter';

class Search {
    public static search = document.querySelector('.search') as HTMLInputElement;
    public static clearSearch = document.querySelector('.clear-search');

    public searchInput(): void {
        Search.search.oninput = function () {
            localStorage.setItem('searchInput', Search.search.value);
            if (!(Search.search.value === '')) {
                Search.clearSearch?.classList.add('visible');
            } else {
                Search.clearSearch?.classList.remove('visible');
            }
            new Filter().filterCards(cards);
        };
    }

    public clearSearch(): void {
        Search.clearSearch?.addEventListener('click', () => {
            localStorage.setItem('searchInput', '');
            Search.search.value = '';
            Search.clearSearch?.classList.remove('visible');
            Search.search.focus();
            new Filter().filterCards(cards);
        });
    }
}

export default Search;
