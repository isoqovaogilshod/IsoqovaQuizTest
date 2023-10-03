let questions = [
  {
    question: "O'zbekiston poytaxti?",
    option: ["a.Toshkent", "b.Boku", "c.London", "d.Istanbul"],
    answer: "a",
  },
  {
    question: "O'zbekiston nechta davlat bilan chegaradosh ?",
    option: ["a. 3ta", "b. 4ta", "c. 5ta", "d. 6ta"],
    answer: "c",
  },
  {
    question: "Dunyodagi eng uzun daryo ?",
    option: ["a.Amazonka", "b.Nil", "c.Volga", "d. Gang"],
    answer: "b",
  },
  {
    question: "HTML ? ",
    option: [
      "a.HyperText Makeup Language ",
      "b.HyperText Markup List",
      "c.HyperText Makeup List",
      "d.HyperText Markup Language",
    ],
    answer: "d",
  },
  {
    question: "Pi sonini qiymatini belgilang ? ",
    option: ["a. 3.14", "b. 3.41 ", "c. 2.71", "d. 2.17"],
    answer: "a",
  },
  {
    question:
      "JavaScript o'zgaruvchilari qaysi usulda e'lon qilinishi mumkin:? ",
    option: ["a.var", "b.let", "c.const", "d.Hamma javob to'g'ri"],
    answer: "d",
  },
  {
    question: "JavaScript nechta ma'lumot turiga ega?",
    option: ["a.7 ta", "b.8 ta", "c.5 ta", "d.3 ta"],
    answer: "b",
  },
  {
    question: "Nechta fasl bor? ",
    option: ["a.4 ta", "b.5 ta", "c.3 ta", "d.2 ta"],
    answer: "a",
  },
  {
    question: "Surxondaryo markazi qayer? ",
    option: ["a.Jarqo'rg'on ", "b.Denov", "c.Termiz", "d.Boysun"],
    answer: "c",
  },
  {
    question: "Amalni bajaring 2+2*2 ? ",
    option: ["a.6 ", "b.8", "c.4", "d.2"],
    answer: "a",
  },
];
// Email va loginni olish
var email = prompt("Emailingizni kiriting:", "....@gamil.com");
var login = prompt("Loginingizni kiriting:");

// Foydalanuvchi kiritgan email va loginni alert orqali chiqarish
alert(
  "Sizning emailingiz: " +
    email +
    "\nSizning loginingiz: " +
    login +
    `\n siz yuqoridagi ma'lumotlariz bilan tesni boshlashiz mumkin`
);

let IELTS = confirm("sizda IELTS darajasi bormi?");
stopApp: while (true) {
  let menu = +prompt(
    "0.Chiqish\n1.Testni boshlash \n2.Testni tahrirlash \n3.Test qo'shish \n4.Test o'chirish\n5. Savollar"
  );
  switch (menu) {
    case 1:
      let newRandomisedQuestions = Array.from(
        getRandomisedQuestions(questions)
      );
      quizTest(newRandomisedQuestions);
      break;
    case 2:
      editTest(questions);
      break;
    case 3:
      addTest(questions);
      break;
    case 4:
      deleteTest(questions);
      break;
    case 5:
      alert("Savollar\n" + getQuestionsList(questions));
      break;
    case 0:
      break stopApp;
    default:
      break;
  }
}

function addTest(questions) {
  let questionNums = +prompt("Nechta savol qo'shmoqchisiz ?");
  let variant;
  let enter_1;

  for (let i = 0; i < questionNums; i++) {
    enter_1 = {
      question: prompt("Savolni kiriting "),
      option: [],
      answer: "",
    };
    for (let i = 0; i < 4; i++) {
      variant = prompt(`javoblarni "a.ko'rinishida yozing`);
      enter_1.option.push(variant);
    }
    enter_1.answer = prompt("To'g'ri variantni kiriting");
    questions.push(enter_1);
  }
}

function quizTest(questions) {
  let startTime = new Date();
  for (let i = 0; i < 100000; i++) {
    let ds = i * i * i * i * i * i;
  }
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    let response = prompt(
      questions[i].question +
        "\n" +
        questions[i].option.join("\n") +
        "\n" +
        `testni yakunlashni istasangiz "exit", "chiqish","cancel" ,"close","quit" kabi kalit so'zlardan foydalalning`
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
      response == questions[i].answer ||
      response == questions[i].answer.toUpperCase()
    ) {
      score++;
    }
  }
  // if ((IELTS = true)) {
  //   score += 10;
  // }

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
  let endTime = new Date();
  alert(
    "sarflangan vaqt: " +
      `${Math.floor((endTime - startTime) / 1000)}` +
      "soniya"
  );
}
function editTest(questions) {
  let n = prompt(
    "Tahrirlamochi bo'lgan testni raqamini kiriting\n" +
      getQuestionsList(questions)
  );
  questions[n - 1] = {
    question: prompt("Savolni kiriting: ", questions[n - 1].question),
    option: [
      prompt("a) variatni kiriting: ", questions[n - 1].option[0]),
      prompt("b) variatni kiriting: ", questions[n - 1].option[1]),
      prompt("c) variatni kiriting: ", questions[n - 1].option[2]),
      prompt("d) variatni kiriting: ", questions[n - 1].option[3]),
    ],
    answer: prompt("to'g'ri javob: ", questions[n - 1].answer),
  };
  alert(getQuestionsList(questions));
}

function getQuestionsList(savollar) {
  let list = "";
  for (let i = 0; i < savollar.length; i++) {
    list += i + 1 + "." + savollar[i].question + "\n";
  }
  return list;
}

function deleteTest(savollar) {
  let n = prompt(
    "O'chirmoqchi bo'lgan testni raqamini kiriting\n" +
      getQuestionsList(savollar)
  );
  let newArr = savollar.filter((el, index) => {
    if (index != n - 1) return el;
  });
  questions = newArr;
}
function getRandomisedQuestions(questions) {
  let randomisedQuestions = new Set();

  do {
    let randomisedIndex = Math.floor(Math.random() * questions.length);
    randomisedQuestions.add(questions[randomisedIndex]);
  } while (randomisedQuestions.size != questions.length);

  return randomisedQuestions;
}
