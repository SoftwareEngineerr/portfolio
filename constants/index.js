import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Creative Ideas",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React js Developer",
    company_name: "Abs International",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mern Stack Developer",
    company_name: "UpWrok",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Present",
    points: [
      "Designed and implemented user-facing features using React.js",
      "Used understanding of React fundamentals to promote better component lifecycle practices, read Able",
      "Build Node.js API endpoints with Express.js",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "XaoSoft Technology ",
    icon: shopify,
    iconBg: "#383E56",
    date: "November 2020 - September 2022",
    points: [
      "Used advanced Javascript to create a cross-browser compatible user interface",
      "Maximized website performance using caching and minification techniques",
      "Wrote code to implement visual elements and front-end features.",
      "Tested code across browsers and devices",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Ali",
    designation: "Project Lead",
    company: "Abs International",
    image: "https://c.pxhere.com/photos/08/7a/male_portrait_profile_social_media_cv_young_elegant_suit-459413.jpg!d",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Abdul-Sami does.",
    name: "Chris Brown",
    designation: "Client",
    company: "Upwork",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Innovating Web Applications with Elegant UI, Seamless Functionality, and Optimal Performance.",
    name: " Talha Khalid",
    designation: "Senior Back End Developer",
    company: "Abs International",
    image: "https://media.licdn.com/dms/image/C4D03AQHYC5qqm3Ee3A/profile-displayphoto-shrink_800_800/0/1645990788793?e=1694649600&v=beta&t=5cFfZjgboxbCKzx3LQxTREAvOsUMpFYFLM9W_ZkkOCg",
  },
];

const projects = [
  {
    name: "Car Autcion",
    description:
      "Revolutionizing Car Auctions Online. Creating Dynamic Platforms for Buying and Selling Vehicles. Streamlined Bidding Processes and Real-Time Updates. Experienced Developer Empowering Automotive Enthusiasts with Innovative Solutions.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript with Jquery",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Ecommerce",
    description:
      "Crafting E-commerce Solutions that Drive Results. Building Seamless Online Shopping Experiences. Harnessing Cutting-Edge Technologies to Power Sales. Trustworthy Developer Delivering Scalable and Secure Commerce Websites.",
    tags: [
      { 
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    // source_code_link: "https://github.com/",
  },
  {
    name: " Car Transportation",
    description:
      "Efficient Car Transportation Solutions Tailored for Your Needs. Seamless Booking and Tracking for Hassle-Free Transport. Reliable Developer Crafting User-Friendly Platforms. Connecting Customers with Trusted Carriers for a Smooth Journey.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "Material ui",
        color: "green-text-gradient",
      },
      // {
      //   name: "",
      //   color: "pink-text-gradient",
      // },
    ],
    image: tripguide,
    // source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
