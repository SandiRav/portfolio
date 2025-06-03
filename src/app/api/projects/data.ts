import { Project } from "@/app/types";

export const projects: Project[] = [
  {
    title: "Whitespectre Website Rebranding",
    id: "ws-rebranding",
    description:
      "Whitespectre is a digital product studio specializing in web and mobile development. As a frontend developer, I contributed to its website rebrand by implementing updated designs across key pages—including the Services page—and integrating a new background gradient with layered visuals to create a more modern and cohesive user experience.",
    img: "/assets/images/ws-service-page.png",
    tags: ["HTML", "React.js", "SASS", "Node.js"],
    demo: "https://www.whitespectre.com/",
    imageAltText: "Whitespectre website image screenshot",
  },
  {
    title: "Allsafe24 Website Rebranding and Webshop",
    id: "allsafe24",
    description:
      "Allsafe24 is a supplier of safety and workwear products. I worked on the website rebranding by updating the UI design across several key pages and implemented webshop functionality, including cart operations and product interactions. I also integrated internationalisation to support multiple languages.",
    img: "/assets/images/allsafe-products-page.png",
    tags: ["Svelte.js", "Astro.js", "Tailwind CSS", "Node.js", "Shopware API"],
    demo: "https://www.allsafe24.com/",
    imageAltText: "Allsafe website image screenshot",
  },
  {
    title: "Allsafe Team Website",
    id: "allsafe-images",
    description:
      "Allsafe Team is a company showcase site highlighting team members and brand values. I'm co-developing this multi-page site using React and Tailwind CSS, with a focus on advanced UI components and a clean, responsive layout to reflect the company’s professional identity.",
    img: "/assets/images/allsafe-products-page.png",
    tags: ["React.js", "Tailwind CSS"],
    demo: "https://www.allsafe24.com/",
    imageAltText: "Allsafe website image screenshot",
  },
  {
    title: "Protect Our Winters UK Website",
    id: "pow-uk",
    description:
      "Protect Our Winters UK is an environmental nonprofit that engages the outdoor community in climate advocacy. I contributed to the website rebrand as a frontend developer by updating key pages to match the new design and implementing internationalisation features to support multiple languages, improving accessibility for a broader audience.",
    img: "/assets/images/pow-uk.png",
    tags: ["Next.js", "Tailwind CSS", "Strapi CMS"],
    demo: "https://protectourwinters.uk/",
    imageAltText: "Protect Our Winters website image screenshot",
  },
  {
    title: "Online Bus Booking Platform - Personal Project",
    id: "bus-booking",
    description:
      "Safe Trip is a web-based bus ticket booking system developed with a teammate. I focused on frontend UI development using Tailwind CSS, implemented real-time seat selection, and integrated Stripe for secure online payments. The platform also supports user authentication and booking management.",
    img: "/assets/images/safe-trip.png",
    tags: ["React.js", "Astro.js", "Tailwind CSS", "Stripe"],
    demo: "https://ary-safetrip.netlify.app/",
    imageAltText: "Bus booking system image screenshot",
  },
];
