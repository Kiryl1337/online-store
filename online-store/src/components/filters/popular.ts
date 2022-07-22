import { cards } from '../../data/cards';
import Filter from './filter';

class Popular {
    public static popularCheckbox = document.querySelector('.popular-input') as HTMLInputElement;

    public popularFilter(): void {
        Popular.popularCheckbox.addEventListener('click', () => {
            localStorage.setItem('popularCheckbox', Popular.popularCheckbox.checked ? 'true' : '');
            new Filter().filterCards(cards);
        });
    }
}

export default Popular;
