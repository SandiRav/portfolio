import { Project } from "@/app/types";

export const projects: Project[] = [
  {
    title: "Whitespectre Website Rebranding",
    id: "0",
    description:
      "I contributed to the rebranding of the Whitespectra website, updating the design across most pages—including the Services page—and introducing a new background gradient with layered visuals for a fresh, cohesive look.",
    img: "/assets/images/ws-service-page.png",
    tags: ["HTML", "React.js", "SASS", "Node.js"],
    demo: "https://www.whitespectre.com/",
    source: "",
    imageAltText: "Whitespectre website image screenshot",
  },
  {
    title: "Allsafe24 Website Rebranding and Webshop",
    id: "allsafe",
    description:
      "I contributed to the rebranding of the Allsafe24 website, updating the UI design on several pages. I also implemented shop functionality (add, edit, and remove items from the cart) and worked on internationalization to support multiple languages.",
    img: "/assets/images/allsafe-products-page.png",
    tags: ["Svelte.js", "Astro.js", "Tailwind CSS", "Node.js", "Shopware API"],
    demo: "https://www.allsafe24.com/",
    source: "",
    imageAltText: "Allsafe website image screenshot",
  },
  {
    title: "Allsafe Team Website (In Progress)",
    id: "allsafe-images",
    description:
      "I'm co-developing a new image website for Allsafe with a colleague, using React and Tailwind CSS. The site features over six pages with an advanced UI, showcasing the team and company values.",
    img: "/assets/images/allsafe-products-page.png",
    tags: ["React.js", "Tailwind CSS"],
    demo: "https://www.allsafe24.com/",
    source: "",
    imageAltText: "Allsafe website image screenshot",
  },
  {
    title: "Online Bus Booking System",
    id: "bus-booking",
    description:
      "I co-developed an online bus booking system with one of my colleagues, enabling users to search, book, and pay for bus tickets online. I worked on the UI with Tailwind CSS, integrated Stripe for secure payments, and implemented features like real-time seat selection and user authentication.",
    img: "/assets/images/allsafe-products-page.png",
    tags: ["React.js", "Astro.js", "Tailwind CSS", "Node.js", "Stripe"],
    demo: "https://www.allsafe24.com/",
    source: "",
    imageAltText: "Bus booking system image screenshot",
  },

  {
    title: "Country Quiz",
    id: "2",
    description:
      "I built a country quiz app with React and CSS, where users answer questions based on flags, capitals, or regions. Correct answers lead to the next question, while wrong answers show results and allow a restart.",
    img: "/assets/images/country-quiz-img.png",
    tags: ["HTML", "React"],
    demo: "https://coountry-quiz.netlify.app/",
    source: "https://github.com/SandiRav/country-quiz",
    imageAltText: "Country quiz app image screenshot",
  },
  {
    title: "Birthday App",
    id: "1",
    description:
      "I built a birthday list app using HTML5, CSS, and vanilla JavaScript (ES6/ES2020). Users can view, search, add, edit, and delete people with their birthdays and profile photos.",
    img: "/assets/images/birthday-screenshot.png",
    tags: ["HTML", "Vanilla JavaScript"],
    demo: "https://people-birthday-app.netlify.app/",
    source: "https://github.com/SandiRav/birthday-app",
    imageAltText: "Birthday app image screenshot",
  },
  // {
  //   title: "Photograph",
  //   id: "3",
  //   description:
  //     "I developed this page from scratch using semantic HTML, CSS3 and SASS to create a responsive webpage following BEM notation. I also used some Javascript functionalities to make images slide. It has a navigation menu that works nicely on mobile. Building this project helped me understand the real benefits of using BEM to write class names and write less CSS using SASS as a css preprocessor.",
  //   img: "/assets/images/photograph.jpg",
  //   tags: ["HTML", "SASS", "JavaScript"],
  //   demo: "https://photograph-gallery-sandy.netlify.app/",
  //   source: "https://github.com/SandiRav/photography-gallery",
  //   imageAltText: "Photograph gallery app image screenshot",
  // },
  // {
  //   title: "GoAlert Open Source",
  //   id: "4",
  //   description:
  //     "Working on this project introduced me to the use of Go language to make faster projects and understandable code. I also got to understand some benefits of using docker to automate the development, deployment and running of applications inside isolated containers. It creates containers that allow developers to bundle up an application with all of the parts it needs, such as libraries and other dependencies, and ship it as one package. If you would like to see the live app, you can click on the demo and then enter the username as **_admin_** and the password as **_admin/123_**",
  //   img: "/assets/images/goalert.png",
  //   tags: ["Go", "Javascript", "Typescript", "Docker", "Makefile"],
  //   demo: "https://goalert.silboapp.com/alerts",
  //   source: "https://github.com/target/goalert/issues",
  //   imageAltText: "Goalert app image screenshot",
  // },
];
