import { cards } from '../../data/cards';
import Filter from './filter';

enum ColorStatus {
    WHITE = 'белый',
    BLACK = 'чёрный',
    GRAY = 'серый',
}

class Color {
    public static colorWhiteCheckbox = document.querySelector('.color-white-input') as HTMLInputElement;
    public static colorBlackCheckbox = document.querySelector('.color-black-input') as HTMLInputElement;
    public static colorGrayCheckbox = document.querySelector('.color-gray-input') as HTMLInputElement;

    public colorsFilter() {
        Color.colorWhiteCheckbox.addEventListener('click', () => {
            localStorage.setItem('colorWhiteCheckbox', Color.colorWhiteCheckbox.checked === true ? 'true' : '');
            new Filter().filterCards(cards);
        });

        Color.colorBlackCheckbox.addEventListener('click', () => {
            localStorage.setItem('colorBlackCheckbox', Color.colorBlackCheckbox.checked === true ? 'true' : '');
            new Filter().filterCards(cards);
        });

        Color.colorGrayCheckbox.addEventListener('click', () => {
            localStorage.setItem('colorGrayCheckbox', Color.colorGrayCheckbox.checked === true ? 'true' : '');
            new Filter().filterCards(cards);
        });
    }

    public static checkColors(colorWhite: boolean, colorBlack: boolean, colorGray: boolean): string[] {
        const colorsArray: string[] = [];
        if (colorWhite) {
            colorsArray.push(ColorStatus.WHITE);
        }
        if (colorBlack) {
            colorsArray.push(ColorStatus.BLACK);
        }
        if (colorGray) {
            colorsArray.push(ColorStatus.GRAY);
        }
        if (colorsArray.length === 0) {
            colorsArray.push(ColorStatus.WHITE, ColorStatus.BLACK, ColorStatus.GRAY);
        }
        return colorsArray;
    }
}

export default Color;
