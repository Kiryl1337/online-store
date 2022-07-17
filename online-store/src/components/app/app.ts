import { cards } from '../../data/cards';
import Filter from '../filters/filter';
import Search from '../filters/search';
import CountSlider from '../sliders/countSlider';
import YearSlider from '../sliders/yearSlider';

class App {
    private filter: Filter;
    private yearSlider: YearSlider;
    private countSlider: CountSlider;
    private search: Search;

    constructor() {
        this.filter = new Filter();
        this.countSlider = new CountSlider();
        this.yearSlider = new YearSlider();
        this.search = new Search();
    }

    start(): void {
        this.dataOnload();

        this.filter.filterCards(cards);

        this.countSlider.createCountSlider();
        this.yearSlider.createYearSlider();

        this.search.searchInput();
        this.search.clearSearch();
    }

    public dataOnload(): void {
        this.search.searchElement.value = localStorage.getItem('searchInput') || '';
        if (this.search.searchElement.value !== '') {
            this.search.clearSearchElement?.classList.add('visible');
        }
    }
}

export default App;
