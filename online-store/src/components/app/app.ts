import { cards } from '../../data/cards';
import CardsView from '../cardsView/cardsView';
import Filter from '../filters/filter';
import Popular from '../filters/popular';
import Search from '../filters/search';
import CountSlider from '../sliders/countSlider';
import YearSlider from '../sliders/yearSlider';

class App {
    private filter: Filter;
    private yearSlider: YearSlider;
    private countSlider: CountSlider;
    private search: Search;
    private popular: Popular;

    constructor() {
        this.filter = new Filter();
        this.countSlider = new CountSlider();
        this.yearSlider = new YearSlider();
        this.search = new Search();
        this.popular = new Popular();
    }

    start(): void {
        this.dataOnload();

        this.filter.filterCards(cards);

        this.countSlider.createCountSlider();
        this.yearSlider.createYearSlider();

        this.search.searchInput();
        this.search.clearSearch();

        this.popular.popularFilter();
    }

    public dataOnload(): void {
        const basketCard = localStorage.getItem('setBasketCard');
        basketCard &&
            JSON.parse(basketCard).forEach((item: number) => {
                CardsView.setBasketCard.add(item.toString());
            });

        CardsView.basketCounter && (CardsView.basketCounter.innerHTML = CardsView.setBasketCard.size.toString());

        Search.search.value = localStorage.getItem('searchInput') || '';
        if (Search.search.value !== '') {
            Search.clearSearch?.classList.add('visible');
        }
        Popular.popularCheckbox.checked = Boolean(localStorage.getItem('popularCheckbox'));
    }
}

export default App;
