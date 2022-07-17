import { cards } from '../../data/cards';
import Filter from '../filters/filter';
import CountSlider from '../sliders/countSlider';
import YearSlider from '../sliders/yearSlider';

class App {
    private filter: Filter;
    private yearSlider: YearSlider;
    private countSlider: CountSlider;

    constructor() {
        this.filter = new Filter();
        this.countSlider = new CountSlider();
        this.yearSlider = new YearSlider();
    }

    start(): void {
        this.filter.filterCards(cards);
        this.countSlider.createCountSlider();
        this.yearSlider.createYearSlider();
    }
}

export default App;
