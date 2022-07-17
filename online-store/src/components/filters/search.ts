import { cards } from '../../data/cards';
import Filter from './filter';

class Search {
    public searchElement = document.querySelector('.search') as HTMLInputElement;
    public clearSearchElement = document.querySelector('.clear-search');

    public searchInput(): void {
        const search = this.searchElement;
        const clearSearch = this.clearSearchElement;

        search.oninput = function () {
            localStorage.setItem('searchInput', search.value);
            if (!(search.value === '')) {
                clearSearch?.classList.add('visible');
            } else {
                clearSearch?.classList.remove('visible');
            }
            new Filter().filterCards(cards);
        };
    }

    public clearSearch(): void {
        const search = this.searchElement;
        const clearSearch = this.clearSearchElement;

        clearSearch?.addEventListener('click', () => {
            search.value = '';
            clearSearch?.classList.remove('visible');
            search.focus();
            new Filter().filterCards(cards);
        });
    }
}

export default Search;
