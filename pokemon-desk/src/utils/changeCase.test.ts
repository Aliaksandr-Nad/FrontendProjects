import ChangeCase from './changeCase';

describe('changeCase', () => {
  const inputText = '  string   String        STRING    ';

  test('change the text in default case', () => {
    const result = ChangeCase(inputText);

    expect(result).toEqual('String string string');
  });

  test('change the text in sentence case', () => {
    const result = ChangeCase(inputText, 'Sentence');

    expect(result).toEqual('String string string');
  });

  test('change text by title case', () => {
    const result = ChangeCase(inputText, 'Title');

    expect(result).toEqual('String String String');
  });
});
