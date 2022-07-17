import { cardItem } from '../../data/cards';
import CardsView from '../cardsView/cardsView';
import Color from './color';
import Popular from './popular';
import Search from './search';
import Type from './type';

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

        Type.typesArray = [];
        Type.checkTypes(Type.typeHomeCheckbox.checked, Type.typeGameCheckbox.checked, Type.typeClassicCheckbox.checked);
        resultArray = resultArray.filter((item) => Type.typesArray.includes(item.type));

        Color.colorsArray = [];
        Color.checkColors(
            Color.colorWhiteCheckbox.checked,
            Color.colorBlackCheckbox.checked,
            Color.colorGrayCheckbox.checked
        );
        resultArray = resultArray.filter((item) => Color.colorsArray.includes(item.color));

        if (Popular.popularCheckbox.checked) {
            resultArray = resultArray.filter((item) => item.popular);
        }

        this.renderNumArr = [];
        resultArray.forEach((item) => this.renderNumArr.push(Number(item.num) - 1));
        this.cardsView.createCards(this.renderNumArr);
    }
}

export default Filter;
