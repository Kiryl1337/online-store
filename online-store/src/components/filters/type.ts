import { cards } from '../../data/cards';
import Filter from './filter';

enum TypeStatus {
    HOME = 'домашний',
    GAME = 'игровой',
    CLASSIC = 'классический',
}

class Type {
    public static typesArray: string[] = [];
    public static typeHomeCheckbox = document.querySelector('.type-home-input') as HTMLInputElement;
    public static typeGameCheckbox = document.querySelector('.type-game-input') as HTMLInputElement;
    public static typeClassicCheckbox = document.querySelector('.type-classic-input') as HTMLInputElement;

    public typesFilter() {
        Type.typeHomeCheckbox.addEventListener('click', () => {
            localStorage.setItem('typeHomeCheckbox', Type.typeHomeCheckbox.checked === true ? 'true' : '');
            new Filter().filterCards(cards);
        });

        Type.typeGameCheckbox.addEventListener('click', () => {
            localStorage.setItem('typeGameCheckbox', Type.typeGameCheckbox.checked === true ? 'true' : '');
            new Filter().filterCards(cards);
        });

        Type.typeClassicCheckbox.addEventListener('click', () => {
            localStorage.setItem('typeClassicCheckbox', Type.typeClassicCheckbox.checked === true ? 'true' : '');
            new Filter().filterCards(cards);
        });
    }

    public static checkTypes(typeHome: boolean, typeGame: boolean, typeClassic: boolean): void {
        if (typeHome) {
            Type.typesArray.push(TypeStatus.HOME);
        }
        if (typeGame) {
            Type.typesArray.push(TypeStatus.GAME);
        }
        if (typeClassic) {
            Type.typesArray.push(TypeStatus.CLASSIC);
        }
        if (Type.typesArray.length === 0) {
            Type.typesArray.push(TypeStatus.HOME, TypeStatus.GAME, TypeStatus.CLASSIC);
        }
    }
}

export default Type;
