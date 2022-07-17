import * as noUiSlider from 'nouislider';
import Filter from '../filters/filter';
import { cards } from '../../data/cards';

class CountSlider {
    public static sliderCount: noUiSlider.target = document.querySelector('.range-count .slider') as noUiSlider.target;
    public static minCountValue = document.querySelector('.range-count .min-value') as HTMLElement;
    public static maxCountValue = document.querySelector('.range-count .max-value') as HTMLElement;

    public createCountSlider(): void {
        if (CountSlider.sliderCount) {
            noUiSlider.create(CountSlider.sliderCount, {
                start: [
                    localStorage.getItem('rangeCountMin') || CountSlider.minCountValue.innerHTML,
                    localStorage.getItem('rangeCountMax') || CountSlider.maxCountValue.innerHTML,
                ],
                tooltips: true,
                step: 1,
                connect: true,
                range: {
                    min: Number(CountSlider.minCountValue.innerHTML),
                    max: Number(CountSlider.maxCountValue.innerHTML),
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

            if (CountSlider.sliderCount.noUiSlider) {
                const values: HTMLElement[] = [CountSlider.minCountValue, CountSlider.maxCountValue];
                CountSlider.sliderCount.noUiSlider.on('update', function (items, handle) {
                    values[handle].innerHTML = Math.round(Number(items[handle])).toString();
                    localStorage.setItem('rangeCountMin', CountSlider.minCountValue.innerHTML);
                    localStorage.setItem('rangeCountMax', CountSlider.maxCountValue.innerHTML);
                    new Filter().filterCards(cards);
                });
            }
        }
    }
}

export default CountSlider;
