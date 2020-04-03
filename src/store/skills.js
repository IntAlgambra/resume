const skills = {
  en: {
    pyhon: {
      header: "python",
      logo: require("../assets/pythonlogo.png"),
      content: [
        "Backend development with Flask and Django frameworks ",
        "Working with databases through SQLAlchemy ORM",
        "Programming Telegram bots",
        "Solid knowlege of OOP"
      ]
    },
    js: {
      header: "javascript",
      logo: require("../assets/jslogo.png"),
      content: [
        "Solid knowledge of Javascript basics",
        "Asynchronous JS: promises, fetch, async/await.",
        "Object-oriented programming (ES5 and EES6 syntax)",
        "Vue.js framework, testing with Jest framework, Webpack, npm."
      ]
    },
    htmlcss: {
      header: "HTML/CSS",
      logo: require("../assets/htmlcsslogo.png"),
      content: [
        "Adaptive design",
        "CSS Flexbox and CSS Grid layouts",
        "Bootstrap framework",
        "Materialize framework"
      ]
    },
    other: {
      header: "other",
      logo: require("../assets/laptop.svg"),
      content: [
        "Setting up VDS with Apache/Nginx servers",
        "Programming Arduino (a little)",
        "FDM 3D printing",
        "Git, Linux basics"
      ]
    }
  },
  ru: {
    pyhon: {
      header: "python",
      logo: require("../assets/pythonlogo.png"),
      content: [
        "Бекенд разработка на фреймворках Flask и Django",
        "Работа с SQL базами данных черех SQLAlchemy ORM",
        "Разработка телеграм-ботов",
        "Уверенное знание ООП"
      ]
    },
    js: {
      header: "javascript",
      logo: require("../assets/jslogo.png"),
      content: [
        "Уверенное знание основ языка",
        "Асинхронный JS, Promises, fetch, async/avait",
        "Объектно-ориентирование программирование в JS",
        "Vue.js фреймворк, тестирование с помощью Jest, работа с Webpack, npm."
      ]
    },
    htmlcss: {
      header: "HTML/CSS",
      logo: require("../assets/htmlcsslogo.png"),
      content: [
        "Адаптивная верстка",
        "Использование CSS Flexbox и CSS Grid",
        "Bootstrap фреймворк",
        "Materialize фреймворк"
      ]
    },
    other: {
      header: "прочее",
      logo: require("../assets/laptop.svg"),
      content: [
        "настройка VDS с Apache/Nginx ",
        "Программирование Arduino и подобных плат",
        "3D печать (FDM и DMLS)",
        "git, основы Linux"
      ]
    }
  }
};

export default skills;
