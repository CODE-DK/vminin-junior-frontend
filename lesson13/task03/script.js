class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
  }
  add(word, description) {
    if (Object.keys(this.words).includes(word)) return;
    else this.words[word] = { word, description };
  }
  remove(word) {
    delete this.words[word];
  }
  get(word) {
    return this.words[word];
  }
  showAllWords() {
    const message = Object.values(this.words)
      .map((it) => `${it.word}-${it.description}`)
      .join(", ");
    console.log(message);
  }
}

const dictionary = new Dictionary("Толковый словарь");
dictionary.add("JavaScript", "популярный язык программирования");
dictionary.add(
  "Веб-разработчик",
  "Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие",
);
dictionary.add("js", "язык программирования");

dictionary.remove("JavaScript");
dictionary.showAllWords();
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает
// и дополняет существующие
