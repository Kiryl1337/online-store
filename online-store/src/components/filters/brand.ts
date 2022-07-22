import { cards } from '../../data/cards';
import Filter from './filter';

enum BrandStatus {
    LENOVO = 'Lenovo',
    ASUS = 'Asus',
    HP = 'Hp',
}

class Brand {
    public static brandLenovoCheckbox = document.querySelector('.brand-lenovo-input') as HTMLInputElement;
    public static brandAsusCheckbox = document.querySelector('.brand-asus-input') as HTMLInputElement;
    public static brandHpCheckbox = document.querySelector('.brand-hp-input') as HTMLInputElement;

    public brandsFilter() {
        Brand.brandLenovoCheckbox.addEventListener('click', () => {
            localStorage.setItem('brandLenovoCheckbox', Brand.brandLenovoCheckbox.checked ? 'true' : '');
            new Filter().filterCards(cards);
        });

        Brand.brandAsusCheckbox.addEventListener('click', () => {
            localStorage.setItem('brandAsusCheckbox', Brand.brandAsusCheckbox.checked ? 'true' : '');
            new Filter().filterCards(cards);
        });

        Brand.brandHpCheckbox.addEventListener('click', () => {
            localStorage.setItem('brandHpCheckbox', Brand.brandHpCheckbox.checked ? 'true' : '');
            new Filter().filterCards(cards);
        });
    }

    public static checkBrands(brandLenovo: boolean, brandAsus: boolean, brandHp: boolean): string[] {
        const brandsArray: string[] = [];
        if (brandLenovo) {
            brandsArray.push(BrandStatus.LENOVO);
        }
        if (brandAsus) {
            brandsArray.push(BrandStatus.ASUS);
        }
        if (brandHp) {
            brandsArray.push(BrandStatus.HP);
        }
        if (!brandsArray.length) {
            brandsArray.push(BrandStatus.LENOVO, BrandStatus.ASUS, BrandStatus.HP);
        }
        return brandsArray;
    }
}

export default Brand;
