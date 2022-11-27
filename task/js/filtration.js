const string = "Привет! Как дела?";

const vowels = "АаИиЕеУуОоЮюЯяЭэЫы";

const getVowels = filtration => {
  let filtredVowels = "";

  for (let i = 0; i < filtration.length; i++) {
    const letter = filtration[i];

    if (vowels.includes(letter)) {
      filtredVowels += letter;
    }
  }

  return filtredVowels;
}

console.log(getVowels(string));
