import { cards } from '../../data/cards';
import Filter from './filter';

enum BrandStatus {
    LENOVO = 'Lenovo',
    ASUS = 'Asus',
    HP = 'Hp',
}

class Brand {
    public static brandsArray: string[] = [];
    public static brandLenovoCheckbox = document.querySelector('.brand-lenovo-input') as HTMLInputElement;
    public static brandAsusCheckbox = document.querySelector('.brand-asus-input') as HTMLInputElement;
    public static brandHpCheckbox = document.querySelector('.brand-hp-input') as HTMLInputElement;

    public brandsFilter() {
        Brand.brandLenovoCheckbox.addEventListener('click', () => {
            localStorage.setItem('brandLenovoCheckbox', Brand.brandLenovoCheckbox.checked === true ? 'true' : '');
            new Filter().filterCards(cards);
        });

        Brand.brandAsusCheckbox.addEventListener('click', () => {
            localStorage.setItem('brandAsusCheckbox', Brand.brandAsusCheckbox.checked === true ? 'true' : '');
            new Filter().filterCards(cards);
        });

        Brand.brandHpCheckbox.addEventListener('click', () => {
            localStorage.setItem('brandHpCheckbox', Brand.brandHpCheckbox.checked === true ? 'true' : '');
            new Filter().filterCards(cards);
        });
    }

    public static checkBrands(brandLenovo: boolean, brandAsus: boolean, brandHp: boolean): void {
        if (brandLenovo) {
            Brand.brandsArray.push(BrandStatus.LENOVO);
        }
        if (brandAsus) {
            Brand.brandsArray.push(BrandStatus.ASUS);
        }
        if (brandHp) {
            Brand.brandsArray.push(BrandStatus.HP);
        }
        if (Brand.brandsArray.length === 0) {
            Brand.brandsArray.push(BrandStatus.LENOVO, BrandStatus.ASUS, BrandStatus.HP);
        }
    }
}

export default Brand;
