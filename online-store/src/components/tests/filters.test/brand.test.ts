import Brand from '../../filters/brand';

test('Check brands test', () => {
    expect(Brand.checkBrands(true, false, false)).toEqual(['Lenovo']);
});

test('Check brands test', () => {
    expect(Brand.checkBrands(false, true, false)).toEqual(['Asus']);
});

test('Check brands test', () => {
    expect(Brand.checkBrands(false, false, true)).toEqual(['Hp']);
});

test('Check brands test', () => {
    expect(Brand.checkBrands(false, false, false)).toEqual(['Lenovo', 'Asus', 'Hp']);
});
