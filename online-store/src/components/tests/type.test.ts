import Type from '../filters/type';

test('Check types test', () => {
    expect(Type.checkTypes(true, false, false)).toEqual(['домашний']);
});

test('Check types test', () => {
    expect(Type.checkTypes(false, true, false)).toEqual(['игровой']);
});

test('Check types test', () => {
    expect(Type.checkTypes(false, false, true)).toEqual(['классический']);
});

test('Check types test', () => {
    expect(Type.checkTypes(false, false, false)).toEqual(['домашний', 'игровой', 'классический']);
});
