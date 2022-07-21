import Search from '../../filters/search';

test('Test method clearSearch()', () => {
    const search = new Search();
    expect(search.clearSearch()).toBeUndefined();
});
