type cases = 'Sentence' | 'Title';

const ChangeCase = (inputText: string, toCase: cases = 'Sentence'): string => {
  let result = removeExtraWhitespaces(inputText);

  switch (toCase) {
    case 'Sentence':
      result = toSentenceCase(result);
      break;
    case 'Title':
      result = toTitleCase(result);
      break;
  }

  return result;
};

// Example: string String STRING => String string string
const toSentenceCase = (text: string) => {
  return removeExtraWhitespaces(text).charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

// Example: string String STRING => String String String
const toTitleCase = (text: string) => {
  return text
    .split(' ')
    .reduce((previous, current, index) =>
      index === 1 ? `${toSentenceCase(previous)} ${toSentenceCase(current)}` : `${previous} ${toSentenceCase(current)}`,
    );
};

const removeExtraWhitespaces = (text: string) => {
  return text.replace(/\s+/g, ' ').trim();
};

export default ChangeCase;
