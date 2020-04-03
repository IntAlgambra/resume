const education = {
  en: {
    bmstu: {
      spec: "Design of aircraft and rocket engines",
      organisation: "Bauman Moscow State Technical University, 2011-2017",
      content: `
      Gained specialist degree in BMSTU. Succesfully completed allthe credits
      without fallout and got "A" for my diploma project: "Regenerative turboprop
      engine for small aircraft"
      `,
      list: null,
      logo: require("../assets/bmstu_logo.png")
    },
    udemy: {
      spec: "Modern Javascript and Vue",
      organisation: "Udemy platform, 2020",
      content: `
        Finished full javascript online course on Udemy platform. Gained knowledge
        in basic javascript, ES6 features, working with DOM as well as asynchronous
        JS and object-oriented programming in Javascript. Studied how to work with npm,
        Webpack, Eslint, Jest and basics of Vue.js framework. While studiing, completed
        several educational projects
        `,
      list: null,
      logo: require("../assets/udemy-2-logo.png")
    },
    geekbrains: {
      spec: "Python web development",
      organisation: "Geekbrains platform, 2018",
      content: `
        Completed several online courses:
        `,
      list: [
        "Python (basic and advansed levels)",
        "Basic HTML and CSS",
        "Django framework"
      ],
      logo: require("../assets/geekbrains-logo.png")
    }
  },
  ru: {
    bmstu: {
      spec: "Проектирование авиационных  и ракетных двигателей",
      organisation: "МГТУ им Н. Э. Баумана, 2011-2017",
      content: `
      Получил специальность "инженер-конструктор авиационных и ракетных джвигателй"
      в МГТУ им Н. Э. Баумана. ПОлностью закончил курс обучения, защитил дипломный проект
      "Турбовинтовой двигатель с регенерацией тепла для малой авифции" на оценку "отлично"
        `,
      list: null,
      logo: require("../assets/bmstu_logo.png")
    },
    udemy: {
      spec: "Современный Javascript and Vue",
      organisation: "Udemy platform, 2020",
      content: `
          Закончил онлайн-курс по программированию на Javascript и использованию фреймворка
          Vue на платформе UDemy. В процессе прохождения курса освоил основы языка Javascript,
          концепции объектно-ориентрированного и асинхронного программирования на JS, приобрел
          опыт тестирования с использованием Jest и организации проектов с помощью Webpack.
          Изучил основы работы с фреймворком Vue и выполнил на нем несколько проектов.
          `,
      list: null,
      logo: require("../assets/udemy-2-logo.png")
    },
    geekbrains: {
      spec: "WEB разработка на Python",
      organisation: "Geekbrains platform, 2018",
      content: `
          Успешно прошел следующие курсы онлайн:
          `,
      list: [
        "Python (базовый и продвинутый уровни)",
        "Основы HTML and CSS",
        "Фреймворк Django"
      ],
      logo: require("../assets/geekbrains-logo.png")
    }
  }
};

export default education;
