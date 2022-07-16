export interface cardItem {
    num: string;
    name: string;
    img: string;
    year: string;
    brand: string;
    color: string;
    type: string;
    popular: boolean;
    count: string;
}

export const cards: Array<cardItem> = [
    {
        num: '1',
        name: 'Aspire',
        img: require('./assets/images/asus-Aspire.jpg'),
        year: '2017',
        brand: 'Asus',
        color: 'серый',
        type: 'игровой',
        popular: true,
        count: '7',
    },
    {
        num: '2',
        name: 'Extensa',
        img: require('./assets/images/asus-ConceptD.jpg'),
        year: '2021',
        brand: 'Asus',
        color: 'чёрный',
        type: 'игровой',
        popular: true,
        count: '4',
    },
    {
        num: '3',
        name: 'ConceptD',
        img: require('./assets/images/asus-ConceptD.jpg'),
        year: '2022',
        brand: 'Asus',
        color: 'белый',
        type: 'домашний',
        popular: false,
        count: '3',
    },
    {
        num: '4',
        name: 'Lander',
        img: require('./assets/images/hp-Lander.jpg'),
        year: '2018',
        brand: 'Hp',
        color: 'чёрный',
        type: 'игровой',
        popular: true,
        count: '11',
    },
    {
        num: '5',
        name: 'Power',
        img: require('./assets/images/hp-Power.jpg'),
        year: '2016',
        brand: 'Hp',
        color: 'чёрный',
        type: 'домашний',
        popular: false,
        count: '10',
    },
    {
        num: '6',
        name: 'RyzenX',
        img: require('./assets/images/hp-RyzenX.jpg'),
        year: '2015',
        brand: 'Hp',
        color: 'белый',
        type: 'игровой',
        popular: true,
        count: '8',
    },
    {
        num: '7',
        name: 'Victus',
        img: require('./assets/images/hp-Victus.jpg'),
        year: '2017',
        brand: 'Hp',
        color: 'чёрный',
        type: 'игровой',
        popular: false,
        count: '2',
    },
    {
        num: '8',
        name: 'IdeaPad',
        img: require('./assets/images/lenovo-ideaPad.jpg'),
        year: '2012',
        brand: 'Lenovo',
        color: 'серый',
        type: 'классический',
        popular: true,
        count: '5',
    },
    {
        num: '9',
        name: 'IdeaPad 3',
        img: require('./assets/images/lenovo-ideaPad3.jpg'),
        year: '2019',
        brand: 'Lenovo',
        color: 'чёрный',
        type: 'домашний',
        popular: false,
        count: '7',
    },
    {
        num: '10',
        name: 'IdeaPad Gaming',
        img: require('./assets/images/lenovo-ideaPadGaming.jpg'),
        year: '2015',
        brand: 'Lenovo',
        color: 'чёрный',
        type: 'классический',
        popular: true,
        count: '10',
    },
];
