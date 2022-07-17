import { cards } from '../../data/cards';
import Filter from '../filters/filter';

class App {
    private filter: Filter;

    constructor() {
        this.filter = new Filter();
    }

    start(): void {
        this.filter.filterCards(cards);
    }
}

export default App;
