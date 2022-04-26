// --- Задание #1

function checkQuestionAnswer(question, correctAnswer) {
  const currentAnswer = prompt(question).trim();
  if (currentAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    alert("Ответ верный");
  } else {
    alert("Ответ неверный");
  }
}

checkQuestionAnswer("Арбуз это фрукт или ягода?", "Ягода");
checkQuestionAnswer("Сколько в среднем зубов у взрослого человека?", "32");
checkQuestionAnswer("Как называется самая маленькая птица в мире?", "Колибри");

// --- Задание #2

function showSuccessMessage(message) {
  console.log(message);
}

function showErrorMessage(message) {
  console.error(message);
}

function checkTextOnErrorSymbol(
  text,
  errorSymbol,
  successCallback,
  errorCallback,
) {
  const chars = text.split('');

  let hasErrorSymbol = false;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === errorSymbol) {
      hasErrorSymbol = true;
      errorCallback(
        `Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`,
      );
    }
  }

  if (!hasErrorSymbol) {
    successCallback("В данном тексте нет запрещенных символов");
  }
}

const text = "Привет! Как дела! Давно мы с тобой не виделись.";
checkTextOnErrorSymbol(text, "а", showSuccessMessage, showErrorMessage);
