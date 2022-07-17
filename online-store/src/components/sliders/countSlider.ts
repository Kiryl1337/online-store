import * as noUiSlider from 'nouislider';
import Filter from '../filters/filter';
import { cards } from '../../data/cards';

const sliderCount: noUiSlider.target = document.querySelector('.range-count .slider') as noUiSlider.target;
const minCountValue = document.querySelector('.range-count .min-value') as HTMLElement;
const maxCountValue = document.querySelector('.range-count .max-value') as HTMLElement;

class CountSlider {
    public createCountSlider(): void {
        if (sliderCount) {
            noUiSlider.create(sliderCount, {
                start: [
                    localStorage.getItem('rangeCountMin') || minCountValue.innerHTML,
                    localStorage.getItem('rangeCountMax') || maxCountValue.innerHTML,
                ],
                tooltips: true,
                step: 1,
                connect: true,
                range: {
                    min: Number(minCountValue.innerHTML),
                    max: Number(maxCountValue.innerHTML),
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

            if (sliderCount.noUiSlider) {
                const values: HTMLElement[] = [minCountValue, maxCountValue];
                sliderCount.noUiSlider.on('update', function (items, handle) {
                    values[handle].innerHTML = Math.round(Number(items[handle])).toString();
                    localStorage.setItem('rangeCountMin', minCountValue.innerHTML);
                    localStorage.setItem('rangeCountMax', maxCountValue.innerHTML);
                    new Filter().filterCards(cards);
                });
            }
        }
    }
}

export default CountSlider;
