let questions = [
  {
    prompt: "O'zbekiston poytaxti?",
    option: ["a.Toshkent", "b.Boku", "c.London", "d.Istanbul"],
    answer: "a",
  },
  {
    prompt: "O'zbekiston nechta davlat bilan chegaradosh ?",
    option: ["a. 3ta", "b. 4ta", "c. 5ta", "d. 6ta"],
    answer: "c",
  },
  {
    prompt: "Dunyodagi eng uzun daryo ?",
    option: ["a.Amazonka", "b.Nil", "c.Volga", "d. Gang"],
    answer: "b",
  },
  {
    prompt: "HTML ? ",
    option: [
      "a.HyperText Makeup Language ",
      "b.HyperText Markup List",
      "c.HyperText Makeup List",
      "d.HyperText Markup Language",
    ],
    answer: "d",
  },
  {
    prompt: "Pi sonini qiymatini belgilang ? ",
    option: ["a. 3.14", "b. 3.41 ", "c. 2.71", "d. 2.17"],
    answer: "a",
  },
  {
    prompt: "JavaScript o'zgaruvchilari qaysi usulda e'lon qilinishi mumkin:? ",
    option: ["a.var", "b.let", "c.const", "d.Hamma javob to'g'ri"],
    answer: "d",
  },
  {
    prompt: "JavaScript nechta ma'lumot turiga ega?",
    option: ["a.7 ta", "b.8 ta", "c.5 ta", "d.3 ta"],
    answer: "b",
  },
  {
    prompt: "Nechta fasl bor? ",
    option: ["a.4 ta", "b.5 ta", "c.3 ta", "d.2 ta"],
    answer: "a",
  },
  {
    prompt: "Surxondaryo markazi qayer? ",
    option: ["a.Jarqo'rg'on ", "b.Denov", "c.Termiz", "d.Boysun"],
    answer: "c",
  },
  {
    prompt: "Amalni bajaring 2+2*2 ? ",
    option: ["a.6 ", "b.8", "c.4", "d.2"],
    answer: "a",
  },
];

while (true) {
  let menu = +prompt(
    `Menu \n 1.Savol qo'shish \n 2.Testni boshlash \n 3.Testni tahrirlash \n 4.Testni o'chirish \n 5.Chiqish`
  );

  if (menu == 1) {
    enterQuestion();
  } else if (menu == 2) {
    quizTest();
  } else if (menu == 3) {
    editQuetion();
  } else if (menu == 4) {
    deleteQuestion();
  } else if (menu == 5) {
    break;
  }
}

function enterQuestion() {
  let questionNums = +prompt("Nechta savol qo'shmoqchisiz ?");
  let vairant;
  let enter_1;

  for (let i = 0; i < questionNums; i++) {
    enter_1 = {
      prompt: prompt("Savolni kiriting "),
      option: [],
      answer: "",
    };
    for (let i = 0; i < 4; i++) {
      vairant = prompt(`javoblarni "a.ko'rinishida yozing`);
      enter_1.option.push(vairant);
    }
    enter_1.answer = prompt("To'g'ri variantni kiriting");
    questions.push(enter_1);
  }
}

function quizTest() {
  // random questions
  let setNew = new Set();
  let leng = questions.length;
  let j = 0;
  do {
    j = Math.floor(Math.random() * questions.length);
    setNew.add(questions[j]);
  } while (setNew.size != leng);

  let randomQuestions = Array.from(setNew);

  // begin
  let start = new Date();
  for (let i = 0; i < 100000; i++) {
    let ds = i * i * i * i * i * i;
  }

  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    let response = prompt(
      randomQuestions[i].prompt + "\n" + randomQuestions[i].option.join("\n")
    );

    if (
      response == "exit" ||
      response == "cancel" ||
      response == "quit" ||
      response == "close" ||
      response == "chiqish"
    ) {
      break;
    } else if (response === null || response === "") {
      alert("variant kiritmadingiz");
      i = i - 1;
    } else if (
      response != "a" &&
      response != "b" &&
      response != "c" &&
      response != "d"
    ) {
      alert("Iltimos kalitlardan birini tanlang");
      i--;
    } else if (
      response == randomQuestions[i].answer ||
      response == randomQuestions[i].answer.toUpperCase()
    ) {
      score++;
    }
  }

  alert(
    " Siz " +
      questions.length +
      " ta  savoldan " +
      score +
      " tasiga javob berdingiz va " +
      score * 5 +
      " ballga ega bo'ldingiz "
  );

  if (score === 10) {
    alert("Grant asosida talabalikka tavsiya etildingiz!!!🥳🥳🥳");
  } else if (score <= 9 && score >= 7) {
    alert(" Siz to'lov kontrakt asosida o'qishga qabul qilindingiz!!! 😊🥳😊");
  } else if (score === 0) {
    alert("Siz talabalikka tavsiya etilmadingiz 😐☹️😕");
  }
  let end = new Date();
  alert("sarflangan vaqt: " + `${Math.floor((end - start) / 1000)}` + "soniya");
}

function editQuetion() {
  for (let i = 0; i < questions.length; i++) {
    let answer = confirm(
      `Tahrirlanmoqchi bo'lgan testni tanlang: \n ${questions[i].prompt}`
    );

    if (answer) {
      let editingQuestion = questions[i];

      editingQuestion.prompt = prompt(
        "Savolni o'zgartiring",
        editingQuestion.prompt
      );

      for (let j = 0; j < editingQuestion.option.length; j++) {
        editingQuestion.option[j] = prompt(
          "variantni o'zgartiring: ",
          editingQuestion.option[j]
        );
      }

      editingQuestion.answer = prompt(
        "To'gri variantni o'zgartiring",
        editingQuestion.answer
      );

      if (!confirm("Yana boshqa tesni tahrirlaysizmi:")) break;
    }
  }
}
function deleteQuestion() {
  for (let i = 0; i < questions.length; i++) {
    let del = confirm(
      `O'chirmoqchi  bo'lgan testni tanlang: \n ${questions[i].prompt}`
    );
    if (del) {
      questions.splice(i, 1);
      if (!confirm("Yana boshqa testni o'chirishni istaysizmi:")) break;
    }
  }
}
