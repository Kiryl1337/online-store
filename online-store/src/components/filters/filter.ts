import { cardItem } from '../../data/cards';
import CardsView from '../cardsView/cardsView';
import Search from './search';

let renderNumArr: number[] = [];

class Filter {
    private cardsView: CardsView;
    private search: Search;

    constructor() {
        this.cardsView = new CardsView();
        this.search = new Search();
    }

    public filterCards(data: Array<cardItem>): void {
        let resultArray = [...data];

        if (this.search.searchElement.value != '') {
            resultArray = resultArray.filter((item) =>
                item.name.toLowerCase().includes((this.search.searchElement as HTMLInputElement).value.toLowerCase())
            );
        }
        renderNumArr = [];
        resultArray.forEach((item) => renderNumArr.push(Number(item.num) - 1));
        this.cardsView.createCards(renderNumArr);
    }
}

export default Filter;
