import { cards } from '../../data/cards';
import Filter from '../filters/filter';
import YearSlider from '../sliders/yearSlider';

class App {
    private filter: Filter;
    private yearSlider: YearSlider;

    constructor() {
        this.filter = new Filter();
        this.yearSlider = new YearSlider();
    }

    start(): void {
        this.filter.filterCards(cards);
        this.yearSlider.createYearSlider();
    }
}

export default App;
