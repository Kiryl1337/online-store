import * as noUiSlider from 'nouislider';
import Filter from '../filters/filter';
import { cards } from '../../data/cards';

const minYearValue = document.querySelector('.range-year .min-value') as HTMLElement;
const maxYearValue = document.querySelector('.range-year .max-value') as HTMLElement;
const sliderYear: noUiSlider.target = document.querySelector('.range-year .slider') as noUiSlider.target;

class YearSlider {
    public createYearSlider(): void {
        if (sliderYear) {
            noUiSlider.create(sliderYear, {
                start: [
                    localStorage.getItem('rangeYearMin') || minYearValue.innerHTML,
                    localStorage.getItem('rangeYearMax') || maxYearValue.innerHTML,
                ],
                tooltips: true,
                step: 1,
                connect: true,
                range: {
                    min: Number(minYearValue.innerHTML),
                    max: Number(maxYearValue.innerHTML),
                },
                format: {
                    to: function (value) {
                        return Math.trunc(value);
                    },

                    from: function (value) {
                        return Math.trunc(Number(value));
                    },
                },
            });

            if (sliderYear.noUiSlider) {
                const values: HTMLElement[] = [minYearValue, maxYearValue];
                sliderYear.noUiSlider.on('update', function (items, handle) {
                    values[handle].innerHTML = Math.round(Number(items[handle])).toString();
                    localStorage.setItem('rangeYearMin', minYearValue.innerHTML);
                    localStorage.setItem('rangeYearMax', maxYearValue.innerHTML);
                    new Filter().filterCards(cards);
                });
            }
        }
    }
}

export default YearSlider;
