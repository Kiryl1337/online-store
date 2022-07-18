import CardsView from '../cardsView/cardsView';
import Color from './color';
import Popular from './popular';
import Search from './search';
import Type from './type';
import Brand from './brand';
import CountSlider from '../sliders/countSlider';
import YearSlider from '../sliders/yearSlider';
import Sort from './sort';
import Filter from './filter';
import { cards } from '../../data/cards';

class Reset {
    public resetFilters(): void {
        document.querySelector('.reset-filters')?.addEventListener('click', () => {
            const saveBasketCard = localStorage.getItem('setBasketCard') || '';
            const saveSortOption = localStorage.getItem('sortOption') || '';
            Reset.reset();
            localStorage.setItem('setBasketCard', saveBasketCard);
            localStorage.setItem('sortOption', saveSortOption);
        });

        document.querySelector('.reset-settings')?.addEventListener('click', () => {
            Sort.sortSelect.value = 'down-name-sort';
            CardsView.setBasketCard = new Set();
            CardsView.basketCounter && (CardsView.basketCounter.innerHTML = '0');
            Reset.reset();
        });
    }

    private static reset(): void {
        localStorage.clear();

        Search.search.value = '';
        Search.search.focus();
        Search.clearSearch?.classList.remove('visible');

        Popular.popularCheckbox.checked = false;

        Color.colorWhiteCheckbox.checked = false;
        Color.colorBlackCheckbox.checked = false;
        Color.colorGrayCheckbox.checked = false;

        Brand.brandLenovoCheckbox.checked = false;
        Brand.brandAsusCheckbox.checked = false;
        Brand.brandHpCheckbox.checked = false;

        Type.typeHomeCheckbox.checked = false;
        Type.typeGameCheckbox.checked = false;
        Type.typeClassicCheckbox.checked = false;

        if (CountSlider.sliderCount && CountSlider.sliderCount.noUiSlider) {
            CountSlider.sliderCount.noUiSlider.set([1, 12]);
        }
        if (YearSlider.sliderYear && YearSlider.sliderYear.noUiSlider) {
            YearSlider.sliderYear.noUiSlider.set([2012, 2022]);
        }
        new Filter().filterCards(cards);
    }
}

export default Reset;
