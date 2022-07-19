import Color from '../filters/color';

test('Check colors test', () => {
    expect(Color.checkColors(true, false, false)).toEqual(['белый']);
});

test('Check colors test', () => {
    expect(Color.checkColors(false, true, false)).toEqual(['чёрный']);
});

test('Check colors test', () => {
    expect(Color.checkColors(false, false, true)).toEqual(['серый']);
});

test('Check colors test', () => {
    expect(Color.checkColors(false, false, false)).toContain('белый');
});
