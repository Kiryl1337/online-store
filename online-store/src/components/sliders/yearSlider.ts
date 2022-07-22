import * as noUiSlider from 'nouislider';
import Filter from '../filters/filter';
import { cards } from '../../data/cards';

class YearSlider {
    public static sliderYear: noUiSlider.target = document.querySelector('.range-year .slider') as noUiSlider.target;
    public static minYearValue = document.querySelector('.range-year .min-value') as HTMLElement;
    public static maxYearValue = document.querySelector('.range-year .max-value') as HTMLElement;

    public createYearSlider(): void {
        if (YearSlider.sliderYear) {
            noUiSlider.create(YearSlider.sliderYear, {
                start: [
                    localStorage.getItem('rangeYearMin') || YearSlider.minYearValue.innerHTML,
                    localStorage.getItem('rangeYearMax') || YearSlider.maxYearValue.innerHTML,
                ],
                tooltips: true,
                step: 1,
                connect: true,
                range: {
                    min: Number(YearSlider.minYearValue.innerHTML),
                    max: Number(YearSlider.maxYearValue.innerHTML),
                },
                format: {
                    to: function (value: number): number {
                        return Math.trunc(value);
                    },

                    from: function (value: string): number {
                        return Math.trunc(Number(value));
                    },
                },
            });

            if (YearSlider.sliderYear.noUiSlider) {
                const values: HTMLElement[] = [YearSlider.minYearValue, YearSlider.maxYearValue];
                YearSlider.sliderYear.noUiSlider.on(
                    'update',
                    function (items: (string | number)[], handle: number): void {
                        values[handle].innerHTML = Math.round(Number(items[handle])).toString();
                        localStorage.setItem('rangeYearMin', YearSlider.minYearValue.innerHTML);
                        localStorage.setItem('rangeYearMax', YearSlider.maxYearValue.innerHTML);
                        new Filter().filterCards(cards);
                    }
                );
            }
        }
    }
}

export default YearSlider;
