// function promptQuizTest() {
//   let enterQuestion = prompt("Enter your question ");
//   let enterOption = prompt("Enter your options");

//   for (let i = 0; i < promptQuizTest.length; i++) {
//     alert(enterQuestion[i].prompt + "\n" + enterOption.join("\n"));
//   }
// }

// promptQuizTest();
function quizTest() {
  let start = new Date();
  for (let i = 0; i < 100000; i++) {
    let ds = i * i * i * i * i * i;
  }

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
      prompt:
        "JavaScript o'zgaruvchilari qaysi usulda e'lon qilinishi mumkin:? ",
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
  let set = new Set();
  let text = questions.length;
  let text_2;
  let j = 0;
  do {
    j = Math.floor(Math.random() * questions.length);
    set.add(questions[j]);
    text_2 = set.size;
  } while (set.size != text);
  let arr = Array.from(set);
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    let response = prompt(
      arr[i].prompt + "\n" + arr[i].option.join("\n")
    );
    if (response === null || response === "") {
      alert("variant kiritmadingiz");
    }
    if (
      response == "exit" ||
      response == "cancel" ||
      response == "quit" ||
      response == "close" ||
      response == "chiqish"
    ) {
      break;
    }
    // if (
    //   response != "a" ||
    //   response != "b" ||
    //   response != "c" ||
    //   response != "d"
    // ) {
    //   alert("something is wrong!!!");
    // }
    if (
      response == questions[i].answer ||
      response == questions[i].answer.toUpperCase()
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

quizTest();
