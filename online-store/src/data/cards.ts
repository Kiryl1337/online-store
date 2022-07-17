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
        img: require('../assets/images/asus-Aspire.jpg'),
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
        img: require('../assets/images/asus-ConceptD.jpg'),
        year: '2021',
        brand: 'Asus',
        color: 'белый',
        type: 'игровой',
        popular: true,
        count: '4',
    },
    {
        num: '3',
        name: 'ConceptD',
        img: require('../assets/images/asus-ConceptD.jpg'),
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
        img: require('../assets/images/hp-Lander.jpg'),
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
        img: require('../assets/images/hp-Power.jpg'),
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
        img: require('../assets/images/hp-RyzenX.jpg'),
        year: '2015',
        brand: 'Hp',
        color: 'белый',
        type: 'игровой',
        popular: true,
        count: '8',
    },
    {
        num: '7',
        name: 'BlurZen 13f',
        img: require('../assets/images/hp-BlurZen-13f.jpg'),
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
        img: require('../assets/images/lenovo-ideaPad.jpg'),
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
        img: require('../assets/images/lenovo-ideaPad3.jpg'),
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
        img: require('../assets/images/lenovo-ideaPadGaming.jpg'),
        year: '2015',
        brand: 'Lenovo',
        color: 'чёрный',
        type: 'классический',
        popular: true,
        count: '10',
    },
    {
        num: '11',
        name: 'VivoBook E4',
        img: require('../assets/images/asus-VivoBookE4.jpg'),
        year: '2022',
        brand: 'Asus',
        color: 'чёрный',
        type: 'игровой',
        popular: true,
        count: '12',
    },
    {
        num: '12',
        name: 'VivoBook X5',
        img: require('../assets/images/asus-VivoBookX5.jpg'),
        year: '2020',
        brand: 'Asus',
        color: 'чёрный',
        type: 'игровой',
        popular: true,
        count: '4',
    },
    {
        num: '13',
        name: 'VivoBook Flip',
        img: require('../assets/images/asus-VivoBookFlip.jpg'),
        year: '2017',
        brand: 'Asus',
        color: 'серый',
        type: 'классический',
        popular: false,
        count: '4',
    },
    {
        num: '14',
        name: 'ZenBook 13',
        img: require('../assets/images/asus-ZenBook13.jpg'),
        year: '2016',
        brand: 'Asus',
        color: 'серый',
        type: 'домашний',
        popular: false,
        count: '7',
    },
    {
        num: '15',
        name: 'VivoBook 14',
        img: require('../assets/images/asus-VivoBook14.jpg'),
        year: '2019',
        brand: 'Asus',
        color: 'белый',
        type: 'классический',
        popular: true,
        count: '9',
    },
    {
        num: '16',
        name: 'HP 14s-fq0093ur',
        img: require('../assets/images/hp-HP-14s-fq0093ur.jpg'),
        year: '2020',
        brand: 'Hp',
        color: 'белый',
        type: 'домашний',
        popular: true,
        count: '6',
    },
    {
        num: '17',
        name: 'HP 14s-dq0046ur',
        img: require('../assets/images/hp-HP-14s-dq0046ur.jpg'),
        year: '2013',
        brand: 'Hp',
        color: 'белый',
        type: 'игровой',
        popular: false,
        count: '2',
    },
    {
        num: '18',
        name: 'ZBook Fury 15',
        img: require('../assets/images/hp-ZBook-Fury15.jpg'),
        year: '2015',
        brand: 'Hp',
        color: 'серый',
        type: 'домашний',
        popular: false,
        count: '3',
    },
    {
        num: '19',
        name: 'Omen 16-c0048u',
        img: require('../assets/images/hp-Omen16-c0048u.jpg'),
        year: '2018',
        brand: 'Hp',
        color: 'серый',
        type: 'классический',
        popular: true,
        count: '11',
    },
    {
        num: '20',
        name: 'Victus 16-e0093ur',
        img: require('../assets/images/hp-Victus16-e0093ur.jpg'),
        year: '2018',
        brand: 'Hp',
        color: 'серый',
        type: 'игровой',
        popular: false,
        count: '9',
    },
    {
        num: '21',
        name: 'IdeaPad L3-15ITL6',
        img: require('../assets/images/lenovo-IdeaPadL3-15ITL6.jpg'),
        year: '2017',
        brand: 'Lenovo',
        color: 'белый',
        type: 'игровой',
        popular: true,
        count: '9',
    },
    {
        num: '22',
        name: 'ThinkBook 15-G2',
        img: require('../assets/images/lenovo-ThinkBook15-G2.jpg'),
        year: '2021',
        brand: 'Lenovo',
        color: 'серый',
        type: 'классический',
        popular: false,
        count: '8',
    },
    {
        num: '23',
        name: 'IdeaPad 5 Pro',
        img: require('../assets/images/lenovo-IdeaPad5-Pro.jpg'),
        year: '2021',
        brand: 'Lenovo',
        color: 'серый',
        type: 'домашний',
        popular: true,
        count: '2',
    },
    {
        num: '24',
        name: 'Legion 5',
        img: require('../assets/images/lenovo-Legion5.jpg'),
        year: '2021',
        brand: 'Lenovo',
        color: 'чёрный',
        type: 'игровой',
        popular: true,
        count: '1',
    },
    {
        num: '25',
        name: 'ThinkPad E14 Gen',
        img: require('../assets/images/lenovo-ThinkPadE14-Gen.jpg'),
        year: '2013',
        brand: 'Lenovo',
        color: 'чёрный',
        type: 'игровой',
        popular: false,
        count: '2',
    },
];
