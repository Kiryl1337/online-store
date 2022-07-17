import { cardItem } from '../../data/cards';
import CardsView from '../cardsView/cardsView';
import Popular from './popular';
import Search from './search';

class Filter {
    private cardsView: CardsView;
    private renderNumArr: number[];

    constructor() {
        this.cardsView = new CardsView();
        this.renderNumArr = [];
    }

    public filterCards(data: Array<cardItem>): void {
        let resultArray = [...data];

        if (Search.search.value != '') {
            resultArray = resultArray.filter((item) =>
                item.name.toLowerCase().includes((Search.search as HTMLInputElement).value.toLowerCase())
            );
        }

        if (Popular.popularCheckbox.checked) {
            resultArray = resultArray.filter((item) => item.popular);
        }

        this.renderNumArr = [];
        resultArray.forEach((item) => this.renderNumArr.push(Number(item.num) - 1));
        this.cardsView.createCards(this.renderNumArr);
    }
}

export default Filter;
