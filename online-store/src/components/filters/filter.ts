import { cardItem } from '../../data/cards';
import CardsView from '../cardsView/cardsView';

let renderNumArr: number[] = [];

class Filter {
    private cardsView: CardsView;

    constructor() {
        this.cardsView = new CardsView();
    }

    public filterCards(data: Array<cardItem>): void {
        const resultArray = [...data];
        renderNumArr = [];
        resultArray.forEach((item) => renderNumArr.push(Number(item.num) - 1));
        this.cardsView.createCards(renderNumArr);
    }
}

export default Filter;
