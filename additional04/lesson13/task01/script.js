/* jshint ignore: start */
class Dictionary {
    #name;
    #words;
    constructor(name) {
      this.#name = name;
      this.#words = {};
    }
    get mainName() {
        return this.#name;
    }
    set setMainName(name) {
        this.#name = name;
    }
    get allWords() {
        return this.#words;
    }
    #addNewWord(wordKey, wordObj) {
      this.allWords[wordKey] = wordObj;
    }
    add(word, description) {
      if (Object.keys(this.allWords).includes(word)) return;
      else this.#addNewWord(word, { word, description });
    }
    remove(word) {
      delete this.allWords[word];
    }
    get(word) {
      return this.allWords[word];
    }
    showAllWords() {
      const message = Object.values(this.allWords)
        .map((it) => `${it.word}-${it.description}`)
        .join(", ");
      console.log(message);
    }
  }
  
  class HardWordsDictionary extends Dictionary {
    constructor(name) {
      super(name);
    }
  
    add(word, description) {
      if (Object.keys(this.allWords).includes(word)) return;
      else this.allWords[word] = { word, description, isDifficult: true };
    }
  }
  
  const hardWordsDictionary = new HardWordsDictionary("Сложные слова");
  
  hardWordsDictionary.add(
    "дилетант",
    "Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.",
  );
  hardWordsDictionary.add(
    "неологизм",
    "Новое слово или выражение, а также новое значение старого слова.",
  );
  hardWordsDictionary.add(
    "квант",
    "Неделимая часть какой-либо величины в физике.",
  );
  
  hardWordsDictionary.remove("неологизм");
  hardWordsDictionary.showAllWords();
  
  // дилетант - Тот, кто занимается наукой или искусством
  // без специальной подготовки, обладая только поверхностными знаниями.
  // квант - Неделимая часть какой-либо величины в физике.